var zoombiePicture = document.createElement("img");

var canvas, ctx;
var gameFrame = 0;

var mouseX = 0;
var mouseY = 0;

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}

window.onload = function() {
	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext('2d');
	//var framesPerSecond = 30;
	//setInterval(animate, 1000/framesPerSecond);
	canvas.addEventListener("mousemove", updateMousePos);
	zoombiePicture.src = "zoombie1.png";
	animate();
}

const zoombieArray = [];
class Zoombie {
	constructor(){
		this.x = 1400;
		this.y = 250 + Math.floor(Math.random() * 200);
		this.speed = - Math.floor(Math.random() * 10);
	}

	update(){
		this.x += this.speed;
	}

	draw(){
		ctx.drawImage(zoombiePicture, this.x, this.y);
	}
}

function animate() {
	gameFrame++;
	if(gameFrame % 20 == 0) {
		zoombieArray.push(new Zoombie);
	}
	
	ctx.save();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.restore();

	zoombieArray.forEach(zoombie => {
		zoombie.update();
		zoombie.draw();
	});
		
	requestAnimationFrame(animate);
}
animate();