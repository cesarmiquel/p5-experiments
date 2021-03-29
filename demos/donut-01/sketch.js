function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {

  background("#111515");

  let scaleFactor = 1;

  let R = 200;
  let r = 60;

  let n1 = 17;
  let n2 = 57;

  // https://coolors.co/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08
  let colors1 = [
    "03071e",
    "370617",
    "6a040f",
    "9d0208",
    "d00000",
    "dc2f02",
    "e85d04",
    "f48c06",
    "faa307",
    "ffba08"
  ];

  // Grayscale
  let colorsGray = [
    "f8f9fa",
    "e9ecef",
    "dee2e6",
    "ced4da",
    "adb5bd",
    "6c757d",
    "495057",
    "343a40",
    "212529"
  ];

  let c = [ "16697a", "489fb5", "82c0cc", "ede7e3", "ffa62b" ];
  let c3 = ["ffbe0b","fb5607","ff006e","8338ec","3a86ff"];
  let c4 = ["f72585","b5179e","7209b7","560bad","480ca8","3a0ca3","3f37c9","4361ee","4895ef","4cc9f0"];
  let c5 = ["f94144","f3722c","f8961e","f9844a","f9c74f","90be6d","43aa8b","4d908e","577590","277da1"];
  let c6 = ["ff595e","ffca3a","8ac926","1982c4","6a4c93"];

  let colors = c6.map(function(i) { return '#' + i; });

  //rotateX(frameCount * 0.05);
  //rotateY(frameCount * 0.02);
  //rotateZ(mouseX * 0.01);

  strokeWeight(3);
  noFill();
  scale(scaleFactor);
  i = 0;
  for(t = 0; t < 1031; t++) {

    if (t%30 == 0) {
      beginShape();
    }
    let th  = (t % n1) * 2 * PI / n1;
    let phi = (t % n2) * 2 * PI / n2;

    let x = R*cos(phi) + r*cos(phi)*cos(th);
    let y = R*sin(phi) + r*sin(phi)*cos(th);
    let z = r*sin(th);

    curveVertex(x,y,z);

    if (t%30 == 29) {
      endShape();
      stroke(colors[i % colors.length]);
      i++;
    }
  }

  // draw palette
  for(j = 0; j < colors.length; j++) {
    fill(colors[j]);
    stroke(colors[j]);
    square((j+1)*30, 300, 20);
  }

}
