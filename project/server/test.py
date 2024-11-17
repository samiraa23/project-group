from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Define User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# Define Marshmallow schema
class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

user_schema = UserSchema()

# Route to create a user
@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    
    # Hash the password
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    
    # Create a new user instance
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    return user_schema.jsonify(new_user), 201

# Route to login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Query the database for the user
    user = User.query.filter_by(username=username).first()

    if user and check_password_hash(user.password, password):
        return jsonify({"message": f"Welcome, {username}!"}), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables if they don't exist
    app.run(debug=True)
