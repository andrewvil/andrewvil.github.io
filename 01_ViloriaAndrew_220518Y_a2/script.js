//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
const menu = document.querySelector("#hamIcon");
//select all subtopic pages
hideall();

function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}

// var showing = false;

function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    //show the page
    onepage.style.display="flex";
}

// show pages on button click
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});

page3btn.addEventListener("click", function () {
    show(3);
});

const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("#menuList");

function toggleMenus(){ /open and close menu/
    menuItemsList.classList.toggle("menuShow");
}//can optimize using toggle class with css transitions

//flashlight effect
const shadow = document.querySelector('.shadow');
document.addEventListener('mousemove', (e) => {
  let x = e.clientX - (document.documentElement.clientWidth * 1.5);
  let y = e.clientY - (document.documentElement.clientHeight * 1.5);
  shadow.style.transform = 'translate(' + x + 'px, ' + (y + window.scrollY - 1000)+ 'px)'; //-1100 adjusts the displacement
}
)

//toggle blur the omori easter egg
var blurBool = true;
const blurred = document.querySelector(".blur");
blurred.addEventListener("click", toggleBlur);
function toggleBlur() {
	blurBool = !blurBool;
	if(!blurBool)
	{
		blurred.style.filter = "none";
	}
	else
	{
		blurred.style.filter = "blur(20px)";
	}
}
//


//fullscreen toggling
function enterFullscreen() {
	if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	} else if (document.documentElement.mozRequestFullScreen) { // Firefox
		document.documentElement.mozRequestFullScreen();
	} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
		document.documentElement.webkitRequestFullscreen();
	} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
		document.documentElement.msRequestFullscreen();
	}
}// Function to exit fullscreen mode
function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { // Firefox
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { // IE/Edge
		document.msExitFullscreen();
	}
}

var bFullScreen = false;

function toggleFS() {
	if(bFullScreen)
	{
		exitFullscreen()
	}
	
	else
	{
		enterFullscreen()
	}
	bFullScreen = !bFullScreen;
}

const buttonFS = document.querySelector("#fsb");

buttonFS.addEventListener("click", toggleFS);

var ballX = ballY = 0;
const ball = document.querySelector("#ball");

const minLeft = minTop = 0;
var maxTop = 550;

function stopAnim()
{
	clearInterval(animation);
	ball.innerText = "great job!";
}

ball.addEventListener("click",stopAnim);

// random speed
var leftInc = RandomRange(1,6);
var topInc = 6 - leftInc;

function MovePos() {
	var maxLeft = document.querySelector(".wrapper").getBoundingClientRect().width;// so that ball does not go out of the box
	ballX += leftInc;
	ballY += topInc;
	if(ballX > maxLeft)
	{
		leftInc = -leftInc;
		ballX = maxLeft;
	}
	else if (ballX < minLeft)
	{
		leftInc = -leftInc;
		ballX = minLeft;
	}
	if(ballY > maxTop)
	{
		topInc = -topInc;
		ballY = maxTop;
	}
	else if (ballY < minTop)
	{
		topInc = -topInc;
		ballY = minTop;
	}
	UpdateBallStyle();
}
//function to update ball css as well as display text
function UpdateBallStyle(){
	ball.style.left = ballX + "px"; //set left property to ball x variable
	ball.style.top = ballY + "px"; //set top property to ball x variable
	
}

function RandomRange(min,max)
{
	return Math.round(Math.random() * (max-min)+min);
}

const animation = setInterval(MovePos,10);

