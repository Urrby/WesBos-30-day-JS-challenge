const panels = document.querySelectorAll(".panel");
const panel1 = document.querySelector(".panel1")
const panel2 = document.querySelector(".panel2")
const panel3 = document.querySelector(".panel3")
const panel4 = document.querySelector(".panel4")
const panel5 = document.querySelector(".panel5")

function toggleOpen() {

	if (this.classList.contains("open")) {
		this.classList.toggle("open");
	} else {
		panel1.classList.remove("open");
		panel2.classList.remove("open");
		panel3.classList.remove("open");
		panel4.classList.remove("open");
		panel5.classList.remove("open");
		this.classList.toggle("open");
	}
	
}

function toggleActive(e) {
	if (e.propertyName.includes("flex")) {
		this.classList.toggle("open-active")
	}
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));