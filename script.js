const container = document.querySelector("#grid-container");
const sketchOptions = document.querySelectorAll("button");
const gridResetter = document.querySelector("#grid-resetter");

function printEtcher(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            row.appendChild(cell);

            sketchOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    if (option.id === "ink") {
                        cell.addEventListener('mouseover', (e) => {
                            e.preventDefault();
                            cell.style.backgroundColor = "black";
                        });
                    }

                    if (option.id === "eraser") {
                        cell.addEventListener('mouseover', (e) => {
                            e.preventDefault();
                            cell.style.backgroundColor = "inherit";
                        });
                    }

                    if (option.id === "resetter") {
                        cell.style.backgroundColor = "inherit";
                    }
                });
            });
        }

        container.appendChild(row);
    }
}
printEtcher();

function resetCell() {
    gridResetter.addEventListener("click", (e) => {
        e.preventDefault();
        container.innerText = "";
        gridSize = prompt("Enter the number of cells you want");

        if (gridSize >= 16 && gridSize <= 96) {
            for (let i = 0; i < gridSize; i++) {
                const row = document.createElement("div");
                row.classList.add("grid-row");

                for (let j = 0; j < gridSize; j++) {
                    const cell = document.createElement("div");
                    cell.classList.add("grid-cell");
                    row.appendChild(cell);

                    sketchOptions.forEach((option) => {
                        option.addEventListener("click", (e) => {
                            if (option.id === "ink") {
                                cell.addEventListener('mouseover', (e) => {
                                    e.preventDefault();
                                    //initialise darkness level at 0%
                                    cell.dataset.darkness = 0;

                                    const r = Math.floor(Math.random() * 255);
                                    const g = Math.floor(Math.random() * 255);
                                    const b = Math.floor(Math.random() * 255);
                                    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                                });
                            }

                            if (option.id === "eraser") {
                                cell.addEventListener('mouseover', (e) => {
                                    e.preventDefault();
                                    cell.style.backgroundColor = "inherit";
                                });
                            }

                            if (option.id === "resetter") {
                                cell.style.backgroundColor = "inherit";
                            }
                        });
                    });
                }

                container.appendChild(row);
            }
        } else {
            alert("ERROR: only figures between 16 and 96 inclusive are allowed!");
            for (let i = 0; i < 16; i++) {
                const row = document.createElement("div");
                row.classList.add("grid-row");

                for (let j = 0; j < 16; j++) {
                    const cell = document.createElement("div");
                    cell.classList.add("grid-cell");
                    row.appendChild(cell);

                    sketchOptions.forEach((option) => {
                        option.addEventListener("click", (e) => {
                            if (option.id === "ink") {
                                cell.addEventListener('mouseover', (e) => {
                                    e.preventDefault();
                                    cell.style.backgroundColor = "black";
                                });
                            }

                            if (option.id === "eraser") {
                                cell.addEventListener('mouseover', (e) => {
                                    e.preventDefault();
                                    cell.style.backgroundColor = "inherit";
                                });
                            }

                            if (option.id === "resetter") {
                                cell.style.backgroundColor = "inherit";
                            }
                        });
                    });
                }

                container.appendChild(row);
            }
        }
    });
}
resetCell();