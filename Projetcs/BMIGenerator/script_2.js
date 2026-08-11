const form = document.querySelector("form");

form.addEventListener("submit",function(e){
e.preventDefault()

const height = parseFloat(document.querySelector("#height").value);
const weight = parseFloat(document.querySelector("#weight").value);
const results = document.querySelector("#results")

if(height === "" || height < 0 || isNaN(height)){
 resluts.innerHTML = "please give a valid height ${height}"   
}else if(weight === "" || weight < 0 || isNaN(weight)){
 resluts.innerHTML = "please give a valid height ${weight}"
}else{
 const bmi = (weight / ((height * height) / 10000)).toFixed(2);

 results.innerHTML = `<span>${bmi}</span>`; 
 if (bmi < 18.5) {
      results.innerHTML = `Your BMI is ${bmi}<br>Under Weight`;
     } 
 else if (bmi >= 18.5 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi}<br>Normal Weight`;
     } 
 else { 
     results.innerHTML = `Your BMI is ${bmi}<br>Over Weight`;
     }
}
});