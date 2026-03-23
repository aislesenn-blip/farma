// --- MOCK DATASETS ---
// Generating 30+ mock farms programmatically to simulate scale
const locations = [
    { name: "Arusha", lat: -3.3667, lng: 36.6833 },
    { name: "Dodoma", lat: -6.1731, lng: 35.7419 },
    { name: "Moshi", lat: -3.3386, lng: 37.3364 },
    { name: "Mwanza", lat: -2.5167, lng: 32.9000 },
    { name: "Singida", lat: -4.8167, lng: 34.7500 },
    { name: "Morogoro", lat: -6.8228, lng: 37.6612 },
    { name: "Iringa", lat: -7.7667, lng: 35.7000 },
    { name: "Mbeya", lat: -8.9000, lng: 33.4500 }
];
const soils = ["Loam", "Sandy", "Clay", "Volcanic", "Sandy Loam", "Silt"];
const waters = ["High", "Medium", "Low", "Very High"];

const mockFarms = Array.from({ length: 32 }, (_, i) => {
    const loc = locations[i % locations.length];
    return {
        id: i + 1,
        name: `Farm Plot #${1000 + i} ${loc.name}`,
        location: loc.name,
        lat: loc.lat + (Math.random() - 0.5) * 1.5, // Add some jitter for map
        lng: loc.lng + (Math.random() - 0.5) * 1.5,
        size: Math.floor(Math.random() * 50) + 5,
        soil: soils[Math.floor(Math.random() * soils.length)],
        water: waters[Math.floor(Math.random() * waters.length)],
        price: Math.floor(Math.random() * 2000) + 500,
        score: Math.floor(Math.random() * 30) + 70,
        imageQuery: ["farmland", "agriculture", "crops", "farm", "soil", "rural landscape"][i % 6] + " " + (i%3) // Adding i%3 ensures slightly different queries for Unsplash
    };
});

const mockProducts = [
    { id: 1, category: "Seeds", name: "Drought-Resistant Maize Seed", supplier: "AgriSeed Co.", price: 45.00, unit: "bag (10kg)", rating: 4.8, imageQuery: "seeds" },
    { id: 2, category: "Fertilizers", name: "NPK 15-15-15 Premium", supplier: "GrowWell", price: 32.50, unit: "bag (50kg)", rating: 4.5, imageQuery: "fertilizer" },
    { id: 3, category: "Pesticides", name: "Organic Neem Extract", supplier: "EcoFarming", price: 18.00, unit: "liter", rating: 4.9, imageQuery: "pesticide" },
    { id: 4, category: "Irrigation", name: "Drip Tape Roll 1000m", supplier: "WaterSmart", price: 120.00, unit: "roll", rating: 4.7, imageQuery: "irrigation" },
    { id: 5, category: "Seeds", name: "High-Yield Soybean", supplier: "AgriSeed Co.", price: 55.00, unit: "bag (10kg)", rating: 4.6, imageQuery: "soybeans" },
    { id: 6, category: "Fertilizers", name: "Urea 46% Nitrogen", supplier: "GrowWell", price: 28.00, unit: "bag (50kg)", rating: 4.4, imageQuery: "soil fertilizer" },
    { id: 7, category: "Seeds", name: "Sunflower Seeds Hybrid", supplier: "SunCo", price: 38.00, unit: "bag (5kg)", rating: 4.7, imageQuery: "sunflower seeds" },
    { id: 8, category: "Pesticides", name: "Fungicide Spray", supplier: "CropProtect", price: 25.00, unit: "bottle (1L)", rating: 4.2, imageQuery: "crop spray" }
];

const mockEquipment = [
    { id: 1, category: "Tractors", name: "John Deere 5075E", provider: "KiliTractors Ltd", price: 150, unit: "day", rating: 4.9, imageQuery: "tractor" },
    { id: 2, category: "Harvesters", name: "Class Dominator 130", provider: "AgriRentals", price: 450, unit: "day", rating: 4.7, imageQuery: "harvester" },
    { id: 3, category: "Planters", name: "Monosem 4-Row Planter", provider: "FarmTech", price: 80, unit: "day", rating: 4.6, imageQuery: "planter machine" },
    { id: 4, category: "Tractors", name: "Massey Ferguson 385", provider: "KiliTractors Ltd", price: 130, unit: "day", rating: 4.5, imageQuery: "tractor field" },
    { id: 5, category: "Irrigation", name: "Mobile Pivot System", provider: "WaterTech", price: 200, unit: "day", rating: 4.8, imageQuery: "pivot irrigation" },
    { id: 6, category: "Harvesters", name: "New Holland TC5.90", provider: "AgriRentals", price: 500, unit: "day", rating: 4.9, imageQuery: "combine harvester" }
];

const mockBuyers = [
    { id: 1, name: "AfriFoods Processing", type: "Processor", lookingFor: "Maize, Soybeans", price: "$380 - $420/T", logo: "AF" },
    { id: 2, name: "Global Export Co.", type: "Exporter", lookingFor: "Coffee, Cashews", price: "Market + 5%", logo: "GE" },
    { id: 3, name: "Dar Supermarkets", type: "Retailer", lookingFor: "Fresh Vegetables", price: "Contract", logo: "DS" },
    { id: 4, name: "National Grain Reserve", type: "Government", lookingFor: "Maize, Wheat", price: "$400/T", logo: "NG" },
    { id: 5, name: "Kilimanjaro Mills", type: "Processor", lookingFor: "Wheat, Barley", price: "$450/T", logo: "KM" },
    { id: 6, name: "EcoFarms Retail", type: "Retailer", lookingFor: "Organic Produce", price: "Premium Contract", logo: "EF" }
];

const weatherForecast = [
    { day: "Mon", icon: "fa-cloud-sun", min: 18, max: 28, rain: "0%" },
    { day: "Tue", icon: "fa-sun", min: 19, max: 29, rain: "0%" },
    { day: "Wed", icon: "fa-cloud-rain", min: 17, max: 25, rain: "60%" },
    { day: "Thu", icon: "fa-cloud-showers-heavy", min: 16, max: 23, rain: "90%" },
    { day: "Fri", icon: "fa-cloud", min: 18, max: 26, rain: "20%" },
    { day: "Sat", icon: "fa-sun", min: 19, max: 28, rain: "10%" },
    { day: "Sun", icon: "fa-cloud-sun", min: 20, max: 29, rain: "0%" }
];

// --- UNSPLASH API ---
// Note: For a production application, API keys MUST be stored securely on a backend server.
// For this frontend-only demo, we prompt the user for the key and store it in localStorage.
let UNSPLASH_ACCESS_KEY = localStorage.getItem('UNSPLASH_API_KEY');
const imageCache = {}; // Cache to avoid duplicate API calls

function promptForApiKey() {
    if (!UNSPLASH_ACCESS_KEY) {
        // As a fallback for automated tests, we use a placeholder or check URL params
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.has('test_mode')) {
            UNSPLASH_ACCESS_KEY = "test_key";
            return;
        }

        const key = prompt("Please enter your Unsplash API Key for the FARMA Demo to load images dynamically:");
        if (key) {
            UNSPLASH_ACCESS_KEY = key;
            localStorage.setItem('UNSPLASH_API_KEY', key);
            // Reload page to fetch images
            window.location.reload();
        } else {
            console.warn("No Unsplash API key provided. Using fallback placeholders.");
        }
    }
}

async function fetchImage(query) {
    if (imageCache[query]) {
        return imageCache[query];
    }

    // If no key is provided, use a reliable fallback service immediately
    if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'test_key') {
        const placeholder = `https://picsum.photos/seed/${encodeURIComponent(query)}/800/600`;
        imageCache[query] = placeholder;
        return placeholder;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const imageUrl = data.urls.regular;
        imageCache[query] = imageUrl;
        return imageUrl;
    } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        // Fallback placeholder image if API fails
        const placeholder = `https://picsum.photos/seed/${encodeURIComponent(query)}/800/600`;
        imageCache[query] = placeholder;
        return placeholder;
    }
}

// --- MAP LOGIC ---
let map = null;

function toggleMap() {
    const mapContainer = document.getElementById('farm-map');
    const gridContainer = document.getElementById('farm-listings');
    const btnIcon = document.querySelector('#land-market .btn-icon');

    if (mapContainer.style.display === 'none') {
        mapContainer.style.display = 'block';
        gridContainer.style.display = 'none';
        btnIcon.innerHTML = '<i class="fa-solid fa-table-cells-large"></i> View Grid';

        if (!map) {
            // Initialize map (centered roughly on Tanzania)
            map = L.map('farm-map').setView([-6.3690, 34.8888], 5);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            // Add mock markers
            mockFarms.forEach(farm => {
                if (farm.lat && farm.lng) {
                    L.marker([farm.lat, farm.lng]).addTo(map)
                        .bindPopup(`<b>${farm.name}</b><br>${farm.location} - ${farm.size}ha<br>$${farm.price}`);
                }
            });
        }

        // Force Leaflet to recalculate size after displaying
        setTimeout(() => map.invalidateSize(), 100);
    } else {
        mapContainer.style.display = 'none';
        gridContainer.style.display = 'grid';
        btnIcon.innerHTML = '<i class="fa-solid fa-map"></i> View Map';
    }
}

// --- FILTER LOGIC ---
function initFilters() {
    // Farm Filters
    const farmFilters = ['filter-location', 'filter-size', 'filter-soil'];
    farmFilters.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                const loc = document.getElementById('filter-location').value;
                const size = document.getElementById('filter-size').value;
                const soil = document.getElementById('filter-soil').value;

                let filtered = mockFarms.filter(f => {
                    let match = true;
                    if (loc && f.location !== loc) match = false;
                    if (soil && f.soil !== soil) match = false;
                    if (size === 'small' && f.size >= 15) match = false;
                    if (size === 'large' && f.size < 15) match = false;
                    return match;
                });

                populateFarms(filtered);

                // update map markers if map exists
                if(map) {
                    map.eachLayer(layer => {
                        if (layer instanceof L.Marker) {
                            map.removeLayer(layer);
                        }
                    });
                    filtered.forEach(farm => {
                        if (farm.lat && farm.lng) {
                            L.marker([farm.lat, farm.lng]).addTo(map)
                                .bindPopup(`<b>${farm.name}</b><br>${farm.location} - ${farm.size}ha<br>$${farm.price}`);
                        }
                    });
                }
            });
        }
    });

    // Product Filters
    const inputButtons = document.querySelectorAll('#input-market .filter-btn');
    inputButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            inputButtons.forEach(b => b.classList.remove('active'));
            const target = e.target;
            target.classList.add('active');

            const category = target.innerText;
            if (category === 'All') {
                populateProducts(mockProducts);
            } else {
                populateProducts(mockProducts.filter(p => p.category === category));
            }
        });
    });

    // Equipment Filters
    const equipButtons = document.querySelectorAll('#equipment .filter-btn');
    equipButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            equipButtons.forEach(b => b.classList.remove('active'));
            const target = e.target;
            target.classList.add('active');

            const category = target.innerText;
            if (category === 'All') {
                populateEquipment(mockEquipment);
            } else {
                populateEquipment(mockEquipment.filter(e => e.category === category));
            }
        });
    });
}

// --- MICRO-INTERACTIONS ---
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}

function initRipples() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-icon');
    for (const button of buttons) {
        button.addEventListener('click', createRipple);
    }
}

function animateCounters() {
    const counters = document.querySelectorAll('.stats-value');

    // Simple intersection observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if(el.dataset.animated) return;

                const text = el.innerText;
                // Only animate if it looks like a clean number (ignoring $, %, /T for now via basic regex)
                const numMatch = text.match(/^([\D]*)([\d,.]+)([\D]*)$/);

                if(numMatch && !text.includes('-')) {
                    const prefix = numMatch[1] || '';
                    const suffix = numMatch[3] || '';
                    const target = parseFloat(numMatch[2].replace(/,/g, ''));

                    if(!isNaN(target)) {
                        el.dataset.animated = 'true';
                        let start = 0;
                        const duration = 1500;
                        const increment = target / (duration / 16);

                        const timer = setInterval(() => {
                            start += increment;
                            if (start >= target) {
                                el.innerText = text; // restore original exactly
                                clearInterval(timer);
                            } else {
                                // Format to 1 decimal if target has decimal, else integer
                                const displayNum = target % 1 !== 0 ? start.toFixed(1) : Math.floor(start);
                                el.innerText = `${prefix}${displayNum}${suffix}`;
                            }
                        }, 16);
                    }
                }
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// --- NAVIGATION LOGIC ---
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-links li, .bottom-nav .nav-item:not(.menu-toggle), .mobile-menu .menu-item');
    const modules = document.querySelectorAll('.module-container');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Toggle mobile extended menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
    }

    // Handle navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;

            // Update active state on nav items
            document.querySelectorAll('.nav-links li').forEach(nav => nav.classList.remove('active'));
            document.querySelectorAll('.bottom-nav .nav-item').forEach(nav => nav.classList.remove('active'));

            // Set active on matching desktop and mobile navs
            document.querySelectorAll(`[data-target="${targetId}"]`).forEach(nav => {
                if(!nav.classList.contains('menu-item')) { // don't highlight extended menu items
                    nav.classList.add('active');
                }
            });

            // Hide all modules, show target
            modules.forEach(mod => {
                mod.classList.remove('active');
                if (mod.id === targetId) {
                    mod.classList.add('active');
                    // Re-render charts if needed (Chart.js can be glitchy when hidden)
                    window.dispatchEvent(new Event('resize'));
                }
            });

            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
                menuToggle.classList.remove('active');
            }
        });
    });
}

// --- UI POPULATION ---
async function populateFarms(farmsToRender = mockFarms) {
    const container = document.getElementById('farm-listings');
    if (!container) return;

    container.innerHTML = '';

    if (farmsToRender.length === 0) {
        container.innerHTML = '<p class="text-secondary p-4">No farms match the selected criteria.</p>';
        return;
    }

    for (const farm of farmsToRender) {
        const imageUrl = await fetchImage(farm.imageQuery);
        const card = document.createElement('div');
        card.className = 'farm-card';
        card.innerHTML = `
            <div class="farm-img-container">
                <img src="${imageUrl}" alt="${farm.name}" loading="lazy">
                <div class="farm-badge"><i class="fa-solid fa-star" style="color:#D69E2E"></i> ${farm.score}</div>
            </div>
            <div class="farm-details">
                <h3 class="farm-title">${farm.name}</h3>
                <p class="farm-location"><i class="fa-solid fa-location-dot"></i> ${farm.location}</p>

                <div class="farm-metrics">
                    <div class="metric"><i class="fa-solid fa-ruler-combined"></i> ${farm.size} ha</div>
                    <div class="metric"><i class="fa-solid fa-mound"></i> ${farm.soil}</div>
                    <div class="metric"><i class="fa-solid fa-droplet"></i> ${farm.water}</div>
                    <div class="metric"><i class="fa-solid fa-wheat-awn"></i> Maize/Soy</div>
                </div>

                <div class="farm-footer">
                    <div class="farm-price">$${farm.price} <span>/ season</span></div>
                    <button class="btn-primary btn-sm" onclick="openFarmModal(${farm.id})">View Details</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    }
}

// --- MODAL LOGIC ---
async function openFarmModal(farmId) {
    const farm = mockFarms.find(f => f.id === farmId);
    if (!farm) return;

    const modal = document.getElementById('farm-modal');
    const modalBody = document.getElementById('modal-body');
    const imageUrl = await fetchImage(farm.imageQuery + ' landscape');

    modalBody.innerHTML = `
        <img src="${imageUrl}" alt="${farm.name}" class="modal-hero-img">
        <div class="modal-padding">
            <h2 style="font-size: 1.5rem; color: var(--primary-dark);">${farm.name}</h2>
            <p class="text-secondary" style="margin-bottom: 16px;"><i class="fa-solid fa-location-dot"></i> ${farm.location} • <i class="fa-solid fa-star" style="color:#D69E2E"></i> ${farm.score}/100 Crop Suitability</p>

            <div class="dashboard-grid">
                <div class="card glass p-4 text-center">
                    <h4 style="color: var(--text-secondary); font-size: 0.875rem;">Total Area</h4>
                    <p class="stats-value">${farm.size} Hectares</p>
                </div>
                <div class="card glass p-4 text-center">
                    <h4 style="color: var(--text-secondary); font-size: 0.875rem;">Soil Profile</h4>
                    <p class="stats-value">${farm.soil}</p>
                </div>
                <div class="card glass p-4 text-center">
                    <h4 style="color: var(--text-secondary); font-size: 0.875rem;">Irrigation Access</h4>
                    <p class="stats-value">${farm.water}</p>
                </div>
            </div>

            <div class="mt-4">
                <h3 style="margin-bottom: 12px;"><i class="fa-solid fa-chart-pie"></i> Historical Yield Potential</h3>
                <p class="text-secondary">Based on our simulated AI analysis, this farm historically produces exceptional yields for legumes and grain crops due to its rich ${farm.soil} soil composition and ${farm.water.toLowerCase()} water availability.</p>
                <div class="mt-3 flex-header">
                    <div class="farm-price" style="font-size: 1.5rem;">$${farm.price} <span>/ season</span></div>
                    <button class="btn-primary"><i class="fa-solid fa-handshake"></i> Request Lease</button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

// Attach to window so onclick works
window.closeModal = function() {
    document.getElementById('farm-modal').style.display = 'none';
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('farm-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

async function populateProducts(productsToRender = mockProducts) {
    const container = document.getElementById('input-products');
    if (!container) return;

    container.innerHTML = '';

    if (productsToRender.length === 0) {
        container.innerHTML = '<p class="text-secondary p-4">No products match this category.</p>';
        return;
    }

    for (const product of productsToRender) {
        const imageUrl = await fetchImage(product.imageQuery);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${imageUrl}" class="product-img" alt="${product.name}" loading="lazy">
            <div class="product-details">
                <div class="product-supplier">${product.supplier}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</div>

                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)} <span>/ ${product.unit}</span></div>
                    <button class="btn-add"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
        container.appendChild(card);
    }
}

async function populateEquipment(equipmentToRender = mockEquipment) {
    const container = document.getElementById('equipment-listings');
    if (!container) return;

    container.innerHTML = '';

    if (equipmentToRender.length === 0) {
        container.innerHTML = '<p class="text-secondary p-4">No equipment match this category.</p>';
        return;
    }

    for (const equip of equipmentToRender) {
        const imageUrl = await fetchImage(equip.imageQuery);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${imageUrl}" class="product-img" alt="${equip.name}" loading="lazy">
            <div class="product-details">
                <div class="product-supplier">${equip.provider}</div>
                <h3 class="product-name">${equip.name}</h3>
                <div class="product-rating"><i class="fa-solid fa-star"></i> ${equip.rating}</div>

                <div class="product-footer">
                    <div class="product-price">$${equip.price} <span>/ ${equip.unit}</span></div>
                    <button class="btn-primary btn-sm">Rent</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    }
}

function populateBuyers() {
    const container = document.getElementById('buyer-requests');
    if (!container) return;

    container.innerHTML = '';

    mockBuyers.forEach(buyer => {
        const li = document.createElement('li');
        li.className = 'buyer-card';
        li.innerHTML = `
            <div class="buyer-info">
                <div class="buyer-logo">${buyer.logo}</div>
                <div class="buyer-details">
                    <h4>${buyer.name} <span class="badge bg-green text-white" style="margin-left:8px; font-weight:normal;">${buyer.type}</span></h4>
                    <p>Looking for: <strong>${buyer.lookingFor}</strong></p>
                </div>
            </div>
            <div class="buyer-action">
                <span class="buyer-price">${buyer.price}</span>
                <button class="btn-primary btn-sm">Contact</button>
            </div>
        `;
        container.appendChild(li);
    });
}

function populateWeather() {
    const container = document.getElementById('forecast-list');
    if (!container) return;

    container.innerHTML = '';

    weatherForecast.forEach(day => {
        const div = document.createElement('div');
        div.className = 'forecast-item';
        div.innerHTML = `
            <div class="forecast-day">${day.day}</div>
            <div class="forecast-icon"><i class="fa-solid ${day.icon}"></i></div>
            <div class="forecast-temps">${day.max}° <span style="color:var(--text-secondary); margin-left:8px;">${day.min}°</span></div>
            <div class="forecast-rain"><i class="fa-solid fa-droplet" style="font-size:0.75rem;"></i> ${day.rain}</div>
        `;
        container.appendChild(div);
    });
}

// --- CHARTS LOGIC ---
const chartColors = {
    primary: 'rgba(47, 133, 90, 1)',
    primaryLight: 'rgba(72, 187, 120, 0.5)',
    secondary: 'rgba(246, 224, 94, 1)',
    accent: 'rgba(49, 130, 206, 1)'
};

function initCharts() {
    // 1. Dashboard Market Chart
    const dashCanvas = document.getElementById('dashboardMarketChart');
    if (dashCanvas) {
        new Chart(dashCanvas, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Maize Index',
                    data: [100, 105, 98, 112, 120, 115],
                    borderColor: chartColors.primary,
                    backgroundColor: chartColors.primaryLight,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: false, grid: { borderDash: [5, 5] } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 2. Weather Chart
    const weatherCanvas = document.getElementById('weatherChart');
    if (weatherCanvas) {
        new Chart(weatherCanvas, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Rainfall (mm)',
                        data: [0, 0, 12, 25, 5, 2, 0],
                        backgroundColor: chartColors.accent,
                        borderRadius: 4
                    },
                    {
                        type: 'line',
                        label: 'Soil Moisture (%)',
                        data: [45, 42, 55, 68, 65, 60, 56],
                        borderColor: chartColors.primary,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, grid: { borderDash: [5, 5] } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 3. Crop Market Chart
    const cropCanvas = document.getElementById('cropMarketChart');
    if (cropCanvas) {
        new Chart(cropCanvas, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Soybeans ($/T)',
                        data: [390, 400, 415, 420],
                        borderColor: chartColors.secondary,
                        tension: 0.3
                    },
                    {
                        label: 'Maize ($/T)',
                        data: [210, 205, 220, 235],
                        borderColor: chartColors.primary,
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: false, grid: { borderDash: [5, 5] } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

function renderSoilChart(farm = null) {
    const canvas = document.getElementById('soilChart');
    if (!canvas || canvas.dataset.rendered === "true") return;

    // Generate slightly dynamic data based on the farm or use defaults
    const seed = farm ? farm.id * 10 : 0;
    const data = [
        Math.max(40, Math.min(100, 65 + (seed % 30))),
        Math.max(40, Math.min(100, 80 - (seed % 20))),
        Math.max(40, Math.min(100, 90 + (seed % 10))),
        Math.max(40, Math.min(100, 75 - (seed % 15))),
        Math.max(40, Math.min(100, 85 + (seed % 5))),
        farm && farm.water === 'High' ? 90 : (farm && farm.water === 'Low' ? 30 : 60)
    ];

    new Chart(canvas, {
        type: 'radar',
        data: {
            labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'pH Level', 'Organic Matter', 'Moisture'],
            datasets: [{
                label: 'Current Field Data',
                data: data,
                backgroundColor: chartColors.primaryLight,
                borderColor: chartColors.primary,
                pointBackgroundColor: chartColors.primary,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { r: { beginAtZero: true, max: 100 } }
        }
    });
    canvas.dataset.rendered = "true";
}

// --- AI SIMULATION ---

function populateAIFarmSelect() {
    const select = document.getElementById('ai-farm-select');
    if (!select) return;

    select.innerHTML = '';
    mockFarms.forEach(farm => {
        const option = document.createElement('option');
        option.value = farm.id;
        option.textContent = `${farm.name} - ${farm.location} (${farm.size} ha, ${farm.soil})`;
        select.appendChild(option);
    });
}

// Expose to global scope for the inline onclick handler
window.simulateAI = function() {
    const select = document.getElementById('ai-farm-select');
    const btn = document.querySelector('.ai-input-section button');
    const loading = document.getElementById('ai-loading');
    const results = document.getElementById('ai-results');

    const selectedFarmId = parseInt(select.value, 10);
    const farm = mockFarms.find(f => f.id === selectedFarmId);

    if (!farm) return;

    // Disable button and show loading
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Analyzing...';
    results.style.display = 'none';
    loading.style.display = 'block';

    // Dynamically calculate recommendations based on farm properties
    let recommendedCrop = "Soybeans";
    let matchScore = farm.score;
    let expectedYield = "3.2 - 3.8";

    if (farm.soil === "Loam" || farm.soil === "Volcanic") {
        recommendedCrop = "Coffee";
        matchScore = Math.min(100, farm.score + 5);
        expectedYield = "1.5 - 2.1";
    } else if (farm.soil === "Sandy" && farm.water === "Low") {
        recommendedCrop = "Sorghum";
        matchScore = Math.max(70, farm.score - 5);
        expectedYield = "2.8 - 3.5";
    } else if (farm.size > 20) {
        recommendedCrop = "Maize";
        expectedYield = "4.5 - 5.5";
    }

    // Simulate API delay
    setTimeout(() => {
        loading.style.display = 'none';

        // Update DOM with dynamic values
        const resultsContainer = document.querySelector('.ai-results .dashboard-grid');
        resultsContainer.innerHTML = `
            <div class="card glass text-center p-4">
                <i class="fa-solid fa-wheat-awn fa-3x mb-2" style="color: var(--secondary-color)"></i>
                <h3>Top Crop</h3>
                <p class="stats-value">${recommendedCrop}</p>
                <span class="badge bg-green text-white">${matchScore}% Match</span>
            </div>
            <div class="card glass text-center p-4">
                <i class="fa-solid fa-chart-pie fa-3x mb-2" style="color: var(--primary-color)"></i>
                <h3>Expected Yield</h3>
                <p class="stats-value">${expectedYield}</p>
                <p>Tons / Hectare</p>
            </div>
            <div class="card glass text-center p-4">
                <i class="fa-solid fa-calendar-check fa-3x mb-2" style="color: var(--accent-color)"></i>
                <h3>Planting Window</h3>
                <p class="stats-value">Oct 15 - 28</p>
                <p>Optimal timing</p>
            </div>
        `;

        document.querySelector('.ai-results .text-secondary strong').nextSibling.textContent = ` Apply targeted fertilizers. ${farm.soil} soil nitrogen is currently tested. Consider crop rotation with legumes next season for optimal health on this ${farm.size}ha plot.`;

        results.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = 'Run Analysis Again';

        // Re-render chart with new random-ish data to simulate new farm
        const canvas = document.getElementById('soilChart');
        if (canvas) {
            canvas.dataset.rendered = "false";
            // destroy old chart instance if it exists to render fresh
            const chartInstance = Chart.getChart(canvas);
            if (chartInstance) {
                chartInstance.destroy();
            }
        }
        renderSoilChart(farm);
    }, 2500);
}

// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Only prompt for key if not running in our automated headless test context
    if(navigator.webdriver === false) {
       setTimeout(() => { if(!localStorage.getItem('UNSPLASH_API_KEY')) promptForApiKey() }, 1000);
    }

    initNavigation();

    // Populate Data
    populateFarms();
    populateAIFarmSelect();
    populateProducts();
    populateEquipment();
    populateBuyers();
    populateWeather();

    // Init Charts
    initCharts();

    // Init Interactions
    initFilters();
    initRipples();
    animateCounters();

    console.log('FARMA Platform Initialized');
});