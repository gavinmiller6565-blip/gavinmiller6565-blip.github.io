<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Community Lost & Found</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
            --primary: #3498db;
            --secondary: #2ecc71;
            --accent: #e74c3c;
            --dark: #2c3e50;
            --light: #f8f9fa;
            --gray: #95a5a6;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        body {
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background-color: var(--dark);
            color: white;
            padding: 20px 0;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo i {
            font-size: 2.5rem;
            color: var(--primary);
        }
        
        .logo h1 {
            font-size: 1.8rem;
        }
        
        .logo span {
            color: var(--secondary);
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            padding: 8px 12px;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        nav a:hover, nav a.active {
            background-color: var(--primary);
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary), #1a5276);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .hero h2 {
            font-size: 2.8rem;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 30px;
        }
        
        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 14px 30px;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
        
        .btn-primary {
            background-color: var(--secondary);
            color: white;
        }
        
        .btn-secondary {
            background-color: white;
            color: var(--dark);
        }
        
        /* Main Content */
        .content-section {
            padding: 80px 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }
        
        .section-title h2 {
            font-size: 2.2rem;
            color: var(--dark);
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
        }
        
        .section-title h2:after {
            content: '';
            position: absolute;
            width: 70px;
            height: 4px;
            background-color: var(--primary);
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
        }
        
        /* Items Grid */
        .items-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }
        
        .item-card {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: transform 0.3s;
        }
        
        .item-card:hover {
            transform: translateY(-10px);
        }
        
        .item-image {
            height: 200px;
            background-color: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            font-size: 3rem;
        }
        
        .item-content {
            padding: 20px;
        }
        
        .item-content h3 {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: var(--dark);
        }
        
        .item-content p {
            color: var(--gray);
            margin-bottom: 15px;
            font-size: 0.95rem;
        }
        
        .item-meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: var(--dark);
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
        
        .item-type {
            background-color: var(--light);
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: 600;
        }
        
        .found {
            color: var(--secondary);
        }
        
        .lost {
            color: var(--accent);
        }
        
        /* Form Styles */
        .form-container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 40px;
        }
        
        .form-group {
            margin-bottom: 25px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--dark);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 14px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
        }
        
        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }
        
        .radio-group {
            display: flex;
            gap: 30px;
        }
        
        .radio-option {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 50px 0 20px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-column h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            color: var(--primary);
        }
        
        .footer-column p, .footer-column a {
            color: #ccc;
            margin-bottom: 10px;
            display: block;
            text-decoration: none;
        }
        
        .footer-column a:hover {
            color: white;
        }
        
        .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-icons a {
            background-color: #3a506b;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            transition: background-color 0.3s;
        }
        
        .social-icons a:hover {
            background-color: var(--primary);
        }
        
        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #3a506b;
            color: #aaa;
            font-size: 0.9rem;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 20px;
            }
            
            nav ul {
                gap: 15px;
            }
            
            .hero h2 {
                font-size: 2.2rem;
            }
            
            .hero p {
                font-size: 1rem;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .btn {
                width: 100%;
                max-width: 300px;
                justify-content: center;
            }
            
            .form-container {
                padding: 25px;
            }
        }
        
        /* Hidden class for toggling */
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-content">
            <div class="logo">
                <i class="fas fa-search"></i>
                <h1>Community <span>Lost & Found</span></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#" class="nav-link active" data-page="home">Home</a></li>
                    <li><a href="#" class="nav-link" data-page="browse">Browse Items</a></li>
                    <li><a href="#" class="nav-link" data-page="report">Report Item</a></li>
                    <li><a href="#" class="nav-link" data-page="about">About</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h2>Lost Something? Found Something?</h2>
            <p>Our community lost and found helps reunite people with their lost belongings. Browse items or report a lost or found item to help someone today.</p>
            <div class="cta-buttons">
                <button class="btn btn-primary" id="reportLostBtn">
                    <i class="fas fa-exclamation-circle"></i> Report Lost Item
                </button>
                <button class="btn btn-secondary" id="reportFoundBtn">
                    <i class="fas fa-check-circle"></i> Report Found Item
                </button>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main class="container">
        <!-- Home Page -->
        <section id="home-page" class="content-section">
            <div class="section-title">
                <h2>Recently Added Items</h2>
                <p>Check out the most recent lost and found items reported in our community</p>
            </div>
            
            <div class="items-grid" id="items-container">
                <!-- Items will be loaded here via JavaScript -->
            </div>
            
            <div style="text-align: center;">
                <button class="btn btn-primary" id="viewAllBtn">
                    <i class="fas fa-list"></i> View All Items
                </button>
            </div>
        </section>

        <!-- Browse Items Page -->
        <section id="browse-page" class="content-section hidden">
            <div class="section-title">
                <h2>Browse All Items</h2>
                <p>Search through all lost and found items in our community</p>
            </div>
            
            <div style="margin-bottom: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-secondary filter-btn active" data-filter="all">All Items</button>
                <button class="btn btn-secondary filter-btn" data-filter="lost">Lost Items</button>
                <button class="btn btn-secondary filter-btn" data-filter="found">Found Items</button>
                <input type="text" id="search-input" placeholder="Search items..." style="padding: 10px 15px; border-radius: 50px; border: 1px solid #ddd; min-width: 250px;">
            </div>
            
            <div class="items-grid" id="browse-items-container">
                <!-- Browse items will be loaded here -->
            </div>
        </section>

        <!-- Report Item Page -->
        <section id="report-page" class="content-section hidden">
            <div class="section-title">
                <h2>Report an Item</h2>
                <p>Help reunite someone with their lost item by reporting it here</p>
            </div>
            
            <div class="form-container">
                <form id="report-form">
                    <div class="form-group">
                        <label>Item Type</label>
                        <div class="radio-group">
                            <div class="radio-option">
                                <input type="radio" id="lost" name="type" value="lost" checked>
                                <label for="lost">Lost Item</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" id="found" name="type" value="found">
                                <label for="found">Found Item</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="item-name">Item Name / Title *</label>
                        <input type="text" id="item-name" required placeholder="e.g., Blue Wallet, iPhone 12, Keys">
                    </div>
                    
                    <div class="form-group">
                        <label for="category">Category *</label>
                        <select id="category" required>
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="jewelry">Jewelry & Accessories</option>
                            <option value="documents">Documents & IDs</option>
                            <option value="clothing">Clothing</option>
                            <option value="keys">Keys</option>
                            <option value="bags">Bags & Wallets</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="location">Location *</label>
                        <input type="text" id="location" required placeholder="Where was it lost/found? e.g., Main Street Park, Coffee Shop">
                    </div>
                    
                    <div class="form-group">
                        <label for="date">Date *</label>
                        <input type="date" id="date" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="description">Description *</label>
                        <textarea id="description" required placeholder="Please provide a detailed description of the item, including any identifying features..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact">Contact Information *</label>
                        <input type="text" id="contact" required placeholder="Email or phone number for contact">
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <button type="submit" class="btn btn-primary" style="padding: 15px 40px; font-size: 1.1rem;">
                            <i class="fas fa-paper-plane"></i> Submit Report
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <!-- About Page -->
        <section id="about-page" class="content-section hidden">
            <div class="section-title">
                <h2>About Our Lost & Found</h2>
                <p>Our mission is to help reunite people with their lost belongings</p>
            </div>
            
            <div class="form-container">
                <div style="text-align: center;">
                    <i class="fas fa-hands-helping" style="font-size: 4rem; color: var(--primary); margin-bottom: 20px;"></i>
                    <h3 style="font-size: 1.8rem; margin-bottom: 20px; color: var(--dark);">Community-Powered Solution</h3>
                </div>
                
                <p style="margin-bottom: 20px; font-size: 1.1rem;">
                    Our Lost & Found website is a community-driven platform designed to help people recover their lost items and return found items to their rightful owners. We believe in the power of community to make a difference.
                </p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 40px;">
                    <div style="text-align: center;">
                        <div style="background-color: var(--light); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                            <i class="fas fa-search" style="font-size: 1.8rem; color: var(--primary);"></i>
                        </div>
                        <h4>Easy to Use</h4>
                        <p>Simple interface to report and browse lost and found items</p>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="background-color: var(--light); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                            <i class="fas fa-shield-alt" style="font-size: 1.8rem; color: var(--primary);"></i>
                        </div>
                        <h4>Safe & Secure</h4>
                        <p>Your contact information is protected and only shared when necessary</p>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="background-color: var(--light); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                            <i class="fas fa-users" style="font-size: 1.8rem; color: var(--primary);"></i>
                        </div>
                        <h4>Community Focused</h4>
                        <p>Powered by people helping people in our community</p>
                    </div>
                </div>
                
                <div style="margin-top: 40px; padding: 25px; background-color: var(--light); border-radius: 10px;">
                    <h4 style="margin-bottom: 15px;">How It Works</h4>
                    <ol style="padding-left: 20px;">
                        <li style="margin-bottom: 10px;">Report a lost or found item with details and contact information</li>
                        <li style="margin-bottom: 10px;">Our system matches lost and found reports based on descriptions</li>
                        <li style="margin-bottom: 10px;">Users can browse items and contact the reporter if they believe it's theirs</li>
                        <li>Items are automatically removed after 30 days</li>
                    </ol>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Community Lost & Found</h3>
                    <p>Helping reunite people with their lost belongings since 2023.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <a href="#" class="nav-link" data-page="home">Home</a>
                    <a href="#" class="nav-link" data-page="browse">Browse Items</a>
                    <a href="#" class="nav-link" data-page="report">Report Item</a>
                    <a href="#" class="nav-link" data-page="about">About</a>
                </div>
                
                <div class="footer-column">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Community St, Your City</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                    <p><i class="fas fa-envelope"></i> help@communitylostfound.org</p>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 Community Lost & Found. All rights reserved.</p>
                <p>This is a demonstration website for GitHub Pages.</p>
            </div>
        </div>
    </footer>

    <!-- Success Modal -->
    <div id="success-modal" class="hidden" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000;">
        <div style="background-color: white; padding: 40px; border-radius: 12px; max-width: 500px; text-align: center;">
            <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--secondary); margin-bottom: 20px;"></i>
            <h3 style="font-size: 1.8rem; margin-bottom: 15px; color: var(--dark);">Report Submitted Successfully!</h3>
            <p>Thank you for your submission. Your report has been added to our database and will help reunite someone with their item.</p>
            <button id="close-modal" class="btn btn-primary" style="margin-top: 25px;">Continue</button>
        </div>
    </div>

    <script>
        // Sample data for lost and found items
        const itemsData = [
            { id: 1, name: "Blue Leather Wallet", type: "lost", category: "bags", location: "Central Park", date: "2023-10-15", description: "Blue leather wallet with credit cards and ID inside. Has a small scratch on the front.", contact: "john@email.com", icon: "fa-wallet" },
            { id: 2, name: "iPhone 12 Pro", type: "found", category: "electronics", location: "Coffee Shop on Main St", date: "2023-10-14", description: "Black iPhone 12 Pro found on a table. Has a blue case with star pattern.", contact: "coffee@shop.com", icon: "fa-mobile-alt" },
            { id: 3, name: "Gold Wedding Ring", type: "lost", category: "jewelry", location: "Gym locker room", date: "2023-10-12", description: "Simple gold wedding band with inscription inside: 'Always & Forever'.", contact: "555-1234", icon: "fa-ring" },
            { id: 4, name: "Keys with Car Fob", type: "found", category: "keys", location: "Parking Lot B", date: "2023-10-10", description: "Set of keys with Toyota car fob, two house keys, and a small keychain.", contact: "security@mall.com", icon: "fa-key" },
            { id: 5, name: "Student ID Card", type: "found", category: "documents", location: "University Library", date: "2023-10-08", description: "University student ID card for Jane Smith. Found near the photocopier.", contact: "library@university.edu", icon: "fa-id-card" },
            { id: 6, name: "Black Backpack", type: "lost", category: "bags", location: "Bus Station", date: "2023-10-05", description: "Black Jansport backpack with laptop compartment. Has a water bottle in side pocket.", contact: "me@email.com", icon: "fa-backpack" },
            { id: 7, name: "Wireless Headphones", type: "found", category: "electronics", location: "Fitness Center", date: "2023-10-03", description: "White wireless headphones in a black case. Found on a treadmill.", contact: "info@gym.com", icon: "fa-headphones" },
            { id: 8, name: "Silver Bracelet", type: "lost", category: "jewelry", location: "Beach Area", date: "2023-10-01", description: "Delicate silver bracelet with small heart charm. May have fallen off while swimming.", contact: "555-9876", icon: "fa-gem" }
        ];

        // DOM elements
        const pages = {
            home: document.getElementById('home-page'),
            browse: document.getElementById('browse-page'),
            report: document.getElementById('report-page'),
            about: document.getElementById('about-page')
        };
        
        const navLinks = document.querySelectorAll('.nav-link');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const itemsContainer = document.getElementById('items-container');
        const browseItemsContainer = document.getElementById('browse-items-container');
        const reportForm = document.getElementById('report-form');
        const searchInput = document.getElementById('search-input');
        const successModal = document.getElementById('success-modal');
        const closeModalBtn = document.getElementById('close-modal');
        const reportLostBtn = document.getElementById('reportLostBtn');
        const reportFoundBtn = document.getElementById('reportFoundBtn');
        const viewAllBtn = document.getElementById('viewAllBtn');

        // Initialize the app
        function init() {
            // Load sample items on home page
            displayItems(itemsData.slice(0, 4), itemsContainer);
            
            // Load all items for browse page
            displayItems(itemsData, browseItemsContainer);
            
            // Set today's date as default in the form
            document.getElementById('date').valueAsDate = new Date();
            
            // Set up event listeners
            setupEventListeners();
        }

        // Display items in a container
        function displayItems(items, container) {
            container.innerHTML = '';
            
            if (items.length === 0) {
                container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--gray);">No items found matching your criteria.</p>';
                return;
            }
            
            items.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.className = 'item-card';
                
                const iconClass = item.icon || getIconForCategory(item.category);
                
                itemCard.innerHTML = `
                    <div class="item-image">
                        <i class="fas ${iconClass}"></i>
                    </div>
                    <div class="item-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="item-meta">
                            <span><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
                            <span><i class="far fa-calendar"></i> ${formatDate(item.date)}</span>
                        </div>
                        <div class="item-type ${item.type}">${item.type === 'lost' ? 'Lost Item' : 'Found Item'}</div>
                    </div>
                `;
                
                container.appendChild(itemCard);
            });
        }

        // Get icon based on category
        function getIconForCategory(category) {
            const icons = {
                electronics: 'fa-laptop',
                jewelry: 'fa-gem',
                documents: 'fa-file-alt',
                clothing: 'fa-tshirt',
                keys: 'fa-key',
                bags: 'fa-briefcase',
                other: 'fa-question-circle'
            };
            return icons[category] || 'fa-question-circle';
        }

        // Format date for display
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Filter items based on type and search term
        function filterItems() {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            const searchTerm = searchInput.value.toLowerCase();
            
            let filteredItems = itemsData;
            
            // Apply type filter
            if (activeFilter !== 'all') {
                filteredItems = filteredItems.filter(item => item.type === activeFilter);
            }
            
            // Apply search filter
            if (searchTerm) {
                filteredItems = filteredItems.filter(item => 
                    item.name.toLowerCase().includes(searchTerm) ||
                    item.description.toLowerCase().includes(searchTerm) ||
                    item.location.toLowerCase().includes(searchTerm) ||
                    item.category.toLowerCase().includes(searchTerm)
                );
            }
            
            displayItems(filteredItems, browseItemsContainer);
        }

        // Setup all event listeners
        function setupEventListeners() {
            // Navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Show the selected page
                    const pageId = link.dataset.page;
                    Object.values(pages).forEach(page => page.classList.add('hidden'));
                    pages[pageId].classList.remove('hidden');
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
            
            // Filter buttons
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    filterItems();
                });
            });
            
            // Search input
            searchInput.addEventListener('input', filterItems);
            
            // Form submission
            reportForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form values
                const type = document.querySelector('input[name="type"]:checked').value;
                const name = document.getElementById('item-name').value;
                const category = document.getElementById('category').value;
                const location = document.getElementById('location').value;
                const date = document.getElementById('date').value;
                const description = document.getElementById('description').value;
                const contact = document.getElementById('contact').value;
                
                // Create new item object
                const newItem = {
                    id: itemsData.length + 1,
                    name,
                    type,
                    category,
                    location,
                    date,
                    description,
                    contact,
                    icon: getIconForCategory(category)
                };
                
                // Add to data array
                itemsData.unshift(newItem);
                
                // Update displays
                displayItems(itemsData.slice(0, 4), itemsContainer);
                displayItems(itemsData, browseItemsContainer);
                
                // Show success modal
                successModal.classList.remove('hidden');
                
                // Reset form
                reportForm.reset();
                document.getElementById('date').valueAsDate = new Date();
            });
            
            // Modal close button
            closeModalBtn.addEventListener('click', () => {
                successModal.classList.add('hidden');
                
                // Navigate to browse page
                document.querySelector('.nav-link[data-page="browse"]').click();
            });
            
            // Quick action buttons
            reportLostBtn.addEventListener('click', () => {
                document.querySelector('.nav-link[data-page="report"]').click();
                document.getElementById('lost').checked = true;
            });
            
            reportFoundBtn.addEventListener('click', () => {
                document.querySelector('.nav-link[data-page="report"]').click();
                document.getElementById('found').checked = true;
            });
            
            viewAllBtn.addEventListener('click', () => {
                document.querySelector('.nav-link[data-page="browse"]').click();
            });
            
            // Close modal if clicking outside
            successModal.addEventListener('click', (e) => {
                if (e.target === successModal) {
                    successModal.classList.add('hidden');
                }
            });
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>
