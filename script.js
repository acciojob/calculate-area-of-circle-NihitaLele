function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");

    // Convert the input to a number
    radius = parseFloat(radius);

    // Calculate the area
    let area = Math.PI * Math.pow(radius, 2);

    // Round to two decimal places
    area = area.toFixed(2);

    // Display the result
    console.log(`The area of the circle with radius ${radius} is ${area}`);
    alert(`The area of the circle with radius ${radius} is ${area}`);
}

calculateArea();
