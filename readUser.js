const fs = require("fs");

// Read JSON file
fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    // Convert JSON string to JavaScript object
    const usersData = JSON.parse(data);

    console.log("User Information:");

    usersData.users.forEach((user) => {
        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Age:", user.age);
        console.log("Email:", user.email);
        console.log("----------------------");
    });
});