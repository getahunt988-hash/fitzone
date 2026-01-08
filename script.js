 const ethiopianProducts = [
            {
                id: 1,
                name: "Habesha Kemis - Gonder Style",
                price: 2800,
                originalPrice: 3200,
                category: "traditional",
                tags: ["traditional", "habesha", "kemis", "gonder", "new"],
                trending: true,
                images: [
                     "img/23.jpg",
            "img/22.jpg",
            "img/21.jpg"
                ],
                description: "Traditional Ethiopian dress with intricate Gonder embroidery patterns. Made from premium cotton fabric with hand-stitched designs.",
                rating: 4.9,
                reviews: 128,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Ivory", hex: "#FFFFF0" },
                    { name: "Cream", hex: "#FFFDD0" }
                ],
                material: "Premium Cotton",
                stock: 25,
                badge: "Best Seller",
                inStock: true,
                features: ["Hand-embroidered", "Machine washable", "Breathable fabric"],
                deliveryTime: "1-2 days"
            },
            {
                id: 2,
                name: "Men's Ethiopian Suit",
                price: 3500,
                originalPrice: 4200,
                category: "men",
                tags: ["men", "formal", "suit", "new", "trending"],
                trending: true,
                images: [
                    "img/11.avif",
            "img/24.jpg",
            "img/11.avif",
                ],
                description: "Elegant Ethiopian men's suit perfect for formal occasions. Made from premium wool blend fabric.",
                rating: 4.7,
                reviews: 89,
                sizes: ["M", "L", "XL", "XXL"],
                colors: [
                    { name: "Black", hex: "#000000" },
                    { name: "Navy", hex: "#000080" },
                    { name: "Charcoal", hex: "#36454F" }
                ],
                material: "Wool Blend",
                stock: 18,
                badge: "New Arrival",
                inStock: true,
                features: ["Tailored fit", "Dry clean only", "Wrinkle-resistant"],
                deliveryTime: "2-3 days"
            },
            {
                id: 3,
                name: "Women's Evening Dress",
                price: 2200,
                category: "women",
                tags: ["women", "evening", "party", "dress"],
                trending: false,
                images: [
                    "img/10.avif",
            "img/27.jpg",
            "img/28.jpg"
                ],
                description: "Beautiful evening dress for special occasions. Made from silk blend fabric with elegant design.",
                rating: 4.6,
                reviews: 112,
                sizes: ["S", "M", "L"],
                colors: [
                    { name: "Red", hex: "#FF0000" },
                    { name: "Black", hex: "#000000" },
                    { name: "Royal Blue", hex: "#4169E1" }
                ],
                material: "Silk Blend",
                stock: 32,
                badge: "Popular",
                inStock: true,
                features: ["Silk blend", "Hand-wash only", "Elegant design"],
                deliveryTime: "1-2 days"
            },
            {
                id: 4,
                name: "Kids Traditional Outfit",
                price: 1200,
                originalPrice: 1500,
                category: "kids",
                tags: ["kids", "traditional", "children"],
                trending: true,
                images: [
                   "img/29.jpg",
            "img/30.jpg",
            "img/31.jpg"
                ],
                description: "Traditional Ethiopian outfit for children, perfect for cultural events and celebrations.",
                rating: 4.8,
                reviews: 45,
                sizes: ["2-4Y", "5-7Y", "8-10Y"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Green", hex: "#008000" }
                ],
                material: "Cotton",
                stock: 40,
                badge: "Sale",
                inStock: true,
                features: ["Comfortable cotton", "Machine washable", "Colorfast"],
                deliveryTime: "2-3 days"
            },
            {
                id: 5,
                name: "Fitness Training Set",
                price: 1500,
                originalPrice: 2000,
                category: "fitness",
                tags: ["fitness", "training", "workout", "gym"],
                trending: true,
                images: [
                  "img/32.avif",
            "img/33.jpg",
            "img/43.jpg"
                ],
                description: "Complete fitness training set for workouts. Made from breathable, moisture-wicking fabric.",
                rating: 4.5,
                reviews: 89,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "Black", hex: "#000000" },
                    { name: "Grey", hex: "#808080" },
                    { name: "Navy Blue", hex: "#000080" }
                ],
                material: "Polyester Blend",
                stock: 55,
                badge: "Sale",
                inStock: true,
                features: ["Moisture-wicking", "Breathable", "Quick-dry"],
                deliveryTime: "1-2 days"
            },
            {
                id: 6,
                name: "Amhara Cultural Dress",
                price: 3200,
                category: "traditional",
                tags: ["amhara", "cultural", "traditional"],
                trending: false,
                images: [
                   "img/36.jpg",
            "img/35.jpg",
            "img/34.avif"
                ],
                description: "Beautiful Amhara region cultural dress with intricate embroidery patterns.",
                rating: 4.7,
                reviews: 92,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Green", hex: "#008000" }
                ],
                material: "Cotton",
                stock: 22,
                badge: "Cultural",
                inStock: true,
                features: ["Hand-embroidered", "Traditional design", "Comfortable fit"],
                deliveryTime: "2-3 days"
            },
            // Page 1 Products (7-12)
            {
                id: 7,
                name: "Ethiopian Traditional Shirt",
                price: 1800,
                originalPrice: 2200,
                category: "men",
                tags: ["men", "traditional", "shirt", "sale"],
                trending: true,
                images: [
                   "img/78.jpg",
                    "img/78.jpg",
                    "img/78.jpg"
                ],
                description: "Traditional Ethiopian men's shirt with elegant embroidery and comfortable fit.",
                rating: 4.4,
                reviews: 67,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Beige", hex: "#F5F5DC" }
                ],
                material: "Cotton",
                stock: 30,
                badge: "Sale",
                inStock: true,
                features: ["Traditional embroidery", "Comfortable fit", "Breathable fabric"],
                deliveryTime: "2-3 days"
            },
            {
                id: 8,
                name: "Women's Casual Dress",
                price: 1900,
                category: "women",
                tags: ["women", "casual", "dress", "trending"],
                trending: true,
                images: [
                    "img/79.jpg",
                    "img/79.jpg",
                    "img/79.jpg"
                ],
                description: "Casual yet elegant dress for everyday wear with modern Ethiopian design elements.",
                rating: 4.6,
                reviews: 89,
                sizes: ["S", "M", "L"],
                colors: [
                    { name: "Pink", hex: "#FFC0CB" },
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Green", hex: "#008000" }
                ],
                material: "Cotton Blend",
                stock: 42,
                badge: "Trending",
                inStock: true,
                features: ["Modern design", "Comfortable", "Easy care"],
                deliveryTime: "1-2 days"
            },
            {
                id: 9,
                name: "Kids Party Dress",
                price: 900,
                originalPrice: 1200,
                category: "kids",
                tags: ["kids", "party", "dress", "sale"],
                trending: false,
                images: [
                   "img/80.jpg",
                    "img/80.jpg",
                     "img/80.jpg"
                ],
                description: "Beautiful party dress for little girls with traditional Ethiopian patterns.",
                rating: 4.7,
                reviews: 34,
                sizes: ["2-4Y", "5-7Y"],
                colors: [
                    { name: "Pink", hex: "#FFC0CB" },
                    { name: "Purple", hex: "#800080" }
                ],
                material: "Cotton",
                stock: 28,
                badge: "Sale",
                inStock: true,
                features: ["Party wear", "Comfortable", "Washable"],
                deliveryTime: "2-3 days"
            },
            {
                id: 10,
                name: "Yoga Set",
                price: 1600,
                category: "fitness",
                tags: ["fitness", "yoga", "women", "new"],
                trending: true,
                images: [
                    "img/81.jpg",
                    "img/81.jpg",
                    "img/81.jpg"
                ],
                description: "Complete yoga set including top and leggings for comfortable practice sessions.",
                rating: 4.5,
                reviews: 56,
                sizes: ["S", "M", "L"],
                colors: [
                    { name: "Black", hex: "#000000" },
                    { name: "Purple", hex: "#800080" }
                ],
                material: "Spandex Blend",
                stock: 35,
                badge: "New",
                inStock: true,
                features: ["Stretchy fabric", "Moisture-wicking", "Comfortable"],
                deliveryTime: "1-2 days"
            },
            {
                id: 11,
                name: "Tigray Traditional Wear",
                price: 3500,
                category: "traditional",
                tags: ["traditional", "tigray", "cultural", "premium"],
                trending: true,
                images: [
                    "img/82.jpg",
                      "img/82.jpg",
                        "img/82.jpg"
                ],
                description: "Authentic Tigray region traditional wear with unique embroidery patterns.",
                rating: 4.8,
                reviews: 78,
                sizes: ["M", "L", "XL"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Cream", hex: "#FFFDD0" }
                ],
                material: "Premium Cotton",
                stock: 18,
                badge: "Premium",
                inStock: true,
                features: ["Authentic design", "Handmade", "Premium quality"],
                deliveryTime: "3-4 days"
            },
            {
                id: 12,
                name: "Men's Casual Wear",
                price: 1400,
                category: "men",
                tags: ["men", "casual", "everyday"],
                trending: false,
                images: [
                  "img/83.jpg",
                   "img/83.jpg",
                    "img/83.jpg"
                ],
                description: "Casual wear for men with modern Ethiopian design elements.",
                rating: 4.3,
                reviews: 45,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Grey", hex: "#808080" }
                ],
                material: "Cotton",
                stock: 50,
                badge: null,
                inStock: true,
                features: ["Casual wear", "Comfortable", "Durable"],
                deliveryTime: "1-2 days"
            },
            // Page 2 Products (13-20)
            {
                id: 13,
                name: "Women's Office Wear",
                price: 2400,
                originalPrice: 2800,
                category: "women",
                tags: ["women", "office", "formal", "sale"],
                trending: true,
                images: [
                    "img/84.jpg",
                     "img/84.jpg",
                      "img/84.jpg"
                ],
                description: "Professional office wear with Ethiopian design elements for modern women.",
                rating: 4.7,
                reviews: 92,
                sizes: ["S", "M", "L"],
                colors: [
                    { name: "Black", hex: "#000000" },
                    { name: "Navy", hex: "#000080" },
                    { name: "Grey", hex: "#808080" }
                ],
                material: "Wool Blend",
                stock: 25,
                badge: "Sale",
                inStock: true,
                features: ["Professional", "Formal", "Comfortable"],
                deliveryTime: "2-3 days"
            },
            {
                id: 14,
                name: "Kids Sports Wear",
                price: 1100,
                category: "kids",
                tags: ["kids", "sports", "active"],
                trending: true,
                images: [
                "img/85.jpg",
                "img/85.jpg",
                "img/85.jpg"
                ],
                description: "Comfortable sports wear for active kids with colorful Ethiopian patterns.",
                rating: 4.6,
                reviews: 38,
                sizes: ["5-7Y", "8-10Y", "11-13Y"],
                colors: [
                    { name: "Red", hex: "#FF0000" },
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Green", hex: "#008000" }
                ],
                material: "Polyester Blend",
                stock: 40,
                badge: "Popular",
                inStock: true,
                features: ["Sports wear", "Comfortable", "Washable"],
                deliveryTime: "2-3 days"
            },
            {
                id: 15,
                name: "Running Gear Set",
                price: 1800,
                originalPrice: 2200,
                category: "fitness",
                tags: ["fitness", "running", "sports", "sale"],
                trending: false,
              images: [
               "img/86.jpg",
                     "img/86.jpg",
                       "img/86.jpg"
                ],
                  
                description: "Complete running gear set with moisture-wicking technology for athletes.",
                rating: 4.4,
                reviews: 67,
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "Black", hex: "#000000" },
                    { name: "Orange", hex: "#FFA500" }
                ],
                material: "Technical Fabric",
                stock: 32,
                badge: "Sale",
                inStock: true,
                features: ["Moisture-wicking", "Breathable", "Lightweight"],
                deliveryTime: "2-3 days"
            },
            {
                id: 16,
                name: "Oromo Cultural Dress",
                price: 3800,
                category: "traditional",
                tags: ["traditional", "oromo", "cultural", "premium"],
                trending: true,
                images: [
                   
                       "img/87.jpg",
                    "img/87.jpg",
                    "img/87.jpg"
                ],
                description: "Beautiful Oromo cultural dress with traditional patterns and embroidery.",
                rating: 4.9,
                reviews: 85,
                sizes: ["S", "M", "L"],
                colors: [
                    { name: "White", hex: "#FFFFFF" },
                    { name: "Red", hex: "#FF0000" }
                ],
                material: "Cotton",
                stock: 15,
                badge: "Premium",
                inStock: true,
                features: ["Cultural design", "Handmade", "Premium quality"],
                deliveryTime: "3-4 days"
            },
            {
                id: 17,
                name: "Men's Jacket",
                price: 2800,
                category: "men",
                tags: ["men", "jacket", "outerwear", "new"],
                trending: true,
                images: [
                    "img/98.jpg",
                    "img/98.jpg",
                    "img/98.jpg",
                ],
                description: "Stylish jacket for men with Ethiopian design elements and modern fit.",
                rating: 4.5,
                reviews: 73,
                sizes: ["M", "L", "XL", "XXL"],
                colors: [
                    { name: "Brown", hex: "#A52A2A" },
                    { name: "Black", hex: "#000000" }
                ],
                material: "Wool Blend",
                stock: 22,
                badge: "New",
                inStock: true,
                features: ["Warm", "Stylish", "Durable"],
                deliveryTime: "2-3 days"
            },
            {
                id: 18,
                name: "Women's Traditional Blouse",
                price: 1600,
                originalPrice: 2000,
                category: "women",
                tags: ["women", "traditional", "blouse", "sale"],
                trending: false,
                images: [
                    "img/99.jpg",
                   "img/99.jpg",
                    "img/99.jpg",
                ],
            }
        ];

        // Core Variables
        let cart = [];
        let wishlist = [];
        let comparisonProducts = [];
        let recentlyViewed = [];
        let userPoints = 1250;
        let displayedProducts = 12;
        let currentFilter = 'all';
        let currentPaymentMethod = null;
        let currentPage = 1;
        const productsPerPage = 12;
        let currentSection = 'home';

        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function () {
            initializeApp();
        });

        function initializeApp() {
            loadFromStorage();
            setupEventListeners();
            startCountdown();
            updateHeaderOnScroll();
            setupPagination();
            
            // Show only home page initially
            showSection('home');
            
            // Show newsletter popup after delay
            setTimeout(showNewsletterPopup, 3000);
        }

        // Setup Pagination
        function setupPagination() {
            const loadMoreBtn = document.getElementById('load-more');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', loadNextPage);
            }
        }

        // Load Next Page
        function loadNextPage() {
            currentPage++;
            displayedProducts = currentPage* productsPerPage;
            renderProducts();
            
            // Check if there are more products to load
            const filteredProducts = getFilteredProducts();
            const loadMoreBtn = document.getElementById('load-more');
            if (loadMoreBtn) {
                if (displayedProducts >= filteredProducts.length) {
                    loadMoreBtn.textContent = 'No More Products';
                    loadMoreBtn.disabled = true;
                    loadMoreBtn.style.opacity = '0.5';
                    loadMoreBtn.style.cursor = 'not-allowed';
                }
            }
            
            // Update page info
            updatePageInfo();
        }

        function getFilteredProducts() {
            let filteredProducts = ethiopianProducts;

            switch (currentFilter) {
                case 'new':
                    filteredProducts = ethiopianProducts.filter(p => p.badge === 'New' || p.tags?.includes('new'));
                    break;
                case 'trending':
                    filteredProducts = ethiopianProducts.filter(p => p.trending);
                    break;
                case 'sale':
                    filteredProducts = ethiopianProducts.filter(p => p.originalPrice);
                    break;
                case 'all':
                    // Show all
                    break;
                default:
                    filteredProducts = ethiopianProducts.filter(p => p.category === currentFilter);
            }
            
            return filteredProducts;
        }

        // Update header on scroll
        function updateHeaderOnScroll() {
            const header = document.querySelector('header');
            if (!header) return;
            
            window.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // Setup Event Listeners
        function setupEventListeners() {
            // Home link click
            const homeLink = document.getElementById('home-link');
            if (homeLink) {
                homeLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    showSection('home');
                });
            }

            // Navigation links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const section = this.dataset.section;
                    showSection(section);
                    
                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    const mobileMenu = document.querySelector('.mobile-menu');
                    const close = document.querySelector('.close');
                    
                    if (navLinks) navLinks.classList.remove('active');
                    if (mobileMenu) mobileMenu.style.display = 'block';
                    if (close) close.style.display = 'none';
                });
            });

            // Cart Icon Click
            const cartIcon = document.getElementById('cart-icon');
            if (cartIcon) {
                cartIcon.addEventListener('click', openCartModal);
            }

            const closeCart = document.getElementById('close-cart');
            if (closeCart) {
                closeCart.addEventListener('click', closeCartModal);
            }

            // Cart Actions
            const viewCartDetails = document.getElementById('view-cart-details');
            if (viewCartDetails) {
                viewCartDetails.addEventListener('click', viewCartDetails);
            }

            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) {
                checkoutBtn.addEventListener('click', proceedToCheckout);
            }

            // Search
            const searchIcon = document.getElementById('search-icon');
            if (searchIcon) {
                searchIcon.addEventListener('click', openSearchModal);
            }

            const searchBtn = document.getElementById('search-btn');
            if (searchBtn) {
                searchBtn.addEventListener('click', openSearchModal);
            }

            const modalSearchInput = document.getElementById('modal-search-input');
            if (modalSearchInput) {
                modalSearchInput.addEventListener('input', handleSearch);
            }

            const modalSearchBtn = document.getElementById('modal-search-btn');
            if (modalSearchBtn) {
                modalSearchBtn.addEventListener('click', () => {
                    handleSearch({ target: modalSearchInput });
                });
            }

            // Navigation close
            const navMenu = document.querySelector('.nav-links');
            const mobileMenu = document.querySelector('.mobile-menu');
            const close = document.querySelector('.close');
            
            if (mobileMenu) {
                mobileMenu.addEventListener('click', function () {
                    navMenu.classList.toggle('active');
                    mobileMenu.style.display = "none";
                    if (close) close.style.display = "block";
                });
            }
            
            if (close) {
                close.addEventListener('click', function () {
                    navMenu.classList.remove('active');
                    mobileMenu.style.display = "block";
                    close.style.display = "none";
                });
            }

            // Products
            const loadMoreBtn = document.getElementById('load-more');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', loadNextPage);
            }

            // Shipping Calculator
            const calculateShippingBtn = document.getElementById('calculate-shipping');
            if (calculateShippingBtn) {
                calculateShippingBtn.addEventListener('click', calculateShipping);
            }

            // Newsletter
            const newsletterForm = document.getElementById('newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', handleNewsletter);
            }

            const popupNewsletterForm = document.getElementById('popup-newsletter-form');
            if (popupNewsletterForm) {
                popupNewsletterForm.addEventListener('submit', handlePopupNewsletter);
            }

            const popupClose = document.getElementById('popup-close');
            if (popupClose) {
                popupClose.addEventListener('click', closeNewsletterPopup);
            }

            // FABs
            const whatsappFab = document.getElementById('whatsapp-fab');
            if (whatsappFab) {
                whatsappFab.addEventListener('click', openWhatsApp);
            }

            const quickShopFab = document.getElementById('quick-shop-fab');
            if (quickShopFab) {
                quickShopFab.addEventListener('click', quickShop);
            }

            // Product Modal
            const closeProductModalBtn = document.getElementById('close-product-modal');
            if (closeProductModalBtn) {
                closeProductModalBtn.addEventListener('click', closeProductModal);
            }

            // Payment Modal
            const closePaymentModalBtn = document.getElementById('close-payment-modal');
            if (closePaymentModalBtn) {
                closePaymentModalBtn.addEventListener('click', closePaymentModal);
            }

            const nextToPayment = document.getElementById('next-to-payment');
            if (nextToPayment) {
                nextToPayment.addEventListener('click', goToPaymentStep);
            }

            const backToDelivery = document.getElementById('back-to-delivery');
            if (backToDelivery) {
                backToDelivery.addEventListener('click', goToDeliveryStep);
            }

            const confirmPayment = document.getElementById('confirm-payment');
            if (confirmPayment) {
                confirmPayment.addEventListener('click', processPayment);
            }

            // Payment Method Selection
            document.querySelectorAll('.payment-method').forEach(method => {
                method.addEventListener('click', selectPaymentMethod);
            });

            // Order Confirmation
            const trackOrderBtn = document.getElementById('track-order-btn');
            if (trackOrderBtn) {
                trackOrderBtn.addEventListener('click', trackOrder);
            }

            const continueShoppingBtn = document.getElementById('continue-shopping-btn');
            if (continueShoppingBtn) {
                continueShoppingBtn.addEventListener('click', continueShopping);
            }

            // Clear comparison
            const clearComparisonBtn = document.getElementById('clear-comparison');
            if (clearComparisonBtn) {
                clearComparisonBtn.addEventListener('click', clearComparison);
            }

            // Close modals on Escape
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closeAllModals();
                }
            });

            // Close modals on outside click
            document.addEventListener('click', function (e) {
                if (e.target.classList.contains('product-modal')) {
                    closeProductModal();
                }
                if (e.target.classList.contains('search-modal')) {
                    closeSearchModal();
                }
                if (e.target.classList.contains('cart-modal')) {
                    closeCartModal();
                }
                if (e.target.classList.contains('payment-modal')) {
                    closePaymentModal();
                }
                if (e.target.classList.contains('confirmation-modal')) {
                    closeConfirmationModal();
                }
                if (e.target.classList.contains('newsletter-popup')) {
                    closeNewsletterPopup();
                }
            });

            // Size guide
            const viewSizeGuide = document.getElementById('view-size-guide');
            if (viewSizeGuide) {
                viewSizeGuide.addEventListener('click', function () {
                    showToast('Size guide opened in new window', 'info');
                });
            }

            const sizeGuideLink = document.getElementById('size-guide-link');
            if (sizeGuideLink) {
                sizeGuideLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    showToast('Size guide opened in new window', 'info');
                });
            }

            // Navigation dropdown filter links
            document.querySelectorAll('.dropdown a[data-filter]').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const filter = this.getAttribute('data-filter');
                    showSection('products', filter);
                });
            });

            // Category cards click
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', function () {
                    const filter = this.dataset.filter;
                    showSection('products', filter);
                });
            });

            // Quick view buttons - using event delegation
            document.addEventListener('click', function (e) {
                if (e.target.classList.contains('quick-view-btn') || e.target.closest('.quick-view-btn')) {
                    const btn = e.target.classList.contains('quick-view-btn') ? e.target : e.target.closest('.quick-view-btn');
                    const productId = parseInt(btn.dataset.id);
                    if (productId) {
                        openProductModal(productId);
                    }
                }
            });
        }

        // Show/Hide Sections
        function showSection(section, filter = null) {
            currentSection = section;
            
            // Hide all dynamic content first
            document.getElementById('dynamic-content').style.display = 'none';
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('contact-section').style.display = 'none';
            
            // Reset page to top
            window.scrollTo(0, 0);
            
            // Update active navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === section) {
                    link.classList.add('active');
                }
            });
            
            switch(section) {
                case 'home':
                    document.getElementById('main-content').style.display = 'block';
                    document.getElementById('contact-section').style.display = 'block';
                    break;
                    
                case 'products':
                    loadProductsSection(filter);
                    break;
                    
                case 'categories':
                    loadCategoriesSection();
                    break;
                    
                case 'delivery':
                    loadDeliverySection();
                    break;
                    
                case 'testimonials':
                    loadTestimonialsSection();
                    break;
                    
                case 'comparison':
                    loadComparisonSection();
                    break;
                    
                case 'contact':
                    loadContactSection();
                    break;
                    
                default:
                    document.getElementById('main-content').style.display = 'block';
                    document.getElementById('contact-section').style.display = 'block';
            }
        }

        function loadProductsSection(filter = null) {
            const dynamicContent = document.getElementById('dynamic-content');
            if (!dynamicContent) return;
            
            if (filter) {
                currentFilter = filter;
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
                if (filterBtn) filterBtn.classList.add('active');
            }
            
            currentPage = 1;
            displayedProducts = productsPerPage;
            
            dynamicContent.innerHTML = `
                <section class="products" id="products-section">
                    <div class="container">
                        <div class="section-title">
                            <h2>Featured Ethiopian Products</h2>
                            <p>Discover our collection of authentic Ethiopian clothing</p>
                        </div>

                        <div class="product-filters">
                            <button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">All Products</button>
                            <button class="filter-btn ${currentFilter === 'traditional' ? 'active' : ''}" data-filter="traditional">Traditional</button>
                            <button class="filter-btn ${currentFilter === 'men' ? 'active' : ''}" data-filter="men">Men</button>
                            <button class="filter-btn ${currentFilter === 'women' ? 'active' : ''}" data-filter="women">Women</button>
                            <button class="filter-btn ${currentFilter === 'kids' ? 'active' : ''}" data-filter="kids">Kids</button>
                            <button class="filter-btn ${currentFilter === 'fitness' ? 'active' : ''}" data-filter="fitness">Fitness</button>
                            <button class="filter-btn ${currentFilter === 'new' ? 'active' : ''}" data-filter="new">New Arrivals</button>
                            <button class="filter-btn ${currentFilter === 'trending' ? 'active' : ''}" data-filter="trending">Trending</button>
                            <button class="filter-btn ${currentFilter === 'sale' ? 'active' : ''}" data-filter="sale">Sale</button>
                        </div>

                        <div class="products-grid" id="products-grid">
                            <!-- Products loaded dynamically -->
                        </div>

                        <div class="load-more-container">
                            <button class="btn btn-view-more" id="load-more">Load More Products (Page ${currentPage + 1})</button>
                        </div>
                        
                        <div class="pagination-info">
                            <span id="page-info">Page ${currentPage} of 2</span>
                        </div>

                        <!-- Recently Viewed -->
                        <div class="recently-viewed">
                            <h3>Recently Viewed Products</h3>
                            <div class="recent-grid" id="recently-viewed-grid">
                                <!-- Dynamically loaded -->
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            dynamicContent.style.display = 'block';
            document.getElementById('contact-section').style.display = 'block';
            
            // Setup filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    const filter = this.dataset.filter;
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentFilter = filter;
                    currentPage = 1;
                    displayedProducts = productsPerPage;
                    renderProducts();
                    updatePageInfo();
                });
            });
            
            // Setup load more button
            const loadMoreBtn = document.getElementById('load-more');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', loadNextPage);
            }
            
            renderProducts();
            updateRecentlyViewed();
            updatePageInfo();
        }

        function loadCategoriesSection() {
            const dynamicContent = document.getElementById('dynamic-content');
            if (!dynamicContent) return;
            
            dynamicContent.innerHTML = `
                <section class="categories" id="categories-section">
                    <div class="container">
                        <div class="section-title">
                            <h2>All Categories</h2>
                            <p>Browse our complete range of Ethiopian clothing categories</p>
                        </div>

                        <div class="categories-grid">
                            <div class="category-card" data-filter="traditional">
                                <div class="category-img"
                                    style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'); background-size: cover; background-position: center;">
                                </div>
                                <div class="category-overlay">
                                    <h3>Traditional Wear</h3>
                                    <p>Explore Collection</p>
                                </div>
                            </div>

                            <div class="category-card" data-filter="men">
                                <div class="category-img"
                                    style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'); background-size: cover; background-position: center;">
                                </div>
                                <div class="category-overlay">
                                    <h3>Men's Fashion</h3>
                                    <p>Explore Collection</p>
                                </div>
                            </div>

                            <div class="category-card" data-filter="women">
                                <div class="category-img"
                                    style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'); background-size: cover; background-position: center;">
                                </div>
                                <div class="category-overlay">
                                    <h3>Women's Fashion</h3>
                                    <p>Explore Collection</p>
                                </div>
                            </div>

                            <div class="category-card" data-filter="kids">
                                <div class="category-img"
                                    style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1591369822091-21bdddfb40dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'); background-size: cover; background-position: center;">
                                </div>
                                <div class="category-overlay">
                                    <h3>Kids Collection</h3>
                                    <p>Explore Collection</p>
                                </div>
                            </div>
                            
                            <div class="category-card" data-filter="fitness">
                                <div class="category-img"
                                    style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1594736797933-d0e64d6d5e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'); background-size: cover; background-position: center;">
                                </div>
                                <div class="category-overlay">
                                    <h3>Fitness Apparel</h3>
                                    <p>Explore Collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            dynamicContent.style.display = 'block';
            document.getElementById('contact-section').style.display = 'block';
            
            // Setup category card clicks
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', function () {
                    const filter = this.dataset.filter;
                    showSection('products', filter);
                });
            });
        }

        function loadDeliverySection() {
            const dynamicContent = document.getElementById('dynamic-content');
            if (!dynamicContent) return;
            
            dynamicContent.innerHTML = `
                <section class="delivery-section" id="delivery-section">
                    <div class="container">
                        <div class="delivery-content">
                            <h2>Nationwide Delivery Across Ethiopia</h2>
                            <p>We deliver to all major cities and regions in Ethiopia. Free delivery for orders over 1500 ETB in
                                Addis Ababa.</p>

                            <div class="delivery-cities">
                                <div class="city-card">
                                    <h4>Addis Ababa</h4>
                                    <p>1-2 days delivery</p>
                                </div>
                                <div class="city-card">
                                    <h4>Dire Dawa</h4>
                                    <p>2-3 days delivery</p>
                                </div>
                                <div class="city-card">
                                    <h4>Bahir Dar</h4>
                                    <p>3-4 days delivery</p>
                                </div>
                                <div class="city-card">
                                    <h4>Mekelle</h4>
                                    <p>4-5 days delivery</p>
                                </div>
                                <div class="city-card">
                                    <h4>Hawassa</h4>
                                    <p>3-4 days delivery</p>
                                </div>
                                <div class="city-card">
                                    <h4>Jimma</h4>
                                    <p>3-4 days delivery</p>
                                </div>
                            </div>

                            <!-- Shipping Calculator -->
                            <div class="shipping-calculator">
                                <h3>Shipping Calculator</h3>
                                <p>Calculate delivery time and cost for your location</p>
                                <div class="shipping-form">
                                    <div class="form-group">
                                        <label>From:</label>
                                        <select id="from-city" class="form-control">
                                            <option value="addis">Addis Ababa</option>
                                            <option value="dire">Dire Dawa</option>
                                            <option value="bahir">Bahir Dar</option>
                                            <option value="mekelle">Mekelle</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>To:</label>
                                        <select id="to-city" class="form-control">
                                            <option value="addis">Addis Ababa</option>
                                            <option value="dire">Dire Dawa</option>
                                            <option value="bahir">Bahir Dar</option>
                                            <option value="mekelle">Mekelle</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Weight (kg):</label>
                                        <input type="number" id="package-weight" class="form-control" value="1" min="0.1" step="0.1">
                                    </div>
                                    <div class="form-group">
                                        <label>Delivery Type:</label>
                                        <select id="delivery-type" class="form-control">
                                            <option value="standard">Standard (3-5 days)</option>
                                            <option value="express">Express (1-2 days)</option>
                                            <option value="same-day">Same Day</option>
                                        </select>
                                    </div>
                                </div>
                                <button class="btn" id="calculate-shipping">Calculate Shipping</button>
                                <div class="shipping-result" id="shipping-result" style="display: none;">
                                    <h4>Shipping Estimate</h4>
                                    <p id="shipping-time"></p>
                                    <p id="shipping-cost"></p>
                                </div>
                            </div>
                            
                            <!-- Loyalty Program -->
                            <div class="loyalty-program">
                                <h3 style="color: white; text-align: center;">FITZONE Loyalty Program</h3>
                                <p style="text-align: center;">Earn 1 point for every 10 ETB spent</p>

                                <div class="loyalty-levels">
                                    <div class="loyalty-level">
                                        <div class="level-icon"><i class="fas fa-medal"></i></div>
                                        <h4>Silver</h4>
                                        <p>0-999 points</p>
                                    </div>
                                    <div class="loyalty-level active">
                                        <div class="level-icon"><i class="fas fa-crown"></i></div>
                                        <h4>Gold</h4>
                                        <p>1000-4999 points</p>
                                    </div>
                                    <div class="loyalty-level">
                                        <div class="level-icon"><i class="fas fa-gem"></i></div>
                                        <h4>Platinum</h4>
                                        <p>5000+ points</p>
                                    </div>
                                </div>

                                <div class="loyalty-points">
                                    <i class="fas fa-coins" style="font-size: 2rem;"></i>
                                    <div class="points-display">${userPoints.toLocaleString()}</div>
                                    <span>Points Earned</span>
                                </div>
                                <div style="text-align: center; margin-top: 20px;">
                                    <p>Next level (Gold): ${Math.max(0, 1000 - userPoints)} points needed</p>
                                    <div style="background: rgba(255,255,255,0.3); height: 10px; border-radius: 5px; margin: 10px 0;">
                                        <div style="width: ${Math.min(100, (userPoints / 1000) * 100)}%; background: yellow; height: 100%; border-radius: 5px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            dynamicContent.style.display = 'block';
            document.getElementById('contact-section').style.display = 'block';
            
            // Setup shipping calculator
            const calculateShippingBtn = document.getElementById('calculate-shipping');
            if (calculateShippingBtn) {
                calculateShippingBtn.addEventListener('click', calculateShipping);
            }
        }

        function loadTestimonialsSection() {
            const dynamicContent = document.getElementById('dynamic-content');
            if (!dynamicContent) return;
            
            dynamicContent.innerHTML = `
                <section class="testimonials" id="testimonials-section">
                    <div class="container">
                        <div class="section-title">
                            <h2>Customer Reviews</h2>
                            <p>What our customers say about FITZONE</p>
                        </div>

                        <div class="testimonials-slider">
                            <div class="testimonial-slide">
                                <div class="testimonial-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p class="testimonial-text">"The quality of the Habesha Kemis I ordered exceeded my expectations.
                                    The delivery to Addis was fast and the packaging was excellent. Will definitely shop again!"</p>
                                <p class="testimonial-author">- Selamawit M., Addis Ababa</p>
                            </div>
                            
                            <div class="testimonial-slide" style="margin-top: 30px;">
                                <div class="testimonial-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <p class="testimonial-text">"Excellent customer service and beautiful traditional clothing. My order arrived in Bahir Dar within 3 days as promised. Highly recommended!"</p>
                                <p class="testimonial-author">- Alemayehu T., Bahir Dar</p>
                            </div>
                            
                            <div class="testimonial-slide" style="margin-top: 30px;">
                                <div class="testimonial-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p class="testimonial-text">"The fitness apparel is top quality and very comfortable. Perfect for my workouts. Great prices and fast delivery!"</p>
                                <p class="testimonial-author">- Daniel K., Dire Dawa</p>
                            </div>
                        </div>
                        
                        <!-- Newsletter Section -->
                        <div class="newsletter" style="margin-top: 60px;">
                            <div class="container">
                                <div class="newsletter-content">
                                    <h2>Stay Updated</h2>
                                    <p>Subscribe to our newsletter for the latest Ethiopian fashion trends and exclusive offers</p>
                                    <form class="newsletter-form" id="newsletter-form">
                                        <input type="email" placeholder="Enter your email address" required>
                                        <button type="submit" class="btn">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            dynamicContent.style.display = 'block';
            document.getElementById('contact-section').style.display = 'block';
            
            // Setup newsletter form
            const newsletterForm = document.getElementById('newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', handleNewsletter);
            }
        }

        function loadComparisonSection() {
            const dynamicContent = document.getElementById('dynamic-content');
            if (!dynamicContent) return;
            
            dynamicContent.innerHTML = `
                <section class="products" id="comparison-section">
                    <div class="container">
                        <div class="section-title">
                            <h2>Product Comparison</h2>
                            <p>Compare up to 4 products side by side</p>
                        </div>

                        <div class="comparison-grid" id="comparison-grid">
                            <div class="comparison-card" id="comparison-slot-1">
                                <p>Add product to compare</p>
                                <button class="btn add-to-comparison-btn">Add Product</button>
                            </div>
                            <div class="comparison-card" id="comparison-slot-2">
                                <p>Add product to compare</p>
                                <button class="btn add-to-comparison-btn">Add Product</button>
                            </div>
                            <div class="comparison-card" id="comparison-slot-3">
                                <p>Add product to compare</p>
                                <button class="btn add-to-comparison-btn">Add Product</button>
                            </div>
                            <div class="comparison-card" id="comparison-slot-4">
                                <p>Add product to compare</p>
                                <button class="btn add-to-comparison-btn">Add Product</button>
                            </div>
                        </div>

                        <button class="btn" id="clear-comparison" style="margin-top: 20px;">Clear Comparison</button>

                        <div class="comparison-table" id="comparison-table" style="display: none;">
                            <h4>Comparison Details</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Features</th>
                                        <th id="comp-product-1">Product 1</th>
                                        <th id="comp-product-2">Product 2</th>
                                        <th id="comp-product-3">Product 3</th>
                                        <th id="comp-product-4">Product 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="comparison-feature">Price</td>
                                        <td id="comp-price-1">-</td>
                                        <td id="comp-price-2">-</td>
                                        <td id="comp-price-3">-</td>
                                        <td id="comp-price-4">-</td>
                                    </tr>
                                    <tr>
                                        <td class="comparison-feature">Rating</td>
                                        <td id="comp-rating-1">-</td>
                                        <td id="comp-rating-2">-</td>
                                        <td id="comp-rating-3">-</td>
                                        <td id="comp-rating-4">-</td>
                                    </tr>
                                    <tr>
                                        <td class="comparison-feature">Material</td>
                                        <td id="comp-material-1">-</td>
                                        <td id="comp-material-2">-</td>
                                        <td id="comp-material-3">-</td>
                                        <td id="comp-material-4">-</td>
                                    </tr>
                                    <tr>
                                        <td class="comparison-feature">Available Sizes</td>
                                        <td id="comp-sizes-1">-</td>
                                        <td id="comp-sizes-2">-</td>
                                        <td id="comp-sizes-3">-</td>
                                        <td id="comp-sizes-4">-</td>
                                    </tr>
                                    <tr>
                                        <td class="comparison-feature">Delivery Time</td>
                                        <td id="comp-delivery-1">-</td>
                                        <td id="comp-delivery-2">-</td>
                                        <td id="comp-delivery-3">-</td>
                                        <td id="comp-delivery-4">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            `;
            
            dynamicContent.style.display = 'block';
            document.getElementById('contact-section').style.display = 'block';
            
            // Setup comparison section
            updateComparisonUI();
            
            // Setup clear comparison button
            const clearComparisonBtn = document.getElementById('clear-comparison');
            if (clearComparisonBtn) {
                clearComparisonBtn.addEventListener('click', clearComparison);
            }
            
            // Setup add to comparison buttons
            document.querySelectorAll('.add-to-comparison-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    showToast('Browse products and click the compare button to add products', 'info');
                });
            });
        }

        function loadContactSection() {
            const dynamicContent = document.getElementById('dynamic-content');
            if (!dynamicContent) return;
            
            dynamicContent.innerHTML = `
                <section class="features" id="contact-section-main">
                    <div class="container">
                        <div class="section-title">
                            <h2>Contact Us</h2>
                            <p>Get in touch with FITZONE customer service</p>
                        </div>
                        
                        <div class="features-grid">
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <h3>Phone Support</h3>
                                <p>+251 91 234 5678</p>
                                <p>Mon-Sat: 8:00 AM - 8:00 PM</p>
                            </div>
                            
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <h3>Email Us</h3>
                                <p>info@fitzone.com</p>
                                <p>support@fitzone.com</p>
                            </div>
                            
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fab fa-whatsapp"></i>
                                </div>
                                <h3>WhatsApp</h3>
                                <p>+251 92 345 6789</p>
                                <p>24/7 Customer Support</p>
                            </div>
                            
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <h3>Visit Us</h3>
                                <p>Nationwide Delivery</p>
                                <p>Across Ethiopia</p>
                            </div>
                        </div>
                        
                        <div class="shipping-calculator" style="margin-top: 40px;">
                            <h3>Send Us a Message</h3>
                            <form id="contact-form">
                                <div class="form-group">
                                    <label for="contact-name">Full Name *</label>
                                    <input type="text" id="contact-name" class="form-control" placeholder="Your name" required>
                                </div>
                                <div class="form-group">
                                    <label for="contact-email">Email Address *</label>
                                    <input type="email" id="contact-email" class="form-control" placeholder="your@email.com" required>
                                </div>
                                <div class="form-group">
                                    <label for="contact-phone">Phone Number</label>
                                    <input type="tel" id="contact-phone" class="form-control" placeholder="+251 91 234 5678">
                                </div>
                                <div class="form-group">
                                    <label for="contact-message">Message *</label>
                                    <textarea id="contact-message" class="form-control" rows="5" placeholder="How can we help you?" required></textarea>
                                </div>
                                <button type="submit" class="btn" style="width: 100%;">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
            `;
            
            dynamicContent.style.display = 'block';
            document.getElementById('contact-section').style.display = 'block';
            
            // Setup contact form
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    showToast('Thank you for your message! We will contact you soon.', 'success');
                    this.reset();
                });
            }
        }

        // Update page info
        function updatePageInfo() {
            const pageInfo = document.getElementById('page-info');
            if (pageInfo) {
                const filteredProducts = getFilteredProducts();
                const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
                pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
            }
        }

        // Render Products Grid
        function renderProducts() {
            const filteredProducts = getFilteredProducts();
            const productsToShow = filteredProducts.slice(0, displayedProducts);
            const grid = document.getElementById('products-grid');
            
            if (!grid) return;

            grid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');

            // Update load more button
            const loadMoreBtn = document.getElementById('load-more');
            if (loadMoreBtn) {
                if (displayedProducts >= filteredProducts.length) {
                    loadMoreBtn.textContent = 'No More Products';
                    loadMoreBtn.disabled = true;
                    loadMoreBtn.style.opacity = '0.5';
                    loadMoreBtn.style.cursor = 'not-allowed';
                } else {
                    loadMoreBtn.textContent = `Load More Products (Page ${currentPage + 1})`;
                    loadMoreBtn.disabled = false;
                    loadMoreBtn.style.opacity = '1';
                    loadMoreBtn.style.cursor = 'pointer';
                }
            }
            
            // Update product count display
            const sectionTitle = document.querySelector('#products-section .section-title p');
            if (sectionTitle) {
                sectionTitle.textContent = `Showing ${productsToShow.length} of ${filteredProducts.length} products`;
            }
        }

        function createProductCard(product) {
            const stockPercentage = (product.stock / 50) * 100;
            const stockClass = stockPercentage < 30 ? 'stock-low' : '';
            const isInWish = isInWishlist(product.id);
            const isInComp = isInComparison(product.id);

            return `
                <div class="product-card">
                    ${product.badge ? `<div class="product-badge ${product.badge === 'Sale' ? 'product-sale-badge' : ''}">${product.badge}</div>` : ''}
                    <div class="product-img-container">
                        <img src="${product.images[0]}" alt="${product.name}" class="product-img">
                        <div class="product-gallery">
                            ${product.images.slice(0, 3).map((img, i) => `
                                <img src="${img}" class="gallery-thumb" data-index="${i}" alt="Thumb ${i + 1}">
                            `).join('')}
                        </div>
                        <div class="stock-bar ${stockClass}">
                            <div class="stock-level" style="width: ${stockPercentage}%"></div>
                            <div class="stock-info">${product.stock} left</div>
                        </div>
                        <div class="quick-view">
                            <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                        </div>
                    </div>
                    <div class="product-content">
                        <div class="product-header">
                            <h3 class="product-title">${product.name}</h3>
                            <div>
                                <span class="product-price">${product.price} ETB</span>
                                ${product.originalPrice ? `
                                    <span class="product-old-price">${product.originalPrice} ETB</span>
                                ` : ''}
                            </div>
                        </div>
                        <p class="product-desc">${product.description}</p>
                        <div class="product-tags">
                            ${product.tags.slice(0, 3).map(tag => `
                                <span class="product-tag">${tag}</span>
                            `).join('')}
                        </div>
                        <div class="product-footer">
                            <div class="product-rating">
                                ${getRatingStars(product.rating)} (${product.reviews})
                            </div>
                            <div class="product-actions">
                                <button class="action-btn ${isInComp ? 'compare-btn active' : 'compare-btn'}" 
                                        onclick="toggleComparison(${product.id})">
                                    <i class="fas fa-exchange-alt"></i>
                                </button>
                                <button class="action-btn ${isInWish ? 'wishlisted' : ''}" 
                                        onclick="toggleWishlist(${product.id})">
                                    <i class="${isInWish ? 'fas' : 'far'} fa-heart"></i>
                                </button>
                                <button class="action-btn add-to-cart" onclick="addToCart(${product.id})">
                                    <i class="fas fa-shopping-bag"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ========== ALL OTHER FUNCTIONS (Cart, Wishlist, Comparison, etc.) ==========
        // These functions remain exactly the same as in the previous code
        // I'll include a few key ones for reference, but you should copy all the other functions

        // Shopping Cart Modal Functions
        function openCartModal() {
            const cartModal = document.getElementById('cart-modal');
            if (!cartModal) return;
            
            cartModal.style.display = 'block';
            setTimeout(() => {
                cartModal.style.transform = 'translateX(0)';
            }, 10);
            updateCartModal();
            document.body.style.overflow = 'hidden';
        }

        function closeCartModal() {
            const cartModal = document.getElementById('cart-modal');
            if (!cartModal) return;
            
            cartModal.style.transform = 'translateX(100%)';
            setTimeout(() => {
                cartModal.style.display = 'none';
            }, 300);
            document.body.style.overflow = 'auto';
        }

        function updateCartModal() {
            const cartContent = document.getElementById('cart-modal-content');
            const totalAmountElement = document.getElementById('cart-total-amount');
            
            if (!cartContent || !totalAmountElement) return;

            if (cart.length === 0) {
                cartContent.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-bag"></i>
                        <h3>Your cart is empty</h3>
                        <p>Add some products to your cart</p>
                        <button class="btn" onclick="closeCartModal()" style="margin-top: 20px;">Continue Shopping</button>
                    </div>
                `;
                totalAmountElement.textContent = '0 ETB';
                return;
            }

            // Calculate total
            let total = 0;
            cart.forEach(item => {
                total += item.price * item.quantity;
            });

            // Render cart items
            cartContent.innerHTML = `
                <div class="cart-items">
                    ${cart.map(item => `
                        <div class="cart-item" data-id="${item.id}">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                            <div class="cart-item-info">
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-price">${item.price} ETB</div>
                                <div class="cart-item-quantity">
                                    <button class="cart-quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                                    <span class="cart-quantity">${item.quantity}</span>
                                    <button class="cart-quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                                <div style="margin-top: 5px; color: #666;">
                                    Subtotal: <strong>${item.price * item.quantity} ETB</strong>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${cart.length > 2 ? `
                    <div style="text-align: center; margin: 20px 0;">
                        <button class="btn" onclick="clearCart()">Clear Cart</button>
                    </div>
                ` : ''}
            `;

            totalAmountElement.textContent = `${total} ETB`;
        }

        // Cart Functions
        function addToCart(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            if (!product) return;

            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity++;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.images[0]
                });
            }

            // Add points (1 point per 10 ETB)
            const pointsEarned = Math.floor(product.price / 10);
            addPoints(pointsEarned);

            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            showToast(`${product.name} added to cart`, 'success');
        }

        function increaseQuantity(productId) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity++;
                updateCartDisplay();
                updateCartModal();
                saveToStorage();
            }
        }

        function decreaseQuantity(productId) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                } else {
                    cart.splice(itemIndex, 1);
                }
                updateCartDisplay();
                updateCartModal();
                saveToStorage();
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            showToast('Item removed from cart', 'warning');
        }

        function clearCart() {
            if (confirm('Are you sure you want to clear your cart?')) {
                cart = [];
                updateCartDisplay();
                updateCartModal();
                saveToStorage();
                showToast('Cart cleared', 'info');
            }
        }

        function updateCartDisplay() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const cartCountElement = document.querySelector('.cart-count');
            if (cartCountElement) {
                cartCountElement.textContent = totalItems;
            }
        }

        // Cart Actions
        function viewCartDetails() {
            closeCartModal();
            showToast('Opening detailed cart view...', 'info');
        }

        function proceedToCheckout() {
            if (cart.length === 0) {
                showToast('Your cart is empty', 'warning');
                return;
            }
            closeCartModal();
            openPaymentModal();
        }

        // Payment Modal Functions
        function openPaymentModal() {
            const paymentModal = document.getElementById('payment-modal');
            if (!paymentModal) return;
            
            // Update order summary
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.15;
            const total = subtotal + tax;

            const orderSubtotal = document.getElementById('order-subtotal');
            const orderTax = document.getElementById('order-tax');
            const orderTotal = document.getElementById('order-total');
            const paymentTotal = document.getElementById('payment-total');
            
            if (orderSubtotal) orderSubtotal.textContent = `${subtotal.toLocaleString()} ETB`;
            if (orderTax) orderTax.textContent = `${tax.toLocaleString()} ETB`;
            if (orderTotal) orderTotal.textContent = `${total.toLocaleString()} ETB`;
            if (paymentTotal) paymentTotal.textContent = `${total.toLocaleString()} ETB`;

            paymentModal.style.display = 'block';
            document.body.style.overflow = 'hidden';

            // Reset to step 1
            resetPaymentSteps();
        }

        function closePaymentModal() {
            const paymentModal = document.getElementById('payment-modal');
            if (paymentModal) {
                paymentModal.style.display = 'none';
            }
            document.body.style.overflow = 'auto';
        }

        function resetPaymentSteps() {
            // Reset all steps
            document.querySelectorAll('.payment-step').forEach((step, index) => {
                step.classList.remove('active', 'completed');
                if (index === 0) step.classList.add('active');
            });

            // Show delivery form, hide others
            document.querySelectorAll('.payment-form').forEach(form => form.classList.remove('active'));
            const deliveryForm = document.getElementById('delivery-form');
            if (deliveryForm) deliveryForm.classList.add('active');

            // Hide all payment details
            document.querySelectorAll('.payment-details').forEach(detail => detail.style.display = 'none');

            // Reset payment method
            currentPaymentMethod = null;
            document.querySelectorAll('.payment-method').forEach(method => method.classList.remove('selected'));
            const selectedMethod = document.getElementById('selected-method');
            if (selectedMethod) selectedMethod.textContent = 'Not selected';
        }

        function selectPaymentMethod(e) {
            const method = e.currentTarget;
            const methodType = method.dataset.method;

            // Remove selected from all methods
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));

            // Add selected to clicked method
            method.classList.add('selected');
            currentPaymentMethod = methodType;

            // Update selected method display
            const methodName = method.querySelector('h4').textContent;
            const selectedMethod = document.getElementById('selected-method');
            if (selectedMethod) selectedMethod.textContent = methodName;

            // Show relevant payment details
            document.querySelectorAll('.payment-details').forEach(detail => detail.style.display = 'none');

            if (methodType === 'cbe') {
                const cbeDetails = document.getElementById('cbe-details');
                if (cbeDetails) cbeDetails.style.display = 'block';
            } else if (methodType === 'telebirr') {
                const telebirrDetails = document.getElementById('telebirr-details');
                if (telebirrDetails) telebirrDetails.style.display = 'block';
            } else if (methodType === 'cash') {
                const cashDetails = document.getElementById('cash-details');
                if (cashDetails) cashDetails.style.display = 'block';
            } else {
                const otherDetails = document.getElementById('other-details');
                if (otherDetails) {
                    otherDetails.style.display = 'block';
                    const otherTitle = document.getElementById('other-title');
                    const otherDescription = document.getElementById('other-description');
                    if (otherTitle) otherTitle.textContent = `${methodName} Payment`;
                    if (otherDescription) {
                        otherDescription.textContent = 
                            `Please complete payment through ${methodName}. You can enter transaction reference below if available.`;
                    }
                }
            }
        }

        function goToPaymentStep() {
            // Validate delivery form
            const fullName = document.getElementById('full-name');
            const phone = document.getElementById('phone');
            const region = document.getElementById('region');
            const address = document.getElementById('address');
            
            if (!fullName || !phone || !region || !address) {
                showToast('Please fill all required fields', 'warning');
                return;
            }
            
            const fullNameValue = fullName.value.trim();
            const phoneValue = phone.value.trim();
            const regionValue = region.value;
            const addressValue = address.value.trim();

            if (!fullNameValue || !phoneValue || !regionValue || !addressValue) {
                showToast('Please fill all required fields', 'warning');
                return;
            }

            // Validate Ethiopian phone number
            const phoneRegex = /^\+251[0-9]{9}$/;
            if (!phoneRegex.test(phoneValue)) {
                showToast('Please enter a valid Ethiopian phone number (+251 followed by 9 digits)', 'warning');
                return;
            }

            // Update steps
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            if (step1 && step2) {
                step1.classList.remove('active');
                step1.classList.add('completed');
                step2.classList.add('active');
            }

            // Switch forms
            const deliveryForm = document.getElementById('delivery-form');
            const paymentMethodForm = document.getElementById('payment-method-form');
            if (deliveryForm && paymentMethodForm) {
                deliveryForm.classList.remove('active');
                paymentMethodForm.classList.add('active');
            }
        }

        function goToDeliveryStep() {
            // Update steps
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            if (step1 && step2) {
                step2.classList.remove('active');
                step1.classList.add('active');
            }

            // Switch forms
            const deliveryForm = document.getElementById('delivery-form');
            const paymentMethodForm = document.getElementById('payment-method-form');
            if (deliveryForm && paymentMethodForm) {
                paymentMethodForm.classList.remove('active');
                deliveryForm.classList.add('active');
            }
        }

        function processPayment() {
            if (!currentPaymentMethod) {
                showToast('Please select a payment method', 'warning');
                return;
            }

            // Update steps
            const step2 = document.getElementById('step-2');
            const step3 = document.getElementById('step-3');
            if (step2 && step3) {
                step2.classList.remove('active');
                step2.classList.add('completed');
                step3.classList.add('active');
            }

            // Switch to processing form
            const paymentMethodForm = document.getElementById('payment-method-form');
            const processingForm = document.getElementById('processing-form');
            if (paymentMethodForm) paymentMethodForm.classList.remove('active');
            if (processingForm) processingForm.style.display = 'block';

            // Start processing animation
            simulatePaymentProcessing();
        }

        function simulatePaymentProcessing() {
            const processingBar = document.getElementById('processing-bar');
            const processingText = document.getElementById('processing-text');
            
            if (!processingBar || !processingText) return;

            let progress = 0;
            const steps = [
                "Initializing payment gateway...",
                "Connecting to bank server...",
                "Processing transaction...",
                "Verifying payment details...",
                "Finalizing transaction..."
            ];

            const interval = setInterval(() => {
                progress += 20;
                processingBar.style.width = `${progress}%`;

                if (progress <= 100) {
                    const stepIndex = Math.min(Math.floor(progress / 20), steps.length - 1);
                    processingText.textContent = steps[stepIndex];
                }

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        completePayment();
                    }, 1000);
                }
            }, 500);
        }

        function completePayment() {
            // Generate order ID
            const orderId = 'ORDER#' + Math.random().toString(36).substr(2, 9).toUpperCase();

            // Get order details
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.15;
            const total = subtotal + tax;
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            const regionSelect = document.getElementById('region');
            const region = regionSelect ? regionSelect.options[regionSelect.selectedIndex]?.text : 'Unknown';
            
            const paymentMethodSelected = document.querySelector('.payment-method.selected h4');
            const paymentMethod = paymentMethodSelected ? paymentMethodSelected.textContent : 'Unknown';

            // Update confirmation modal
            const orderIdDisplay = document.getElementById('order-id-display');
            const orderSummaryDetails = document.getElementById('order-summary-details');
            const orderDeliveryInfo = document.getElementById('order-delivery-info');
            const orderPaymentMethod = document.getElementById('order-payment-method');
            
            if (orderIdDisplay) orderIdDisplay.textContent = orderId;
            if (orderSummaryDetails) orderSummaryDetails.textContent = `${itemCount} items • Total: ${total.toLocaleString()} ETB`;
            if (orderDeliveryInfo) orderDeliveryInfo.textContent = `Delivery to: ${region}, 3-5 days`;
            if (orderPaymentMethod) orderPaymentMethod.textContent = `Payment: ${paymentMethod}`;

            // Save order to history
            saveOrderToHistory(orderId, total, itemCount, paymentMethod);

            // Close payment modal and show confirmation
            closePaymentModal();
            openConfirmationModal();

            // Clear cart
            cart = [];
            updateCartDisplay();
            saveToStorage();
        }

        function saveOrderToHistory(orderId, total, itemCount, paymentMethod) {
            const order = {
                id: orderId,
                date: new Date().toISOString(),
                total: total,
                items: itemCount,
                paymentMethod: paymentMethod,
                status: 'Processing'
            };

            let orderHistory = JSON.parse(localStorage.getItem('fitzone_order_history') || '[]');
            orderHistory.unshift(order);

            // Keep only last 50 orders
            if (orderHistory.length > 50) {
                orderHistory = orderHistory.slice(0, 50);
            }

            localStorage.setItem('fitzone_order_history', JSON.stringify(orderHistory));
        }

        function openConfirmationModal() {
            const confirmationModal = document.getElementById('confirmation-modal');
            if (confirmationModal) {
                confirmationModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }

        function closeConfirmationModal() {
            const confirmationModal = document.getElementById('confirmation-modal');
            if (confirmationModal) {
                confirmationModal.style.display = 'none';
            }
            document.body.style.overflow = 'auto';
        }

        function trackOrder() {
            closeConfirmationModal();
            showToast('Order tracking page will open shortly', 'info');
        }

        function continueShopping() {
            closeConfirmationModal();
            showToast('Welcome back to shopping!', 'success');
        }

        // Toast Notification System
        function showToast(message, type = 'success', duration = 5000) {
            const container = document.getElementById('toast-container');
            if (!container) return;
            
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `
                <i class="fas fa-${getToastIcon(type)} toast-icon"></i>
                <div class="toast-content">${message}</div>
                <button class="toast-close"><i class="fas fa-times"></i></button>
            `;

            container.appendChild(toast);

            setTimeout(() => toast.classList.add('show'), 10);

            // Auto remove
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, duration);

            // Manual close
            const closeBtn = toast.querySelector('.toast-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    toast.classList.remove('show');
                    setTimeout(() => toast.remove(), 300);
                });
            }
        }

        function getToastIcon(type) {
            switch (type) {
                case 'success': return 'check-circle';
                case 'error': return 'exclamation-circle';
                case 'warning': return 'exclamation-triangle';
                case 'info': return 'info-circle';
                default: return 'check-circle';
            }
        }

        // Advanced Product Modal
        function openProductModal(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            if (!product) return;

            // Track recently viewed
            addToRecentlyViewed(productId);

            const modalContent = document.getElementById('product-modal-content');
            if (!modalContent) return;
            
            modalContent.innerHTML = createProductModalHTML(product);

            const productModal = document.getElementById('product-modal');
            if (productModal) {
                productModal.style.display = 'flex';
            }
            document.body.style.overflow = 'hidden';

            // Setup modal interactions
            setupProductModalEvents(product);
        }

        function createProductModalHTML(product) {
            const stockPercentage = (product.stock / 50) * 100;
            const stockClass = stockPercentage < 30 ? 'low' : '';
            const isInWish = isInWishlist(product.id);
            const isInComp = isInComparison(product.id);

            return `
                <div class="product-modal-images">
                    <img src="${product.images[0]}" alt="${product.name}" class="product-modal-main-img" id="modal-main-img">
                    <div class="product-modal-thumbnails" id="modal-thumbnails">
                        ${product.images.map((img, index) => `
                            <img src="${img}" class="product-modal-thumbnail ${index === 0 ? 'active' : ''}" 
                                 data-index="${index}" alt="Thumbnail ${index + 1}">
                        `).join('')}
                    </div>
                </div>
                <div class="product-modal-info">
                    <div class="product-modal-header">
                        <h2 class="product-modal-title">${product.name}</h2>
                        <div>
                            <span class="product-modal-price">${product.price} ETB</span>
                            ${product.originalPrice ?
                        `<span class="product-modal-old-price">${product.originalPrice} ETB</span>` : ''}
                        </div>
                        <div class="product-rating" style="margin-top: 10px;">
                            ${getRatingStars(product.rating)} (${product.reviews} reviews)
                        </div>
                    </div>
                    
                    <p class="product-modal-description">${product.description}</p>
                    
                    <div class="product-modal-options">
                        ${product.colors ? `
                        <div class="option-group">
                            <div class="option-label">Color:</div>
                            <div class="option-values">
                                ${product.colors.map((color, index) => `
                                    <div class="option-value ${index === 0 ? 'selected' : ''}" 
                                         data-color="${color.hex}"
                                         style="background: ${color.hex}; color: ${getContrastColor(color.hex)}">
                                        ${color.name}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        ${product.sizes ? `
                        <div class="option-group">
                            <div class="option-label">Size:</div>
                            <div class="option-values">
                                ${product.sizes.map((size, index) => `
                                    <div class="option-value ${index === 0 ? 'selected' : ''}" 
                                         data-size="${size}">
                                        ${size}
                                    </div>
                                `).join('')}
                            </div>
                            <a href="#" class="size-guide-link" style="font-size: 0.9rem; color: #078930;">View size guide</a>
                        </div>
                        ` : ''}
                        
                        <div class="option-group">
                            <div class="option-label">Quantity:</div>
                            <div class="quantity-selector">
                                <button class="quantity-btn" id="decrease-qty">-</button>
                                <span class="quantity-display" id="quantity-display">1</span>
                                <button class="quantity-btn" id="increase-qty">+</button>
                                <div class="stock-display">
                                    <div class="stock-indicator">
                                        <div class="stock-fill ${stockClass}" style="width: ${stockPercentage}%"></div>
                                    </div>
                                    <span>${product.stock} items left</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-modal-actions">
                        <button class="btn" id="add-to-cart-modal">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                        <button class="btn btn-yellow" id="buy-now-modal">
                            <i class="fas fa-bolt"></i> Buy Now
                        </button>
                        <button class="action-btn ${isInWish ? 'wishlisted' : ''}" id="wishlist-modal">
                            <i class="${isInWish ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                        <button class="action-btn compare-btn ${isInComp ? 'active' : ''}" id="compare-modal">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                    </div>
                    
                    <div class="product-modal-footer">
                        <div>
                            <div class="option-label">Features:</div>
                            <ul>
                                ${product.features ? product.features.map(f => `<li>${f}</li>`).join('') : ''}
                            </ul>
                        </div>
                        
                        ${product.tags ? `
                        <div>
                            <div class="option-label">Tags:</div>
                            <div class="product-tags-list">
                                ${product.tags.map(tag => `
                                    <span class="product-modal-tag">${tag}</span>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        function setupProductModalEvents(product) {
            // Thumbnail click
            document.querySelectorAll('.product-modal-thumbnail').forEach(thumb => {
                thumb.addEventListener('click', function () {
                    const index = this.dataset.index;
                    const mainImg = document.getElementById('modal-main-img');
                    if (mainImg) mainImg.src = product.images[index];
                    document.querySelectorAll('.product-modal-thumbnail').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Option selection
            document.querySelectorAll('.option-value').forEach(option => {
                option.addEventListener('click', function () {
                    const group = this.closest('.option-group');
                    group.querySelectorAll('.option-value').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });

            // Quantity controls
            let quantity = 1;
            const quantityDisplay = document.getElementById('quantity-display');
            
            const increaseBtn = document.getElementById('increase-qty');
            const decreaseBtn = document.getElementById('decrease-qty');
            
            if (increaseBtn && quantityDisplay) {
                increaseBtn.addEventListener('click', () => {
                    if (quantity < product.stock) {
                        quantity++;
                        quantityDisplay.textContent = quantity;
                    }
                });
            }
            
            if (decreaseBtn && quantityDisplay) {
                decreaseBtn.addEventListener('click', () => {
                    if (quantity > 1) {
                        quantity--;
                        quantityDisplay.textContent = quantity;
                    }
                });
            }

            // Action buttons
            const addToCartBtn = document.getElementById('add-to-cart-modal');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', () => {
                    addToCartFromModal(product.id, quantity);
                });
            }

            const buyNowBtn = document.getElementById('buy-now-modal');
            if (buyNowBtn) {
                buyNowBtn.addEventListener('click', () => {
                    buyNow(product.id, quantity);
                });
            }

            const wishlistBtn = document.getElementById('wishlist-modal');
            if (wishlistBtn) {
                wishlistBtn.addEventListener('click', () => {
                    toggleWishlist(product.id);
                    if (isInWishlist(product.id)) {
                        wishlistBtn.classList.add('wishlisted');
                        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
                    } else {
                        wishlistBtn.classList.remove('wishlisted');
                        wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
                    }
                });
            }

            const compareBtn = document.getElementById('compare-modal');
            if (compareBtn) {
                compareBtn.addEventListener('click', () => {
                    toggleComparison(product.id);
                    if (isInComparison(product.id)) {
                        compareBtn.classList.add('active');
                    } else {
                        compareBtn.classList.remove('active');
                    }
                });
            }
        }

        // Search Functionality
        function openSearchModal() {
            const searchModal = document.getElementById('search-modal');
            const modalSearchInput = document.getElementById('modal-search-input');
            
            if (searchModal) {
                searchModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
            
            if (modalSearchInput) {
                modalSearchInput.focus();
            }
        }

        function closeSearchModal() {
            const searchModal = document.getElementById('search-modal');
            if (searchModal) {
                searchModal.style.display = 'none';
            }
            document.body.style.overflow = 'auto';
        }

        function handleSearch(e) {
            const query = e.target.value.toLowerCase().trim();
            const resultsContainer = document.getElementById('search-results');
            
            if (!resultsContainer) return;

            if (query.length < 2) {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search fa-2x" style="color: #ccc; margin-bottom: 15px;"></i>
                        <p>Type at least 2 characters to search</p>
                    </div>
                `;
                return;
            }

            const results = ethiopianProducts.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.tags?.some(tag => tag.toLowerCase().includes(query))
            );

            if (results.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search fa-2x" style="color: #ccc; margin-bottom: 15px;"></i>
                        <p>No products found for "${query}"</p>
                    </div>
                `;
                return;
            }

            resultsContainer.innerHTML = results.map(product => `
                <div class="search-result-item" onclick="openProductModal(${product.id}); closeSearchModal();">
                    <img src="${product.images[0]}" alt="${product.name}" class="search-result-img">
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <p>${product.price} ETB</p>
                        <small>${product.category}</small>
                    </div>
                </div>
            `).join('');
        }

        // Shipping Calculator
        function calculateShipping() {
            const fromCity = document.getElementById('from-city');
            const toCity = document.getElementById('to-city');
            const packageWeight = document.getElementById('package-weight');
            const deliveryType = document.getElementById('delivery-type');
            
            if (!fromCity || !toCity || !packageWeight || !deliveryType) return;

            const fromCityValue = fromCity.value;
            const toCityValue = toCity.value;
            const weight = parseFloat(packageWeight.value) || 1;
            const deliveryTypeValue = deliveryType.value;

            // Calculate costs based on parameters
            let baseCost = 0;
            let days = 0;

            // Base cost per kg
            const perKgCost = 50;
            baseCost = weight * perKgCost;

            // Adjust for distance
            if (fromCityValue !== toCityValue) {
                baseCost += 200; // Inter-city fee
                days += 2;
            }

            // Adjust for delivery type
            switch (deliveryTypeValue) {
                case 'express':
                    baseCost *= 1.5;
                    days = Math.max(1, days - 1);
                    break;
                case 'same-day':
                    baseCost *= 2;
                    days = 1;
                    break;
                default:
                    days += 3;
            }

            // Free delivery for orders over 1500 ETB
            const isFreeDelivery = totalCartValue() >= 1500;

            const result = document.getElementById('shipping-result');
            const timeElement = document.getElementById('shipping-time');
            const costElement = document.getElementById('shipping-cost');

            if (!result || !timeElement || !costElement) return;

            timeElement.textContent = `Estimated delivery: ${days} business day${days !== 1 ? 's' : ''}`;

            if (isFreeDelivery) {
                costElement.innerHTML = `<strong style="color: #078930;">FREE Delivery</strong>`;
            } else {
                costElement.textContent = `Shipping cost: ${Math.round(baseCost)} ETB`;
            }

            result.style.display = 'block';
            showToast('Shipping calculated successfully!', 'success');
        }

        // Loyalty Program
        function addPoints(amount) {
            userPoints += amount;
            updateLoyaltyDisplay();
            saveToStorage();
            showToast(`Earned ${amount} points!`, 'success');
        }

        function updateLoyaltyDisplay() {
            // Update points display
            const pointsElement = document.querySelector('.points-display');
            if (pointsElement) {
                pointsElement.textContent = userPoints.toLocaleString();
            }

            // Update loyalty level
            let level = 'Silver';
            if (userPoints >= 5000) level = 'Platinum';
            else if (userPoints >= 1000) level = 'Gold';

            // Update active level in UI
            document.querySelectorAll('.loyalty-level').forEach(el => {
                el.classList.remove('active');
                const h4 = el.querySelector('h4');
                if (h4 && h4.textContent === level) {
                    el.classList.add('active');
                }
            });
        }

        // Product Comparison
        function toggleComparison(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            const index = comparisonProducts.findIndex(p => p.id === productId);

            if (index === -1) {
                if (comparisonProducts.length >= 4) {
                    showToast('Maximum 4 products can be compared', 'warning');
                    return;
                }
                comparisonProducts.push(product);
                showToast(`${product.name} added to comparison`, 'success');
            } else {
                comparisonProducts.splice(index, 1);
                showToast(`${product.name} removed from comparison`, 'warning');
            }

            updateComparisonUI();
            saveToStorage();
            if (currentSection === 'products') {
                renderProducts(); // Update compare icons on product cards
            }
        }

        function updateComparisonUI() {
            // Update comparison grid
            for (let i = 1; i <= 4; i++) {
                const slot = document.getElementById(`comparison-slot-${i}`);
                if (!slot) continue;
                
                const product = comparisonProducts[i - 1];

                if (product) {
                    slot.innerHTML = `
                        <img src="${product.images[0]}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px;">
                        <h4>${product.name}</h4>
                        <p>${product.price} ETB</p>
                        <button class="remove-comparison" onclick="removeFromComparison(${product.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                } else {
                    slot.innerHTML = `
                        <p>Add product to compare</p>
                        <button class="btn add-to-comparison-btn">Add Product</button>
                    `;
                }
            }

            // Show/hide comparison table
            const table = document.getElementById('comparison-table');
            if (table) {
                if (comparisonProducts.length >= 2) {
                    table.style.display = 'block';
                    updateComparisonTable();
                } else {
                    table.style.display = 'none';
                }
            }
        }

        function updateComparisonTable() {
            // Clear all cells first
            for (let i = 1; i <= 4; i++) {
                const productCell = document.getElementById(`comp-product-${i}`);
                const priceCell = document.getElementById(`comp-price-${i}`);
                const ratingCell = document.getElementById(`comp-rating-${i}`);
                const materialCell = document.getElementById(`comp-material-${i}`);
                const sizesCell = document.getElementById(`comp-sizes-${i}`);
                const deliveryCell = document.getElementById(`comp-delivery-${i}`);
                
                if (productCell) productCell.textContent = '-';
                if (priceCell) priceCell.textContent = '-';
                if (ratingCell) ratingCell.textContent = '-';
                if (materialCell) materialCell.textContent = '-';
                if (sizesCell) sizesCell.textContent = '-';
                if (deliveryCell) deliveryCell.textContent = '-';
            }

            // Update with comparison products
            comparisonProducts.forEach((product, index) => {
                const i = index + 1;
                const productCell = document.getElementById(`comp-product-${i}`);
                const priceCell = document.getElementById(`comp-price-${i}`);
                const ratingCell = document.getElementById(`comp-rating-${i}`);
                const materialCell = document.getElementById(`comp-material-${i}`);
                const sizesCell = document.getElementById(`comp-sizes-${i}`);
                const deliveryCell = document.getElementById(`comp-delivery-${i}`);
                
                if (productCell) productCell.textContent = product.name;
                if (priceCell) priceCell.textContent = `${product.price} ETB`;
                if (ratingCell) ratingCell.textContent = product.rating;
                if (materialCell) materialCell.textContent = product.material || 'Cotton';
                if (sizesCell) sizesCell.textContent = product.sizes?.join(', ') || 'S,M,L,XL';
                if (deliveryCell) deliveryCell.textContent = product.deliveryTime || '1-2 days';
            });
        }

        // Remove from Comparison
        function removeFromComparison(productId) {
            comparisonProducts = comparisonProducts.filter(p => p.id !== productId);
            updateComparisonUI();
            saveToStorage();
            if (currentSection === 'products') {
                renderProducts(); // Update compare icons
            }
            showToast('Product removed from comparison', 'warning');
        }

        // Clear Comparison
        function clearComparison() {
            comparisonProducts = [];
            updateComparisonUI();
            saveToStorage();
            if (currentSection === 'products') {
                renderProducts();
            }
            showToast('Comparison cleared', 'info');
        }

        // Recently Viewed
        function addToRecentlyViewed(productId) {
            const index = recentlyViewed.indexOf(productId);
            if (index !== -1) recentlyViewed.splice(index, 1);
            recentlyViewed.unshift(productId);

            // Keep only last 10
            if (recentlyViewed.length > 10) {
                recentlyViewed.pop();
            }

            updateRecentlyViewed();
            saveToStorage();
        }

        function updateRecentlyViewed() {
            const grid = document.getElementById('recently-viewed-grid');
            if (!grid) return;
            
            if (recentlyViewed.length === 0) {
                grid.innerHTML = '<p>No recently viewed products</p>';
                return;
            }

            grid.innerHTML = recentlyViewed.map(id => {
                const product = ethiopianProducts.find(p => p.id === id);
                if (!product) return '';

                return `
                    <div class="product-card" style="cursor: pointer;" onclick="openProductModal(${product.id})">
                        <div class="product-img-container">
                            <img src="${product.images[0]}" alt="${product.name}" class="product-img">
                            <div class="quick-view">
                                <button class="quick-view-btn" data-id="${product.id}">View</button>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-header">
                                <h3 class="product-title">${product.name}</h3>
                                <span class="product-price">${product.price} ETB</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Newsletter Popup
        function showNewsletterPopup() {
            const popup = document.getElementById('newsletter-popup');
            if (!popup) return;
            
            const lastShown = localStorage.getItem('newsletterLastShown');
            const now = Date.now();
            const oneDay = 24 * 60 * 60 * 1000;

            if (!lastShown || (now - lastShown) > oneDay) {
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }

        function closeNewsletterPopup() {
            const popup = document.getElementById('newsletter-popup');
            if (popup) {
                popup.style.display = 'none';
            }
            document.body.style.overflow = 'auto';
            localStorage.setItem('newsletterLastShown', Date.now());
        }

        // Quick Shop Feature
        function quickShop() {
            // Show random product
            const randomIndex = Math.floor(Math.random() * ethiopianProducts.length);
            openProductModal(ethiopianProducts[randomIndex].id);
        }

        // Helper Functions
        function getRatingStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            let stars = '';

            for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
            if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
            for (let i = 0; i < 5 - Math.ceil(rating); i++) stars += '<i class="far fa-star"></i>';

            return stars;
        }

        function getContrastColor(hexcolor) {
            // If hex color is short form
            if (hexcolor.length === 4) {
                hexcolor = '#' + hexcolor[1] + hexcolor[1] + hexcolor[2] + hexcolor[2] + hexcolor[3] + hexcolor[3];
            }

            const r = parseInt(hexcolor.substr(1, 2), 16);
            const g = parseInt(hexcolor.substr(3, 2), 16);
            const b = parseInt(hexcolor.substr(5, 2), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128 ? '#000000' : '#FFFFFF';
        }

        function totalCartValue() {
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        }

        function isInWishlist(productId) {
            return wishlist.some(item => item.id === productId);
        }

        function isInComparison(productId) {
            return comparisonProducts.some(item => item.id === productId);
        }

        // Storage Functions
        function saveToStorage() {
            localStorage.setItem('fitzone_cart', JSON.stringify(cart));
            localStorage.setItem('fitzone_wishlist', JSON.stringify(wishlist));
            localStorage.setItem('fitzone_comparison', JSON.stringify(comparisonProducts));
            localStorage.setItem('fitzone_recently_viewed', JSON.stringify(recentlyViewed));
            localStorage.setItem('fitzone_points', userPoints.toString());
        }

        function loadFromStorage() {
            try {
                cart = JSON.parse(localStorage.getItem('fitzone_cart') || '[]');
                wishlist = JSON.parse(localStorage.getItem('fitzone_wishlist') || '[]');
                comparisonProducts = JSON.parse(localStorage.getItem('fitzone_comparison') || '[]');
                recentlyViewed = JSON.parse(localStorage.getItem('fitzone_recently_viewed') || '[]');
                userPoints = parseInt(localStorage.getItem('fitzone_points') || '1250');

                updateCartDisplay();
                updateWishlistDisplay();
                updateComparisonUI();
                updateRecentlyViewed();
                updateLoyaltyDisplay();
            } catch (e) {
                console.log('Error loading from storage:', e);
                // Reset to defaults
                cart = [];
                wishlist = [];
                comparisonProducts = [];
                recentlyViewed = [];
                userPoints = 1250;
            }
        }

        // Countdown Timer
        function startCountdown() {
            let hours = 24;
            let minutes = 59;
            let seconds = 59;

            const interval = setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    clearInterval(interval);
                    // Reset for demo
                    hours = 24;
                    minutes = 59;
                    seconds = 59;
                }

                const countdownHours = document.getElementById('countdown-hours');
                const countdownMinutes = document.getElementById('countdown-minutes');
                const countdownSeconds = document.getElementById('countdown-seconds');
                
                if (countdownHours) countdownHours.textContent = hours.toString().padStart(2, '0');
                if (countdownMinutes) countdownMinutes.textContent = minutes.toString().padStart(2, '0');
                if (countdownSeconds) countdownSeconds.textContent = seconds.toString().padStart(2, '0');
            }, 1000);
        }

        // WhatsApp Integration
        function openWhatsApp() {
            const phone = '+251912345678';
            const message = 'Hello FITZONE, I have a question about your products.';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            showToast('Opening WhatsApp...', 'info');
        }

        // Close All Modals
        function closeAllModals() {
            closeCartModal();
            closePaymentModal();
            closeConfirmationModal();
            closeProductModal();
            closeSearchModal();
        }

        // Close Product Modal
        function closeProductModal() {
            const productModal = document.getElementById('product-modal');
            if (productModal) {
                productModal.style.display = 'none';
            }
            document.body.style.overflow = 'auto';
        }

        // Wishlist Functions
        function toggleWishlist(productId) {
            const product = ethiopianProducts.find(p => p.id === productId);
            const index = wishlist.findIndex(item => item.id === productId);

            if (index === -1) {
                wishlist.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0]
                });
                showToast(`${product.name} added to wishlist`, 'success');
            } else {
                wishlist.splice(index, 1);
                showToast(`${product.name} removed from wishlist`, 'warning');
            }

            updateWishlistDisplay();
            saveToStorage();
            if (currentSection === 'products') {
                renderProducts(); // Update wishlist icons
            }
        }

        function updateWishlistDisplay() {
            const wishlistCountElement = document.querySelector('.wishlist-count');
            if (wishlistCountElement) {
                wishlistCountElement.textContent = wishlist.length;
            }
        }

        // Newsletter Handlers
        function handleNewsletter(e) {
            e.preventDefault();
            const emailInput = e.target.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';
            showToast(`Thank you for subscribing with ${email}!`, 'success');
            e.target.reset();
        }

        function handlePopupNewsletter(e) {
            e.preventDefault();
            const emailInput = e.target.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';
            closeNewsletterPopup();
            showToast(`Thank you! 10% discount code: FITZONE10`, 'success');
            e.target.reset();
        }

        // Buy Now Function
        function buyNow(productId, quantity = 1) {
            const product = ethiopianProducts.find(p => p.id === productId);
            if (!product) return;

            // Add to cart with quantity
            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.images[0]
                });
            }

            // Add points
            const pointsEarned = Math.floor((product.price * quantity) / 10);
            addPoints(pointsEarned);

            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            closeProductModal();
            openPaymentModal();
            showToast('Proceeding to checkout...', 'info');
        }

        // Add to Cart from Modal
        function addToCartFromModal(productId, quantity = 1) {
            const product = ethiopianProducts.find(p => p.id === productId);

            if (!product) return;

            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.images[0]
                });
            }

            // Add points
            const pointsEarned = Math.floor((product.price * quantity) / 10);
            addPoints(pointsEarned);

            updateCartDisplay();
            updateCartModal();
            saveToStorage();
            showToast(`${quantity} x ${product.name} added to cart`, 'success');
        }

        // Initial setup
        updateCartDisplay();
        updateWishlistDisplay();
        updateComparisonUI();
        updateRecentlyViewed();
        updateLoyaltyDisplay();