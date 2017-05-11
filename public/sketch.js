var socket;
// var brush;
var stage = 0;

var a;
var b;
var c;
var d;
var e;
var f;



function setup(){
	// brush = loadImage("image/brush.png");
	createCanvas(1320,600);
	background(254,223,225);

	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);

	a = color(229, 115, 115);
	b = color(149, 117, 205);
	c = color(128, 203, 196);
	d = color(158, 158, 158);
	e = color(255);
	
}

function mouseClicked(){
	if(mouseY>=415 && mouseY<=460){
		if(mouseX>=30 && mouseX<=180){
			e = a;
		}
		if(mouseX>=130 && mouseX<=280){
			e = b;
		}
		if(mouseX>=230 && mouseX<=380){
			e = c;
		}
		if(mouseX>=330 && mouseX<=380){
			e = d;
		}

	}
	

}

function newDrawing(data){
	noStroke();
	fill(color(data.c.levels[0],data.c.levels[1],data.c.levels[2]));
	// console.log(data.levels);
	rect(data.x+15,data.y+90, 10, 10);
}

function mouseDragged(){
	console.log('Sending: '+mouseX+','+mouseY);

	var data = {
		x: mouseX,
		y: mouseY,
		c: e
	}
	socket.emit('mouse',data);
	noStroke();
	fill(e);
	rect(mouseX+15, mouseY+90, 10, 10);

}


function draw(){
	noStroke();
	fill(a);
	rect(50,500,50,50);
	fill(b);
	rect(150,500,50,50);
	fill(c);
	rect(250,500,50,50);
	fill(d);
	rect(350,500,50,50);

}