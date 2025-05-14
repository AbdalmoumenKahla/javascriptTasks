let myleads = []
let input_el = document.getElementById("text-el")
let list = document.getElementById("list-el")
let button_el = document.getElementById("input-btn")
const deleteButton = document.getElementById("delete-btn")
const tabButton = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myleads = leadsFromLocalStorage
    listLeads()
}

deleteButton.addEventListener("click", function () {
    localStorage.clear()
    myleads = []
    list.innerHTML = ""
})

tabButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url)
        input_el.value = ""
        listLeads()
        localStorage.setItem("myLeads", JSON.stringify(myleads))
    })
})

button_el.addEventListener("click", function () {
    myleads.push(input_el.value)
    input_el.value = ""
    listLeads()
    localStorage.setItem("myLeads", JSON.stringify(myleads))
})

function listLeads() {
    let listItems = ""
    for (let i = 0; i < myleads.length; i++) {
        listItems += "<li><a href='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
    }
    list.innerHTML = listItems
}