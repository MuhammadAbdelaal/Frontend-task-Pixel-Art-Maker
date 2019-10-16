
// Selecting DOM elements using select function created below
const colorInput = select("colorPicker");
const inputHeight = select("inputHeight");
const inputWidth = select("inputWidth");
const submit = select("submit");
const pixelCanvas = select("pixelCanvas");
let color = "#000"; //set a default value for color if user did not select new one

/* on Click submit button 
1st: do not refresh the page
2nd: call makeGrid function
3rd: call colorOnClick function
*/
submit.addEventListener("click", e => {
  e.preventDefault(); // do not refresh the page
  makeGrid();
  colorOnClick();
});


/* 
  All functions
*/

// select a DOM element by ID
function select(id) {
  return document.getElementById(id); // returns the selected DOM element
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  pixelCanvas.innerHTML = ""; // clear the canvas before creating any new cells

  // get value inputs
  let height =  inputHeight.value;
  let width =  inputWidth.value;
  
  // prepare the columns
  let cols = "<td></td>";
  for (let i = 1; i < width; i++)   {
    cols += "<td></td>"; 
  }
  
  // prepare the rows
  let rows = `<tr>${cols}</tr>`;
  for(let i = 1; i < height; i++) {
    rows += `<tr>${cols}</tr>`;
  }
  
  // fill the canvas table with rows where every row contains the number of selected columns
  pixelCanvas.innerHTML = rows;
}

// color the cells on click
function colorOnClick() {
  // update the color on user input
  colorInput.addEventListener("input", () => {
    color = colorInput.value;
  });

  // save all cells in an array
  let allCells = document.querySelectorAll("#pixelCanvas td");

  // add event listener for each cell inside allCells Array
  allCells.forEach(cell => {
    cell.addEventListener("click", e => {   // on Click any cell
      if(e.target.style.backgroundColor == "") { // if the cell has no color yet
        e.target.style.backgroundColor = color; // color it with the selected color value
      } else { // else
        e.target.style.backgroundColor = ""; // remove the current color if clicked again
      }
    });
  });
}



