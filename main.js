let player,canvas1;
function setup(){
	canvas1 = createCanvas(windowWidth,windowHeight);
	let heading = 0;
	let pos = createVector(width/2, height/2);
	let vel = createVector(0,0);
	let size = 20;
	player = new ship(heading,pos,vel,size);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);
	player.show();
	player.move();
	player.update();
	player.outScreen();
	player.gunFire();
}