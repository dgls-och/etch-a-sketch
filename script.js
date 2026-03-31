const container = document.querySelector("#grid-container");
const sketchOptions = document.querySelectorAll("button");
const gridResetter = document.querySelector("#grid-resetter");
let activeMode = "ink";

sketchOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
        if (option.id === "resetter") {
            resetAllCells();
        } else {
            activeMode = option.id;
            console.info("Current mode: " + activeMode)
        }
    });
});

function dispatchSketchOptions(cell) {
    cell.dataset.opacity = 0;
    cell.addEventListener('mouseover', (e) => {
        e.preventDefault();
        if (activeMode === "ink") {
            let currentOp = parseFloat(cell.dataset.opacity);
            if (currentOp < 1) {
                currentOp += 0.1;
                cell.dataset.opacity = currentOp;
                cell.style.opacity = currentOp;
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        } else if (activeMode === "eraser") {
            cell.style.backgroundColor = "inherit";
            cell.style.opacity = 0;
            cell.dataset.opacity = 0;
        }
    });
}

function printEtcher(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            row.appendChild(cell);
            dispatchSketchOptions(cell);
        }
        container.appendChild(row);
    }
}
printEtcher();

function resetCellNumber() {
    gridResetter.addEventListener("click", (e) => {
        e.preventDefault();
        container.innerText = "";
        gridSize = prompt("Enter the number of cells you want");
        if (gridSize >= 16 && gridSize <= 96) {
            printEtcher(gridSize);
        } else {
            alert("ERROR: only figures between 16 and 96 inclusive are allowed!");
            printEtcher();
        }
    });
}
resetCellNumber();
