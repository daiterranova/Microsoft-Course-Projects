const button = document.querySelector(".clone-btn");
const divPlant = document.getElementsByClassName("plant__holder");
const leftContainer = document.querySelector("#left");

let selected = false;
let plantSource;
button.addEventListener("click", cloningPlant());

/* changing the class of the plant when selected, and taking the html for later */
/* ver OB del 7 al 11 y reestructurar codigo */

function setPlanSource(src) {
  return (this.plantSource = src);
}

plants.forEach((plant) => {
  plant.addEventListener("click", (e) => {
    plant.classList.remove("plant-hover");
    plant.classList.add("selected");
    console.log(typeof plant.src);
    setplantSource(plant.src);
    selected = true;
  });
});
console.log(plantSource);
/* template function to create html elements */

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function removeClasses() {
  plants.forEach((plant) => {
    plant.classList.remove("selected");
    /*  plant.removeEventListener("click", function () {}); */
  });
}

function cloningPlant() {
  if (selected == false) {
    return;
  }
  let imgClone = document.createElement("img");
  imgClone.src = plantSource;
  imgClone.setAttribute("class", "plant");
  leftContainer.appendChild(imgClone);
  dragElement(imgClone);
  removeClasses();
}
