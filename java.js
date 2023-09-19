//For a 16 x 16 grid
let size;
size = 16;
const grid = document.querySelector(".grid");
let gridBox;

/*function changeBackground() {
    gridBox.classList.add("gridBoxHover");
}

function changeBack() {
    gridBox.classList.remove("gridBoxHover");
}*/

function changeBackground(e) {
    e.classList.add("gridBoxHover")
}

function changeBack(e) {
    e.classList.remove("gridBoxHover")
}

function makeRows(gridSize) {
    for (let i = 0; i < gridSize; i++) {
      let gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      for (let a = 0; a < gridSize; a++) {
        gridBox = document.createElement("div");
        const gridContent = document.createTextNode(" ");
        gridBox.classList.add("gridBox");
        //gridBox.addEventListener("mouseover", changeBackground, false);
        //gridBox.addEventListener("mouseout", changeBack, false);
        gridBox.addEventListener("mouseover", () => {
            changeBackground(event.target);
        });
        gridBox.addEventListener("mouseout", () => {
            changeBack(event.target);
        });
        gridBox.appendChild(gridContent);
        gridRow.appendChild(gridBox);
      }
      grid.appendChild(gridRow);
    }
  return;
}

makeRows(size);
