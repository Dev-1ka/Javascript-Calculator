document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("display");

    function press(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        const text = button.innerText;

        if (text === "+" || text === "-" || text === "*" || text === "/") {
            button.addEventListener("click", () => press(text));
        }
        else if (text === ".") {
            button.addEventListener("click", () => press("."));
        }
        else if (text === "=") {
            button.addEventListener("click", calculate);
        }
        else if (text === "AC") {
            button.addEventListener("click", clearDisplay);
        }
    });

    window.press = press;
    window.clearDisplay = clearDisplay;
});