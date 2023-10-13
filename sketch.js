function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(255), color(173, 216, 230), inter);
    stroke(c);
    line(0, i, width, i);
  }
}

function mousePressed() {
  // Obtener una posición aleatoria dentro del lienzo
  let x = random(width);
  let y = random(height);

  // Obtener un tamaño aleatorio para el círculo
  let circleSize = random(20, 100);

  // Obtener un color aleatorio para el círculo
  let circleColor = color(random(255), random(255), random(255));

  // Dibujar un círculo en la posición y tamaño aleatorios
  noStroke();
  fill(circleColor);
  ellipse(x, y, circleSize, circleSize);
}
