// --- НАСТРОЙКИ TELEGRAM (ЗАМЕНИ НА СВОИ) ---
const BOT_TOKEN = "8797590406:AAEGHJ7xaflETTTyW0e0VwBUoB14IvVZL5c"; // токен от @BotFather
const CHAT_ID = "6025900104"; // твой chat_id от @userinfobot

// --- ФУНКЦИЯ ОТПРАВКИ В TELEGRAM ---
async function sendToTelegram(text) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = new URLSearchParams();
    params.append("chat_id", CHAT_ID);
    params.append("text", text);
    params.append("parse_mode", "HTML");

    try {
        const response = await fetch(url, { method: "POST", body: params });
        const data = await response.json();
        if (!data.ok) console.error("Ошибка Telegram:", data);
    } catch(e) {
        console.error("Не удалось отправить в Telegram", e);
    }
}

// ========== ПОРТФОЛИО (ГЕНЕРАЦИЯ 13 КАРТОЧЕК) ==========
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

// Запускаем отрисовку портфолио после загрузки страницы
renderPortfolio();

// ========== ОБРАБОТКА ФОРМЫ ==========
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

        const message = `🛒 НОВАЯ ЗАЯВКА С DEVCORE\n\nИмя: ${name}\nТелефон: ${phone}\nЗадача: ${task}`;
        sendToTelegram(message);

        alert("Спасибо! Я свяжусь с вами.");
        orderForm.reset();
    });
}

// Прокрутка к форме по кнопке
document.getElementById("orderBtn")?.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});