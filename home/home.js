const text = "Selamat Datang di Samarinda! Nikmati perjalanan wisatamu di kota kami";
const typingEffect = document.getElementById("typing-effect");

function typeWriter() {
    typingEffect.innerText = "";
    let i = 0;
    const speed = 100; // Kecepatan ketik, dalam milidetik

    function type() {
        if (i < text.length) {
            typingEffect.innerText += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

typeWriter();
