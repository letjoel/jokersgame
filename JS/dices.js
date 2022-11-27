document.addEventListener("DOMContentLoaded", ()=>{


//Global variables
let rollspeed = 12;
let angle = 0;
let randomNumber = -1;


//Listener
  const button = document.querySelector('.boton-roll-dice__button');
button.addEventListener('click',roll);

  const buttonDrawOk = document.querySelector('.boton-draw-ok__button');
buttonDrawOk.addEventListener('click',resumeDraw);

  const buttonWinOk = document.querySelector('.boton-win-ok__button');
buttonWinOk.addEventListener('click',resumeWin);



//============== Canvas 1_movement
let one_movement = function( sketch ) {

  let dice1obj;
  
  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container1__movement');
    
  };

  sketch.draw = function() {

              
    let dt = sketch.deltaTime * 0.001;
    angle += dt * rollspeed;
    sketch.rotateY(angle)
          
    //Essential
    sketch.background(0,50);

    sketch.scale(0.4);
    sketch.normalMaterial();
    sketch.model(dice1obj);


     };


};

let one_moving = new p5(one_movement, 'p5sketch');


//============== Canvas 1_1
let one = function( sketch ) {

  let dice1obj;
  let firstTime = true;
  

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container1_1');
    
  };

  sketch.draw = function() {
    sketch.orbitControl(2,2,0);
    // sketch.noLoop();

    //1
    sketch.rotateX(2);
    sketch.rotateY(1);
    sketch.rotateZ(-5);

    //Essential
    sketch.background(0,50);

    sketch.scale(0.4);
    sketch.normalMaterial();
    sketch.model(dice1obj);

     };


};

let one_one = new p5(one, 'p5sketch');


//============== Canvas 1_2
let two = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container1_2');
    
  };

  sketch.draw = function() {
    sketch.orbitControl(2,2,0);
        // sketch.noLoop();

        sketch.rotateX(3.3);
        sketch.rotateY(3);
        sketch.rotateZ(-4.7);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let one_two = new p5(two, 'p5sketch');



//============== Canvas 1_3
let three = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container1_3');
    
  };

  sketch.draw = function() {
    sketch.orbitControl(2,2,0);
        // sketch.noLoop();

        //3
        sketch.rotateX(4);
        sketch.rotateY(4.5);
        sketch.rotateZ(-3.9);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let one_three = new p5(three, 'p5sketch');



//============== Canvas 1_4
let four = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container1_4');
    
  };

  sketch.draw = function() {
    sketch.orbitControl(2,2,0);
        // sketch.noLoop();

        //4
        sketch.rotateX(3.5);
        sketch.rotateY(1);
        sketch.rotateZ(-5);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let one_four = new p5(four, 'p5sketch');


//============== Canvas 1_5
let five = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container1_5');
    
  };

  sketch.draw = function() {
    sketch.orbitControl(2,2,0);    
    // sketch.noLoop();

          //5
          sketch.rotateX(3.5);
          sketch.rotateY(6);
          sketch.rotateZ(-5);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let one_five = new p5(five, 'p5sketch');


//============== Canvas 1_6
let six = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container1_6');
    
  };

  sketch.draw = function() {
    sketch.orbitControl(2,2,0);
    // sketch.noLoop();

        //6
        sketch.rotateX(1.7);
        sketch.rotateY(1);
        sketch.rotateZ(-1.6);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);

        
     };

};

let one_six = new p5(six, 'p5sketch');


//=================== Second sketch =================

//============== Canvas 2_movement
let two_movement = function( sketch ) {

  let dice1obj;
  
  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container2__movement');
    
  };

  sketch.draw = function() {

              
    let dt = sketch.deltaTime * 0.001;
    angle += dt * rollspeed;
    sketch.rotateY(angle)
          
    //Essential
    sketch.background(0,50);

    sketch.scale(0.4);
    sketch.normalMaterial();
    sketch.model(dice1obj);


     };


};

let two_moving = new p5(two_movement, 'p5sketch');


//============== Canvas 2_1
let one2 = function( sketch ) {

  let dice1obj;
  

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container2_1');
    
  };

  sketch.draw = function() {
    
    sketch.noLoop();

    //1
    sketch.rotateX(2);
    sketch.rotateY(1);
    sketch.rotateZ(-5);

    //Essential
    sketch.background(0,50);

    sketch.scale(0.4);
    sketch.normalMaterial();
    sketch.model(dice1obj);

     };


};

let two_one = new p5(one2, 'p5sketch');


//============== Canvas 2_2
let two2 = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container2_2');
    
  };

  sketch.draw = function() {
    
        sketch.noLoop();

        sketch.rotateX(3.3);
        sketch.rotateY(3);
        sketch.rotateZ(-4.7);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let two_two = new p5(two2, 'p5sketch');



//============== Canvas 2_3
let three2 = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container2_3');
    
  };

  sketch.draw = function() {
    
        sketch.noLoop();

        //3
        sketch.rotateX(4);
        sketch.rotateY(4.5);
        sketch.rotateZ(-3.9);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let two_three = new p5(three2, 'p5sketch');



//============== Canvas 2_4
let four2 = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container2_4');
    
  };

  sketch.draw = function() {
    
        sketch.noLoop();

        //4
        sketch.rotateX(3.5);
        sketch.rotateY(1);
        sketch.rotateZ(-5);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let two_four = new p5(four2, 'p5sketch');


//============== Canvas 2_5
let five2 = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container2_5');
    
  };

  sketch.draw = function() {
    
        sketch.noLoop();

          //5
          sketch.rotateX(3.5);
          sketch.rotateY(6);
          sketch.rotateZ(-5);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let two_five = new p5(five2, 'p5sketch');


//============== Canvas 2_6
let six2 = function( sketch ) {

  let dice1obj;

  sketch.preload = function() {
    dice1obj = sketch.loadModel('/Assets/3d/dice.obj', true);

  }

  sketch.setup = function() {
    sketch.setAttributes('antialias', true);
    let canvas = sketch.createCanvas(200, 200, sketch.WEBGL);
	  canvas.parent('dice__container2_6');
    
  };

  sketch.draw = function() {
    
        sketch.noLoop();

        //6
        sketch.rotateX(1.7);
        sketch.rotateY(1);
        sketch.rotateZ(-1.6);

        sketch.background(0,50);
        sketch.scale(0.4);
        sketch.normalMaterial();
        sketch.model(dice1obj);
     };


};

let two_six = new p5(six2, 'p5sketch');



//Containers
let container1_1 = document.querySelector('#dice__container1_1');
let container1_2 = document.querySelector('#dice__container1_2');
let container1_3 = document.querySelector('#dice__container1_3');
let container1_4 = document.querySelector('#dice__container1_4');
let container1_5 = document.querySelector('#dice__container1_5');
let container1_6 = document.querySelector('#dice__container1_6');
let container1_movement = document.querySelector('#dice__container1__movement');

let container2_1 = document.querySelector('#dice__container2_1');
let container2_2 = document.querySelector('#dice__container2_2');
let container2_3 = document.querySelector('#dice__container2_3');
let container2_4 = document.querySelector('#dice__container2_4');
let container2_5 = document.querySelector('#dice__container2_5');
let container2_6 = document.querySelector('#dice__container2_6');
let container2_movement = document.querySelector('#dice__container2__movement');

let dices__draw = document.querySelector('#dices__draw');
let dices__win = document.querySelector('#dices__youWin');


//Button
let rollButton = document.querySelector('.boton-roll-dice__button');





//============== logic =============================

let playerResult = -1;
let enemyResult = -1;




function renderMoving1(){
    container1_1.style.display = 'none';
    container1_2.style.display = 'none';
    container1_3.style.display = 'none';
    container1_4.style.display = 'none';
    container1_5.style.display = 'none';
    container1_6.style.display = 'none';
    container1_movement.style.display = 'flex';
};
function render1_1(){
    container1_1.style.display = 'flex';
    container1_2.style.display = 'none';
    container1_3.style.display = 'none';
    container1_4.style.display = 'none';
    container1_5.style.display = 'none';
    container1_6.style.display = 'none';
    container1_movement.style.display = 'none';
};
function render1_2(){
    container1_1.style.display = 'none';
    container1_2.style.display = 'flex';
    container1_3.style.display = 'none';
    container1_4.style.display = 'none';
    container1_5.style.display = 'none';
    container1_6.style.display = 'none';
    container1_movement.style.display = 'none';
};
function render1_3(){
    container1_1.style.display = 'none';
    container1_2.style.display = 'none';
    container1_3.style.display = 'flex';
    container1_4.style.display = 'none';
    container1_5.style.display = 'none';
    container1_6.style.display = 'none';
    container1_movement.style.display = 'none';
};
function render1_4(){
    container1_1.style.display = 'none';
    container1_2.style.display = 'none';
    container1_3.style.display = 'none';
    container1_4.style.display = 'flex';
    container1_5.style.display = 'none';
    container1_6.style.display = 'none';
    container1_movement.style.display = 'none';
};
function render1_5(){
    container1_1.style.display = 'none';
    container1_2.style.display = 'none';
    container1_3.style.display = 'none';
    container1_4.style.display = 'none';
    container1_5.style.display = 'flex';
    container1_6.style.display = 'none';
    container1_movement.style.display = 'none';
};
function render1_6(){
    container1_1.style.display = 'none';
    container1_2.style.display = 'none';
    container1_3.style.display = 'none';
    container1_4.style.display = 'none';
    container1_5.style.display = 'none';
    container1_6.style.display = 'flex';
    container1_movement.style.display = 'none';
};

function renderMoving2(){
    container2_1.style.display = 'none';
    container2_2.style.display = 'none';
    container2_3.style.display = 'none';
    container2_4.style.display = 'none';
    container2_5.style.display = 'none';
    container2_6.style.display = 'none';
    container2_movement.style.display = 'flex';
};
function render2_1(){
    container2_1.style.display = 'flex';
    container2_2.style.display = 'none';
    container2_3.style.display = 'none';
    container2_4.style.display = 'none';
    container2_5.style.display = 'none';
    container2_6.style.display = 'none';
    container2_movement.style.display = 'none';
};
function render2_2(){
    container2_1.style.display = 'none';
    container2_2.style.display = 'flex';
    container2_3.style.display = 'none';
    container2_4.style.display = 'none';
    container2_5.style.display = 'none';
    container2_6.style.display = 'none';
    container2_movement.style.display = 'none';
};
function render2_3(){
    container2_1.style.display = 'none';
    container2_2.style.display = 'none';
    container2_3.style.display = 'flex';
    container2_4.style.display = 'none';
    container2_5.style.display = 'none';
    container2_6.style.display = 'none';
    container2_movement.style.display = 'none';
};
function render2_4(){
    container2_1.style.display = 'none';
    container2_2.style.display = 'none';
    container2_3.style.display = 'none';
    container2_4.style.display = 'flex';
    container2_5.style.display = 'none';
    container2_6.style.display = 'none';
    container2_movement.style.display = 'none';
};
function render2_5(){
    container2_1.style.display = 'none';
    container2_2.style.display = 'none';
    container2_3.style.display = 'none';
    container2_4.style.display = 'none';
    container2_5.style.display = 'flex';
    container2_6.style.display = 'none';
    container2_movement.style.display = 'none';
};
function render2_6(){
    container2_1.style.display = 'none';
    container2_2.style.display = 'none';
    container2_3.style.display = 'none';
    container2_4.style.display = 'none';
    container2_5.style.display = 'none';
    container2_6.style.display = 'flex';
    container2_movement.style.display = 'none';
};

//Initial positioning
render2_6();
render1_6();

dices__draw.style.display = 'none';
dices__win.style.display = 'none';

function roll(){
    rollButton.style.visibility = 'hidden';
    playerResult = generateRandomNumber();
    enemyResult = generateRandomNumber();
    console.log("jugador: " + (playerResult+1));
    console.log("enemigo: " + (enemyResult+1));

    
    switch(enemyResult){
        case 0: 
            renderMoving2();
            setTimeout(render2_1,5000);
            break;
        case 1: 
            renderMoving2();
            setTimeout(render2_2,5000);
            break;
        case 2: 
            renderMoving2();
            setTimeout(render2_3,5000);
            break;
        case 3: 
            renderMoving2();
            setTimeout(render2_4,5000);
            break;
        case 4: 
            renderMoving2();
            setTimeout(render2_5,5000);
            break;
        case 5: 
            renderMoving2();
            setTimeout(render2_6,5000);
            break; 
        default:
            //error
            console.log("error roll player");
    }

    setTimeout(()=>{

        switch(playerResult){
        case 0: 
            renderMoving1();
            setTimeout(render1_1,5000);
            break;
        case 1: 
            renderMoving1();
            setTimeout(render1_2,5000);
            break;
        case 2: 
            renderMoving1();
            setTimeout(render1_3,5000);
            break;
        case 3: 
            renderMoving1();
            setTimeout(render1_4,5000);
            break;
        case 4: 
            renderMoving1();
            setTimeout(render1_5,5000);
            break;
        case 5: 
            renderMoving1();
            setTimeout(render1_6,5000);
            break; 
        default:
            //error
            console.log("error roll player");
    }
    },7000);
    



    if(playerResult > enemyResult){
        //win method, save it in localStorage
        setTimeout(()=>{
            dices__win.style.display = 'flex';
            rollButton.style.visibility = 'visible';
            //do visible CHOOSE PLAYER DIV
        },13500);
        console.log("Player won 1vs1");
    }else if(playerResult < enemyResult){
        //loose method
        console.log("Player loose 1vs1");
    }else if(playerResult == enemyResult){
        //draw,repeat method
        setTimeout(()=>{
            dices__draw.style.display = 'flex';
            rollButton.style.visibility = 'visible';
        },13500);
        
        console.log("Player draw 1vs1");
    }

    
};


function resumeDraw(){
      dices__draw.style.display = 'none';
};
function resumeWin(){
      dices__win.style.display = 'none';
};

 function generateRandomNumber(){
        return Math.floor(Math.random() * 6);
    };







    
});