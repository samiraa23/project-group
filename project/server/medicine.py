from flask import Flask, request, send_from_directory, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
cors = CORS(app)


# Configure the app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///medicine.db'
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

# medicine model
class medicine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    imageUrl = db.Column(db.String(200), nullable=False)  # URL or file path to the uploaded image
    description = db.Column(db.Text, nullable=False)
  

# medicine schema
class medicineSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = medicine

medicine_schema = medicineSchema()
medicines_schema = medicineSchema(many=True)

# Create the database
with app.app_context():
    db.create_all()

# Routes
@app.route('/medicines', methods=['POST'])
def create_medicine():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image = request.files['image']
    if image and allowed_file(image.filename):
        # Secure the filename and save it
        filename = secure_filename(image.filename)
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        # Save the medicine's details in the database
        data = request.form
        new_medicine = medicine(
    name=data['name'],
    imageUrl=f"uploads/{filename}",  # Save relative path
    description=data.get('description', ''),
   
)

        db.session.add(new_medicine)
        db.session.commit()

        return medicine_schema.jsonify(new_medicine), 201
    else:
        return jsonify({"error": "Invalid file type. Allowed types: png, jpg, jpeg, gif"}), 400

@app.route('/medicines', methods=['GET'])
def get_medicines():
    all_medicines = medicine.query.all()
    return medicines_schema.jsonify(all_medicines)

@app.route('/medicines/<int:id>', methods=['GET'])
def get_medicine(id):
    medicine = medicine.query.get_or_404(id)
    return medicine_schema.jsonify(medicine)

@app.route('/medicines/<int:id>', methods=['PUT'])
def update_medicine(id):
    medicine = medicine.query.get_or_404(id)
    data = request.form

    # Update text fields
    medicine.name = data.get('name', medicine.name)
    medicine.specialty = data.get('specialty', medicine.specialty)
    medicine.description = data.get('description', medicine.description)
    

    # Update image if provided
    if 'image' in request.files:
        image = request.files['image']
        if image and allowed_file(image.filename):
            # Secure the filename and save it
            filename = secure_filename(image.filename)
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            medicine.imageUrl = os.path.join(app.config['UPLOAD_FOLDER'], filename)

    db.session.commit()
    return medicine_schema.jsonify(medicine)

@app.route('/medicines/<int:id>', methods=['DELETE'])
def delete_medicine(id):
    medicine = medicine.query.get_or_404(id)
    db.session.delete(medicine)
    db.session.commit()
    return jsonify({"message": "medicine deleted successfully"}), 200

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=5200)
