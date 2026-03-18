document.addEventListener('DOMContentLoaded', () => {
    // Cart functionality
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    cartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Animate button
            btn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);

            // Update cart count
            count++;
            cartCount.textContent = count;
            cartCount.style.transform = 'scale(1.2)';
            
            // Add slight bounce to cart icon wrapper
            const cartIcon = document.querySelector('.cart-btn');
            cartIcon.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
                cartIcon.style.transform = 'scale(1)';
            }, 300);
            
            // Optional: Change icon briefly
            const icon = btn.querySelector('i');
            icon.className = 'ri-check-line';
            setTimeout(() => {
                icon.className = 'ri-shopping-cart-2-line';
            }, 1000);
        });
    });

    // Wishlist functionality
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const icon = btn.querySelector('i');
            if(icon.classList.contains('ri-heart-line')) {
                icon.classList.replace('ri-heart-line', 'ri-heart-fill');
                btn.style.color = 'var(--text-primary)';
                btn.style.background = 'var(--accent-color)';
            } else {
                icon.classList.replace('ri-heart-fill', 'ri-heart-line');
                btn.style.color = 'var(--text-primary)';
                btn.style.background = 'rgba(15, 17, 26, 0.6)';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
