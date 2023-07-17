//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
const menu = document.querySelector("#hamIcon");
//select all subtopic pages
console.log(allpages);
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






// const leftBtn = document.querySelector("#leftBtn");
// const rightBtn = document.querySelector("#rightBtn");
// const upBtn = document.querySelector("#upBtn");
// const downBtn = document.querySelector("#downBtn");
// const resetBtn = document.querySelector("#resetBtn");
// const ball = document.querySelector("#ball");
// var ballX = ballY = 0; //assign initial position of ball
//functions to update variables to control ball position
// function ResetPos() {
	// ballX=ballY=0; //reset to zero
	// UpdateBallStyle();
// }
// function MovePos(leftInc, topInc) {
	// ballX += leftInc;
	// ballY += topInc;
	// UpdateBallStyle();
// }
// //function to update ball css as well as display text
// function UpdateBallStyle(){
	// ball.style.left = ballX + "px"; //set left property to ball x variable
	// ball.style.top = ballY + "px"; //set top property to ball x variable
	// ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
// }

//eventlisteners to activate MovePos



//extra reference
//resetBtn.addEventListener("click", ResetPos);


//just for extra reference
// document.addEventListener('keydown', (e) => {
	// console.log(e);
	// switch(e.code)
	// {
		// case "ArrowRight":
			// MovePos(10,0);
			// break;
		
		// case "ArrowLeft":
			// MovePos(-10,0);
			// break;
		
		// case "ArrowUp":
			// MovePos(0,-10);
			// break;
			
		// case "ArrowDown":
			// MovePos(0,10);
			// break;
		// default:
			// break;
	// }
	// //Need to inform user what keys to press. Better option: use switch case instead.
// })