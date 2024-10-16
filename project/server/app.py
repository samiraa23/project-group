from flask import  Flask, jsonify,make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema




app = Flask(__name__)
cors = CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contact.db'
dbs = SQLAlchemy(app)

class User(dbs.Model):
    id = dbs.Column(dbs.Integer, primary_key=True)
    name = dbs.Column(dbs.String(80), unique=True, nullable=False)
    email = dbs.Column(dbs.String(120),  nullable=False)
    phone = dbs.Column(dbs.String(120),  nullable=False)
    subject = dbs.Column(dbs.String(120),nullable=False)
    message = dbs.Column(dbs.String(120),  nullable=False)



    def _repr_(self):
        return '<User %r>' % self.name
class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        
user_schema = UserSchema()
users_schema = UserSchema(many=True)  
with app.app_context():
    dbs.create_all()

@app.route("/contact/")
def contacts():
    all_contacts = User.query.all()
    return users_schema.dump(all_contacts)





@app.route("/contacts", methods=["POST"])
def add_contacts():
    name = request.json.get('name')
    email = request.json.get('email')
    phone = request.json.get('phone')
    subject = request.json.get('subject')
    message = request.json.get('message')


    new_contact = User(name=name, email=email,phone=phone,subject=subject,message=message)
    dbs.session.add(new_contact)
    dbs.session.commit()

    return user_schema.dump(new_contact), 201






if __name__ =="__main__":
    app.run(debug=True , port=5000)