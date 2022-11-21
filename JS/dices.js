// let img;

// function preload() {
//   img = loadImage('/Assets/images/de.jpg');
// }

// function setup() {
//   createCanvas(710, 400, WEBGL);
//     textureWrap(REPEAT);
//     describe('dice image');
// }



// function draw() {
//  background(250);
  
//    texture(img);

//   push();
//   rotateZ(frameCount * 0.01);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(80, 80, 80);
//   pop();


  

// }


let dice;

function preload() {
  // Load model with normalise parameter set to true
  dice = loadModel('/Assets/images/dice.obj', true);
}

function setup() {
  createCanvas(150, 150, WEBGL);
  describe('Vertically rotating 3-d dice');
}

function draw() {
  background(200);
//   directionalLight(255,255,255,1,1,255);
  scale(0.4); // Scaled to make model fit into canvas
  normalMaterial(); // For effect
// specularMaterial(255);
  model(dice);

    function commonMovement(){
        rotateX(frameCount * 0.05);
        rotateY(frameCount * 0.05);
    };

  commonMovement();


    function side1(){

    };
    function side2(){

    };
    function side3(){

    };
    function side4(){

    };
    function side5(){

    };
    function side6(){

    };
    function reset(){

    };

}