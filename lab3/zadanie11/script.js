var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext('2d');
//var gameFrame = 0;

var zoombiePicture = document.createElement("img");
zoombiePicture.src = "images/zoombie1-trans.png";
const zoombieWidth = 128;
const zoombieHeight = 236;

let score = 0;

let lifes = 3;
var lifePicture = document.createElement("img");
lifePicture.src = "images/heart2-trans.png";

let viewfinderX = 0;
let viewfinderY = 0;

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	viewfinderX = evt.clientX - rect.left;
	viewfinderY = evt.clientY - rect.top;
}

canvas.addEventListener("mousemove", updateMousePos);


function mouseDraw() {
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(viewfinderX, viewfinderY, 5, 0, Math.PI * 2, true);
	ctx.fill();

	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(viewfinderX, viewfinderY, 5, 0, Math.PI * 2, true);
	//ctx.fill();
}


/* end */

let mouseX = 0;
let mouseY = 0;
let mouseClick = false;
let zoombieArray = [];

function checkHit(){
	let hit = false;
	for (let i = 0; i < zoombieArray.length; i++) {
		if (mouseX > zoombieArray[i].x && mouseX < zoombieArray[i].x + zoombieWidth
			&& mouseY > zoombieArray[i].y && mouseY < zoombieArray[i].y + zoombieHeight) {
			hit = true;
			zoombieArray.splice(i,1);
			score += 12;
		}
	}
	if(!hit){
		score -= 6;
	}
}

canvas.addEventListener("mousedown", function (e) {
	mouseClick = true;
	mouseX = e.x;
	mouseY = e.y;
	checkHit();
});

canvas.addEventListener("mouseup", function (e) {
	mouseClick = false;
});


class Zoombie {
	constructor() {
		this.x = 1400;
		this.y = 400 - Math.floor(Math.random() * 200);
		const randomSpeed = Math.floor(Math.random() * 5)
		if (randomSpeed == 4) this.speed = -20;	//tryb turbo
		else this.speed = -(randomSpeed * 3);
	}

	update() {
		this.x += this.speed;
		// if (mouseClick) {
		// 	if (mouseX > this.x && mouseX < this.x + zoombieWidth
		// 		&& mouseY > this.y && mouseY < this.y + zoombieHeight) {
		// 		return "HIT";
		// 	}
		// }
		if (this.x < -140) {
			return "PASSED";
		}
		return "MOVE";
	}

	draw() {
		ctx.drawImage(zoombiePicture, this.x, this.y);
	}
}


function zoombiesBehavior() {
	if (lifes < 0) {
		console.log("Game over!");
		return;
	}
	if ((Math.random() * 100) > 95) {
		zoombieArray.push(new Zoombie);
	}
	for (let i = 0; i < zoombieArray.length; i++) {
		let zoombieEvent = zoombieArray[i].update();
		// if (zoombieEvent == "HIT") {
		// 	if (zoombieArray.length < 3) {
		// 		zoombieArray.push(new Zoombie);
		// 	}
		// 	zoombieArray.splice(i, 1);
		// 	score += 12;
		// }
		if (zoombieEvent == "PASSED") {
			if (zoombieArray[i]) {
				zoombieArray.splice(i, 1);
			}
			lifes--;
		}
		zoombieArray[i].draw();
	}
}

function lifesDraw() {
	for (let i = 0; i < lifes; i++) {
		console.log(i);
		ctx.drawImage(lifePicture, 100 + 45 * i, 20);
	}
}

function scoreDraw() {
	ctx.font = "50px Consolas";
	ctx.fillStyle = "white";
	if (score < 10) ctx.fillText("Score: 0000" + score, 950, 60, 300);
	else if (score < 100) ctx.fillText("Score: 000" + score, 950, 60, 300);
	else if (score < 1000) ctx.fillText("Score: 00" + score, 950, 60, 300);
	else if (score < 10000) ctx.fillText("Score: 0" + score, 950, 60, 300);
	else ctx.fillText("Score: " + score, 950, 60, 300);
}

function gameOver() {
	zoombieArray = [];
	ctx.font = "50px Consolas";
	ctx.fillStyle = "white";
	ctx.fillText("Game over!", 500, 60, 300);
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (lifes <= 0) {
		gameOver();
	}
	else {
		mouseDraw();
		zoombiesBehavior();
		lifesDraw();
	}
	scoreDraw();
	requestAnimationFrame(animate);
}
animate();