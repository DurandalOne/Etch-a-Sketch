const resetButton = document.getElementById("reset");
const colorButton = document.getElementById("colorButton");
const gridSize = document.getElementById("numberGrid");
const submitButton = document.getElementById("submitButton");
const divContainer = document.getElementById("container");
let colorType = "black";


// creates a num*num grid, sets rows and columns based on num value

function createGrid(num){

    let gridNumber = (num ** 2);

    divContainer.style.setProperty("--numRows", num);
    divContainer.style.setProperty("--numCols", num);

    for (i = 0; i < gridNumber; i++) {
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.style.cssText = "border: 1px solid black";

        document.getElementById("container").appendChild(grid);
    }

}

// cycles through each grid element and sets the color to white

function resetGrid() {
    document.querySelectorAll(".grid").forEach(grid => grid.style.backgroundColor = "white");
    colorType = "black";
}

function changeColor(e) {
    e.target.style.backgroundColor = colorType;
}

//creates a random RGB value and sets it to the current color

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = "rgb(" + r + "," + g + "," + b + ")";
    colorType = rgbColor;
    changeColor;
}

resetButton.addEventListener("click", resetGrid);

colorButton.addEventListener("click", randomColor);

submitButton.addEventListener("click", function() {
    while(divContainer.lastElementChild) {
        divContainer.removeChild(divContainer.lastElementChild);
    };
    createGrid(parseInt(gridSize.value));
    resetGrid;
    const gridSelect = document.querySelectorAll(".grid");
    gridSelect.forEach((grid) => grid.addEventListener("mouseover", changeColor));
});

document.onload = createGrid(16);
const gridSelect = document.querySelectorAll(".grid");
gridSelect.forEach((grid) => grid.addEventListener("mouseover", changeColor));




