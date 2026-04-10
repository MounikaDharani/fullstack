const fs = require('fs');

// Create a JavaScript object
const user = {
    name: "Mounika",
    age: 22,
    course: "MCA",
    city: "Chennai"
};

// Convert object to JSON string
const jsonData = JSON.stringify(user, null, 2);

// Write JSON to file
fs.writeFileSync("user.json", jsonData);

console.log("Data written to JSON file");

// Read JSON file
const data = fs.readFileSync("user.json");

// Convert JSON to object
const parsedData = JSON.parse(data);

// Display data
console.log("User Data from JSON:");
console.log(parsedData);