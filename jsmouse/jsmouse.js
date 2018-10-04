let drawing = document.getElementById("myCanvas").getContext("2d");
let canvas = drawing.canvas;
document.addEventListener(onmousemove, getMousePos);
let mouseX, mouseY, mouseHyp, mouseTheta = 0;

let gradient = drawing.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#DAE1ED");
gradient.addColorStop(1, "#535456");

drawX();

function alternateCanvas(){
	let changeCanvasButton = document.getElementById("alternateButton");
	if(changeCanvasButton.innerText == "Accept"){
		changeCanvasButton.innerText = "Deny";
		drawCheck();
	}
	else{
		changeCanvasButton.innerText = "Accept";
		drawX();
	}
}

function resetCanvas(){
	drawing.clearRect(0, 0, canvas.width, canvas.height);
	drawing.fillStyle = gradient;
	drawing.fillRect(0, 0, canvas.width, canvas.height);
}

function drawX(){
	resetCanvas();
	drawing.fillStyle = "#FF0000";
	drawing.rotate(45 * (Math.PI / 180));
	drawing.fillRect(125, -20, 150, 40);
	drawing.fillRect(180, -75, 40, 150);
	drawing.rotate(-45 * (Math.PI / 180));
}

function drawCheck(){
	resetCanvas();
	drawing.fillStyle = "#00FF00";
	drawing.rotate(30 * (Math.PI / 180));
	drawing.fillRect(200, -40, 40, 150);
	drawing.fillRect(155, 70.4, 50, 40);
	drawing.rotate(-30 * (Math.PI / 180));
}

function getCurrentShape(){
	if(document.getElementById("alternateButton").innerText == "Accept"){
		return "cross";
	}
	else{
		return "check";
	}
}

function getMousePos(evnt) {
    let rect = document.getElementById("myCanvas").getBoundingClientRect();
	mouseX = evnt.clientX - rect.left;
	mouseY = evnt.clientY - rect.top;
	mouseTheta = Math.atan(mouseY / mouseX) * (180 / Math.PI);
	mouseHyp = Math.sqrt(Math.pow(mouseX, 2) + Math.pow(mouseY, 2));

	let currentShape = getCurrentShape();
	if(currentShape == "cross"){
		mouseTheta -= 45;
		let newMouseX = Math.cos(mouseTheta * (Math.PI / 180)) * mouseHyp;
		let newMouseY = Math.sin(mouseTheta * (Math.PI / 180)) * mouseHyp;
		if((newMouseX > 125 && newMouseX < 275 && newMouseY > -20 && newMouseY < 20) ||
		(newMouseX > 180 && newMouseX < 220 && newMouseY > -75 && newMouseY < 75)){
			return true;
		}
	}
	else if(currentShape == "check"){
		mouseTheta -= 30;
		let newMouseX = Math.cos(mouseTheta * (Math.PI / 180)) * mouseHyp;
		let newMouseY = Math.sin(mouseTheta * (Math.PI / 180)) * mouseHyp;
		if((newMouseX > 200 && newMouseX < 240 && newMouseY > -40 && newMouseY < 110) ||
		(newMouseX > 155 && newMouseX < 200 && newMouseY > 70.4 && newMouseY < 110.4)){
			return true;
		}
	}
	return false;
}

function checkClick(evnt){
	let checkWithinShape = getMousePos(evnt);
	if(checkWithinShape){
		if(document.getElementById("alternateButton").innerText == "Accept"){
			drawCheck();
			document.getElementById("alternateButton").innerText = "Deny";
		}
		else{
			drawX();
			document.getElementById("alternateButton").innerText = "Accept";
		}
	}
}

