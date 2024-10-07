// Function to create the grid
function createGrid(rows, cols) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear previous content
  
    // Calculate width and height of each box
    const boxWidth = 100 / cols + '%';
    const boxHeight = 100 / rows + '%';
  
    // Create boxes and append them to the container
    for (let i = 0; i < rows * cols; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = boxWidth;
      box.style.height = boxHeight;
      box.style.border = '0.1px solid black'; // Optional: for visualization
      gridContainer.appendChild(box);
    }
  }
  
  // Example usage:
  // Adjust the values below to change the grid size
  const rows = 4;
  const cols = 4;
  createGrid(rows, cols);
  