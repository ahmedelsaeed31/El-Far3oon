// ===============================
// El Far3oon Website
// Ahmed El-Saeed
// ===============================

// تغيير شكل الهيدر أثناء النزول

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.5)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    } else {

        header.style.background = "rgba(255,255,255,.5)";
        header.style.boxShadow = "none";

    }

});


// Scroll Smooth

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// إرسال بيانات الحجز إلى واتساب

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const stage = document.getElementById("stage").value;
    const school = document.getElementById("school").value;
    const notes = document.getElementById("notes").value;

    const message = `السلام عليكم

أرغب في حجز درس

👤 الاسم:
${name}

📞 رقم الهاتف:
${phone}

🎓 المرحلة:
${stage}

🏫 المدرسة:
${school}

📝 ملاحظات:
${notes}`;

    const whatsapp = `https://wa.me/201280063741?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");

});