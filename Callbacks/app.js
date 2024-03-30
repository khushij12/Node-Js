function myDisplay(result){
    console.log(result)
}

//Here compulsorily result will be displayed and inner function should have proper scope
function mySum(num1,num2){
    let result = num1+num2;
    myDisplay(result)
}

mySum(1,2)

//The below example is a synchronous callback, as it is executed immediately.
function mySum1(num1,num2,callback){
    let result = num1+num2;
    callback(result)
}

mySum1(1,2,myDisplay)