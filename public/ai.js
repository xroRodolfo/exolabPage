const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800; // Set your canvas width
canvas.height = 600; // Set your canvas height

let drawing = false;
let startX = 0;
let startY = 0;
let currentColor = '#000000';
let currentShape = 'rectangle'; // Default shape

// Set up the drawing event listeners
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [startX, startY] = getMousePos(canvas, e);
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        const { offsetX, offsetY } = e;
        draw(currentColor, startX, startY, offsetX, offsetY);
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); // Reset the drawing path
});

// Function to get mouse position
function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return [event.clientX - rect.left, event.clientY - rect.top];
}

// Draw on the canvas
function draw(color, x1, y1, x2, y2) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 5; // Line thickness
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Change color from color picker
document.getElementById('colorPicker').addEventListener('input', (e) => {
    currentColor = e.target.value;
});

// Clear the canvas
document.getElementById('clearBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Download the canvas as an image
document.getElementById('downloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'my_drawing.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Add shape functionality
document.getElementById('shapeSelector').addEventListener('change', (e) => {
    currentShape = e.target.value;
});

// Add shape on canvas
document.getElementById('addShapeBtn').addEventListener('click', () => {
    const { offsetX, offsetY } = canvas.getBoundingClientRect();
    addShape(currentShape, offsetX, offsetY);
});

// Function to add shapes
function addShape(shape, x, y) {
    ctx.fillStyle = currentColor;
    if (shape === 'rectangle') {
        ctx.fillRect(x - 25, y - 25, 50, 50); // 50x50 rectangle
    } else if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2, false); // Radius 25 circle
        ctx.fill();
    }
}

// Load background image
document.getElementById('backgroundImage').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        img.src = event.target.result;
    }
    
    reader.readAsDataURL(file);
});
