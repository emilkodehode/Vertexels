const getnum1 = () => num1 = +document.getElementById("num1-el").value;
const getnum2 = () => num2 = +document.getElementById("num2-el").value;
const add = document.getElementById("add-el")
const subtract = document.getElementById("subtract-el")
const divide = document.getElementById("divide-el")
const multiply = document.getElementById("multiply-el")

add.addEventListener("click", function(){
    getnum1()
    getnum2()
    const sum = num1 + num2;
    answer(sum);})
subtract.addEventListener("click", function (){
    getnum1()
    getnum2()
    const sum = num1 - num2;
    answer(sum);})
divide.addEventListener("click", function (){
    getnum1()
    getnum2()
    const sum = num1 / num2;
    answer(sum);})
multiply.addEventListener("click", function (){
    getnum1()
    getnum2()
    const sum = num1 * num2;
    answer(sum);})
function answer (text){
    document.getElementById("sum-el").textContent = text;
    console.log(text)}

