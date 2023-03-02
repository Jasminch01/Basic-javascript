// function addition(num,num1){
//     var result = num+num1;
//     document.write(result + "<br>");
// }
// addition(100, 200);//pass value in function

// function substraction(num,num1){
//     var result =num-num1;
//     return result; //return value
// }
// document.write(substraction(100,200));
// var a = parseInt(prompt("Enter your number : "));
// var b = parseInt(prompt("Enter another number"));
// function addition(a,b){
//     var result = a+b;
//     return result;

   
// }

// document.write(addition(a,b));
// (function addition(x,y){
//     document.write(x+y);
// })(10,20);
// (function display(){
//     document.write("hello world")
// })();
//  var jasmin = function name(msg){
//     document.write(msg);
// };
// jasmin("i am jasmin ch");
// var name1 =function jasmin(){
//     document.write("i am jasmin chakma")
// }
// name1();
// var list =["jasmin ","twinkle", "sujon ", "appru", "paresh"]
// list.push("kaku")
// document.write(list)
var num = [1,2,3,4,5,6,7];
var sum = 0;
for(var i= 0;i<7;i++){
    document.write(num[i])
    sum = sum + i
}
document.write("sum = " + sum)