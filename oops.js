/*
    links: {
       https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Details_of_the_Object_Model,
       http://stackoverflow.com/questions/4508313/advantages-of-using-prototype-vs-defining-methods-straight-in-the-constructor
       http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
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
console.log(typeof (arr))
console.log(typeof (null))
console.log(arr.constructor)
console.log(Array.constructor)
console.log(arr != null)
function Class() {
}
Class.prototype.calc = function (a, b) {
  return a + b;
}
// Create 2 instances:

var ins1 = new Class(),
ins2 = new Class();
// Test the calc method:
console.log(ins1.calc(1, 1), ins2.calc(1, 1));
// -> 2, 2
// Change the prototype method
Class.prototype.calc = function () {
  var args = Array.prototype.slice.apply(arguments),
  res = 0,
  c;
  while (c = args.shift())
  res += c;
  return res;
}
// Test the calc method:

console.log(ins1.calc(1, 1, 1), ins2.calc(1, 1, 1));
/*
Exception: ReferenceError: ins1 is not defined
@Scratchpad/1:1:1
*/
// Error, fn is called before the function is assigned!
var fn = function () {
  console.log('test!');
}
fn()
// Works as expected: the fn2 declaration is hoisted above the call
fn2();
function fn2() {
  console.log('test!');
}
x = 20
obj = {
  x: 10
}
//with (obj)

console.log(x)
'' == '0'
0 == ''
0 == '0'
false == 'false'
false == '0'
false == undefined
false == null
null == undefined
' \t\r\n' == 0
console.log('' == null)
console.log(obj.y === undefined)
console.log('x in obj')
console.log('y' in obj)
for(p in obj) {
  console.log(obj[p])
}
