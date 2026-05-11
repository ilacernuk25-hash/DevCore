
// --- ОБРАБОТКА ФОРМЫ (с выводом в консоль и алертом) ---

document.addEventListener("DOMContentLoaded", function() {

const orderForm = document.getElementById("orderForm");

if (orderForm) {

orderForm.addEventListener("submit", (e) => {

e.preventDefault();

const name = document.getElementById("userName").value.trim();

const phone = document.getElementById("userPhone").value.trim();

const task = document.getElementById("userTask").value.trim();

if (!name || !phone || !task) {

alert("Заполните имя, телефон и задачу!");

return;

}

// ---- ВЫВОДИМ В КОНСОЛЬ (ТЫ ЭТОГО ЖДАЛ) ----

console.log("=== НОВАЯ ЗАЯВКА ===");

console.log("Имя: " + name);

console.log("Телефон: " + phone);

console.log("Задача: " + task);

// ---- ПОКАЗЫВАЕМ СООБЩЕНИЕ КЛИЕНТУ ----

alert(`Спасибо, ${name}! Я свяжусь с вами по номеру ${phone}.`);

// Очищаем форму

orderForm.reset();

// Показываем сообщение на странице

const msgDiv = document.getElementById("formMessage");

if (msgDiv) {

msgDiv.textContent = "Заявка принята! Мы свяжемся с вами.";

msgDiv.style.display = "block";

setTimeout(() => msgDiv.style.display = "none", 3000);

}

});

} else {

console.error("Форма с id 'orderForm' не найдена!");

}

// --- ПОРТФОЛИО (13 карточек) ---

const projects = [

{ name: "Интернет-магазин ESPOT", image: "images/espot1.jpg" },

{ name: "Интернет-магазин ESPOT", image: "images/espot2.jpg" },

{ name: "Интернет-магазин ESPOT", image: "images/espot3.jpg" },

{ name: "Интернет-магазин ESPOT", image: "images/espot4.jpg" },

{ name: "Интернет-магазин ESPOT", image: "images/espot5.jpg" },

{ name: "Интернет-магазин ESPOT", image: "images/espot6.jpg" },

{ name: "Интернет-магазин ESPOT", image: "images/espot7.jpg" },

{ name: "Сайт стоматологии Мурас", image: "images/muras1.jpg" },

{ name: "Сайт стоматологии Мурас", image: "images/muras2.jpg" },

{ name: "Сайт стоматологии Мурас", image: "images/muras3.jpg" },

{ name: "Сайт стоматологии Мурас", image: "images/muras4.jpg" },

{ name: "Сайт стоматологии Мурас", image: "images/muras5.jpg" },

{ name: "Сайт стоматологии Мурас", image: "images/muras6.jpg" }

];

function renderPortfolio() {

const container = document.getElementById("portfolioItems");

if (container) {

container.innerHTML = projects.map(p => `

<div class="portfolio-item">

<img src="${p.image}" alt="${p.name}">

<h3>${p.name}</h3>

<a href="#" class="btn-small">Смотреть проект</a>

</div>

`).join("");

} else {

console.error("Контейнер портфолио 'portfolioItems' не найден.");

}

}

renderPortfolio();

// --- ПРОКРУТКА К ФОРМЕ ---

const orderBtn = document.getElementById("orderBtn");

if (orderBtn) {

orderBtn.addEventListener("click", () => {

const contactSection = document.getElementById("contact");

if (contactSection) {

contactSection.scrollIntoView({ behavior: "smooth" });

} else {

console.error("Секция 'contact' не найдена.");

}

});

}

});
