const price = document.querySelector("#price");
const number = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const button = document.querySelector(".count");
const info = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

function check() {
	if (!price.value || !number.value || tip.value == 0) {
		error.innerHTML = "Uzupełnij wszystkie pola!";
	} else {
		billhandler();
		error.style.display = "none";
	}
}

button.addEventListener("click", check);
function billhandler() {
	const bill =
		(Number(price.value) + Number(price.value) * Number(tip.value)) /
		Number(number.value);
	info.style.display = "block";
	cost.innerHTML = bill;
}
