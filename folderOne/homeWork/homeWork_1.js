/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTemp2 = 90;
let kTemp2 = (fTemp2 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equals to ${kTemp2}°k`);


// C -> F
// T(°F) = T(°C) × 9/5 + 32
let cTemp3 = 20;
let fTemp3 = (cTemp3 * 9/5) + 32;
console.log(`\n${cTemp3}°C is equals to ${fTemp3}°f`);


// C -> K
// T(K) = T(°C) + 273.15
let cTemp4 = 20;
let kTemp4 = (cTemp4) + 273.15;
console.log(`\n${cTemp4}°C is equals to ${kTemp4}°k`);


// K -> F
// T(°F) = T(K) × 9/5 - 459.67
let kTemp5 = 10;
let fTemp5 = (kTemp5 * 9/5) - 459.67;
console.log(`\n${kTemp5}°k is equals to ${fTemp5}°f`);


// K -> C
// T(°C) = T(K) - 273.15
let kTemp6 = 10;
let cTemp6 = (kTemp6) - 273.15;
console.log(`\n${kTemp6}°k is equals to ${cTemp6}°c`);