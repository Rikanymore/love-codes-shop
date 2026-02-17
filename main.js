// 1. Yumuşak Kaydırma (Smooth Scroll)
function scrollToShop() {
    const shopSection = document.getElementById('shop');
    shopSection.scrollIntoView({ behavior: 'smooth' });
}

// 2. Kategori Filtreleme Sistemi
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Aktif buton rengini değiştir
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Hangi kategori seçildi?
            const filterValue = button.getAttribute('data-filter');

            // Kartları gizle veya göster
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                    card.classList.add('hide');
                }
            });
        });
    });
});
