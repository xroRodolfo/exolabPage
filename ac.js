document.addEventListener('DOMContentLoaded', function() {
    const canvas = new fabric.Canvas('posterCanvas');
    document.getElementById('addText').addEventListener('click', function() {
        const text = new fabric.IText('Texto...', {
            left: 100,
            top: 100,
            fontFamily: 'Arial',
            fill: document.getElementById('colorPicker').value
        });
        canvas.add(text);
    });

    document.getElementById('addSquare').addEventListener('click', function() {
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 60,
            height: 60
        });
        canvas.add(rect);
    });

    document.getElementById('addCircle').addEventListener('click', function() {
        const circle = new fabric.Circle({
            radius: 30,
            fill: 'blue',
            left: 100,
            top: 100
        });
        canvas.add(circle);
    });
});
