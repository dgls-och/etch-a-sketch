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