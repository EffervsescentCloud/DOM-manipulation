const div1 = document.querySelector("div")
let newRedP = document.createElement('p')
newRedP.textContent = "Hey I'm red!"
newRedP.style.color = "red"
let newBlueH3 = document.createElement('h3')
newBlueH3.textContent = "I'm a blue h3!"
newBlueH3.style.color = "blue"
div1.appendChild(newRedP)
div1.appendChild(newBlueH3)
let newDiv = document.createElement("div")
newDiv.style.border = "5px black solid"
newDiv.style.backgroundColor = "pink"
let newH1 = document.createElement("h1")
newH1.textContent = "I'm in a div"
let newP = document.createElement("p")
newP.textContent = "ME TOO!"
newDiv.appendChild(newH1)
newDiv.appendChild(newP)
div1.appendChild(newDiv)