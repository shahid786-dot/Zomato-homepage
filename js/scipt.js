// Animate placeholder text cycling
const placeholderList = [
    "Search for pizza, biryani, burgers...",
    "Find your favorite dish...",
    "Restaurants near you...",
    "Order food in seconds..."
];

let index = 0;
const input = document.querySelector("main input");

setInterval(() => {
    input.setAttribute("placeholder", placeholderList[index]);
    index = (index + 1) % placeholderList.length;
}, 3000);

// Simple fade-in animation on load
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").style.opacity = 0;
    setTimeout(() => {
        document.querySelector("main").style.transition = "opacity 1.5s";
        document.querySelector("main").style.opacity = 1;
    }, 100);
});
