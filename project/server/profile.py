from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mail import Mail, Message
import os
import jwt
from datetime import datetime, timedelta

# Initialize Flask app and other extensions
app = Flask(__name__)

# Enable CORS for specific origin
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profile.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Set your mail server
app.config['MAIL_PORT'] = 587
app.config['MAIL_DEFAULT_SENDER'] = 'farkaf07@gmail.com'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('farkaf07@gmail.com')  # Fetch from env variable for safety
app.config['MAIL_PASSWORD'] = os.environ.get('bvyk xbcm kszc moym')  # Fetch from env variable for safety
mail = Mail(app)

# JWT secret key and expiration configuration
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'default_secret_key')  # Set a default for development
app.config['JWT_EXPIRATION_MINUTES'] = 60  # Token expiration time

# User model with only essential fields for sign-up
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

# User schema for serialization
class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User

user_schema = UserSchema()
users_schema = UserSchema(many=True)

# Initialize the database with context
with app.app_context():
    db.create_all()

# Route to handle user sign-up
@app.route("/signup", methods=["POST"])
def sign_up():
    name = request.json.get('name')
    email = request.json.get('email')
    password = request.json.get('password')

    # Check if user already exists
    if User.query.filter_by(email=email).first():
        return make_response(jsonify({"message": "User already exists"}), 400)

    hashed_password = generate_password_hash(password)
    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return user_schema.dump(new_user), 201

# Route to verify user login credentials and set JWT in cookies
@app.route("/login", methods=["POST"])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        # Generate JWT token
        token = jwt.encode(
            {"id": user.id, "email": user.email, "exp": datetime.utcnow() + timedelta(minutes=app.config['JWT_EXPIRATION_MINUTES'])},
            app.config['SECRET_KEY'],
            algorithm="HS256"
        )
        
        # Set the token in an HTTP-only cookie
        response = make_response(user_schema.dump(user))
        response.set_cookie(
            "token", token, httponly=True, secure=True, samesite="Strict"
        )
        return response, 200

    return jsonify({"message": "Invalid email or password"}), 401

# Route to request password reset
@app.route('/request-reset', methods=['POST'])
def request_reset_password():
    user_email = 'user@example.com'
    msg = Message('Password Reset Request', 
                  sender='your-email@gmail.com', 
                  recipients=[user_email])
    msg.body = 'Here is the password reset link...'
    
    mail.send(msg)
    return 'Email sent!'

# Route to reset password
@app.route("/reset-password/<string:token>", methods=["POST"])
def reset_password(token):
    try:
        # Decode the token
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        email = payload['email']
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "The token has expired"}), 400
    except jwt.InvalidTokenError:
        return jsonify({"message": "Invalid token"}), 400

    # Get the new password from the request
    new_password = request.json.get('new_password')

    # Update the user's password
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "User not found"}), 404

    user.password = generate_password_hash(new_password)
    db.session.commit()

    return jsonify({"message": "Password updated successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True, port=5300)
