

let container = document.querySelector(".container");
drawBoard(60);

function drawBoard(n){
  container.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr);`)
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      let cell = document.createElement("div");
      cell.classList.add("item");
      container.appendChild(cell);
    }
  }
  // Event listener for each div "hover" change background color to black. 
  let items = document.querySelectorAll(".item");
  items.forEach(item => item.addEventListener("mouseover", makeEtch));
}

  
// Event listener "onclick"for "#shaker" to reset grid 
let button = document.getElementById("shaker");
button.addEventListener("click", resetBoard);
  //prompt for squares per side of new sketch area higher provides more detail. 
  // (Optionally) Add a shake animation


// Disable scroll

  //TODO

function makeEtch(e){
  e.target.classList.add("etched");
}

function resetBoard(){
  do {
    n = prompt("How many squares wide do you want the drawing area?")
  }while(n==="" || isNaN(n) || n < 0 |n > 120)
  // Clear the old divs
  while(container.children.length > 0){
    container.removeChild(container.children[0]);
  }
  // Add new ones. 
  drawBoard(n);
  //update css for number of rows and columns
  //TODO
}