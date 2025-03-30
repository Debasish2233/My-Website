let clickCount = 3;
const button = document.querySelector("button");
const clickCountElement = document.getElementById("click-count");


button.addEventListener("click", () => {
    clickCount++; 
    clickCountElement.textContent = clickCount; 
});
