//your code here

// Get references to the elements in your HTML
const app = document.getElementById("app");
const button = document.querySelector("button");

// Add a click event listener to the button
button.addEventListener("click", swapTheme);

function swapTheme() {
    if (app.classList.contains("night")) {
        app.classList.remove("night");
        app.classList.add("day");
        button.textContent = "Switch to Night Theme";
    } else {
        app.classList.remove("day");
        app.classList.add("night");
        button.textContent = "Switch to Day Theme";
    }
}
