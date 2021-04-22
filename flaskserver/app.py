from flask import Flask,jsonify,request,make_response
from flask_sqlalchemy import SQLAlchemy
import datetime
import jwt
from flask_bcrypt import Bcrypt
from functools import wraps
from flask_cors import CORS


app = Flask(__name__)
app.config['SECRET_KEY'] ='gfhdftygytgcgc67865fxcgfdxfhcvddxxxv'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flask.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    
    password = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    telephone = db.Column(db.String(120),  nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    number = db.Column(db.String(120),  nullable=True)
    tin = db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Supplier %r>' % self.name

class Asset(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inventoryid = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    typeof = db.Column(db.String(120),  nullable=False)
    quantity= db.Column(db.String(120),  nullable=False)
    unit = db.Column(db.String(120),  nullable=False)
    unitprice= db.Column(db.String(120),  nullable=True)
    inventoryvalue= db.Column(db.String(120),  nullable=True)
    reorderlevel= db.Column(db.String(120),  nullable=True)
    reordertime= db.Column(db.String(120),  nullable=True)
    quantityinreorder= db.Column(db.String(120),  nullable=True)
    discontinued= db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Asset %r>' % self.name

class Food(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inventoryid = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    quantity= db.Column(db.String(120),  nullable=False)
    unit = db.Column(db.String(120),  nullable=False)
    unitprice= db.Column(db.String(120),  nullable=True)
    inventoryvalue= db.Column(db.String(120),  nullable=True)
    reorderlevel= db.Column(db.String(120),  nullable=True)
    reordertime= db.Column(db.String(120),  nullable=True)
    quantityinreorder= db.Column(db.String(120),  nullable=True)
    discontinued= db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Asset %r>' % self.name

class Ict(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inventoryid = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    quantity= db.Column(db.String(120),  nullable=False)
    unit = db.Column(db.String(120),  nullable=False)
    unitprice= db.Column(db.String(120),  nullable=True)
    inventoryvalue= db.Column(db.String(120),  nullable=True)
    reorderlevel= db.Column(db.String(120),  nullable=True)
    reordertime= db.Column(db.String(120),  nullable=True)
    quantityinreorder= db.Column(db.String(120),  nullable=True)
    discontinued= db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Asset %r>' % self.name

class Health(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inventoryid = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    quantity= db.Column(db.String(120),  nullable=False)
    unit = db.Column(db.String(120),  nullable=False)
    unitprice= db.Column(db.String(120),  nullable=True)
    inventoryvalue= db.Column(db.String(120),  nullable=True)
    reorderlevel= db.Column(db.String(120),  nullable=True)
    reordertime= db.Column(db.String(120),  nullable=True)
    quantityinreorder= db.Column(db.String(120),  nullable=True)
    discontinued= db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Asset %r>' % self.name

class Stationary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inventoryid = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    quantity= db.Column(db.String(120),  nullable=False)
    unit = db.Column(db.String(120),  nullable=False)
    unitprice= db.Column(db.String(120),  nullable=True)
    inventoryvalue= db.Column(db.String(120),  nullable=True)
    reorderlevel= db.Column(db.String(120),  nullable=True)
    reordertime= db.Column(db.String(120),  nullable=True)
    quantityinreorder= db.Column(db.String(120),  nullable=True)
    discontinued= db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Asset %r>' % self.name

class House(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inventoryid = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    quantity= db.Column(db.String(120),  nullable=False)
    unit = db.Column(db.String(120),  nullable=False)
    unitprice= db.Column(db.String(120),  nullable=True)
    inventoryvalue= db.Column(db.String(120),  nullable=True)
    reorderlevel= db.Column(db.String(120),  nullable=True)
    reordertime= db.Column(db.String(120),  nullable=True)
    quantityinreorder= db.Column(db.String(120),  nullable=True)
    discontinued= db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Asset %r>' % self.name

class Gift(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inventoryid = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(80),  nullable=False)
    quantity= db.Column(db.String(120),  nullable=False)
    unit = db.Column(db.String(120),  nullable=False)
    unitprice= db.Column(db.String(120),  nullable=True)
    inventoryvalue= db.Column(db.String(120),  nullable=True)
    reorderlevel= db.Column(db.String(120),  nullable=True)
    reordertime= db.Column(db.String(120),  nullable=True)
    quantityinreorder= db.Column(db.String(120),  nullable=True)
    discontinued= db.Column(db.String(120),  nullable=True)

    def __repr__(self):
        return '<Asset %r>' % self.name



def token_required(func):
    @wraps(func)
    def decorated(*args,**kwargs):
        token = None
        if 'x-access-token' in request-headers:
            token = request-headers['x-access-token']
        
        if not token:
            return jsonify ({"message":"Token is Missing"}),401
        
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            next_user = User.query.filter_by(username = data['username']).first()

        except:
            return jsonify({"message":"token is Invalid"}),401

        return func(next_user,*args, **kwargs)
    
    return decorated




@app.route('/create',methods=['POST'])

def create_user():
    data = request.get_json()
    pw_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(email = data['email'], password = pw_hash)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"new user is successfully created"})

@app.route('/',methods=['GET'])

def getusers():
    users = User.query.all()

    output = []

    for user in users:
        user_data ={}
        user_data['email'] = user.email
        user_data['password'] = user.password
        

        output.append(user_data)

    return jsonify({"users":output})

@app.route('/getoneuser/<int:id>',methods=['GET'])
@token_required
def getuser(next_user,id):
    user = User.query.filter_by(id=id).first()

    if not user:
        return jsonify({"'message":"No User Found"})

    user_data ={}
    user_data['email'] = user.email
    user_data['password'] = user.password
    user_data['username'] = user.username

    return jsonify({"user":user_data})
    
@app.route('/user/<int:id>',methods=['DELETE'])
@token_required
def removeuser(next_user,id):
    user = User.query.filter_by(id=id).first()

    if not user:
        return jsonify({"'message":"No User Found"})

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message":"User successfully deleted"})

@app.route('/login',methods=['POST','GET'])
def login():

  if request.method == 'POST':
    
    content = request.get_json()

    email = content['email']
    
    password = content['password']

    user = User.query.filter_by(email = email).first()
                    
    if user:
        if bcrypt.check_password_hash(user.password,password):
            token = jwt.encode({"email":user.email,"exp":datetime.datetime.utcnow() + datetime.timedelta(minutes=1)},app.config['SECRET_KEY'])
            return jsonify({"token":token.decode('utf-8')})
        
        else:
            return make_response ('Incorrect Email or Password',401,{'WWW-Aunthentication': 'Basic realm: "Login Required !!!"'})


    return make_response ('Incorrect Email or Password',401,{'WWW-Aunthentication': 'Basic realm: "Login Required !!!"'})

@app.route("/supplier",methods=['POST','GET'])
def supplier():
    if request.method == 'POST':

        data = request.get_json()

        new_supplier = Supplier(email = data['email'], name = data['name'], telephone = data['telephone'],
                           phone = data['phone'],number = data['number'],tin = data['tin'])

        db.session.add(new_supplier)

        db.session.commit()

        return jsonify({"message":"new supplier is successfully created"})

    if request.method == 'GET':

        suppliers = Supplier.query.all()

        output=[]

    for supplier in suppliers:

        supplier_data ={}
        supplier_data['id'] = supplier.id
        supplier_data['email'] = supplier.email
        supplier_data['name'] = supplier.name
        supplier_data['telephone'] = supplier.telephone
        supplier_data['phone'] = supplier.phone
        supplier_data['number'] = supplier.number
        supplier_data['tin'] = supplier.tin

        output.append(supplier_data)

    return jsonify({"results":output})

@app.route('/supplier/<int:id>',methods =['DELETE','PATCH'])
def changesupplier(id):

    if request.method == 'DELETE':

        supplier = Supplier.query.filter_by(id=id).first()

        if not supplier:
            return jsonify({'message':'NO Supplier Found'})

        db.session.delete(supplier)
        db.session.commit()

        return jsonify({'message':'The Supplier has been deleted'})

    if request.method == 'PATCH':

        data =request.get_json()
       
        supplier = Supplier.query.filter_by(id=id).first()

        if not supplier:
            return jsonify({'message':'NO Supplier Found'})
        
        supplier.name = data['name']
        supplier.telephone =data['telephone']
        supplier.email = data['email']
        supplier.phone = data['phone']
        supplier.number =data['number']
        supplier.tin = data['tin']

        db.session.commit()

        return jsonify({"message":"Supplier has been Successfully Updated"})

@app.route('/supplier/<int:id>',methods =['GET'])
def getonesupplier(id):

    supplier = Supplier.query.filter_by(id=id).first()

    if not supplier:
        return jsonify({"'message":"No User Found"})

    supplier_data ={}

    supplier_data['id'] = supplier.id
    supplier_data['email'] = supplier.email
    supplier_data['name'] = supplier.name
    supplier_data['telephone'] = supplier.telephone
    supplier_data['phone'] = supplier.phone
    supplier_data['number'] = supplier.number
    supplier_data['tin'] = supplier.tin


    return jsonify({"supplier":supplier_data})

@app.route('/asset',methods=['POST','GET'])
def asset():

    if request.method == 'POST':

        data = request.get_json()

        new_asset = Asset(typeof = data['typeof'], name = data['name'], inventoryid= data['inventoryid'],
                           unit = data['unit'],unitprice = data['unitprice'],quantity= data['quantity'],
                           inventoryvalue = data['inventoryvalue'],reorderlevel = data['reorderlevel'],
                           reordertime = data['reordertime'],quantityinreorder = data['quantityinreorder'],
                           discontinued = data['discontinued'])

        db.session.add(new_asset)

        db.session.commit()

        return jsonify({"message":"new asset is successfully created"})

    if request.method == 'GET':

        assets = Asset.query.all()

        output=[]

    for asset in assets:

        asset_data ={}

        asset_data['id'] = asset.id
        asset_data['inventoryid'] = asset.inventoryid
        asset_data['quantity'] = asset.quantity
        asset_data['name'] = asset.name
        asset_data['typeof'] = asset.typeof
        asset_data['unit'] = asset.unit
        asset_data['unitprice'] = asset.unitprice
        asset_data['inventoryvalue'] = asset.inventoryvalue
        asset_data['reorderlevel'] = asset.reorderlevel
        asset_data['reordertime'] = asset.reordertime
        asset_data['quantityinreorder'] = asset.quantityinreorder
        asset_data['discontinued'] = asset.discontinued

        output.append(asset_data)

    return jsonify({"results":output})

@app.route('/asset/<int:id>',methods =['DELETE','PUT'])
def changeasset(id):

    if request.method == 'DELETE':

        asset = Asset.query.filter_by(id=id).first()

        if not asset:
            return jsonify({'message':'NO Asset Found'})

        db.session.delete(asset)
        db.session.commit()

        return jsonify({'message':'The Asset has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        asset = Asset.query.filter_by(id=id).first()

        if not asset:
            return jsonify({'message':'NO asset Found'})

        asset.inventoryid = data['inventoryid']
        asset.quantity = data['quantity'] 
        asset.name = data['name']
        asset.typeof = data['typeof']
        asset.unit = data['unit']
        asset.unitprice = data['unitprice']
        asset.inventoryvalue = data['inventoryvalue']
        asset.reorderlevel= data['reorderlevel']
        asset.reordertime= data['reordertime']
        asset.quantityinreorder = data['quantityinreorder']
        asset.discontinued =data['discontinued']
        
        db.session.commit()

        return jsonify({"message":"Asset has been Successfully Updated"})

@app.route('/asset/<int:id>',methods =['GET'])
def getoneasset(id):

    asset = Asset.query.filter_by(id=id).first()

    if not asset:
        return jsonify({"'message":"No User Found"})

    asset_data ={}

    asset_data['id'] = asset.id
    asset_data['inventoryid'] = asset.inventoryid
    asset_data['quantity'] = asset.quantity
    asset_data['name'] = asset.name
    asset_data['typeof'] = asset.typeof
    asset_data['unit'] = asset.unit
    asset_data['unitprice'] = asset.unitprice
    asset_data['inventoryvalue'] = asset.inventoryvalue
    asset_data['reorderlevel'] = asset.reorderlevel
    asset_data['reordertime'] = asset.reordertime
    asset_data['quantityinreorder'] = asset.quantityinreorder
    asset_data['discontinued'] = asset.discontinued


    return jsonify({"asset":asset_data})

@app.route('/food',methods=['POST','GET'])
def food():

    if request.method == 'POST':

        data = request.get_json()

        new_food = Food(name = data['name'], inventoryid= data['inventoryid'],
                           unit = data['unit'],unitprice = data['unitprice'],quantity= data['quantity'],
                           inventoryvalue = data['inventoryvalue'],reorderlevel = data['reorderlevel'],
                           reordertime = data['reordertime'],quantityinreorder = data['quantityinreorder'],
                           discontinued = data['discontinued'])

        db.session.add(new_food)

        db.session.commit()

        return jsonify({"message":"new Food Data is successfully created"})

    if request.method == 'GET':

        items = Food.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['inventoryid'] = item.inventoryid
        item_data['quantity'] = item.quantity
        item_data['name'] = item.name
     
        item_data['unit'] = item.unit
        item_data['unitprice'] = item.unitprice
        item_data['inventoryvalue'] = item.inventoryvalue
        item_data['reorderlevel'] = item.reorderlevel
        item_data['reordertime'] = item.reordertime
        item_data['quantityinreorder'] = item.quantityinreorder
        item_data['discontinued'] = item.discontinued

        output.append(item_data)

    return jsonify({"results":output})

@app.route('/food/<int:id>',methods =['DELETE','PUT'])
def changefood(id):

    if request.method == 'DELETE':

        item = Food.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO Asset Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The Food Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = Food.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.inventoryid = data['inventoryid']
        item.quantity = data['quantity'] 
        item.name = data['name']
        
        item.unit = data['unit']
        item.unitprice = data['unitprice']
        item.inventoryvalue = data['inventoryvalue']
        item.reorderlevel= data['reorderlevel']
        item.reordertime= data['reordertime']
        item.quantityinreorder = data['quantityinreorder']
        item.discontinued =data['discontinued']
        
        db.session.commit()

        return jsonify({"message":"Asset has been Successfully Updated"})

@app.route('/food/<int:id>',methods =['GET'])
def getonefood(id):

    item = Food.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No User Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['inventoryid'] = item.inventoryid
    item_data['quantity'] = item.quantity
    item_data['name'] = item.name
   
    item_data['unit'] = item.unit
    item_data['unitprice'] = item.unitprice
    item_data['inventoryvalue'] = item.inventoryvalue
    item_data['reorderlevel'] = item.reorderlevel
    item_data['reordertime'] = item.reordertime
    item_data['quantityinreorder'] = item.quantityinreorder
    item_data['discontinued'] = item.discontinued


    return jsonify({"food":item_data})

@app.route('/ict',methods=['POST','GET'])
def ict():

    if request.method == 'POST':

        data = request.get_json()

        new_ict = Ict(name = data['name'], inventoryid= data['inventoryid'],
                           unit = data['unit'],unitprice = data['unitprice'],quantity= data['quantity'],
                           inventoryvalue = data['inventoryvalue'],reorderlevel = data['reorderlevel'],
                           reordertime = data['reordertime'],quantityinreorder = data['quantityinreorder'],
                           discontinued = data['discontinued'])

        db.session.add(new_ict)

        db.session.commit()

        return jsonify({"message":"new Food Data is successfully created"})

    if request.method == 'GET':

        items = Ict.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['inventoryid'] = item.inventoryid
        item_data['quantity'] = item.quantity
        item_data['name'] = item.name
     
        item_data['unit'] = item.unit
        item_data['unitprice'] = item.unitprice
        item_data['inventoryvalue'] = item.inventoryvalue
        item_data['reorderlevel'] = item.reorderlevel
        item_data['reordertime'] = item.reordertime
        item_data['quantityinreorder'] = item.quantityinreorder
        item_data['discontinued'] = item.discontinued

        output.append(item_data)

    return jsonify({"results":output})

@app.route('/ict/<int:id>',methods =['DELETE','PUT'])
def changeict(id):

    if request.method == 'DELETE':

        item = Ict.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO ICT Data Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The ict Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = Ict.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.inventoryid = data['inventoryid']
        item.quantity = data['quantity'] 
        item.name = data['name']
        
        item.unit = data['unit']
        item.unitprice = data['unitprice']
        item.inventoryvalue = data['inventoryvalue']
        item.reorderlevel= data['reorderlevel']
        item.reordertime= data['reordertime']
        item.quantityinreorder = data['quantityinreorder']
        item.discontinued =data['discontinued']
        
        db.session.commit()

        return jsonify({"message":"ICT Data has been Successfully Updated"})

@app.route('/ict/<int:id>',methods =['GET'])
def getoneict(id):

    item = Ict.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No User Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['inventoryid'] = item.inventoryid
    item_data['quantity'] = item.quantity
    item_data['name'] = item.name
   
    item_data['unit'] = item.unit
    item_data['unitprice'] = item.unitprice
    item_data['inventoryvalue'] = item.inventoryvalue
    item_data['reorderlevel'] = item.reorderlevel
    item_data['reordertime'] = item.reordertime
    item_data['quantityinreorder'] = item.quantityinreorder
    item_data['discontinued'] = item.discontinued


    return jsonify({"ict":item_data})

@app.route('/health',methods=['POST','GET'])
def health():

    if request.method == 'POST':

        data = request.get_json()

        new_health = Health(name = data['name'], inventoryid= data['inventoryid'],
                           unit = data['unit'],unitprice = data['unitprice'],quantity= data['quantity'],
                           inventoryvalue = data['inventoryvalue'],reorderlevel = data['reorderlevel'],
                           reordertime = data['reordertime'],quantityinreorder = data['quantityinreorder'],
                           discontinued = data['discontinued'])

        db.session.add(new_health)

        db.session.commit()

        return jsonify({"message":"new Food Data is successfully created"})

    if request.method == 'GET':

        items = Health.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['inventoryid'] = item.inventoryid
        item_data['quantity'] = item.quantity
        item_data['name'] = item.name
     
        item_data['unit'] = item.unit
        item_data['unitprice'] = item.unitprice
        item_data['inventoryvalue'] = item.inventoryvalue
        item_data['reorderlevel'] = item.reorderlevel
        item_data['reordertime'] = item.reordertime
        item_data['quantityinreorder'] = item.quantityinreorder
        item_data['discontinued'] = item.discontinued

        output.append(item_data)

    return jsonify({"results":output})

@app.route('/health/<int:id>',methods =['DELETE','PUT'])
def changehealth(id):

    if request.method == 'DELETE':

        item = Health.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO Health Data Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The Health Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = Health.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.inventoryid = data['inventoryid']
        item.quantity = data['quantity'] 
        item.name = data['name']
        
        item.unit = data['unit']
        item.unitprice = data['unitprice']
        item.inventoryvalue = data['inventoryvalue']
        item.reorderlevel= data['reorderlevel']
        item.reordertime= data['reordertime']
        item.quantityinreorder = data['quantityinreorder']
        item.discontinued =data['discontinued']
        
        db.session.commit()

        return jsonify({"message":"Health Data has been Successfully Updated"})

@app.route('/health/<int:id>',methods =['GET'])
def getonehealth(id):

    item = Health.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No User Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['inventoryid'] = item.inventoryid
    item_data['quantity'] = item.quantity
    item_data['name'] = item.name
   
    item_data['unit'] = item.unit
    item_data['unitprice'] = item.unitprice
    item_data['inventoryvalue'] = item.inventoryvalue
    item_data['reorderlevel'] = item.reorderlevel
    item_data['reordertime'] = item.reordertime
    item_data['quantityinreorder'] = item.quantityinreorder
    item_data['discontinued'] = item.discontinued


    return jsonify({"health":item_data})

@app.route('/stationary',methods=['POST','GET'])
def stationary():

    if request.method == 'POST':

        data = request.get_json()

        new_item = Stationary(name = data['name'], inventoryid= data['inventoryid'],
                           unit = data['unit'],unitprice = data['unitprice'],quantity= data['quantity'],
                           inventoryvalue = data['inventoryvalue'],reorderlevel = data['reorderlevel'],
                           reordertime = data['reordertime'],quantityinreorder = data['quantityinreorder'],
                           discontinued = data['discontinued'])

        db.session.add(new_item)

        db.session.commit()

        return jsonify({"message":"new Stationary Data is successfully created"})

    if request.method == 'GET':

        items = Stationary.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['inventoryid'] = item.inventoryid
        item_data['quantity'] = item.quantity
        item_data['name'] = item.name
     
        item_data['unit'] = item.unit
        item_data['unitprice'] = item.unitprice
        item_data['inventoryvalue'] = item.inventoryvalue
        item_data['reorderlevel'] = item.reorderlevel
        item_data['reordertime'] = item.reordertime
        item_data['quantityinreorder'] = item.quantityinreorder
        item_data['discontinued'] = item.discontinued

        output.append(item_data)

    return jsonify({"results":output})

@app.route('/stationary/<int:id>',methods =['DELETE','PUT'])
def changestationary(id):

    if request.method == 'DELETE':

        item = Stationary.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO Stationary Data Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The Health Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = Stationary.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.inventoryid = data['inventoryid']
        item.quantity = data['quantity'] 
        item.name = data['name']
        
        item.unit = data['unit']
        item.unitprice = data['unitprice']
        item.inventoryvalue = data['inventoryvalue']
        item.reorderlevel= data['reorderlevel']
        item.reordertime= data['reordertime']
        item.quantityinreorder = data['quantityinreorder']
        item.discontinued =data['discontinued']
        
        db.session.commit()

        return jsonify({"message":" Data has been Successfully Updated"})

@app.route('/stationary/<int:id>',methods =['GET'])
def getonestationary(id):

    item = Stationary.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No User Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['inventoryid'] = item.inventoryid
    item_data['quantity'] = item.quantity
    item_data['name'] = item.name
   
    item_data['unit'] = item.unit
    item_data['unitprice'] = item.unitprice
    item_data['inventoryvalue'] = item.inventoryvalue
    item_data['reorderlevel'] = item.reorderlevel
    item_data['reordertime'] = item.reordertime
    item_data['quantityinreorder'] = item.quantityinreorder
    item_data['discontinued'] = item.discontinued


    return jsonify({"stationary":item_data})

@app.route('/house',methods=['POST','GET'])
def house():

    if request.method == 'POST':

        data = request.get_json()

        new_item = House(name = data['name'], inventoryid= data['inventoryid'],
                           unit = data['unit'],unitprice = data['unitprice'],quantity= data['quantity'],
                           inventoryvalue = data['inventoryvalue'],reorderlevel = data['reorderlevel'],
                           reordertime = data['reordertime'],quantityinreorder = data['quantityinreorder'],
                           discontinued = data['discontinued'])

        db.session.add(new_item)

        db.session.commit()

        return jsonify({"message":"new  Data is successfully created"})

    if request.method == 'GET':

        items = House.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['inventoryid'] = item.inventoryid
        item_data['quantity'] = item.quantity
        item_data['name'] = item.name
     
        item_data['unit'] = item.unit
        item_data['unitprice'] = item.unitprice
        item_data['inventoryvalue'] = item.inventoryvalue
        item_data['reorderlevel'] = item.reorderlevel
        item_data['reordertime'] = item.reordertime
        item_data['quantityinreorder'] = item.quantityinreorder
        item_data['discontinued'] = item.discontinued

        output.append(item_data)

    return jsonify({"results":output})

@app.route('/house/<int:id>',methods =['DELETE','PUT'])
def changehouse(id):

    if request.method == 'DELETE':

        item = House.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO House Data Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = House.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.inventoryid = data['inventoryid']
        item.quantity = data['quantity'] 
        item.name = data['name']
        
        item.unit = data['unit']
        item.unitprice = data['unitprice']
        item.inventoryvalue = data['inventoryvalue']
        item.reorderlevel= data['reorderlevel']
        item.reordertime= data['reordertime']
        item.quantityinreorder = data['quantityinreorder']
        item.discontinued =data['discontinued']
        
        db.session.commit()

        return jsonify({"message":" Data has been Successfully Updated"})

@app.route('/house/<int:id>',methods =['GET'])
def getonehouse(id):

    item = House.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No User Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['inventoryid'] = item.inventoryid
    item_data['quantity'] = item.quantity
    item_data['name'] = item.name
   
    item_data['unit'] = item.unit
    item_data['unitprice'] = item.unitprice
    item_data['inventoryvalue'] = item.inventoryvalue
    item_data['reorderlevel'] = item.reorderlevel
    item_data['reordertime'] = item.reordertime
    item_data['quantityinreorder'] = item.quantityinreorder
    item_data['discontinued'] = item.discontinued


    return jsonify({"house":item_data})

@app.route('/gift',methods=['POST','GET'])
def gift():

    if request.method == 'POST':

        data = request.get_json()

        new_item = Gift(name = data['name'], inventoryid= data['inventoryid'],
                           unit = data['unit'],unitprice = data['unitprice'],quantity= data['quantity'],
                           inventoryvalue = data['inventoryvalue'],reorderlevel = data['reorderlevel'],
                           reordertime = data['reordertime'],quantityinreorder = data['quantityinreorder'],
                           discontinued = data['discontinued'])

        db.session.add(new_item)

        db.session.commit()

        return jsonify({"message":"new  Data is successfully created"})

    if request.method == 'GET':

        items = Gift.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['inventoryid'] = item.inventoryid
        item_data['quantity'] = item.quantity
        item_data['name'] = item.name
     
        item_data['unit'] = item.unit
        item_data['unitprice'] = item.unitprice
        item_data['inventoryvalue'] = item.inventoryvalue
        item_data['reorderlevel'] = item.reorderlevel
        item_data['reordertime'] = item.reordertime
        item_data['quantityinreorder'] = item.quantityinreorder
        item_data['discontinued'] = item.discontinued

        output.append(item_data)

    return jsonify({"results":output})

@app.route('/gift/<int:id>',methods =['DELETE','PUT'])
def changegift(id):

    if request.method == 'DELETE':

        item = Gift.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO House Data Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = Gift.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.inventoryid = data['inventoryid']
        item.quantity = data['quantity'] 
        item.name = data['name']
        
        item.unit = data['unit']
        item.unitprice = data['unitprice']
        item.inventoryvalue = data['inventoryvalue']
        item.reorderlevel= data['reorderlevel']
        item.reordertime= data['reordertime']
        item.quantityinreorder = data['quantityinreorder']
        item.discontinued =data['discontinued']
        
        db.session.commit()

        return jsonify({"message":" Data has been Successfully Updated"})

@app.route('/gift/<int:id>',methods =['GET'])
def getonegift(id):

    item = Gift.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No User Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['inventoryid'] = item.inventoryid
    item_data['quantity'] = item.quantity
    item_data['name'] = item.name
   
    item_data['unit'] = item.unit
    item_data['unitprice'] = item.unitprice
    item_data['inventoryvalue'] = item.inventoryvalue
    item_data['reorderlevel'] = item.reorderlevel
    item_data['reordertime'] = item.reordertime
    item_data['quantityinreorder'] = item.quantityinreorder
    item_data['discontinued'] = item.discontinued


    return jsonify({"gift":item_data})







if __name__ == '__main__':
    app.run(debug=True)