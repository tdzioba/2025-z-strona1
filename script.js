document.addEventListener('DOMContentLoaded', () => {
    // 1. Efekt 3D na kartach (prosty efekt tilt)
    const cards = document.querySelectorAll('.info-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Subtelny efekt przesunięcia tła/ramki
            card.style.transform = `translateY(-5px) perspective(1000px) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${-(x - rect.width / 2) / 20}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset pozycji po zjechaniu myszką
            card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
            if(card.classList.contains('active-card')) {
                card.style.transform = 'translateY(-5px)'; // Utrzymanie podniesienia dla aktywnej
            }
        });

        // Kliknięcie zmienia aktywną kartę
        card.addEventListener('click', () => {
            cards.forEach(c => {
                c.classList.remove('active-card');
                c.style.transform = 'translateY(0)';
            });
            card.classList.add('active-card');
        });
    });

    // 2. Prosta animacja przycisku "Start Now"
    const ctaBtn = document.querySelector('.cta-button');
    if(ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            // Symulacja akcji
            ctaBtn.innerHTML = 'Ładowanie... <i class="fa-solid fa-spinner fa-spin"></i>';
            setTimeout(() => {
                ctaBtn.innerHTML = 'Gotowe! <i class="fa-solid fa-check"></i>';
                ctaBtn.style.background = 'linear-gradient(90deg, #2ecc71, #27ae60)';
            }, 1000);
        });
    }
});