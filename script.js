document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Hover Effect na kartach w dolnej sekcji (delikatne podświetlenie)
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Jeśli karta nie jest aktywna, możemy dodać klasę tymczasową
            card.style.borderColor = 'rgba(255, 75, 110, 0.5)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255,255,255,0.05)';
        });
    });

    // 2. Smooth Scroll (opcjonalnie, jeśli dodasz kotwice)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Tutaj normalnie byłby kod do przewijania
            console.log("Kliknięto link: " + this.getAttribute('href'));
        });
    });

    // 3. Button Click Animation
    const primaryBtn = document.querySelector('.btn-primary');
    if(primaryBtn) {
        primaryBtn.addEventListener('click', function() {
            let originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-check"></i> Dzięki!';
            this.style.background = 'linear-gradient(90deg, #20bf6b, #26de81)';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = ''; // powrót do CSS
            }, 2000);
        });
    }
});