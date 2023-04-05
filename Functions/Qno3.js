//jawascript function to find Max and  Min from two numbers

findmaxmin=(num1,num2)=>{
    let Max=num1>num2?num1:num2;
    let Min=num1<num2?num1:num2;
    return{ Max,Min};
}
let result= findmaxmin(5,8)
console.log(result);