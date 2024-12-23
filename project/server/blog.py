from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from flask_mail import Mail, Message

# Initialize app
app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'        # Gmail SMTP server
app.config['MAIL_PORT'] = 587                      # TLS port
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'farkaf07@gmail.com'   # Your email address
app.config['MAIL_PASSWORD'] = 'bvyk xbcm kszc moym'    # Your email password or app password
app.config['MAIL_DEFAULT_SENDER'] = 'farkaf@gmail.com'  # Default sender

mail = Mail(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), nullable=False)
    department = db.Column(db.String(120), nullable=False)
    doctor = db.Column(db.String(120), nullable=False)
    date = db.Column(db.String(120), nullable=False)
    message = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

# User schema for serialization
class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User

user_schema = UserSchema()
users_schema = UserSchema(many=True)

# Create database tables
with app.app_context():
    db.create_all()

### CRUD Operations ###

# Create a new user with email notification
@app.route("/users", methods=["POST"])
def add_user():
    name = request.json.get('name')
    email = request.json.get('email')
    phone = request.json.get('phone')
    department = request.json.get('department')
    doctor = request.json.get('doctor')
    date = request.json.get('date')
    message = request.json.get('message')

    new_user = User(
        name=name,
        email=email,
        phone=phone,
        department=department,
        doctor=doctor,
        date=date,
        message=message
    )

    db.session.add(new_user)
    db.session.commit()

    # Send email notification
    try:
        send_confirmation_email(new_user)
    except Exception as e:
        print(f"Email failed to send: {e}")

    return user_schema.dump(new_user), 201

# Function to send email notification
def send_confirmation_email(user):
    subject = "Appointment Booking Confirmation"
    body = f"""
    Hello {user.name},

    Your appointment has been successfully booked.

    Details:
    - Doctor: {user.doctor}
    - Department: {user.department}
    - Date: {user.date}
    - Phone: {user.phone}
    - Message: {user.message}

    Thank you for booking with us!

    Best regards,
    Clinic Team
    """

    msg = Message(subject, recipients=[user.email])
    msg.body = body
    mail.send(msg)

# Get all users
@app.route("/user/", methods=["GET"])
def get_users():
    all_users = User.query.all()
    return jsonify(users_schema.dump(all_users))

# Get a single user by ID
@app.route("/user/<int:id>", methods=["GET"])
def get_user(id):
    user = User.query.get(id)
    if user is None:
        return make_response(jsonify({"message": "User not found"}), 404)
    return user_schema.dump(user)

# Update an existing user
@app.route("/user/<int:id>", methods=["PUT"])
def update_user(id):
    user = User.query.get(id)
    if user is None:
        return make_response(jsonify({"message": "User not found"}), 404)

    user.name = request.json.get('name', user.name)
    user.email = request.json.get('email', user.email)
    user.phone = request.json.get('phone', user.phone)
    user.department = request.json.get('department', user.department)
    user.doctor = request.json.get('doctor', user.doctor)
    user.date = request.json.get('date', user.date)
    user.message = request.json.get('message', user.message)

    db.session.commit()
    return user_schema.dump(user)

# Delete a user
@app.route("/user/<int:id>", methods=["DELETE"])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        return make_response(jsonify({"message": "User not found"}), 404)

    db.session.delete(user)
    db.session.commit()
    return make_response(jsonify({"message": "User deleted successfully"}), 200)

# Run the app
if __name__ == "__main__":
    app.run(debug=True, port=5500)
