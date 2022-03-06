let countEl = document.getElementById("count-el");
let prevEl = document.getElementById("prev-el");
let count = 0;

function increment(){
    count++;
    countEl.textContent = count;
}

function save(){
    prevEl.textContent += count + " - ";
    count = 0;
}