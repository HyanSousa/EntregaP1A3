// Funcionalidade do carrinho
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o botão de carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            // Peda info do produto
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Mensagem de confirmação
            alert(`Produto adicionado ao carrinho: ${productName} - ${productPrice}`);
            
            // Animação carrinho
            this.classList.add('added');
            setTimeout(() => {
                this.classList.remove('added');
            }, 500);
        });
    });

    window.addEventListener("DOMContentLoaded", () => {
        const track = document.querySelector(".products-track");
        const cards = Array.from(track.children);

        // Duplica os cards para loop visual
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    });

    // Navigation active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active class from all items
            document.querySelector('.nav-item.active').classList.remove('active');
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    // Search on button click
    searchButton.addEventListener('click', function() {
        searchProducts();
    });
    
    // Search on Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    function searchProducts() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            alert(`Buscando por: ${searchTerm}`);
            // Here you would typically implement actual search functionality
        }
    }
    
    // Profile button
    document.querySelector('.profile-button').addEventListener('click', function() {
        alert('Acessando perfil...');
    });
    
    // Mobile menu adjustments
    function handleMobileMenu() {
        if (window.innerWidth <= 576) {
            // If mobile view, ensure navigation items are properly displayed
            const navItems = document.querySelector('.nav-items');
            if (navItems) {
                navItems.style.display = 'flex';
            }
        }
    }
    
    // Initialize mobile menu
    handleMobileMenu();
    
    // Update on window resize
    window.addEventListener('resize', handleMobileMenu);
    
    // Categories horizontal scroll with mouse wheel
    const categoriesContainer = document.querySelector('.categories');
    if (categoriesContainer) {
        categoriesContainer.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                this.scrollLeft += e.deltaY;
            }
        });
    }
    
    // Add hover effects to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.05)';
        });
    });
    
    // Add smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});