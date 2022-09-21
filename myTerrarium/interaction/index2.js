window.addEventListener("load", function () {
  const plantas = document.querySelectorAll(".plant");
  const terrarium = document.querySelector("#terrarium");

  plantas.forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      dragged = event.target;
      console.log("Drag Start");
      event.target.classList.add("dragging");
      event.dataTransfer.setData("id", element.id);
    });

    element.addEventListener("dragend", (event) => {
      console.log("Drag End");
      element.classList.remove("dragging");
    });

    element.addEventListener("drag", (event) => {
      console.log("Drag");
    });
  });

  terrarium.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    console.log("Drag Over");
  });

  terrarium.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_element = event.dataTransfer.getData("id");
    console.log("Elemento id: ", id_element);
    const element = document.getElementById(id_element);

    terrarium.appendChild(element);
    event.dataTransfer.clearData();
  });
});
