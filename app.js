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
        lat: loc.lat + (Math.random() - 0.5) * 1.5,
        lng: loc.lng + (Math.random() - 0.5) * 1.5,
        size: Math.floor(Math.random() * 50) + 5,
        soil: soils[Math.floor(Math.random() * soils.length)],
        water: waters[Math.floor(Math.random() * waters.length)],
        price: Math.floor(Math.random() * 2000) + 500,
        score: Math.floor(Math.random() * 30) + 70,
        imageQuery: ["farmland field", "rural crop landscape", "farming land", "agricultural field harvest", "soil farming", "green pasture farming"][i % 6] + " " + (i%3)
    };
});

const mockProducts = [
    { id: 1, category: "Seeds", name: "Drought-Resistant Maize Seed", supplier: "AgriSeed Co.", price: 45.00, unit: "bag (10kg)", rating: 4.8, imageQuery: "corn seeds bag" },
    { id: 2, category: "Fertilizers", name: "NPK 15-15-15 Premium", supplier: "GrowWell", price: 32.50, unit: "bag (50kg)", rating: 4.5, imageQuery: "fertilizer sack" },
    { id: 3, category: "Pesticides", name: "Organic Neem Extract", supplier: "EcoFarming", price: 18.00, unit: "liter", rating: 4.9, imageQuery: "pesticide bottle" },
    { id: 4, category: "Irrigation", name: "Drip Tape Roll 1000m", supplier: "WaterSmart", price: 120.00, unit: "roll", rating: 4.7, imageQuery: "drip irrigation hose" },
    { id: 5, category: "Seeds", name: "High-Yield Soybean", supplier: "AgriSeed Co.", price: 55.00, unit: "bag (10kg)", rating: 4.6, imageQuery: "soybean crop" },
    { id: 6, category: "Fertilizers", name: "Urea 46% Nitrogen", supplier: "GrowWell", price: 28.00, unit: "bag (50kg)", rating: 4.4, imageQuery: "nitrogen fertilizer soil" },
    { id: 7, category: "Seeds", name: "Sunflower Seeds Hybrid", supplier: "SunCo", price: 38.00, unit: "bag (5kg)", rating: 4.7, imageQuery: "sunflower seeds planting" },
    { id: 8, category: "Pesticides", name: "Fungicide Spray", supplier: "CropProtect", price: 25.00, unit: "bottle (1L)", rating: 4.2, imageQuery: "fungicide spray bottle" }
];

const mockEquipment = [
    { id: 1, category: "Tractors", name: "John Deere 5075E", provider: "KiliTractors Ltd", price: 150, unit: "day", rating: 4.9, imageQuery: "john deere tractor" },
    { id: 2, category: "Harvesters", name: "Class Dominator 130", provider: "AgriRentals", price: 450, unit: "day", rating: 4.7, imageQuery: "combine harvester machine" },
    { id: 3, category: "Planters", name: "Monosem 4-Row Planter", provider: "FarmTech", price: 80, unit: "day", rating: 4.6, imageQuery: "tractor pulling planter" },
    { id: 4, category: "Tractors", name: "Massey Ferguson 385", provider: "KiliTractors Ltd", price: 130, unit: "day", rating: 4.5, imageQuery: "red tractor farm" },
    { id: 5, category: "Irrigation", name: "Mobile Pivot System", provider: "WaterTech", price: 200, unit: "day", rating: 4.8, imageQuery: "center pivot irrigation" },
    { id: 6, category: "Harvesters", name: "New Holland TC5.90", provider: "AgriRentals", price: 500, unit: "day", rating: 4.9, imageQuery: "harvesting wheat machine" }
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
const UNSPLASH_ACCESS_KEY = "GFRGVmxF64zpxZL22-o3BaVyGxphiGAwXLMfQxLCC2U";
const imageCache = {}; // Cache to avoid duplicate API calls

async function fetchImage(query) {
    if (imageCache[query]) {
        return imageCache[query];
    }

    try {
        const strictQuery = `${query} agriculture farm`.trim();
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(strictQuery)}&client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape&per_page=10`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * Math.min(data.results.length, 5));
            const imageUrl = data.results[randomIndex].urls.regular;
            imageCache[query] = imageUrl;
            return imageUrl;
        } else {
            throw new Error('No relevant images found');
        }
    } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
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
            map = L.map('farm-map').setView([-6.3690, 34.8888], 5);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            mockFarms.forEach(farm => {
                if (farm.lat && farm.lng) {
                    L.marker([farm.lat, farm.lng]).addTo(map)
                        .bindPopup(`<b>${farm.name}</b><br>${farm.location} - ${farm.size}ha<br>$${farm.price}`);
                }
            });
        }
        setTimeout(() => map.invalidateSize(), 100);
    } else {
        mapContainer.style.display = 'none';
        gridContainer.style.display = 'flex'; // Changed to flex for mobile grid
        btnIcon.innerHTML = '<i class="fa-solid fa-map"></i> View Map';
    }
}

// --- FILTER LOGIC ---
function initFilters() {
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

// --- SPLASH SCREEN & ONBOARDING ---
async function initSplashScreen() {
    const splashBg = document.getElementById('splash-bg');
    if (splashBg) {
        const imageUrl = await fetchImage('african agriculture landscape farm aerial');
        splashBg.style.backgroundImage = `url('${imageUrl}')`;
    }
}

window.selectRole = function(role) {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            if (role === 'buyer') {
                document.querySelector('[data-target="crop-market"]').click();
            }

            if(!localStorage.getItem('farma_tour_completed')) {
                startTour();
                localStorage.setItem('farma_tour_completed', 'true');
            }
        }, 500);
    }
};

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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if(el.dataset.animated) return;

                const text = el.innerText;
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
                                el.innerText = text;
                                clearInterval(timer);
                            } else {
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

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('show');
        });
    }

    const menuClose = document.querySelector('.menu-close');
    if(menuClose) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;

            document.querySelectorAll('.nav-links li').forEach(nav => nav.classList.remove('active'));
            document.querySelectorAll('.bottom-nav .nav-item').forEach(nav => nav.classList.remove('active'));

            document.querySelectorAll(`[data-target="${targetId}"]`).forEach(nav => {
                if(!nav.classList.contains('menu-item')) {
                    nav.classList.add('active');
                }
            });

            modules.forEach(mod => {
                mod.classList.remove('active');
                if (mod.id === targetId) {
                    mod.classList.add('active');
                    window.dispatchEvent(new Event('resize'));
                }
            });

            if (mobileMenu && mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
                menuToggle.classList.remove('active');
            }
            // Ensure scroll is at top when changing modules
            window.scrollTo(0,0);
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
                    <p class="stats-value">${farm.size} ha</p>
                </div>
                <div class="card glass p-4 text-center">
                    <h4 style="color: var(--text-secondary); font-size: 0.875rem;">Soil Profile</h4>
                    <p class="stats-value" style="font-size: 1.1rem">${farm.soil}</p>
                </div>
                <div class="card glass p-4 text-center">
                    <h4 style="color: var(--text-secondary); font-size: 0.875rem;">Irrigation</h4>
                    <p class="stats-value" style="font-size: 1.1rem">${farm.water}</p>
                </div>
            </div>

            <div class="mt-4">
                <h3 style="margin-bottom: 12px;"><i class="fa-solid fa-chart-pie"></i> Historical Yield Potential</h3>
                <p class="text-secondary">Based on our AI analysis, this farm historically produces exceptional yields for legumes and grain crops due to its rich ${farm.soil} soil composition and ${farm.water.toLowerCase()} water availability.</p>
                <div class="mt-3 flex-header" style="flex-wrap: wrap; gap: 10px;">
                    <div class="farm-price" style="font-size: 1.25rem;">$${farm.price} <span>/ season</span></div>
                    <div style="display:flex; gap:8px; width: 100%;">
                        <button class="btn-icon" onclick="analyzeFarm(${farm.id})" style="flex:1; justify-content:center;"><i class="fa-solid fa-microchip"></i> Analysis</button>
                        <button class="btn-primary" style="flex:1;"><i class="fa-solid fa-handshake"></i> Lease</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

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
                    <button class="btn-primary btn-sm" style="width:auto; padding: 6px 12px;">Rent</button>
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
        // Adjust for mobile view to prevent cramped layout
        li.innerHTML = `
            <div class="buyer-info" style="flex-direction: column; align-items: flex-start; gap: 8px; flex: 1;">
                <div style="display:flex; align-items:center; gap: 10px;">
                    <div class="buyer-logo" style="width:36px; height:36px;">${buyer.logo}</div>
                    <div class="buyer-details">
                        <h4 style="font-size: 0.95rem;">${buyer.name} <span class="badge bg-green text-white" style="margin-left:4px; font-weight:normal; font-size: 0.65rem">${buyer.type}</span></h4>
                    </div>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary);">Needs: <strong>${buyer.lookingFor}</strong></p>
            </div>
            <div class="buyer-action" style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
                <span class="buyer-price" style="font-size: 0.9rem;">${buyer.price}</span>
                <button class="btn-primary btn-sm" onclick="openChat('${buyer.name}', '${buyer.logo}')">Contact</button>
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

// --- CHAT SYSTEM LOGIC ---
window.openChat = function(name, logo) {
    document.getElementById('chat-buyer-name').textContent = name;
    document.getElementById('chat-buyer-logo').textContent = logo;

    const messages = document.getElementById('chat-messages');
    messages.innerHTML = `
        <div class="chat-message received">
            Hello! We are currently looking for new contracts for this season. Do you have any estimated volume?
        </div>
    `;

    document.getElementById('chat-modal').style.display = 'flex';
}

window.closeChat = function() {
    document.getElementById('chat-modal').style.display = 'none';
}

window.sendMessage = function() {
    const input = document.getElementById('chat-input');
    // Also check the main messages module input
    const inputField = document.getElementById('chat-input-field');
    
    // Determine which input was used
    let activeInput, text, messages;
    
    if(document.getElementById('chat-modal').style.display === 'flex') {
        activeInput = input;
        messages = document.getElementById('chat-messages');
    } else {
        activeInput = inputField;
        messages = document.querySelectorAll('#chat-messages')[1]; // The second one is in the main layout
    }

    if(!activeInput) return;
    text = activeInput.value.trim();
    if (!text) return;

    const sentMsg = document.createElement('div');
    sentMsg.className = 'chat-message sent'; // Works for both overlay and main layout now because CSS classes are shared
    // Handle the main layout specific classes
    if(activeInput === inputField) {
        sentMsg.className = 'message msg-sent';
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        sentMsg.innerHTML = `
            <div class="msg-bubble">${text}</div>
            <div class="msg-time">${timeStr} <i class="fa-solid fa-check text-green"></i></div>
        `;
    } else {
         sentMsg.textContent = text;
    }

    messages.appendChild(sentMsg);
    activeInput.value = '';
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
        const replyMsg = document.createElement('div');
        
        if(activeInput === inputField) {
             replyMsg.className = 'message msg-received';
             replyMsg.innerHTML = `
                <div class="msg-bubble">Thank you. Let's arrange a formal agreement.</div>
                <div class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
             `;
             document.querySelectorAll('.msg-sent .fa-check').forEach(icon => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-check-double');
            });
        } else {
            replyMsg.className = 'chat-message received';
            replyMsg.textContent = "Thank you for the update. Let's arrange a formal agreement.";
        }

        messages.appendChild(replyMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 1500);
}

// Ensure the main messages view handles sidebar toggle on mobile
window.toggleChatList = function() {
    const sidebar = document.getElementById('chat-sidebar');
    sidebar.classList.remove('hide-mobile');
};

// Also attach openChat logic for the main messages module sidebar clicks
document.addEventListener('DOMContentLoaded', () => {
    const chatItems = document.querySelectorAll('.chat-list-item');
    chatItems.forEach(item => {
        item.addEventListener('click', function() {
            chatItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const name = this.querySelector('strong').innerText;
            const logo = this.querySelector('.buyer-logo').innerText;
            
            document.getElementById('active-chat-logo').innerText = logo;
            document.getElementById('active-chat-name').innerText = name;
            
            // Hide sidebar on mobile after selection
            if(window.innerWidth < 768) {
                document.getElementById('chat-sidebar').classList.add('hide-mobile');
            }
        });
    });
});

// --- AI SCANNER LOGIC ---
window.openScanner = async function() {
    document.getElementById('scanner-modal').style.display = 'flex';
    document.getElementById('scanner-result').classList.remove('show');
    document.querySelector('.scanner-header h3').textContent = 'Scanning Plant...';

    const feedImg = document.getElementById('scanner-feed');
    feedImg.src = await fetchImage('crop disease leaf rust');

    setTimeout(() => {
        document.querySelector('.scanner-header h3').textContent = 'Analysis Complete';
        document.getElementById('scanner-result').style.visibility = 'visible';
        document.getElementById('scanner-result').classList.add('show');
    }, 2500);
}

window.closeScanner = function() {
    document.getElementById('scanner-modal').style.display = 'none';
}

window.applyScannerRecommendation = function() {
    closeScanner();

    const targetId = 'input-market';
    document.querySelectorAll('.nav-links li').forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll('.bottom-nav .nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll(`[data-target="${targetId}"]`).forEach(nav => nav.classList.add('active'));

    document.querySelectorAll('.module-container').forEach(mod => {
        mod.classList.remove('active');
        if (mod.id === targetId) {
            mod.classList.add('active');
        }
    });

    const inputButtons = document.querySelectorAll('#input-market .filter-btn');
    inputButtons.forEach(b => b.classList.remove('active'));
    Array.from(inputButtons).find(b => b.textContent === 'Pesticides').classList.add('active');

    populateProducts(mockProducts.filter(p => p.category === 'Pesticides'));
}

// --- CHARTS LOGIC ---
const chartColors = {
    primary: 'rgba(47, 133, 90, 1)',
    primaryLight: 'rgba(72, 187, 120, 0.5)',
    secondary: 'rgba(246, 224, 94, 1)',
    accent: 'rgba(49, 130, 206, 1)'
};

function initCharts() {
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
async function updateAIFarmPreview() {
    const select = document.getElementById('ai-farm-select');
    const preview = document.getElementById('ai-farm-preview');
    if (!select || !preview) return;

    const farmId = parseInt(select.value, 10);
    const farm = mockFarms.find(f => f.id === farmId);
    if (!farm) return;

    const imageUrl = await fetchImage(farm.imageQuery);

    preview.innerHTML = `
        <div class="farm-img-container" style="height: 100px; width: 120px; flex-shrink: 0;">
            <img src="${imageUrl}" alt="${farm.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--border-radius-sm);">
        </div>
        <div class="farm-details" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding-left: 12px;">
            <h3 class="farm-title" style="margin-bottom: 4px; font-size: 1rem;">${farm.name}</h3>
            <p class="farm-location" style="margin-bottom: 0; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> ${farm.location} <br> ${farm.size} ha • ${farm.soil}</p>
        </div>
    `;

    document.getElementById('ai-results').style.display = 'none';
    document.querySelector('.ai-input-section button').innerHTML = 'Run Deep Neural Analysis';
}

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

    if (mockFarms.length > 0) {
        updateAIFarmPreview();
    }
}

window.analyzeFarm = function(farmId) {
    const targetId = 'ai-crop';
    document.querySelectorAll('.nav-links li').forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll('.bottom-nav .nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll(`[data-target="${targetId}"]`).forEach(nav => nav.classList.add('active'));

    document.querySelectorAll('.module-container').forEach(mod => {
        mod.classList.remove('active');
        if (mod.id === targetId) {
            mod.classList.add('active');
            window.dispatchEvent(new Event('resize'));
        }
    });

    window.closeModal();

    const select = document.getElementById('ai-farm-select');
    if (select) {
        select.value = farmId;
        updateAIFarmPreview();
    }
}

window.simulateAI = function() {
    const select = document.getElementById('ai-farm-select');
    const btn = document.querySelector('.ai-input-section button');
    const loading = document.getElementById('ai-loading');
    const results = document.getElementById('ai-results');

    const selectedFarmId = parseInt(select.value, 10);
    const farm = mockFarms.find(f => f.id === selectedFarmId);

    if (!farm) return;

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Analyzing...';
    results.style.display = 'none';
    loading.style.display = 'block';

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

    setTimeout(() => {
        loading.style.display = 'none';

        const resultsContainer = document.querySelector('.ai-results .dashboard-grid');
        resultsContainer.innerHTML = `
            <div class="card glass text-center p-4">
                <i class="fa-solid fa-wheat-awn fa-3x mb-2" style="color: var(--secondary-color)"></i>
                <h3 style="font-size: 1.1rem;">Top Crop</h3>
                <p class="stats-value">${recommendedCrop}</p>
                <span class="badge bg-green text-white">${matchScore}% Match</span>
            </div>
            <div class="card glass text-center p-4">
                <i class="fa-solid fa-chart-pie fa-3x mb-2" style="color: var(--primary-color)"></i>
                <h3 style="font-size: 1.1rem;">Expected Yield</h3>
                <p class="stats-value">${expectedYield}</p>
                <p style="font-size: 0.8rem">Tons / ha</p>
            </div>
            <div class="card glass text-center p-4">
                <i class="fa-solid fa-calendar-check fa-3x mb-2" style="color: var(--accent-color)"></i>
                <h3 style="font-size: 1.1rem;">Planting</h3>
                <p class="stats-value" style="font-size: 1rem;">Oct 15-28</p>
                <p style="font-size: 0.8rem">Optimal window</p>
            </div>
        `;

        document.querySelector('.ai-results .text-secondary strong').nextSibling.textContent = ` Apply targeted fertilizers. ${farm.soil} soil nitrogen is currently tested. Consider crop rotation with legumes next season for optimal health on this ${farm.size}ha plot.`;

        results.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = 'Run Analysis Again';

        const canvas = document.getElementById('soilChart');
        if (canvas) {
            canvas.dataset.rendered = "false";
            const chartInstance = Chart.getChart(canvas);
            if (chartInstance) {
                chartInstance.destroy();
            }
        }
        renderSoilChart(farm);
    }, 2500);
}

// --- DISEASE SCANNER LOGIC (Main module) ---
window.startDiseaseScan = async function() {
    const btn = document.getElementById('btn-scan');
    const scanImage = document.getElementById('scan-image');
    const scanLaser = document.getElementById('scan-laser');
    const uploadPrompt = document.getElementById('upload-prompt');
    const loading = document.getElementById('scanner-loading');
    const results = document.getElementById('scanner-results');

    uploadPrompt.style.display = 'none';
    const imageUrl = await fetchImage('diseased maize leaf crop damage');
    scanImage.src = imageUrl;
    scanImage.style.display = 'block';

    btn.disabled = true;
    btn.innerHTML = 'Scanning...';
    scanLaser.style.display = 'block';
    results.style.display = 'none';

    setTimeout(() => {
        scanLaser.style.display = 'none';
        document.querySelector('.scanner-container').style.display = 'none';
        loading.style.display = 'block';

        setTimeout(() => {
            loading.style.display = 'none';
            document.querySelector('.scanner-container').style.display = 'block';
            scanImage.style.display = 'none';
            uploadPrompt.style.display = 'block';
            btn.disabled = false;
            btn.innerHTML = 'Scan Another Leaf';

            results.style.display = 'block';
        }, 2000);
    }, 2500);
};

// --- ONBOARDING TOUR ---
function startTour() {
    const driver = window.driver.js.driver;

    const tourObj = driver({
        showProgress: true,
        steps: [
            {
                element: 'body',
                popover: {
                    title: 'Welcome to FARMA',
                    description: 'The premier digital agriculture platform connecting East African farmers, land owners, and markets. Let us show you around.',
                    align: 'center'
                }
            },
            {
                element: '.dashboard-grid',
                popover: {
                    title: 'Platform Overview',
                    description: 'Here you can view high-level metrics of your active farms, soil health averages, and live weather conditions.',
                    align: 'bottom'
                }
            },
            {
                element: '.action-list',
                popover: {
                    title: 'Actionable Intelligence',
                    description: 'Our AI highlights urgent tasks like irrigation needs or optimal planting windows based on real-time data.',
                    align: 'left'
                }
            },
            {
                element: '[data-target="land-market"]',
                popover: {
                    title: 'Land Marketplace',
                    description: 'Discover and lease new farm plots using advanced geospatial and soil-filtering technologies.',
                    align: 'right'
                }
            },
            {
                element: '[data-target="ai-crop"]',
                popover: {
                    title: 'AI Crop Recommendations',
                    description: 'Leverage our neural networks to analyze soil profiles and get yield predictions for any plot.',
                    align: 'right'
                }
            }
        ]
    });

    tourObj.drive();
}

// Ensure the chat is responsive on load
function handleResize() {
    const sidebar = document.getElementById('chat-sidebar');
    if (window.innerWidth < 768) {
        // If on mobile and a chat is not actively selected, ensure sidebar is visible
        if(!document.getElementById('active-chat-name').innerText) {
             sidebar.classList.remove('hide-mobile');
        }
    } else {
        sidebar.classList.remove('hide-mobile');
    }
}

window.addEventListener('resize', handleResize);

// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    handleResize();

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

    // Init Splash Screen
    initSplashScreen();

    console.log('FARMA Platform Initialized');
});
