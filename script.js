document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("info-form");

    // Объявляем переменные URL и токен выше функции
    const POST_URL = "https://ldblt.com/post/d0572dad-4f5e-43e3-a6c2-07abcb60160e";
    const AUTH_TOKEN = "Y2RjYTdkMzI4ZGQyNGY0N2ExZmRlMmU3Mjc0MjgyM2Q6YTBhNWE3ZDBmYTNjNzEwNjQ4ZjkzNTk3YzRmOTA2N2M=";

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Останавливаем стандартное поведение формы

        // Собираем данные формы
        const formData = {
            first_name: form.firstName.value.trim(),
            last_name: form.lastName.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            zip_code: form.zipCode.value.trim()
        };

        try {
            // Отправляем POST-запрос
            const response = await fetch(POST_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Basic ${AUTH_TOKEN}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(formData)
            });

            const result = await response.json(); // Парсим JSON-ответ

            if (result.success) {
                console.log("Lead successfully submitted:", result);
                alert(`Lead successfully submitted! Lead ID: ${result.lead_id}`);
                form.reset(); // Очищаем форму
            } else {
                console.error("Error submitting lead:", result.errors);
                alert("Error submitting lead: " + result.errors.join(", "));
            }
        } catch (error) {
            console.error("Request error:", error);
            alert("An error occurred. Please try again later.");
        }
    });
});
