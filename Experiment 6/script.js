let heading = document.getElementById("heading");
let inputField = document.getElementById("inputField");
let para = document.getElementById("para");

document.getElementById("changeTextButton").onclick = function() {
    heading.innerHTML = inputField.value;
};
inputField.onchange = function() {
    console.log("Input field value changed to: " + inputField.value);
};
document.getElementById("bgcolorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
document.getElementById("fontSizeBtn").addEventListener("click", function() {
    heading.style.fontSize = "40px";
}); 