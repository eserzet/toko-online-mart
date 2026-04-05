/**
 * NB Mart - Toko Online Sederhana
 * JavaScript utama untuk mengelola aplikasi
 */

// ============================================
// KONFIGURASI ADMIN
// ============================================

// Ganti nomor ini dengan nomor WhatsApp admin (format: 6281234567890)
const ADMIN_WHATSAPP = "6285124599123";

// ============================================
// DATA PRODUK
// ============================================
// Admin bisa menambah, edit, atau hapus produk di sini

const products = [
    {
        id: 1,
        name: "Galon Isi Ulang Rahmatan Water",
        price: 7000,
        description: "Galon Isi Ulang Rahmatan Water, menyegarkan . Cocok untuk kebutuhan harian Anda. Diproduksi dengan standar kualitas terbaik.",
        image: "https://cdn.antaranews.com/cache/1200x800/2021/03/25/2611-galon.jpeg",
        category: "AIR MINUM"
    },
    {
        id: 2,
        name: "Minyak Goreng ",
        price: 106000,
        description: "Minyak goreng berkualitas premium, sehat, dan tidak berisiko kolesterol tinggi. Terbuat dari bahan alami pilihan.",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
        category: "MINYAK"
    },
    {
        id: 3,
        name: "Gula pasir ",
        price: 15000,
        description: "Gula pasir halus berkualitas, manis alami, cocok untuk minuman dan kue. Produk lokal terbaik.",
        image: "https://images.unsplash.com/photo-1722882269634-94ac63927efa?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "GULA"
    },
    {
        id: 4,
        name: "Kopi Arabika 250g",
        price: 45000,
        description: "Kopi arabika asli dari pegunungan Indonesia. Aroma khas, rasa nikmat, sempurna untuk memulai hari Anda.",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
        category: "Minuman"
    },
    {
        id: 5,
        name: "Pembalut Wanita Premium",
        price: 25000,
        description: "softex premium, kaya antioksidan, baik untuk Mis V. Tanpa bahan pengawet.",
        image: "https://down-id.img.susercontent.com/file/3ad1707aef32cc357f1ba72036995edc",
        category: "Pembalut"
    },
    {
        id: 6,
        name: "Sabun Mandi Herbal",
        price: 5000,
        description: "Sabun mandi herbal alami dengan wangi melati. Lembut di kulit, tidak menyebabkan iritasi.",
        image: "https://media.istockphoto.com/id/1336458030/photo/sea-moss-personal-care-ingredient-for-skin-care-soap-lotion-skin-care-vertical-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=taPLk3vNOzo7H3Z-v47kYKxso-1WiBFRZRZ3qDkHOho=",
        category: "Kebutuhan Rumah"
    },
    {
        id: 7,
        name: "Shampoo Natural",
        price: 10000,
        description: "Shampoo dengan bahan alami, menghaluskan dan menutrisi rambut. Bebas dari bahan kimia berbahaya.",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
        category: "Kebutuhan Rumah"
    },
    {
        id: 8,
        name: "Deterjen Cair 1L",
        price: 5000,
        description: "Deterjen cair dengan formula concentrated, membersihkan noda membandel, wangi tahan lama.",
        image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&h=300&fit=crop",
        category: "Kebutuhan Rumah"
    },
    {
        id: 9,
        name: "ROTI",
        price: 2500,
        description: "ROTI BERKUALITAS",
        image: "https://harga.web.id/wp-content/uploads/roti-aoka.jpg",
        category: "Kebutuhan Rumah"
    },
    {
        id: 10,
        name: "Molto Pewangi",
        price: 11500,
        description: "7x kesegaran anti bau",
        image: "https://media.karousell.com/media/photos/products/2021/5/21/molto_softener_1621621599_5ef200f8_progressive.jpg",
        category: "Kebutuhan Rumah"
    },
    {
        id: 11,
        name: "HIT Anti Nyamuk",
        price: 33300,
        description: "Hit Pembasmi nyamuk",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r990-lm1jcbxsg9afc8",
        category: "Kebutuhan Rumah"
    },
    {
        id: 12,
        name: "ZEN ANTI BACTERIAL",
        price: 41800,
        description: "Zen Anti Bacterial Body Wash",
        image: "https://th.bing.com/th/id/OIP.hA_cRCk0mB6a40uZGTEIBgHaHa?w=187&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
        category: "Kebutuhan Rumah"
    },
    {
        id: 13,
        name: "Kecap Bango",
        price: 27000,
        description: "Kecap Bango berkualitas ",
        image: "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/01/19/ad4137907d0b4ef2bbf75be18fc82006.jpg",
        category: "Kebutuhan Rumah"
    },
    {
        id: 14,
        name: "Galon Le Minerale",
        price: 14000,
        description: " Galon Le Minerale berkualitas menyegarkan",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-71622654/le_minerale_le_minerale_galon_air_mineral_5_liter_full02_pac04kjf.jpeg",
        category: "Kebutuhan Rumah"
    },
    {
        id: 15,
        name: "SoSoft 2-1 Deterjen Tumbuhan",
        price: 19500,
        description: "SoSoft 2-1 Deterjen tumbuhan",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m23anw23js8v04",
        category: "Kebutuhan Rumah"
    },
    {
        id: 16,
        name: "LifeBuoy",
        price: 41500,
        description: "lifebuoy Anti Bacterial Bodywash",
        image: "https://cf.shopee.co.id/file/3e269c370693cf73aa46fd5be4f3664a",
        category: "Kebutuhan Rumah"
    },
    {
        id: 17,
        name: "INDOMILK",
        price: 15000,
        description: "Susu Indo Milk creamy Original, kemasan ekonomis",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lsb1cywaqtfd5d",
        category: "Kebutuhan Rumah"
    },
    {
        id: 18,
        name: " Susu Frisian Flag",
        price: 20500,
        description: "Susu Frisian flag kental manis cokelat, kemasan ekonomis",
        image: "https://cf.shopee.co.id/file/sg-11134201-22100-3gbuhln5majv4a",
        category: "Kebutuhan Rumah"
    },

];

// ============================================
// UTILITAS
// ============================================

// Format harga ke Rupiah
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Format pesan WhatsApp
function formatWhatsAppMessage(product, quantity, total, address) {
    return `Halo admin NB Mart, saya ingin membeli ${product.name} sebanyak ${quantity}. Berikut alamat saya: ${address}.`;
}

// Validasi input
function validateInput(quantity, address) {
    const errors = [];
    
    if (!quantity || quantity <= 0) {
        errors.push("Jumlah barang harus diisi dan lebih dari 0");
    }
    
    if (!address || address.trim() === "") {
        errors.push("Alamat pengiriman harus diisi");
    }
    
    return errors;
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// ============================================
// ROUTER SEDERHANA
// ============================================

const router = {
    currentPage: 'home',
    
    navigate(page, params = {}) {
        this.currentPage = page;
        this.render(page, params);
        window.scrollTo(0, 0);
    },
    
    render(page, params) {
        const app = document.getElementById('app');
        
        switch(page) {
            case 'home':
                app.innerHTML = renderHomePage();
                break;
            case 'product-detail':
                app.innerHTML = renderProductDetailPage(params.productId);
                break;
            case 'tutorial':
                app.innerHTML = renderTutorialPage();
                break;
            default:
                app.innerHTML = renderHomePage();
        }
    }
};

// ============================================
// RENDER HALAMAN
// ============================================

// Render Halaman Home
function renderHomePage() {
    const productsHTML = products.map(product => `
        <div class="product-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" onclick="router.navigate('product-detail', {productId: ${product.id}})">
            <div class="h-48 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
            </div>
            <div class="p-5">
                <span class="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-full mb-2">${product.category}</span>
                <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">${product.name}</h3>
                <p class="text-gray-500 text-sm mb-3 line-clamp-2">${product.description}</p>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-bold text-primary-600">${formatPrice(product.price)}</span>
                    <button class="btn-primary bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium text-sm">
                        Beli
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    return `
        <!-- Hero Section -->
        <section class="hero-section py-16 md:py-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center fade-in">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Selamat Datang di <span class="text-primary-600">NB Mart</span>
                    </h1>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Toko online sederhana dengan produk berkualitas, langsung dikirim!
                    </p>
                    <button onclick="document.getElementById('products-section').scrollIntoView({behavior: 'smooth'})" 
                            class="btn-primary bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg">
                        Lihat Produk
                    </button>
                </div>
            </div>
        </section>

        <!-- Products Section -->
        <section id="products-section" class="py-12 md:py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Produk Kami</h2>
                    <p class="text-gray-600 max-w-xl mx-auto">Pilih produk berkualitas dengan harga terbaik untuk kebutuhan Anda</p>
                </div>
                
                <div class="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    ${productsHTML}
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="bg-white py-12 md:py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center p-6">
                        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Produk Berkualitas</h3>
                        <p class="text-gray-600">Semua produk kami dipilih dengan teliti untuk memastikan kualitas terbaik</p>
                    </div>
                    <div class="text-center p-6">
                        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Harga Terjangkau</h3>
                        <p class="text-gray-600">Dapatkan produk terbaik dengan harga yang bersahabat di kantong</p>
                    </div>
                    <div class="text-center p-6">
                        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Order via WhatsApp</h3>
                        <p class="text-gray-600">Pesan langsung melalui WhatsApp dengan cara yang mudah dan cepat</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-primary-500 py-12 md:py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold text-white mb-4">Butuh Bantuan?</h2>
                <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Pelajari cara menggunakan website ini dengan mengunjungi halaman panduan penggunaan</p>
                <button onclick="router.navigate('tutorial')" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Lihat Cara Penggunaan
                </button>
            </div>
        </section>
    `;
}

// Render Halaman Detail Produk
function renderProductDetailPage(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return `
            <div class="min-h-screen flex items-center justify-center">
                <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Produk tidak ditemukan</h2>
                    <button onclick="router.navigate('home')" class="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600">
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        `;
    }
    
    return `
        <section class="py-8 md:py-12 bg-gray-50 min-h-screen">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumb -->
                <nav class="mb-6">
                    <ol class="flex items-center space-x-2 text-sm">
                        <li><button onclick="router.navigate('home')" class="text-gray-500 hover:text-primary-600">Beranda</button></li>
                        <li><span class="text-gray-400">/</span></li>
                        <li><span class="text-primary-600 font-medium">${product.name}</span></li>
                    </ol>
                </nav>

                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <!-- Product Image -->
                        <div class="h-64 md:h-auto">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                        </div>
                        
                        <!-- Product Info & Order Form -->
                        <div class="p-6 md:p-8">
                            <span class="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-full mb-3">${product.category}</span>
                            <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">${product.name}</h1>
                            <p class="text-gray-600 mb-6 leading-relaxed">${product.description}</p>
                            
                            <div class="border-t pt-6">
                                <p class="text-sm text-gray-500 mb-2">Harga</p>
                                <p class="text-3xl font-bold text-primary-600 mb-6">${formatPrice(product.price)}</p>
                                
                                <!-- Alert Container -->
                                <div id="alert-container"></div>
                                
                                <!-- Order Form -->
                                <form id="order-form" onsubmit="handleOrder(event, ${product.id})">
                                    <div class="mb-4">
                                        <label for="quantity" class="block text-sm font-medium text-gray-700 mb-2">Jumlah Barang</label>
                                        <div class="flex items-center">
                                            <button type="button" onclick="updateQuantity(-1)" class="w-10 h-10 bg-gray-100 rounded-l-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                                                </svg>
                                            </button>
                                            <input type="number" id="quantity" name="quantity" value="1" min="1" 
                                                   class="w-20 h-10 text-center border-y border-gray-200 focus:outline-none focus:ring-0"
                                                   onchange="updateTotal(${product.price})">
                                            <button type="button" onclick="updateQuantity(1)" class="w-10 h-10 bg-gray-100 rounded-r-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-4">
                                        <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Alamat Pengiriman</label>
                                        <textarea id="address" name="address" rows="3" 
                                                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                                                  placeholder="Masukkan alamat lengkap Anda (Jalan, RT/RW, Kelurahan, Kecamatan, Kota, Kode Pos)"></textarea>
                                    </div>
                                    
                                    <div class="bg-primary-50 rounded-lg p-4 mb-6">
                                        <div class="flex justify-between items-center">
                                            <span class="text-gray-600">Total Harga:</span>
                                            <span id="total-price" class="text-2xl font-bold text-primary-600">${formatPrice(product.price)}</span>
                                        </div>
                                    </div>
                                    
                                    <button type="submit" class="btn-primary w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        <span>Beli Sekarang</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Back Button -->
                <div class="mt-6">
                    <button onclick="router.navigate('home')" class="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </section>
    `;
}

// Render Halaman Tutorial
function renderTutorialPage() {
    return `
        <section class="py-12 md:py-16 bg-gray-50 min-h-screen">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Cara Menggunakan Website</h1>
                    <p class="text-gray-600">Panduan lengkap untuk pembeli dan admin NB Mart</p>
                </div>

                <!-- Pembeli Section -->
                <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Untuk Pembeli</h2>
                    </div>
                    
                    <div class="space-y-6">
                        <div class="step-card">
                            <div class="step-number">1</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Pilih Produk</h3>
                            <p class="text-gray-600">Jelajahi halaman beranda dan pilih produk yang Anda inginkan dari daftar produk yang tersedia.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">2</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Klik Tombol "Beli"</h3>
                            <p class="text-gray-600">Klik tombol "Beli" pada produk yang dipilih untuk masuk ke halaman detail produk.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">3</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Masukkan Jumlah Barang</h3>
                            <p class="text-gray-600">Tentukan berapa banyak barang yang ingin Anda beli menggunakan tombol plus/minus atau ketik langsung.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">4</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Masukkan Alamat Lengkap</h3>
                            <p class="text-gray-600">Isi alamat pengiriman lengkap Anda termasuk nama jalan, RT/RW, kelurahan, kecamatan, dan kota.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">5</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Klik "Beli Sekarang"</h3>
                            <p class="text-gray-600">Setelah semua data terisi, klik tombol "Beli Sekarang" untuk melanjutkan.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">6</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Arahkan ke WhatsApp</h3>
                            <p class="text-gray-600">Anda akan otomatis diarahkan ke aplikasi WhatsApp dengan pesan yang sudah terisi lengkap.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">7</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Kirim Pesan ke Admin</h3>
                            <p class="text-gray-600">Kirim pesan tersebut ke admin NB Mart. Admin akan segera memproses pesanan Anda.</p>
                        </div>
                    </div>
                </div>

                <!-- Admin Section -->
                <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Untuk Admin</h2>
                    </div>
                    
                    <div class="space-y-6">
                        <div class="step-card">
                            <div class="step-number" style="background-color: #2563eb;">1</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Buka File script.js</h3>
                            <p class="text-gray-600">Buka file script.js di folder website NB Mart menggunakan text editor seperti VS Code, Notepad++, atau editor lainnya.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number" style="background-color: #2563eb;">2</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Temukan Array Products</h3>
                            <p class="text-gray-600">Cari bagian <code class="bg-gray-100 px-2 py-1 rounded text-sm">const products = [...]</code> di dalam file script.js.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number" style="background-color: #2563eb;">3</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Tambahkan Produk Baru</h3>
                            <p class="text-gray-600">Tambahkan objek produk baru dengan format:</p>
                            <div class="bg-gray-800 rounded-lg p-4 mt-2 overflow-x-auto">
                                <code class="text-green-400 text-sm">
{<br>
&nbsp;&nbsp;id: 9,<br>
&nbsp;&nbsp;name: "Nama Produk",<br>
&nbsp;&nbsp;price: 50000,<br>
&nbsp;&nbsp;description: "Deskripsi produk",<br>
&nbsp;&nbsp;image: "https://url-gambar.jpg",<br>
&nbsp;&nbsp;category: "Kategori"<br>
}
                                </code>
                            </div>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number" style="background-color: #2563eb;">4</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Edit atau Hapus Produk</h3>
                            <p class="text-gray-600">Untuk edit, ubah data produk yang sudah ada. Untuk hapus, hapus seluruh objek produk dari array.</p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number" style="background-color: #2563eb;">5</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Ubah Nomor WhatsApp (Opsional)</h3>
                            <p class="text-gray-600">Ganti nomor WhatsApp admin di bagian atas file: <code class="bg-gray-100 px-2 py-1 rounded text-sm">const ADMIN_WHATSAPP = "6281234567890"</code></p>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number" style="background-color: #2563eb;">6</div>
                            <h3 class="font-semibold text-gray-800 mb-1">Simpan dan Upload</h3>
                            <p class="text-gray-600">Simpan perubahan file, lalu upload ulang ke hosting website Anda.</p>
                        </div>
                    </div>
                </div>

                <!-- Back Button -->
                <div class="mt-8 text-center">
                    <button onclick="router.navigate('home')" class="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </section>
    `;
}

// ============================================
// FUNGSI ORDER
// ============================================

// Update quantity
function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value) || 0;
    let newValue = currentValue + change;
    
    if (newValue < 1) newValue = 1;
    quantityInput.value = newValue;
    
    // Update total price
    const productId = new URLSearchParams(window.location.search).get('productId');
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        updateTotal(product.price);
    }
}

// Update total price display
function updateTotal(price) {
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const total = price * quantity;
    document.getElementById('total-price').textContent = formatPrice(total);
}

// Show alert
function showAlert(message, type = 'error') {
    const alertContainer = document.getElementById('alert-container');
    const alertClass = type === 'error' ? 'alert-error' : 'alert-success';
    
    alertContainer.innerHTML = `
        <div class="alert ${alertClass} fade-in">
            <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    ${type === 'error' 
                        ? '<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>'
                        : '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>'
                    }
                </svg>
                <span>${message}</span>
            </div>
        </div>
    `;
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        alertContainer.innerHTML = '';
    }, 5000);
}

// Handle order form submission
function handleOrder(event, productId) {
    event.preventDefault();
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quantity = parseInt(document.getElementById('quantity').value);
    const address = document.getElementById('address').value.trim();
    
    // Validasi
    const errors = validateInput(quantity, address);
    
    if (errors.length > 0) {
        showAlert(errors.join('<br>'), 'error');
        return;
    }
    
    // Calculate total
    const total = product.price * quantity;
    
    // Format message
    const message = formatWhatsAppMessage(product, quantity, total, address);
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodedMessage}`;
    
    // Save order to localStorage (optional, for tracking)
    const order = {
        productId: productId,
        productName: product.name,
        quantity: quantity,
        total: total,
        address: address,
        date: new Date().toISOString()
    };
    
    const orders = JSON.parse(localStorage.getItem('nbmart_orders') || '[]');
    orders.push(order);
    localStorage.setItem('nbmart_orders', JSON.stringify(orders));
    
    // Show success message
    showAlert('Mengarahkan ke WhatsApp...', 'success');
    
    // Redirect to WhatsApp
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
    }, 1000);
}

// ============================================
// INISIALISASI
// ============================================

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render initial page
    router.render('home');
    
    console.log('NB Mart - Toko Online Sederhana');
    console.log('================================');
    console.log('Total Produk:', products.length);
    console.log('Admin WhatsApp:', ADMIN_WHATSAPP);
    console.log('================================');
});
