// Отримуємо всі елементи li з класом 'item' у документі
const categoryItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

// Для кожного елемента li.item у списку категорій
categoryItems.forEach((item) => {
	// Отримуємо текст заголовка елемента (тегу <h2>)
	const categoryName = item.querySelector("h2").textContent;
	// Отримуємо всі елементи <li> у поточній категорії
	const categoryItemsCount = item.querySelectorAll("li").length;
	console.log(`Category: ${categoryName}`);
	console.log(`Elements: ${categoryItemsCount}`);
});
