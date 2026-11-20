
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Mobil menyu
menuBtn.addEventListener("click", () => {
    const opened = navbar.classList.toggle("open");

    menuBtn.textContent = opened ? "✕" : "☰";

    menuBtn.setAttribute(
        "aria-expanded",
        String(opened)
    );
});

// Menyu havolasi bosilganda yopiladi
navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Modellarni kategoriyalar bo‘yicha filtrlash
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".car-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {
            card.hidden = !(
                filter === "all" ||
                card.dataset.category === filter
            );
        });

    });
});

// Avtomobillar haqida ma'lumotlar
const carInfo = {
    m3: [
        "BMW M3",
        "Sport sedan. M oilasiga xos dinamik xarakter, aniq boshqaruv va kundalik foydalanish qulayligi."
    ],

    m4: [
        "BMW M4",
        "Sport coupé. Jasur dizayn va sport ruhidagi haydash tajribasini birlashtiradi."
    ],

    m5: [
        "BMW M5",
        "Yuqori unumdorlikdagi sedan. Hashamat, texnologiya va sport xarakteri uyg‘unligi."
    ],

    x5: [
        "BMW X5",
        "Premium SUV. Keng salon, ko‘p qirralilik va uzoq safarlar uchun qulaylik."
    ],

    x6: [
        "BMW X6",
        "Kupe uslubidagi SUV. O‘ziga xos siluet va sportcha ko‘rinish."
    ],

    i4: [
        "BMW i4",
        "To‘liq elektrli Gran Coupé. Zamonaviy elektr mobilligi va BMW dizayni."
    ],

    i7: [
        "BMW i7",
        "To‘liq elektrli premium sedan. Elektr harakatlanishi va yuqori darajadagi komfort."
    ]
};

// Modal oynasi
const modal = document.getElementById("carModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

// Batafsil tugmalari
document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const data = carInfo[button.dataset.car];

        if (!data) return;

        modalTitle.textContent = data[0];
        modalText.textContent = data[1];

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

// Modalni yopish
function closeCarModal() {
    modal.classList.remove("show");

    document.body.style.overflow = "";
}

document.getElementById("closeModal")
    .addEventListener("click", closeCarModal);

// Modal tashqarisiga bosilganda yopish
modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeCarModal();
    }
});

// Escape tugmasi orqali yopish
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCarModal();
    }
});

// Footerda joriy yil
document.getElementById("year").textContent =
    new Date().getFullYear();
