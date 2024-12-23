from flask import Flask, request, send_from_directory, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
cors = CORS(app)


# Configure the app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///doctors.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads'  # Folder to save images
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

db = SQLAlchemy(app)
ma = Marshmallow(app)

@app.route('/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Ensure the upload folder exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Helper function to validate file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Doctor model
class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    specialty = db.Column(db.String(100), nullable=False)
    imageUrl = db.Column(db.String(200), nullable=False)  # URL or file path to the uploaded image
    description = db.Column(db.Text, nullable=False)
    contact = db.Column(db.String(50), nullable=False)
    experience = db.Column(db.String(50), nullable=False)
    education = db.Column(db.String(100), nullable=False)
    hospital = db.Column(db.String(100), nullable=False)
    workingHours = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)

# Doctor schema
class DoctorSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Doctor

doctor_schema = DoctorSchema()
doctors_schema = DoctorSchema(many=True)

# Create the database
with app.app_context():
    db.create_all()

# Routes
@app.route('/doctors', methods=['POST'])
def create_doctor():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image = request.files['image']
    if image and allowed_file(image.filename):
        # Secure the filename and save it
        filename = secure_filename(image.filename)
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        # Save the doctor's details in the database
        data = request.form
        new_doctor = Doctor(
    name=data['name'],
    specialty=data['specialty'],
    imageUrl=f"uploads/{filename}",  # Save relative path
    description=data.get('description', ''),
    contact=data['contact'],
    experience=data.get('experience', ''),
    education=data.get('education', ''),
    hospital=data.get('hospital', ''),
    workingHours=data.get('workingHours', ''),
    location=data.get('location', '')
)

        db.session.add(new_doctor)
        db.session.commit()

        return doctor_schema.jsonify(new_doctor), 201
    else:
        return jsonify({"error": "Invalid file type. Allowed types: png, jpg, jpeg, gif"}), 400

@app.route('/doctors', methods=['GET'])
def get_doctors():
    all_doctors = Doctor.query.all()
    return doctors_schema.jsonify(all_doctors)

@app.route('/doctors/<int:id>', methods=['GET'])
def get_doctor(id):
    doctor = Doctor.query.get_or_404(id)
    return doctor_schema.jsonify(doctor)

@app.route('/doctors/<int:id>', methods=['PUT'])
def update_doctor(id):
    doctor = Doctor.query.get_or_404(id)
    data = request.form

    # Update text fields
    doctor.name = data.get('name', doctor.name)
    doctor.specialty = data.get('specialty', doctor.specialty)
    doctor.description = data.get('description', doctor.description)
    doctor.contact = data.get('contact', doctor.contact)
    doctor.experience = data.get('experience', doctor.experience)
    doctor.education = data.get('education', doctor.education)
    doctor.hospital = data.get('hospital', doctor.hospital)
    doctor.workingHours = data.get('workingHours', doctor.workingHours)
    doctor.location = data.get('location', doctor.location)

    # Update image if provided
    if 'image' in request.files:
        image = request.files['image']
        if image and allowed_file(image.filename):
            # Secure the filename and save it
            filename = secure_filename(image.filename)
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            doctor.imageUrl = os.path.join(app.config['UPLOAD_FOLDER'], filename)

    db.session.commit()
    return doctor_schema.jsonify(doctor)

@app.route('/doctors/<int:id>', methods=['DELETE'])
def delete_doctor(id):
    doctor = Doctor.query.get_or_404(id)
    db.session.delete(doctor)
    db.session.commit()
    return jsonify({"message": "Doctor deleted successfully"}), 200

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=5100)
