function calculateDiscount() {
    let serviceCount = document.getElementById("serviceCount").value;
    let discount = document.getElementById("discount").value;
    let pricePerService = 500;
    let totalPrice = serviceCount * pricePerService;
    let finalPrice = totalPrice - (totalPrice * (discount / 100));
    document.getElementById("finalPrice").textContent = finalPrice;
}

function bookAppointment() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    alert(`Дякуємо, ${name}! Ваш запис підтверджено.`);
}

function requestCallback() {
    let phone = prompt("Введіть свій номер телефону:");
    if (phone) {
        alert(`Ми передзвонимо вам за номером ${phone}`);
    }
}

document.getElementById("copyCode").addEventListener("click", function() {
    navigator.clipboard.writeText(document.documentElement.outerHTML).then(() => {
        alert("Код скопійовано!");
    }).catch(err => {
        alert("Помилка копіювання: " + err);
    });
});
