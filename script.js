// --- ОБРАБОТКА ФОРМЫ (без отправки, просто уведомление) ---

const orderForm = document.getElementById("orderForm");

if (orderForm) {

orderForm.addEventListener("submit", (e) => {

e.preventDefault();

const name = document.getElementById("userName").value.trim();

const phone = document.getElementById("userPhone").value.trim();

const task = document.getElementById("userTask").value.trim();

if (!name || !phone || !task) {

alert("Заполните имя, телефон и описание задачи");

return;

}

// Просто выводим сообщение на экран

alert("Спасибо, " + name + "! Я свяжусь с вами в ближайшее время.");

// Очищаем форму

orderForm.reset();

// Показываем дополнительное сообщение на странице

const msgDiv = document.getElementById("formMessage");

msgDiv.textContent = "Заявка принята! Я скоро свяжусь с вами.";

msgDiv.style.display = "block";

setTimeout(() => msgDiv.style.display = "none", 3000);

});

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

if (!container) return;

container.innerHTML = projects.map(p => `

<div class="portfolio-item">

<img src="${p.image}" alt="${p.name}">

<h3>${p.name}</h3>

<a href="#" class="btn-small">Смотреть проект</a>

</div>

`).join("");

}

renderPortfolio();

// Прокрутка к форме

document.getElementById("orderBtn")?.addEventListener("click", () => {

document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

});
