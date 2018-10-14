// Creating variables
var poop=new Image();
poop.src="poop.png";

class Player{
	constructor(x, y, sx, sy){
		this.x=x;
		this.y=y;
		this.sx=sx;
		this.sy=sy;
		this.velocity=0;
		this.maxVelocity=3;
	}

	update(){
    	if(isKeyPressed[key_right]){
    		this.velocity+=0.05;
    	}else{
    		if(isKeyPressed[key_left]){
    			this.velocity-=0.05;
    		}else{
    			this.velocity=0;
    		}	
  		}
  		if(this.velocity>=this.maxVelocity){
  			this.velocity=this.maxVelocity;
  		}
  		if(this.velocity==-this.maxVelocity){
  			this.velocity=-this.maxVelocity;
  		}
  		this.x+=this.velocity;
	}

	draw(){
		context.drawImage(poop, this.x, this.y, this.sx, this.sy);
	}
}

class Platform{
	constructor(x, y){
		this.x=x;
		this.y=y;
	}
}

var MyPlayer=new Player(10, 10, 30, 30);

function update() {
    MyPlayer.update();
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle="black";
    context.fillRect(0, 0, 1366, 700);
    MyPlayer.draw();

};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
