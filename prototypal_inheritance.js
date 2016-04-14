function A(val) {
  this.a = val
  this.getA = function() {
    return this.a
  }
}

function B(val) {
  this.b = val
  this.getB = function() {
    return this.b
  }
}

function C(val) {
  this.c = val
  this.getC = function() {
    return this.c
  }
}
var aobj = new A('Avalue')

bobj = new B('Bvalue')
if("") {
  console.log('"" == true')
  
} else {
  console.log('"" == false')
}
console.log('"" == undefined')
console.log("" == undefined)
bobj =  Object.create(new B('Bvaluein'))
//bobj =  Object.create(new C('Cvaluein'))
bobj = Object.create(aobj)

bbobj = B('Bbvalue')
//console.log(bobj.getB())
//console.log(bobj.getB())
console.log(B('Bbvalue'))

// An object contains a link to another object.
console.log(bobj.__proto__)
console.log(bobj)



function r() {
  
  return {
    'ok': true
  }
}

var source = new EventSource('updates.cgi');
source.onmessage = function (event) {
  alert(event.data);
};



function Employee(name, dept) {
  this.name = name || ""
  this.dept = dept || "general"
}

function Manager(name, dept, reports) {
  //Employee.call(this,name, dept) or 
  Employee.apply(this, [name, dept])
  //this.base = Employee
  //this.base(name, dept)
  this.reports = reports || []
}
Manager.prototype = Object.create(Employee.prototype)

function Workbee(name, dept, projs) {
  this.base = Employee
  this.base(name, dept)
  this.projects = projs || []
}
Workbee.prototype = new Employee //Object.create(Employee.prototype)

function Engineer(name, dept, projs, mach) {
  this.base = Workbee
  this.base(name, dept, projs)
  this.machine = mach || []
}
Engineer.prototype = new Workbee

m = new Manager('Rahul', 'Software', ['Ankur'])
e = new Engineer('Rahul Nijhawan', 'Php', ['kinbow'], ['ubuntu'])
Employee.prototype.age = 18

console.log(m.name)
console.log("e.__proto__")
console.log(e.__proto__)
function Foo(){}
foo = new Foo()
console.log("foo.__proto__")
console.log(foo.__proto__)
console.log(e.__proto__.__proto__.__proto__ == Employee.prototype)
i=1
console.log('---------------------')
p = e.__proto__
while(i <= 3) {
  i = i + 1
  console.log(p)
  p = p.__proto__
}

function instanceOf(obj, constructor) {
  obj = obj.__proto__
  while(obj !== null) {
    if(obj == constructor.prototype) {
      return true
    }
    
    if ( typeof obj == 'xml') {
      return constructor.prototype = XML.prototype
    }
    obj = obj.__proto__
 
  }
  return false;
}

isTrue = instanceOf(e, Workbee)
console.log(isTrue)
