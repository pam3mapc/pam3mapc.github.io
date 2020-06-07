 // katie's character
 let orangeParagraph = document.getElementById("orange-paragraph");
orangeParagraph.addEventListener ( 'click' , () => {

	if (orangeParagraph.style.color== "orange") {
		orangeParagraph.style.color= "white";

	}else{

	orangeParagraph.style.color= "orange"
	}
})
// pam's character
let purpleParagraph = document.getElementById("purple-paragraph");
purpleParagraph.addEventListener ( 'click' , () => {

	if (purpleParagraph.style.color== "purple") {
		purpleParagraph.style.color= "white";

	}else{

	purpleParagraph.style.color= "purple"
	}
});

// Sashank's
let blueParagraph = document.getElementById("blue-paragraph");
blueParagraph.addEventListener ( 'click' , () => {

	if (blueParagraph.style.color== "blue") {
		blueParagraph.style.color= "white";

	}else{

	blueParagraph.style.color= "blue";
	}
});

// Know more about interaction!
let MakeGhostTextAppear = ()  => {
	// How do i change the font and alignment of the ghost-text if its and id? 
	document.getElementById("ghost-text").innerText = "We are queer and Proud!"
}

let MakeGhostTextDisappear = () => {
// To make something disappear after a certain delay of time
	setTimeout(() => {
		document.getElementById("ghost-text").innerText = "";
	},1000)
	 
}
let greetingElement=document.getElementById("greeting-text");
	greetingElement.addEventListener('mouseenter', MakeGhostTextAppear)
		

	greetingElement.addEventListener('mouseleave', MakeGhostTextDisappear)

// Music of pride 2020
<<<<<<< HEAD
let audio = new Audio('lesbicafuturista.mp3');
function playAudio(){
	audio.play('mouseenter')
	console.log("play audio")
}

function pauseAudio(){
	setTimeout(() => {
		audio.pause('mouseleave')

	},1000)
	
	console.log("pause audio")
}







// this didnt work

let MakeMusicAppear =() => {}
=======
let MakeMusicAppear =() => {
	document.getElementById('music').play();
}
>>>>>>> parent of 589372c... updated 5pm
let MakeMusicDisappear =() => {
	setTimeout(() => {
		document.getElementById('music').stop();
	}
},1000


let musicAppear=document.getElementById("music");
	greetingElement.addEventListener('mouseenter',MakeMusicAppear)
	greetingElement.addEventListener('mouseleave',MakeMusicDisappear)

