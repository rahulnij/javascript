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

