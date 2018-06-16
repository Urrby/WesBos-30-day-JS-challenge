
const hourHand = document.querySelector(".hours");
const minuteHand = document.querySelector(".minutes");
const secondHand = document.querySelector(".seconds");


function setDate () {
	const time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	
	let hoursDegrees = ((hours / 60) * 360) + 5;
	let minutesDegrees = ((minutes / 60) * 360);
	let secondsDegrees = ((seconds / 60) * 360);
	
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;	
}

setInterval(setDate, 1000);


