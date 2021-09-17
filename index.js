// document.getElementById("counter").innerText = 0

let countEl = document.getElementById("counter");
let count = 0
function increment(){
    count = count + 1
    countEl.innerText = count
    console.log (count)
}

function decrement(){
    count = count - 1
    countEl.innerText = count
    console.log (count)
}

function save(){
    console.log(count)
}