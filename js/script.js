// Adds EventListener to our button
document.querySelector("button").addEventListener("click", runBmi);


// Function to be triggered when our calculate button is clicked
function runBmi() {
  // Gets the users input
  let weight = document.getElementById("weightInput").value;
  let height = document.getElementById("heightInput").value;

  //   Calculating of the inputted data gotten from the user
  let divideHeight = height / 100
  let multiplyHeight = divideHeight * divideHeight;
  let calculateBmi = (weight / multiplyHeight).toFixed(1);

  //   Conditional statement for BMI input data
  if (calculateBmi >= 40) {
    document.getElementById("result").textContent = calculateBmi;
    document.getElementById("description").textContent = " Extreme Obesity";
  } else if (calculateBmi >= 35) {
    document.getElementById("result").textContent = calculateBmi;
    document.getElementById("description").textContent = " Obesity (Class II)";
  } else if (calculateBmi >= 30) {
    document.getElementById("result").textContent = calculateBmi;
    document.getElementById("description").textContent = " Obesity (Class I)";
  } else if (calculateBmi >= 25) {
    document.getElementById("result").textContent = calculateBmi;
    document.getElementById("description").textContent = " Over weight";
  } else if (calculateBmi >= 18.5) {
    document.getElementById("result").textContent = calculateBmi;
    document.getElementById("description").textContent = " Normal";
  } else if (calculateBmi < 18) {
    document.getElementById("result").textContent = calculateBmi;
    document.getElementById("description").textContent = " Under Weight";
  } else {
    document.getElementById("result").textContent = "";
    document.getElementById("description").textContent = "";
  }
}