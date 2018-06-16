/* My code */


const hourHand = document.querySelector(".hour_hand");
const minHand = document.querySelector(".min_hand");
const secondHand = document.querySelector(".second_hand");

function setTime () {
	let time = new Date();
	
	let seconds = time.getSeconds();
	let secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	console.log(seconds);
	
	let min = time.getMinutes();
	let minDegrees = ((min / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	console.log(min);
	
	let hours = time.getHours();
	let hoursDegrees = ((hours / 60) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log(hours);
}

setInterval(setTime, 1000);



/* WesBos code */

/*
const hourHand = document.querySelector(".hour_hand");
const minHand = document.querySelector(".min_hand");
const secondHand = document.querySelector(".second_hand");

function setDate () {
	let now = new Date();
	
	let seconds = now.getSeconds();
	let secondsDegrees = ((seconds / 60) * 360) + 90
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
	console.log(seconds);
	
	let min = now.getMinutes();
	let minDegrees = ((min / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	console.log(min);

	let hours = now.getHours();
	let hoursDegrees = ((hours / 60) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log(hours);
}

setInterval(setDate, 1000)
*/