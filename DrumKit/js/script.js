/* My Code */


document.addEventListener("keydown", function(e) {
	if (e.keyCode === 65) {
		document.getElementById("65").play();
		document.getElementById("65").currentTime = 0;
		document.getElementById("n65").classList.add("playing");
	} else if (e.keyCode === 83) {
		document.getElementById("83").play();
		document.getElementById("83").currentTime = 0;
		document.getElementById("n83").classList.add("playing");
	} else if (e.keyCode === 68) {
		document.getElementById("68").play();
		document.getElementById("68").currentTime = 0;
		document.getElementById("n68").classList.add("playing");
	} else if (e.keyCode === 70) {
		document.getElementById("70").play();
		document.getElementById("70").currentTime = 0;
		document.getElementById("n70").classList.add("playing");
	} else if (e.keyCode === 71) {
		document.getElementById("71").play();
		document.getElementById("71").currentTime = 0;
		document.getElementById("n71").classList.add("playing");
	} else if (e.keyCode === 72) {
		document.getElementById("72").play();
		document.getElementById("72").currentTime = 0;
		document.getElementById("n72").classList.add("playing");
	} else if (e.keyCode === 74) {
		document.getElementById("74").play();
		document.getElementById("74").currentTime = 0;
		document.getElementById("n74").classList.add("playing");
	} else if (e.keyCode === 75) {
		document.getElementById("75").play();
		document.getElementById("75").currentTime = 0;
		document.getElementById("n75").classList.add("playing");
	} else if (e.keyCode === 76) {
		document.getElementById("76").play();
		document.getElementById("76").currentTime = 0;
		document.getElementById("n76").classList.add("playing");
	}
});


document.querySelectorAll(".key").forEach(key => key.addEventListener("transitionend", function(e) {
	this.classList.remove("playing")
}))


/* WesBos Code */

/*
!Da dela morem v HTML zamenat vse id-je z data-key!
*/

/*
function removeTransition (e) {
	if(e.propertyName !== "transform") return;
	this.classList.remove("playing")
}

function playSound (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (!audio) return; // Stop function from running
	audio.play();
	audio.currentTime = 0;
	key.classList.add("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
*/