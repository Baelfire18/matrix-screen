// Get the canvas node and the drawing context
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set the width and height of the canvas
const width = canvas.width = document.body.offsetWidth;
const height = canvas.height = document.body.offsetHeight;

// Draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#000f';
ctx.fillRect(0, 0, width, height);

const columns = Math.floor(width / 20) + 1;
const yPos = Array(columns).fill(0);

function matrix() {
  // Draw a semitransparent black rectangle on top of previous drawing
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, width, height);

  // Set color to green and font to 15pt monospace in the drawing context
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';

  // For each column put a random character at the end
  yPos.forEach((y, ind) => {
    // Generate a random character
    const text = String.fromCharCode(Math.random() * 128);

    // x coordinate of the column, y coordinate is already given
    const x = ind * 20;
    // render the character at (x, y)
    ctx.fillText(text, x, y);

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 10000) yPos[ind] = 0;
    // otherwise just move the y coordinate for the column 20px down,
    else yPos[ind] = y + 20;
  });
}

// Render the animation at 40 FPS.
setInterval(matrix, 40);
