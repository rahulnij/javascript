function Person(name) {
	this.name = name;
};

Person.prototype = {
	getName: function(){
		return this.name;
	}
}


function User() {
	this.name = agruments[0]
};

User.prototype = new Person();

u = new User('Rahul');

console.log(u.getName());

/*obj = {}
objref = {}
console.log(objref === obj)
typeof []
str = 'hi'
stradd = str
console.log(str)
console.log(stradd)
str += 'rahul'
console.log(str)
console.log(stradd)
arr = []
console.log(arr !== null)
console.log(Array.constructor === arr.constructor)
console.log(obj.constructor === Object.constructor)

function fun(name)
{
  this.name = name
  
  function log() {
      console.log(arguments.length)
  }
}


f = new fun('rahul')

console.log(f.name)

console.log(f.log)
*/
