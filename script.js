// Function to calculate area and perimeter
function calculateTriangle() {
    // Get input values
    let base = parseFloat(document.getElementById("baseInput").value);
    let height = parseFloat(document.getElementById("heightInput").value);
    let adjacent = parseFloat(document.getElementById("adjacentInput").value);
    let hypotenuse = parseFloat(document.getElementById("hypotenuseInput").value);

    // Perform calculations
    let area = (base * height) / 2;
    let perimeter = adjacent + base + hypotenuse;

    // Display results with a glowing effect
    document.getElementById("area").textContent = area.toFixed(2);
    document.getElementById("perimeter").textContent = perimeter.toFixed(2);

    // Add glowing effect
    let results = document.querySelector('.results');
    results.style.animation = "glow 0.5s ease-in-out";
    setTimeout(() => results.style.animation = "", 500);
}

// Attach event listener to button
document.getElementById("calculateBtn").addEventListener("click", calculateTriangle);

// Run the function on page load
calculateTriangle();
