const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми
	const emailInput = form.elements.email;
	const passwordInput = form.elements.password;

	const email = emailInput.value.trim(); // Очищуємо значення від пробілів по краях
	const password = passwordInput.value.trim();

	if (email === "" || password === "") {
		// Перевіряємо, чи всі поля заповнені
		alert("All form fields must be filled in"); // якщо ні - виводимо alert
	} else {
		//збираем значення полів в об'єкт з двома властивостями
		const userData = {
			email: email,
			password: password,
		};

		console.log(userData); // Виводимо об'єкт з введеними даними в консоль
		form.reset(); // Очищуємо значення полів форми
	}
}
