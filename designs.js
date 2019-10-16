// Selecting DOM elements
const colorInput = select("colorPicker");
const inputHeight = select("inputHeight");
const inputWidth = select("inputWidth");
const submit = select("submit");
const pixelCanvas = select("pixelCanvas");


// on Click submit button call makeGrid function
submit.addEventListener("click", function(e){
  e.preventDefault();    // do not referesh the page
  makeGrid();
});

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
  for(let i = 0; i < height; i++) {
    rows += rows;
  }
  
  // fill the canvas with rows where every row contains the number of selected columns
  pixelCanvas.innerHTML = rows;
}

// select a DOM element by ID
function select(id) {
  return document.getElementById(id);
}


