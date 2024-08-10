// Дохватање елемената форме и статуса
const form = document.getElementById("messageForm");
const statusDiv = document.getElementById("status");
const webhookURL =
    "https://discord.com/api/webhooks/1271901711581057034/2ZBhvDiLatUOViLEzRnB7hqnNxJbzcUVQx-R4mzGefFYiHB3Hz-ZKmk5DIfSYsfQswPQ";

// Додавање event listener-а за слање форме
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = document.getElementById("message").value;
    statusDiv.textContent = "⏳";

    try {
        // Слање поруке на Discord webhook
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: message,
                username: "DisGuise",
            }),
        });

        if (response.ok) {
            statusDiv.textContent = "🎉";
            form.reset();
        } else {
            throw new Error("Неуспешно слање");
        }
    } catch (error) {
        statusDiv.textContent = "❌";
        console.error("Грешка:", error);
    }
});

// Функција за креирање звезда у позадини
function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 5 + 3}s`;
    document.body.appendChild(star);
}

// Креирање 50 звезда
for (let i = 0; i < 50; i++) {
    createStar();
}
