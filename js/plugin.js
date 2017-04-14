//Часть1
//1
getBigName(userName); 
function getBigName(name) {
	name = name + '';
	return name.toUpperCase();
}
var userName = 'Ivan';
//IVAN 
//При вызове ф-ции мы передаем ей аргумент userName, при выполнении ф-ции идет поиск 
//переменной сначала локально(внутри ее лексического окружения), 
//потом переходит в глобальный(внешний) поиск и находит userName='Ivan' 
//и возращает нам userName заглавными буквами.

//2
// function test() {
// 	var name = 'Vasiliy';
// 	return getBigName(userName);
// }
// function getBigName(name) {
// 	name = name +'';
// 	return name.toUpperCase();
// }
// var userName = 'Ivan';

//IVAN
//при вызове test() нам возращается вызов функции getBigName с аргументом 
//userName (которое ищется сначала локально, не находится 
//и ищется глобально, где равно Ivan), 
//дальше выполняется ф-ция getBigName(name) при этом лексическое окружение ф-ции test() "забывается", остается работать 
//только окружение ф-ции getBigName(т.к. ф-ция находится вне test()), где в качестве аргумента name 
//выступает переданный userName и возращает userName заглавными буквами.

//3
// var food = 'cucumber';
// (function () {
// 	var food = 'bread';
// 	getFood();
// })();

// function getFood(){
// 	console.log(food);
// }
//cucumber
//в самовызывающейся ф-ции вызывается ф-ция getFood(), после чего ее лексическое окружение "забывается"
//а getFood() выводит в консоль аргумент food, который она не находит локально 
//и переходит к глобальному поиску.  А ее внешним окружением является var food = 'cucumber'.

//Часть 2
//1
// var dollar,
// 	getDollar;

// (function () {
// 	var dollar = 0;
// 	getDollar = function () {
// 		return dollar;
// 	}
// }());
// dollar = 30;
// getDollar(); //0
// в самовызывающейся ф-ции произошло замыкание,  ф-ция getDollar возращает 
//переменную dollar, ищет ее в своем окружении, затем в окружении самовызывающейся ф-ции 
//и находит, запоминает значение  var dollar = 0.

//2
// var greet = 'Hello';
// (function () {
// 	var text = 'World';
// 	console.log(greet + text);
// }());
// console.log(greet + text);
//HelloWorld
//Uncaught ReferenceError: text is not defined
//при срабатывании самовызывающейся функции пременная greet ищется локально, потом глобально, 
//находится и срабатывает (greet + text).
// при выводе в косоль второй раз в глобальном окружении, пременную text оиск не находит 
//в своем окружении, получаем ошибку.

//3

// function minus(x) {
// 	x = x ? x : 0;
// 	return function(y) {
// 		y = y ? y : 0;
// 		var res = x == 0 ? y - x : x - y;
// 		return res;
//   	}
// }		
// console.log(minus(10)(6)); //4
// console.log(minus(5)(6)); //-1
// console.log(minus(10)()); //10
// console.log(minus()(6)); //6
// console.log(minus()()); //0

//4
// function multiplyMaker(x) {
// 	return function (y) {
// 		return x *= y;
// 	}
// }
// const multiply = multiplyMaker(2);

// console.log(multiply(2));
// console.log(multiply(1));
// console.log(multiply(3));
// console.log(multiply(10));

//5
// var modul = (function () {
// 	var str = '';
// 	function setStr(value) {
// 		return str = value + '';
// 	}
// 	function  getStr(){
// 		return str;
// 	}
// 	function getLengthStr() {
// 		return str.length;
// 	}
// 	function getReverseStr() {
// 		return str.split('').reverse().join('');
// 	}
// 	return{
// 		setStr,
// 		getStr,
// 		getLengthStr,
// 		getReverseStr
// 	}
// })();
// console.log(modul.setStr('abcde'));
// console.log(modul.getStr());
// console.log(modul.getLengthStr());
// console.log(modul.getReverseStr());

// console.log(modul.setStr('12345'));
// console.log(modul.getStr());
// console.log(modul.getLengthStr());
// console.log(modul.getReverseStr());


//6
// var modulCalculator = (function () {
// 	var value = 0;
// 	function setValue(a) {
// 		value = a;
// 		return this;
// 	}
// 	function summ(a) {
// 		value += a;
// 		return this;
// 	}
// 	function minus(a) {
// 		value -= a;
// 		return this;
// 	}
// 	function multiply(a) {
// 		value *= a;
// 		return this;
// 	}
// 	function division(a) {
// 		value /= a;
// 		return this;
// 	}
// 	function exponentiation(b) {
// 		value = Math.pow(value, b);
// 		return this;
// 	}
// 	function getValue() {
// 		return value.toFixed(2);
// 	}
// 	return {
// 		setValue,
// 		summ,
// 		minus,
// 		multiply,
// 		division,
// 		exponentiation,
// 		getValue
// }
// })();

// modulCalculator.setValue(10).exponentiation(2).getValue();
// console.log(modulCalculator.getValue()); //100.00