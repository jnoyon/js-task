// Task M2-1 - Free Drinks
let burgerPrice = 600;
if(burgerPrice > 500){
    console.log('Free Soft Drinks');
}
else {
    console.log('Soft Drinks Price : 30 Tk');
}

// Task M2-2 - Free Drinks
let weight = 64;
let heightF = 5; // Height in Feet
let heightI = 7; // Height in Inch
let totalHeightI = (heightF*12)+heightI; // Convert height to Inches
let height = totalHeightI/39.3701; // Convert heiht to meter

let actualBMI = weight/(height*height); // Calculated BMI using Weight in KG and Height in Meter
let bmi = parseFloat(actualBMI).toFixed(1); // Value in 2 Decimal Places

if(bmi < 18.5) {
    console.log("Your BMI Is: "+ bmi + " and you are Underweight" );
}
else if(bmi >= 18.5 && bmi <= 24.9 ){
    console.log("Your BMI Is: "+ bmi + " and you are Normal" );
}
else if(bmi >= 25 && bmi <= 29.9 ){
    console.log("Your BMI Is: "+ bmi + " and you are Overweight" );
}
else {
    console.log("Your BMI Is: "+ bmi + " and you are Obese" );
}