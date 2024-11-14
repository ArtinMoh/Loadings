function toggleAnimation() {
    var box = document.getElementById("box");
    box.classList.toggle("candle-mode");
}

function toggleAnimation() {
    var box = document.getElementById("box");
    var animationText = document.querySelector("#animation2 div");
    box.classList.toggle("candle-mode");
    
    // Hide the "LOADING" text
    if (box.classList.contains("candle-mode")) {
        animationText.style.display = "none";
    } else {
        animationText.style.display = "block";
    }
}
