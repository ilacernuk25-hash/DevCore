const VK_TOKEN = vk1.a.6iDMPK62Ghn_ORhHixKL3WeK_SlfGsiXyQ8Ok_L91FIeE1HHO4wG6K22Toc5aUxHV-CHKoUhTvolakGc_hvsAaEmBnZW_JMj0OhDzCxQlJpqWJ3_QcFu-8xv30NwAfIsSTyxiCSwa83HfQ9W_ryEL2qhd70VwY9_s5i4xkpvx_07CNzPQC3TkqY5VlH0FJXvw2rm2XbhOjAZKiUg6UYPJw
const VK_GROUP_ID = 238564524


async function sendOrderToVK(orderText) {
    const url = `https://api.vk.com/method/messages.send`;
    const params = new URLSearchParams({
        v: '5.131',
        access_token: VK_TOKEN,
        peer_id: VK_GROUP_ID,
        message: orderText,
        random_id: Date.now()
    });
    try {
        const response = await fetch(`${url}?${params}`);
        const data = await response.json();
        console.log("Ответ VK:", data);
        if (data.error) console.error("Ошибка VK:", data.error);
    } catch (e) {
        console.error("Не удалось отправить заявку в VK", e);
    }
}


document.getElementById("orderForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("userName").value.trim();
    const phone = document.getElementById("userPhone").value.trim();
    const what = document.getElementById("userWhat").value.trim();
    if (!name || !phone || !what) {
        alert("Заполните имя, телефон и описание задачи");
        return;
    }
    const orderMessage = `🛒 НОВАЯ ЗАЯВКА (портфолио)\n\nИмя: ${name}\nТелефон: ${phone}\nЗадача: ${what}`;
    await sendOrderToVK(orderMessage);
    document.getElementById("orderForm").reset();
    const msgDiv = document.getElementById("formMessage");
    msgDiv.style.display = "block";
    setTimeout(() => { msgDiv.style.display = "none"; }, 3000);
});
