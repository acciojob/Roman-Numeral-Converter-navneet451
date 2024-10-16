function convertToRoman(num) {
    // Roman numeral mappings in descending order
    const romanMap = [
      ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
      ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
      ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];

    let roman = '';  // Initialize an empty string to store the result

    // Iterate over the romanMap
    for (let i = 0; i < romanMap.length; i++) {
        let [symbol, value] = romanMap[i];  // Destructure symbol and value
        while (num >= value) {
            roman += symbol;  // Add the Roman symbol to the result
            num -= value;  // Reduce the number by the value of the Roman numeral
        }
    }

    return roman;  // Return the final Roman numeral string
}

// Example usage
console.log(convertToRoman(1994)); // Outputs "MCMXCIV"
console.log(convertToRoman(58));   // Outputs "LVIII"

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
