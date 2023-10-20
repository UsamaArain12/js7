//  Q.1 Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights” 

var city= prompt("write your city name like (Karachi) first letter is cappital ")
if (city == "Karachi"){
    alert("welcome to city of light")
}

// Q.2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender=prompt ("write your gender")
if (gender == "male"){
    alert("good morning sir")
} 
 else if (gender == "female"){
    alert("good morning maam")
} 

//  Q.3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var color = prompt ("write a traffic light color ( like red , green , yellow) ")
if (color == "green" ){
    alert("move now")
}
else if (color == "red" ){
    alert("must stop")
}
else if (color == "yellow" ){
    alert("ready to move")
}

// Q.4 Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var patrol =prompt("write your remaining fuel (like 0.1 to 0.99)")
if (patrol <"0.25"){
    alert("please refill the fuel in your car")
}

// Q.5 Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }

// Q.6 Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var first = prompt("write your first subject obt marks")
var second = prompt("write your second subject obt marks")
var third = prompt("write your third subject obt marks")
var totalMarks= prompt ("write your total  obt marks")
document.write("<h1>Marks Sheet</h1>")
document.write("<h1>Total Marks : 300</h1>")
document.write("<h1>Marks Obtanined : "+totalMarks +" </h1>")
document.write("<h1> Percentage : "+totalMarks / 300  +" </h1>")
var totalPer= (totalMarks / 300 )



if (totalPer > 0.90 ){
    document.write(" <h1>grade : A</h1>")
}
else if (totalPer >= 0.80 ){
    document.write("<h1>grade : B</h1>")
}
 else if (totalPer >= 0.70 ){
    document.write("<h1>grade : C</h1>")
}
 else if (totalPer >= 0.60 ){
    document.write("<h1>grade : D</h1>")
}
 else if (totalPer < 0.60 ){
    document.write("<h1>grade : fail</h1>")
}


if (totalPer > 0.90 ){
    document.write(" <h1> remarks :excellent</h1>")
}
else if (totalPer >= 0.80 ){
    document.write("<h1> remarks :good</h1>")
}
 else if (totalPer >= 0.70 ){
    document.write("<h1> remarks :you need to improve</h1>")
}
 else if (totalPer >= 0.60 ){
    document.write("<h1> remarks :please paractice</h1>")
}
 else if (totalPer < 0.60 ){
    document.write("<h1>remarks :sorry</h1>")
}



var temparature = prompt("write the temprature in your city like (10,20,30,40)")
if (temparature  >30){
    alert("it is too hot")
}
else if (temparature  >20){
    alert("the weather today is okay")
}
else if (temparature  >10){
    alert("today weather is cool")
}
else if (temparature  <10){
    alert("OMG! today weather is so cool")
}
