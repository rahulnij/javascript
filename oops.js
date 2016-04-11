/*
    links: {
       https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Details_of_the_Object_Model,
       http://stackoverflow.com/questions/4508313/advantages-of-using-prototype-vs-defining-methods-straight-in-the-constructor
    }
*/
Function.prototype.method = function (funcName, func) {
  this.prototype[funcName] = func
}
function Person(name)
{
  this.name = name
}
Person.method('getName', function () {
  return this.name
})
p = new Person('Rahul1')
console.log(p.getName())

var arr = new Array()

console.log(typeof(arr))
console.log(typeof(null))
console.log(arr.constructor)
console.log(Array.constructor)
console.log(arr != null)

function Class () {}
Class.prototype.calc = function (a, b) {
    return a + b;
}

// Create 2 instances:
var ins1 = new Class(),
    ins2 = new Class();

// Test the calc method:
console.log(ins1.calc(1,1), ins2.calc(1,1));
// -> 2, 2

// Change the prototype method
Class.prototype.calc = function () {
    var args = Array.prototype.slice.apply(arguments),
        res = 0, c;

    while (c = args.shift())
        res += c;

    return res; 
}

// Test the calc method:
console.log(ins1.calc(1,1,1), ins2.calc(1,1,1));

// Error, fn is called before the function is assigned!

var fn = function () { alert("test!"); } 
fn()

// Works as expected: the fn2 declaration is hoisted above the call
fn2();
function fn2() { alert("test!"); }
/*
Exception: TypeError: fn is not a function
@Scratchpad/1:50:1
*/