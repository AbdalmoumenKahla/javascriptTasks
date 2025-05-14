//document.getElementById("count-el").innerText = 5
let count = 0
countEl = document.getElementById("count-el")
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(count)
    let countStr = count + " - "
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}