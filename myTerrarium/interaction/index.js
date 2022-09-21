/* getting elements from the DOM */

const plants = document.querySelectorAll(".plant");
const terrarium = document.getElementById("terrarium");
const container = document.querySelector(".left");
const button = document.querySelector(".clone-btn");

/* template function to create html elements */
function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}
/* assigned to the plants the function that allows them to dragg their position  */
for (let i = 0; i < plants.length; i++) {
  dragElement(plants[i]);
}

function dragElement(terrariumElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;
  terrariumElement.ondblclick = growPlant;

  function growPlant() {
    terrariumElement.classList.add("resize");
    terrariumElement.classList.remove("plant");
  }

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }
  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
