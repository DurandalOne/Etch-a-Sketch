let gridNumber = '';

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

    // document.getElementById("container").setAttribute.style.cssText = 

}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

document.onload = createGrid();
const gridSelect = document.querySelectorAll(".grid");


gridSelect.forEach(grid => grid.addEventListener('mouseover', changeColor));

// gridSelect.addEventListener("hover", function() {
//     this.className = 'filledGrid';
// });
