function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  // ... Código del degradado

  // ... Código para dibujar el círculo al hacer clic
}

function mouseClicked() {
  // Solo se ejecutará cuando se haga clic izquierdo

  // Generar un tamaño aleatorio para el círculo (entre 20 y 100 píxeles)
  let circleSize = random(20, 100);

  // Obtener la posición del clic
  let circleX = mouseX;
  let circleY = mouseY;

  // Generar un color aleatorio para el círculo
  let circleColor = color(random(255), random(255), random(255));

  // Dibujar el círculo en la posición del clic
  fill(circleColor);
  noStroke();
  ellipse(circleX, circleY, circleSize);
}
