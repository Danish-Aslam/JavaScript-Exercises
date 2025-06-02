a=Math.random()
num_1=parseInt(prompt("Enter first number:"))
operator=prompt("Input Operator(+,-,*,/): ")
num_2=parseInt(prompt("Enter second number:"))

if (a<0.1 && operator=="+") {console.log(num_1 - num_2);}

else if (a<0.1 && operator=="-") {console.log(num_1 + num_2);}

else if (a<0.1 && operator=="*") {console.log(num_1 / num_2);}

else if (a<0.1 && operator=="/") {console.log(num_1 * num_2);}

else{
if (operator=="+") {console.log(num_1 + num_2);}

else if (operator=="-") {console.log(num_1 - num_2);}

else if (operator=="*") {console.log(num_1 * num_2);}

else if (operator=="/") {console.log(num_1 / num_2);}}
     

