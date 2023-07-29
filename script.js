const container = document.querySelector(".container");
let currentGridSize = 0;
let squares;

const gridSizeButton = document.querySelector("#gridSizeButton")
gridSizeButton.addEventListener("click", () => changeGridSize())

function createRows(numOfRows) {
    for (let i = 1; i <= numOfRows; i++) {
        let row = document.createElement("div");
        row.id = `row${i}`;
        row.className = "row";
        container.appendChild(row);
    }
}

function createSquares(gridSize) {
    let length = 800/gridSize;
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        let square = document.createElement("div");
        square.className = "square";
        square.style.height = length + "px";
        square.style.width = length + "px";
        row.appendChild(square);
    })
}

function createGrid(gridSize) {
    currentGridSize = gridSize;
    createRows(gridSize);
    for (let i=1; i <= gridSize; i++) {
        createSquares(gridSize);
    }
    squares = document.querySelectorAll(".square");
}

function changeGridSize() {
    let gridSize = prompt("Type in a number from 4 to 100");
    if (gridSize < 4 || gridSize > 100) {
        alert("Error: Grid size invalid")
        return;
    } else {
        container.innerHTML = "";
        createGrid(gridSize)
    }
}

function generateRandomColor() {
    let RGB1 = Math.floor(Math.random() * 256);
    let RGB2 = Math.floor(Math.random() * 256);
    let RGB3 = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + RGB1 + ", " + RGB2 + ", " + RGB3 + ")";
    return randomColor;
}

function randomDraw(e) {
    e.target.style.backgroundColor = generateRandomColor();
}

document.body.addEventListener("mousedown", () => {
    for (let i=1; i <= currentGridSize; i++) {
        squares.forEach((square) => {
            square.addEventListener("mouseover", randomDraw);
        })
    }
    console.log("mousedown");
})

document.body.addEventListener("mouseup", () => {
    for (let i=1; i <= currentGridSize; i++) {
        squares.forEach((square) => {
            square.removeEventListener("mouseover", randomDraw)
        })
    }
    console.log("mouseup");
})

createGrid(16);
