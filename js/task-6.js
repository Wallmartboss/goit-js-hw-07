function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

let amount;
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
create.addEventListener("click", () => {
	// обробник натиску на кнопку Create
	amount = parseInt(input.value); // виділяємо цілу частину введеного числа
	destroyBoxes(); // очищуємо попередні бокси, якщо вони були
	input.value = ""; // очищуємо інпут
	if (amount >= 1 && amount <= 100) {
		// валідація введеного числа
		createBoxes(amount); // побудова і відображення боксів
	} else {
		alert("Please enter a number between 1 and 100");
		input.value = "";
	}
});
function createBoxes(amount) {
	// визначаємо розміри боксів відповідно до кількості
	for (let i = 0; i < amount; i++) {
		const newBox = document.createElement("div");
		const size = 30 + i * 10;
		newBox.classList.add("newDiv");
		newBox.style.width = `${size}px`;
		newBox.style.height = `${size}px`;
		newBox.style.backgroundColor = getRandomHexColor();
		boxes.appendChild(newBox); // добавляємо div всередину #boxes
	}
}
function destroyBoxes() {
	boxes.innerHTML = ""; // видаляємо всі добавлені div
}
destroy.addEventListener("click", () => destroyBoxes()); // обробник натиску на кнопку Destroy
