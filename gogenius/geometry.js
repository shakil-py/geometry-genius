// geometry.js - Area calculation logic for all shapes

function showArea(shape, area) {
    const areaSection = document.getElementById('area-section');
    const entry = document.createElement('div');
    entry.className = 'mb-2';
    entry.innerHTML = `<b>${shape}:</b> ${area} cm²`;
    areaSection.appendChild(entry);
}

function calcTriangle() {
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);
    if (isNaN(base) || isNaN(height)) return alert('Enter valid numbers for triangle!');
    const area = (0.5 * base * height).toFixed(2);
    showArea('Triangle', area);
}

function calcRectangle() {
    const width = parseFloat(document.getElementById('rectangle-width').value);
    const length = parseFloat(document.getElementById('rectangle-length').value);
    if (isNaN(width) || isNaN(length)) return alert('Enter valid numbers for rectangle!');
    const area = (width * length).toFixed(2);
    showArea('Rectangle', area);
}

function calcParallelogram() {
    const base = parseFloat(document.getElementById('parallelogram-base').value);
    const height = parseFloat(document.getElementById('parallelogram-height').value);
    if (isNaN(base) || isNaN(height)) return alert('Enter valid numbers for parallelogram!');
    const area = (base * height).toFixed(2);
    showArea('Parallelogram', area);
}

function calcRhombus() {
    const d1 = parseFloat(document.getElementById('rhombus-d1').value);
    const d2 = parseFloat(document.getElementById('rhombus-d2').value);
    if (isNaN(d1) || isNaN(d2)) return alert('Enter valid numbers for rhombus!');
    const area = (0.5 * d1 * d2).toFixed(2);
    showArea('Rhombus', area);
}

function calcPentagon() {
    const side = parseFloat(document.getElementById('pentagon-side').value);
    if (isNaN(side)) return alert('Enter valid number for pentagon!');
    const area = (0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * side * side).toFixed(2);
    showArea('Pentagon', area);
}

function calcEllipse() {
    const a = parseFloat(document.getElementById('ellipse-a').value);
    const b = parseFloat(document.getElementById('ellipse-b').value);
    if (isNaN(a) || isNaN(b)) return alert('Enter valid numbers for ellipse!');
    const area = (Math.PI * a * b).toFixed(2);
    showArea('Ellipse', area);
}
