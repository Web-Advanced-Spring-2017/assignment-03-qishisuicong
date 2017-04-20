var socket;

function setup(){
	createCanvas(1320,600);
	background(254,223,225);

	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);
}

function newDrawing(data){
	noStroke();
	fill(158,122,122);
	ellipse(data.x,data.y, 36, 36);
}

function mouseDragged(){
	console.log('Sending: '+mouseX+','+mouseY);

	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse',data);
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}
function draw(){
	
}