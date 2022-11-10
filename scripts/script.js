const container = document.querySelector('#container');
container.setAttribute("style","border: 2px solid black;");
container.style.width = "640px";

for(let i = 0; i<32; i++){
    const row = document.createElement('div');
    row.style.display = "flex";
    for(let j = 0; j<32; j++){
        const rowElement = document.createElement('div');
        rowElement.style.backgroundColor = 'white';
        rowElement.style.width = "20px";
        rowElement.style.height = "20px";
        rowElement.style.transition = ".1s background-color ease";
        rowElement.onmouseover = function () {
            this.style.backgroundColor = "black";
        };

        row.appendChild(rowElement);
    }
    container.appendChild(row);
}