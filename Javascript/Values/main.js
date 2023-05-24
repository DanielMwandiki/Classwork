const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2; 
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); 

console.log("The area of the triangle is:", area);

//

const num1 = 10;
const num2 = 5;
const multiplication = num1 * num2; // Calculate the multiplication
const division = num1 / num2; // Calculate the division

console.log("The multiplication is:", multiplication);
console.log("The division is:", division);

//

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  const temperatureC = 60;
  const temperatureF = 45;
  
  const convertedToFahrenheit = celsiusToFahrenheit(temperatureC);
  const convertedToCelsius = fahrenheitToCelsius(temperatureF);
  
  console.log(temperatureC + "°C is " + convertedToFahrenheit + "°F");
  console.log(temperatureF + "°F is " + convertedToCelsius + "°C");
  