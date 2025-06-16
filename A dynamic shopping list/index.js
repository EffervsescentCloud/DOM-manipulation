const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

function addItem() {
    let item = input.value
    input.value = ''
    console.log(item + " is the item")
    let newLi = document.createElement("li")
    let newSpan = document.createElement("span")
    let newButton = document.createElement("button")
    newSpan.textContent = item
    newButton.textContent = "delete"
    newLi.appendChild(newSpan)
    newLi.appendChild(newButton)
    list.appendChild(newLi)
    
}

button.addEventListener("click", addItem)