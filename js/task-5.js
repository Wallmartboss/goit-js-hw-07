function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const body = document.body;
const span = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", function () {
	const randomColor = getRandomHexColor();
	body.style.backgroundColor = randomColor; // Задаємо фон елементу body
	span.textContent = randomColor; // Задаємо текстовий вміст для span.color
});
