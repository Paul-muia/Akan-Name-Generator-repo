document.getElementById("akan-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user inputs
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validation of inputs
    if (!birthdate || !gender) {
        alert("Please provide both your birthdate and gender.");
        return;
    }

    // Extract date components
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    // Check for valid date
    if (isNaN(date.getTime()) || day <= 0 || day > 31 || month <= 0 || month > 12) {
        alert("Please enter a valid date.");
        return;
    }

    // Calculate the day of the week
    const century = Math.floor(year / 100);
    const yearDigits = year % 100;
    const dayOfWeek = Math.floor(
        ((century / 4) - 2 * century - 1 + (5 * yearDigits / 4) + (26 * (month + 1) / 10) + day) % 7
    );

    // Map days of the week to Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Determine Akan name
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    // Display result
    document.getElementById("result").style.display = "block";
    document.getElementById("akan-name").textContent = `Your Akan name is ${akanName}!`;

    // Clear form fields
    document.getElementById("akan-form").reset();
});
