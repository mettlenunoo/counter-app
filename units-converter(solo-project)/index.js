function makeCalculation(){
    // Get elements from the DOM 
    let meterFeet = document.getElementById("me-feet");
    let literGallon = document.getElementById("lit-gal");
    let kiloPound = document.getElementById("kilo-pound");
    // Get the values from the input fields
    let value = document.getElementById("value").value;
    // Calculate the result and fix the number of decimals
    let feetcal = (value * 3.281).toFixed(3);
    let metercal = (value / 3.281).toFixed(3);
    let galloncal = (value / 3.785).toFixed(3);
    let litercal = (value * 3.785).toFixed(3);
    let poundcal = (value * 2.205).toFixed(3);
    let kilocal = (value / 2.205).toFixed(3);
    // Assign the result
    let displayMeterFeet = value +  " meters = " + feetcal + " feet" + " | " + value + " feet = " + metercal + " meters"
    let displayLiterGallont = value +  " liters = " + galloncal + " gallons" + " | " + value + " gallons = " + litercal + " liters"
    let displayKiloPound = value +  " kilos = " + poundcal +" pounds" + " | " + value + " pounds = " + kilocal + " kilos"
    // Display the resultßß
    meterFeet.textContent = displayMeterFeet
    literGallon.textContent = displayLiterGallont
    kiloPound.textContent = displayKiloPound
}