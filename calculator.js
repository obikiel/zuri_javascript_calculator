 let firstnumber = parseFloat(prompt("enter the first number"));
 let operation = prompt("enter an operation, e.g +, -, *, /");
 let secondnumber = parseFloat(prompt("enter the second number"));

if (operation == "+")
{
    alert("The result is " + firstnumber + secondnumber);
}
if (operation == "-")
{
    alert("The result is " + firstnumber - secondnumber);
}

if (operation == "*")
{
    alert("The result is " + firstnumber * secondnumber);
}

if (operation == "/")
{
    alert("The result is " + firstnumber / secondnumber);
}

else alert("you have inputed wrongly");