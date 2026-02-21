// Целевая дата — конец дня 7 мая 2028
const targetDate = new Date(2028, 4, 7, 23, 59, 59); // май = 4

function updateCountdown() {
    const now = new Date();

    // разница + 1 час (3600000 мс)
    let diff = targetDate.getTime() - now.getTime() + 3600000;
    if(diff < 0) diff = 0;

    // Основной таймер
    const milliseconds = diff % 1000;
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Месяцы и годы
    let years = 2028 - now.getFullYear();
    let months = 5 - (now.getMonth() + 1); // май = 5
    if(months < 0) {
        months += 12;
        years -= 1;
    }

    // Обновление HTML
    document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(3,'0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2,'0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2,'0');
    document.getElementById("hours").textContent = hours.toString().padStart(2,'0');
    document.getElementById("days").textContent = `Дней: ${daysTotal}`;
    document.getElementById("months").textContent = `Месяцев: ${years*12 + months}`;
    document.getElementById("years").textContent = `Лет: ${years} года ${months} месяца`;
}

// Обновление каждые 50 мс
setInterval(updateCountdown, 50);
updateCountdown();