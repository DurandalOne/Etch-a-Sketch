const resetButton = document.getElementById("reset");
const colorButton = document.getElementById("colorButton");
let colorType = "black";
let gridNumber = '';
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgbColor = "rgb(" + r + "," + g + "," + b + ")";

function createGrid(num){
    if (gridNumber == '') {
        gridNumber = (16 ** 2);
    } else {
        gridnumber = (num ** 2);
    }

    for (i = 0; i < gridNumber; i++) {
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.style.cssText = "border: 1px solid black";

        document.getElementById("container").appendChild(grid);
    }

}

document.onload = createGrid();

function resetGrid() {
    gridSelect.forEach(grid => grid.style.backgroundColor = "white");
    colorType = "black";
}

function changeColor(e) {
    e.target.style.backgroundColor = colorType;
}

const gridSelect = document.querySelectorAll(".grid");

gridSelect.forEach(grid => grid.addEventListener("mouseover", changeColor));
resetButton.addEventListener("click", resetGrid);
colorButton.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = "rgb(" + r + "," + g + "," + b + ")";
    colorType = rgbColor;
    changeColor;
});


