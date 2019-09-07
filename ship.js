let force;
class ship{
	constructor(heading,pos,vel,size){
		this.heading = heading;
		this.pos = pos;
		this.vel = vel;
		this.size = size;
	}

	show(){
		stroke(255);
		translate(this.pos.x,this.pos.y);
		rotate(this.heading + PI/2);
		noFill();
		//console.log(player.heading);
		triangle(-this.size,this.size,this.size,this.size,0,-this.size);
	}

	update(){
		this.pos.add(this.vel);
		this.vel.mult(0.90);
	}

	thrust(dir){
		force = p5.Vector.fromAngle(this.heading);
	
		if(dir == 'T'){
			this.vel.add(force);
		}else{
			this.vel.sub(force);
		}
	}

	turn(angle){
		this.heading += angle;
	}

	move(){
		if (keyIsPressed) {
			if(keyCode === RIGHT_ARROW){
				this.turn(0.1);	
			}
			if(keyCode === LEFT_ARROW){
				this.turn(-0.1);	
			}
			if(keyCode === DOWN_ARROW){
				this.thrust('F');
			}
			if(keyCode === UP_ARROW){
				this.thrust('T');
			}
		}
	}

	outScreen(){
		if(this.pos.x<=0){
			this.pos.x = width + this.size;
		}
		if(this.pos.x>width + this.size){
			this.pos.x = this.size;
		}
		if(this.pos.y<=0){
			this.pos.y = height + this.size;
		}
		if(this.pos.y>height + this.size){
			this.pos.y = this.size;
		}
	}

	gunFire(){
		

	}
} 