var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext('2d');
var gameFrame = 0;

var zoombiePicture = document.createElement("img");
zoombiePicture.src = "zoombie1.png";
const zoombieWidth = 128;
const zoombieHeight = 236;

let score = 0;

let lifes = 3;
var lifePicture = document.createElement("img");
lifePicture.src = "transparent-heart.png";

let mouseX = 0;
let mouseY = 0;
let mouseClick = false;

canvas.addEventListener("mousedown", function(e) {
	mouseClick = true;
	mouseX = e.x;
	mouseY = e.y;
	console.log(e.x, e.y);
});

canvas.addEventListener("mouseup", function(e){
	mouseClick = false;
});

const zoombieArray = [];
class Zoombie {
	constructor(){
		this.x = 1400;
		this.y = 400 - Math.floor(Math.random() * 200);
		this.speed = - 5 - Math.floor(Math.random() * 10);
	}

	update(){
		this.x += this.speed;
		if(mouseClick){
			if(mouseX > this.x && mouseX < this.x + zoombieWidth
			&& mouseY > this.y && mouseY < this.y + zoombieHeight){
				return "HIT";
			}
			return "MISSED";		
		}
		if(this.x < -140){
			return "PASSED";
		}
		return "MOVE";
	}

	draw(){
		ctx.drawImage(zoombiePicture, this.x, this.y);
	}
}

function zoombiesBehavior(){
	if(gameFrame % 50 == 0) {
		zoombieArray.push(new Zoombie);
	}
	for(let i=0; i < zoombieArray.length; i++){
		let zoombieEvent = zoombieArray[i].update();
		if(zoombieEvent == "HIT"){
			zoombieArray.splice(i, 1);
			score += 15;
		}
		else if(zoombieEvent == "MISSED"){
			//score -= 7;
		}
		else if(zoombieEvent == "PASSED"){
			zoombieArray.splice(i, 1);
			lifes--;
		}
		else zoombieArray[i].draw();
	}
}

function scoreDraw(){
	ctx.strokeText("Score: " + score, 1050, 50, 140);
}

function lifesDraw(){
	for (let i=0; i < lifes; i++){
		ctx.drawImage(lifePicture, 600 + 45 * i, 20);
	}
}

function gameOver(){
	for(let i=0; i < zoombieArray.length; i++){
		score = -99999;
		zoombieArray[i].splice(i, 1);
	}
}

function animate() {
	gameFrame++;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	zoombiesBehavior();
	scoreDraw();
	lifesDraw();
	if(lifes < 0) gameOver();
	requestAnimationFrame(animate);
}
animate();