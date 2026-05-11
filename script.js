
document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("orderForm");

if (form) {

form.addEventListener("submit", (e) => {

e.preventDefault();

const name = document.getElementById("userName").value.trim();

const phone = document.getElementById("userPhone").value.trim();

const task = document.getElementById("userTask").value.trim();

if (!name || !phone || !task) return alert("Заполните все поля!");

console.log(`=== ЗАЯВКА ===\nИмя: ${name}\nТелефон: ${phone}\nЗадача: ${task}`);

alert(`Спасибо, ${name}! Я свяжусь с вами.`);

form.reset();

const msg = document.getElementById("formMessage");

if (msg) {

msg.textContent = "Заявка принята!";

msg.style.display = "block";

setTimeout(() => msg.style.display = "none", 3000);

}

});

}

// 10 карточек портфолио: 7 ESPOT + 3 Мурас

const projects = [

{ name: "Интернет-магазин ESPOT 1", img: "images/espot1.jpg" },

{ name: "Интернет-магазин ESPOT 2", img: "images/espot2.jpg" },

{ name: "Интернет-магазин ESPOT 3", img: "images/espot3.jpg" },

{ name: "Интернет-магазин ESPOT 4", img: "images/espot4.jpg" },

{ name: "Интернет-магазин ESPOT 5", img: "images/espot5.jpg" },

{ name: "Интернет-магазин ESPOT 6", img: "images/espot6.jpg" },

{ name: "Интернет-магазин ESPOT 7", img: "images/espot7.jpg" },

{ name: "Сайт стоматологии Мурас 1", img: "images/muras1.jpg" },

{ name: "Сайт стоматологии Мурас 2", img: "images/muras2.jpg" },

{ name: "Сайт стоматологии Мурас 3", img: "images/muras3.jpg" }

];

const container = document.getElementById("portfolioItems");

if (container) {

container.innerHTML = projects.map(p => `

<div class="portfolio-item">

<img src="${p.img}" alt="${p.name}">

<h3>${p.name}</h3>

<a href="#" class="btn-small">Смотреть проект</a>

</div>

`).join("");

}

});
