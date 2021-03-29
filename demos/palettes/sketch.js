function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {

  background("#111515");

  let scaleFactor = 1;

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
  let c7 = ["0d1b2a","1b263b","415a77","778da9","e0e1dd"];

  strokeWeight(3);
  scale(scaleFactor);

  palets = [
    colors1,
    colorsGray,
    c,
    c3,
    c4,
    c5,
    c6,
    c7
  ];

  // draw palette
  for(k = 0; k < palets.length; k++) {
    for(j = 0; j < palets[k].length; j++) {
      let cp = palets[k].map(function(i) { return '#' + i; });
      fill(cp[j]);
      stroke(cp[j]);
      square((j+1)*30, 30 + 2*k*20, 20);
    }
  }
}
