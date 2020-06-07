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
// KATIE 
let MakeGhostTextAppear = ()  => {
	// How do i change the font and alignment of the ghost-text if its and id? 
	document.getElementById("ghost-text").innerText = "Non-binary and Proud!"
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

// PAM
let MakeGhostTextAppear1 = ()  => {
	// How do i change the font and alignment of the ghost-text if its and id? 
	document.getElementById("ghost-text2").innerText = "Queer and Proud!"
}

let MakeGhostTextDisappear1 = () => {
// To make something disappear after a certain delay of time
	setTimeout(() => {
		document.getElementById("ghost-text2").innerText = "";
	},1000)
	 
}
let greetingElement2=document.getElementById("greeting-text2");
	greetingElement2.addEventListener('mouseenter', MakeGhostTextAppear1)
		

	greetingElement2.addEventListener('mouseleave', MakeGhostTextDisappear1)

// Sashank
let MakeGhostTextAppear2 = ()  => {

	document.getElementById("ghost-text3").innerText = "Trans and Proud!"
}

let MakeGhostTextDisappear2 = () => {
	setTimeout(() => {
		document.getElementById("ghost-text3").innerText = "";
	},1000)
	 
}
let greetingElement3=document.getElementById("greeting-text3");
	greetingElement3.addEventListener('mouseenter', MakeGhostTextAppear2)
		

	greetingElement3.addEventListener('mouseleave', MakeGhostTextDisappear2)

// Music of pride 2020
let Musicplay=document.getElementById("audio");
	Musicplay.addEventListener ('mouseenter',playAudio)
	Musicplay.addEventListener('mouseleave',pauseAudio)

let audio = new Audio('lesbicafuturista.mp3');
function playAudio(){
	audio.play()
	console.log("play audio")
}

function pauseAudio(){
	audio.pause()
	console.log("pause audio")
}


