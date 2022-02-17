// Calculation Section

document
    .getElementById("calculator-button")
    .addEventListener("click", function(e) {
        e.preventDefault();
        const income = document.getElementById("income-input");
        const incomeValue = parseInt(income.value);

        const food = document.getElementById("food-input");
        const foodValue = parseInt(food.value);

        const rent = document.getElementById("rent-input");
        const rentValue = parseInt(rent.value);

        const clothe = document.getElementById("cloths-input");
        const clotheValue = parseInt(clothe.value);

        // Calculation Section Error case handling

        if (!isNaN(foodValue) &&
            !isNaN(rentValue) &&
            !isNaN(clotheValue) &&
            !isNaN(incomeValue) &&
            foodValue >= 0 &&
            rentValue >= 0 &&
            clotheValue >= 0 &&
            balanceValue >= 0
        ) {
            const calculates = foodValue + rentValue + clotheValue;
            expensesValue.innerText = `${calculates}`;

            const balance = incomeValue - calculates;
            balanceValue.innerText = `${balance}`;
        } else {
            alert(
                "Please Write a Positive Nmber in all input field and expenses should not be higher than income"
            );
        }
    });

// Calculation Section

document.getElementById("save").addEventListener("click", function(e) {
    e.preventDefault();
    const income = document.getElementById("income-input");
    const incomeValue = parseInt(income.value);

    const food = document.getElementById("food-input");
    const foodValue = parseInt(food.value);

    const rent = document.getElementById("rent-input");
    const rentValue = parseInt(rent.value);

    const clothe = document.getElementById("cloths-input");
    const clotheValue = parseInt(clothe.value);

    const percentageInput = document.getElementById("saveInput");
    const percentageInputValue = percentageInput.value;

    //Saving Section Error case handling

    if (!isNaN(percentageInputValue) && percentageInputValue >= 0) {
        const calculates = foodValue + rentValue + clotheValue;
        const balance = incomeValue - calculates;

        const percentage = (incomeValue * percentageInputValue) / 100;
        savingAmount.innerText = `${percentage}`;

        const remainingMoney = balance - percentage;
        remainingBalance.innerText = `${remainingMoney}`;
    } else {
        alert("Please Write a Positive Nmber in all input field");
    }
});