var marcianos = [];
var posXNave = 610;
var posYNave = 665;
var posXRayo = posXNave;
var posYRayo = posYNave;
var vxRayo = 5;
var vyRayo = -5; 
function redibujarMarcianos(){  
    marcianos.forEach(marciano => {
        if (!marciano.isBroken)
            
            rect(marciano.x, marciano.y, 128, 10)
            
    })
}

function setup (){
    createCanvas (1280,720);
    background (0)
    var x = 320;
    var y = 5;
    for (let j =0; j<3; j++){
        for (let index =0; index <5; index++){
            rect (x,y,128,15)
            marcianos.push ({x:x,y:y,isBroken:false})
            x=x+128;
        }
        x = 320
        y = y+30;
    }
    for (let i = 0; i<3; i++){
        rect (posXRayo,posYRayo, 5, 25);  
        posYRayo = posYRayo + vyRayo;
    }

    
}
function draw (){
    background(0)
    redibujarMarcianos ();
   rect (posXNave, posYNave, 130, 50);
   keydown();
   rect (posXRayo,posYRayo, 5, 25);
}

function keydown(){
    if (keyIsDown(65) && posXNave >0 ){
        posXNave = posXNave-15;
    }
    if (keyIsDown (68) && posXNave < 1150) {
        posXNave = posXNave+15;
    }
    if (keyIsDown (32) ){
        posYRayo = posYRayo + vyRayo;
        
    }
}