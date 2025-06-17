const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

function addItem() {
    let item = input.value
    input.value = ''
    let newLi = document.createElement("li")
    let newSpan = document.createElement("span")
    let newButton = document.createElement("button")
    newSpan.textContent = item
    newButton.textContent = "delete"
    newButton.addEventListener("click", () => {
        newLi.remove()
        newSpan.remove()
        newButton.remove()
    })
    newLi.appendChild(newSpan)
    newLi.appendChild(newButton)
    list.appendChild(newLi)
    newLi.focus()
}

button.addEventListener("click", addItem)