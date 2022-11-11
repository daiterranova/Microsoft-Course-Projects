button.addEventListener("click", cloningPlant);
const firstPlantLeft = document.getElementById("plant1");

function cloningPlant() {
  /* una nueva planta 
    crear una img 
    ponerla dentro del div de la primera planta => check
    ponerla dentro de cada div de cada planta */
  const clonedPlant = elementFromHtml(`
    <img class='plant' src='../images/plant1.png' alt='newplant'>
    `);
  firstPlantLeft.appendChild(clonedPlant);
  dragElement(clonedPlant);
}
