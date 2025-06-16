// this assignment was literally typing what the website said to type
// please consider removing it from the curriculum

const link = document.querySelector("a")
link.textContent = "Mozilla Developer Network"
link.href = "https://developer.mozilla.org"

const sect = document.querySelector("section")
const para = document.createElement("p")
para.textContent = "we hope you enjoyed the ride."
sect.appendChild(para)
const text = document.createTextNode(" - the premier source for web development knowledge")
const linkPara = document.querySelector("p")
linkPara.appendChild(text)
sect.appendChild(linkPara)
sect.removeChild(linkPara)
para.setAttribute("class", "highlight");
