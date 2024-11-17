from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from werkzeug.security import generate_password_hash, check_password_hash

# Initialize Flask app and other extensions
app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profile.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

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

# Route to verify user login credentials
@app.route("/login", methods=["POST"])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return user_schema.dump(user), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

# Route to get user information by email
@app.route("/user/email/<string:email>", methods=["GET"])
def get_user_by_email(email):
    user = User.query.filter_by(email=email).first()
    if user:
        return user_schema.dump(user), 200
    else:
        return jsonify({"message": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True, port=5300)
