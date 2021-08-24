canvas= document.getElementById('myCanvas');
ctx= canvas.getContext('2d');
var otherkeydtc = 0

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
		aplhabetkey();
		otherkeydtc = 1
		document.getElementById("d1").innerHTML="You pressed an alphabet key!";
		console.log("alphabet key");
		}
		
		if((keyPressed >=48 && keyPressed<=57))
		{
		numberkey();
		otherkeydtc = 1
		document.getElementById("d1").innerHTML="You pressed a number key!";
		console.log("number key");
		}

		if((keyPressed >=37 && keyPressed<=40))
		{
		arrowkey();
		otherkeydtc = 1
		document.getElementById("d1").innerHTML="You pressed an arrow key!";
		console.log("arrow key");
		}

		if (keyPressed == 17)
		{
		specialkey();
		otherkeydtc = 1
		document.getElementById("d1").innerHTML="You pressed a special key!";
		console.log("special key");	
		}

		if (keyPressed == 27)
		{
		specialkey();
		otherkeydtc = 1
		document.getElementById("d1").innerHTML="You pressed a special key!";
		console.log("special key");	
		}

		if (keyPressed == 18)
		{
		specialkey();
		otherkeydtc = 1
		document.getElementById("d1").innerHTML="You pressed a special key!";
		console.log("special key");	
		}

		if ((keyPressed >=187 && keyPressed<=222))
		{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed an other key!";
			console.log("other key");	
		}

		if ((keyPressed >=8 && keyPressed<=16))
		{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed an other key!";
			console.log("other key");	
		}

		if (keyPressed==32)
		{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed an other key!";
			console.log("other key");	
		}

		if (keyPressed==91)
		{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed an other key!";
			console.log("other key");	
		}

		







	
		
		
	
	
	
}

function aplhabetkey()
{
	img_image="Alpkey.png"
	add()
}
function numberkey()
{
	img_image="numkey.png"
	add()
}
function arrowkey()
{
	img_image="Arrkey.png"
	add()
}
function specialkey()
{
	img_image="spkey.png"
	add()
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
