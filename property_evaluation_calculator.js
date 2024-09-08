function calculateValue() {
    // Get values from the form
    var location = document.getElementById('location').value;
    var propertyType = document.getElementById('propertyType').value;
    var size = document.getElementById('size').value;
    var bedrooms = document.getElementById('bedrooms').value;
    var age = document.getElementById('age').value;

    // Base value calculation (you can modify this logic)
    var baseValue = size * 5000; // Base price per sq. ft.

    // Adjust based on location
    if (location === 'urban') {
        baseValue *= 1.5; // Increase value by 50% for urban areas
    } else if (location === 'suburban') {
        baseValue *= 1.2; // Increase value by 20% for suburban areas
    } else {
        baseValue *= 0.8; // Decrease value by 20% for rural areas
    }

    // Adjust based on property type
    if (propertyType === 'commercial') {
        baseValue *= 1.3; // Increase value by 30% for commercial properties
    }

    // Add value for each bedroom beyond 3
    if (bedrooms > 3) {
        baseValue += bedrooms * 100000; // Add ₹100,000 per extra bedroom
    }

    // Decrease value for properties older than 10 years
    if (age > 10) {
        baseValue *= 0.8; // Decrease value by 20% for older properties
    }

    // Display the result
    document.getElementById('result').innerText = "Estimated Property Value: ₹" + baseValue.toFixed(2);
}
