let count=0;
let countEL = document.getElementById("count");
let increaseEL = document.getElementById("increase-btn");
let resetEL = document.getElementById("reset-btn");
let decreaseEL = document.getElementById("decrease-btn");

increaseEL.onclick = function() {
    count++;
    countEL.innerHTML = count;
}

resetEL.onclick = function() {
    count=0;
    countEL.innerHTML = count;
}

decreaseEL.onclick = function() {
    count--;
    countEL.innerHTML = count;
}