let lolamadeus__snoring ;
let skymary__cat ;
let chalicewell ;

function preload() {
    
  skymary__cat=loadSound("assets/412016__skymary__cat-purring-and-meow.wav");
  lolamadeus__snoring= loadSound("assets/196255__lolamadeus__snoring-cat.wav");
  chalicewell=("assets/529605__chalicewell__katzenmix.wav");
}
function setup() {
    createCanvas(400, 300);
    rectMode(CENTER);
    
}

function draw() {
    
}
  
function mouseClicked() {
    if (!lolamadeus__snoring.isPlaying()) {
        lolamadeus__snoring.loop();
    } else {
        lolamadeus__snoring.pause();
    }
    
}