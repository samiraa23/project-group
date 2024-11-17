from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

# booking api
app = Flask(__name__)
cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), nullable=False)
    department = db.Column(db.String(120), nullable=False)
    doctor = db.Column(db.String(120), nullable=False)
    date = db.Column(db.String(120), nullable=False)
    message = db.Column(db.String(120), nullable=False)

    def _repr_(self):
        return '<User %r>' % self.name

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User

user_schema = UserSchema()
users_schema = UserSchema(many=True)

with app.app_context():
    db.create_all()

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

# Add a new user
@app.route("/users", methods=["POST"])
def add_users():
    name = request.json.get('name')
    email = request.json.get('email')
    phone = request.json.get('phone')
    department = request.json.get('department')
    doctor = request.json.get('doctor')
    date = request.json.get('date')
    message = request.json.get('message')

    new_user = User(name=name, email=email, phone=phone, department=department, doctor=doctor, date=date, message=message)
    db.session.add(new_user)
    db.session.commit()

    return user_schema.dump(new_user), 201

# Edit (update) an existing user
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

if __name__ == "__main__":
    app.run(debug=True, port=5500)
