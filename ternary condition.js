// find the bigest number of the among three numbers
var num = prompt("Enter your frist  number");
var num1 = prompt("Enter your secend  number");
var num2 = prompt("Enter your third number")
var result = num>num1&&num>num2?" "+num: num1>num&&num1>num2 ? ""+num1 : " "+ num2;
document.write(result);
//find the positive and nagative numbers
var number = prompt("Enter Your number: ")
number>0? document.write("positive"): number<0? document.write("nagative"): document.write("zero")
