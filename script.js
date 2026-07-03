        // --- STATE ---
        let currentScenario = null;

        // --- DATA: 15 DETAILED SCENARIOS ---
        const scenarios = [
            { region: 'Punjab', season: 'Kharif', temp: 31, rainfall: 'High', humidity: 72, soil: 'Clay Loam', ph: 6.8, water: 'Abundant', sunlight: 8, special: 'Monsoon onset' },
            { region: 'Punjab', season: 'Rabi', temp: 17, rainfall: 'Low', humidity: 45, soil: 'Loamy Soil', ph: 7.1, water: 'Medium', sunlight: 7, special: 'Cool weather' },
            { region: 'Rajasthan', season: 'Summer', temp: 39, rainfall: 'Very Low', humidity: 20, soil: 'Sandy Soil', ph: 8.2, water: 'Low', sunlight: 10, special: 'Extreme heat' },
            { region: 'Kerala', season: 'Monsoon', temp: 29, rainfall: 'Very High', humidity: 90, soil: 'Laterite Soil', ph: 5.5, water: 'Abundant', sunlight: 5, special: 'Heavy rains' },
            { region: 'Maharashtra', season: 'Kharif', temp: 28, rainfall: 'Medium', humidity: 60, soil: 'Black Cotton Soil', ph: 7.5, water: 'Medium', sunlight: 7, special: 'Drought-prone' },
            { region: 'Gujarat', season: 'Summer', temp: 36, rainfall: 'Low', humidity: 35, soil: 'Black Soil', ph: 7.8, water: 'Low', sunlight: 9, special: 'High evaporation' },
            { region: 'West Bengal', season: 'Monsoon', temp: 30, rainfall: 'Heavy', humidity: 85, soil: 'Alluvial Soil', ph: 6.5, water: 'Abundant', sunlight: 6, special: 'Flood-prone' },
            { region: 'Tamil Nadu', season: 'Winter', temp: 27, rainfall: 'Medium', humidity: 70, soil: 'Red Soil', ph: 6.0, water: 'Medium', sunlight: 7, special: 'Mild winter' },
            { region: 'Assam', season: 'Monsoon', temp: 28, rainfall: 'Very Heavy', humidity: 95, soil: 'Alluvial Soil', ph: 5.8, water: 'Abundant', sunlight: 4, special: 'Waterlogged' },
            { region: 'Himachal Pradesh', season: 'Spring', temp: 18, rainfall: 'Medium', humidity: 50, soil: 'Mountain Soil', ph: 6.2, water: 'Medium', sunlight: 6, special: 'Hilly terrain' },
            { region: 'Uttar Pradesh', season: 'Rabi', temp: 20, rainfall: 'Low', humidity: 40, soil: 'Loamy Soil', ph: 7.0, water: 'Medium', sunlight: 8, special: 'Fertile plains' },
            { region: 'Karnataka', season: 'Kharif', temp: 26, rainfall: 'Medium', humidity: 65, soil: 'Red Loam', ph: 6.5, water: 'Medium', sunlight: 7, special: 'Red soil' },
            { region: 'Andhra Pradesh', season: 'Kharif', temp: 32, rainfall: 'Low', humidity: 55, soil: 'Black Soil', ph: 7.8, water: 'Low', sunlight: 9, special: 'Heatwave' },
            { region: 'Jammu & Kashmir', season: 'Summer', temp: 15, rainfall: 'Low', humidity: 40, soil: 'Mountain Soil', ph: 6.0, water: 'Medium', sunlight: 8, special: 'Cold nights' },
            { region: 'Odisha', season: 'Monsoon', temp: 31, rainfall: 'High', humidity: 80, soil: 'Alluvial Soil', ph: 6.2, water: 'Abundant', sunlight: 5, special: 'Cyclone risk' }
        ];

        // --- DATA: 35 DETAILED CROPS ---
        const crops = [
            { name: 'Rice', temp: [22, 32], rain: 5, soil: ['clay', 'alluvial'], ph: [5.5, 6.8], season: ['kharif', 'monsoon'], water: 5, yieldNum: 4.5, diff: 'Medium', dur: '3-6 mo', sus: 70, fact: 'Rice requires standing water during much of its growth.' },
            { name: 'Wheat', temp: [10, 25], rain: 2, soil: ['loamy', 'alluvial'], ph: [6.0, 7.5], season: ['rabi', 'winter'], water: 3, yieldNum: 3.2, diff: 'Easy', dur: '4 mo', sus: 80, fact: 'Wheat prefers cooler temperatures and is grown in Rabi season.' },
            { name: 'Cotton', temp: [25, 35], rain: 3, soil: ['black', 'sandy loam'], ph: [6.0, 8.0], season: ['kharif'], water: 3, yieldNum: 2.5, diff: 'Hard', dur: '6-8 mo', sus: 60, fact: 'Cotton grows best in black soil and requires 6-8 months frost-free.' },
            { name: 'Sugarcane', temp: [20, 35], rain: 4, soil: ['loamy', 'alluvial'], ph: [6.5, 7.5], season: ['kharif', 'summer'], water: 5, yieldNum: 70, diff: 'Medium', dur: '10-12 mo', sus: 65, fact: 'Sugarcane requires lots of water and is a long duration crop.' },
            { name: 'Maize', temp: [18, 30], rain: 3, soil: ['loamy', 'sandy'], ph: [5.5, 7.0], season: ['kharif'], water: 3, yieldNum: 5.0, diff: 'Easy', dur: '3-4 mo', sus: 75, fact: 'Maize is a versatile crop that can grow in various soils.' },
            { name: 'Potato', temp: [15, 25], rain: 3, soil: ['loamy', 'sandy'], ph: [5.0, 6.5], season: ['rabi', 'winter'], water: 3, yieldNum: 20, diff: 'Medium', dur: '3-4 mo', sus: 70, fact: 'Potato requires cool climate and well-drained soil.' },
            { name: 'Mustard', temp: [15, 25], rain: 2, soil: ['loamy', 'alluvial'], ph: [6.0, 7.5], season: ['rabi'], water: 2, yieldNum: 1.5, diff: 'Easy', dur: '4-5 mo', sus: 85, fact: 'Mustard is highly drought resistant and needs cool weather.' },
            { name: 'Bajra', temp: [25, 35], rain: 1, soil: ['sandy', 'black'], ph: [6.5, 7.5], season: ['kharif', 'summer'], water: 1, yieldNum: 2.0, diff: 'Easy', dur: '3-4 mo', sus: 90, fact: 'Bajra (Pearl Millet) is highly drought-resistant and thrives in arid regions.' },
            { name: 'Groundnut', temp: [22, 28], rain: 2, soil: ['sandy', 'red'], ph: [5.5, 7.0], season: ['kharif'], water: 2, yieldNum: 1.8, diff: 'Medium', dur: '4-5 mo', sus: 75, fact: 'Groundnut grows best in sandy soil and requires good drainage.' },
            { name: 'Soybean', temp: [20, 30], rain: 4, soil: ['loamy', 'black'], ph: [6.0, 7.5], season: ['kharif'], water: 4, yieldNum: 2.5, diff: 'Medium', dur: '3-4 mo', sus: 80, fact: 'Soybean enriches soil nitrogen and needs warm, humid weather.' },
            { name: 'Tea', temp: [18, 30], rain: 5, soil: ['mountain', 'laterite'], ph: [4.5, 6.0], season: ['spring', 'monsoon'], water: 5, yieldNum: 2.0, diff: 'Hard', dur: 'Perennial', sus: 85, fact: 'Tea requires high rainfall and hilly terrains with acidic soil.' },
            { name: 'Coffee', temp: [18, 28], rain: 4, soil: ['mountain', 'loamy'], ph: [5.5, 6.5], season: ['monsoon'], water: 4, yieldNum: 1.0, diff: 'Hard', dur: 'Perennial', sus: 85, fact: 'Coffee is shade-loving and needs well-drained soil with high organic matter.' },
            { name: 'Tomato', temp: [18, 28], rain: 3, soil: ['loamy', 'red'], ph: [6.0, 7.0], season: ['rabi', 'kharif'], water: 3, yieldNum: 30, diff: 'Medium', dur: '3-4 mo', sus: 70, fact: 'Tomatoes need well-drained soil and cannot tolerate frost.' },
            { name: 'Onion', temp: [15, 25], rain: 2, soil: ['sandy', 'loamy'], ph: [6.0, 7.0], season: ['rabi'], water: 2, yieldNum: 25, diff: 'Hard', dur: '4-5 mo', sus: 65, fact: 'Onions require cool weather for growth and warm weather for bulb formation.' },
            { name: 'Banana', temp: [20, 35], rain: 4, soil: ['loamy', 'alluvial'], ph: [6.0, 7.5], season: ['kharif', 'summer'], water: 5, yieldNum: 50, diff: 'Medium', dur: '10-12 mo', sus: 60, fact: 'Banana is a heavy feeder and requires deep, well-drained soil.' },
            { name: 'Apple', temp: [10, 20], rain: 3, soil: ['mountain', 'loamy'], ph: [6.0, 7.0], season: ['spring', 'winter'], water: 3, yieldNum: 15, diff: 'Hard', dur: 'Perennial', sus: 80, fact: 'Apples require chilling hours (below 7°C) during winter to break dormancy.' },
            { name: 'Cabbage', temp: [15, 22], rain: 3, soil: ['loamy', 'sandy'], ph: [6.0, 7.0], season: ['winter', 'rabi'], water: 3, yieldNum: 40, diff: 'Easy', dur: '3-4 mo', sus: 75, fact: 'Cabbage thrives in cool, moist climates and requires fertile soil.' },
            { name: 'Peas', temp: [10, 20], rain: 2, soil: ['loamy', 'sandy'], ph: [6.0, 7.5], season: ['rabi', 'winter'], water: 2, yieldNum: 8, diff: 'Easy', dur: '3-4 mo', sus: 85, fact: 'Peas are cool-season crops and fix nitrogen in the soil.' },
            { name: 'Barley', temp: [12, 20], rain: 2, soil: ['loamy', 'sandy'], ph: [6.5, 8.0], season: ['rabi'], water: 2, yieldNum: 2.5, diff: 'Easy', dur: '4 mo', sus: 85, fact: 'Barley is highly tolerant of drought and salinity.' },
            { name: 'Sunflower', temp: [20, 30], rain: 2, soil: ['loamy', 'black'], ph: [6.0, 7.5], season: ['kharif', 'spring'], water: 2, yieldNum: 2.0, diff: 'Medium', dur: '3-4 mo', sus: 80, fact: 'Sunflowers require full sun and are drought-resistant.' },
            { name: 'Chickpea', temp: [15, 25], rain: 1, soil: ['loamy', 'sandy'], ph: [6.0, 8.0], season: ['rabi'], water: 1, yieldNum: 1.8, diff: 'Easy', dur: '4 mo', sus: 90, fact: 'Chickpea (Gram) is a hardy rabi crop that fixes nitrogen.' },
            { name: 'Jowar', temp: [25, 35], rain: 2, soil: ['sandy', 'black'], ph: [6.0, 8.0], season: ['kharif'], water: 2, yieldNum: 2.5, diff: 'Easy', dur: '4-5 mo', sus: 85, fact: 'Jowar (Sorghum) is extremely drought-resistant and used for fodder and grain.' },
            { name: 'Orange', temp: [15, 30], rain: 3, soil: ['loamy', 'sandy'], ph: [6.0, 7.5], season: ['spring', 'winter'], water: 3, yieldNum: 20, diff: 'Hard', dur: 'Perennial', sus: 75, fact: 'Oranges require a tropical to subtropical climate with well-drained soil.' },
            { name: 'Mango', temp: [20, 35], rain: 3, soil: ['loamy', 'alluvial'], ph: [5.5, 7.5], season: ['summer', 'spring'], water: 3, yieldNum: 15, diff: 'Medium', dur: 'Perennial', sus: 80, fact: 'Mango is the king of fruits and requires a distinct dry season before flowering.' },
            { name: 'Carrot', temp: [15, 22], rain: 2, soil: ['sandy', 'loamy'], ph: [5.5, 7.0], season: ['rabi', 'winter'], water: 2, yieldNum: 25, diff: 'Medium', dur: '3 mo', sus: 80, fact: 'Carrots prefer deep, loose, sandy soil for proper root development.' },
            { name: 'Radish', temp: [10, 20], rain: 2, soil: ['sandy', 'loamy'], ph: [6.0, 7.0], season: ['winter', 'rabi'], water: 2, yieldNum: 30, diff: 'Easy', dur: '1-2 mo', sus: 85, fact: 'Radish is a fast-growing cool-season crop.' },
            { name: 'Spinach', temp: [10, 20], rain: 3, soil: ['loamy', 'sandy'], ph: [6.0, 7.5], season: ['winter', 'rabi'], water: 3, yieldNum: 15, diff: 'Easy', dur: '1-2 mo', sus: 90, fact: 'Spinach is rich in iron and grows quickly in cool, moist conditions.' },
            { name: 'Brinjal', temp: [20, 30], rain: 3, soil: ['loamy', 'sandy'], ph: [6.0, 7.5], season: ['kharif', 'rabi'], water: 3, yieldNum: 25, diff: 'Medium', dur: '4 mo', sus: 75, fact: 'Brinjal (Eggplant) requires a warm climate and fertile soil.' },
            { name: 'Cauliflower', temp: [15, 22], rain: 3, soil: ['loamy', 'sandy'], ph: [6.0, 7.5], season: ['winter', 'rabi'], water: 3, yieldNum: 30, diff: 'Medium', dur: '3-4 mo', sus: 70, fact: 'Cauliflower is sensitive to temperature changes and requires consistent moisture.' },
            { name: 'Grapes', temp: [20, 30], rain: 2, soil: ['sandy', 'loamy'], ph: [6.5, 7.5], season: ['spring', 'winter'], water: 2, yieldNum: 30, diff: 'Hard', dur: 'Perennial', sus: 70, fact: 'Grapes require a long, warm, dry summer for proper ripening.' },
            { name: 'Papaya', temp: [25, 35], rain: 3, soil: ['loamy', 'sandy'], ph: [6.0, 7.0], season: ['summer', 'monsoon'], water: 3, yieldNum: 50, diff: 'Medium', dur: 'Perennial', sus: 75, fact: 'Papaya is a fast-growing tropical plant that requires good drainage.' },
            { name: 'Pomegranate', temp: [20, 35], rain: 2, soil: ['loamy', 'sandy'], ph: [6.5, 8.0], season: ['spring', 'summer'], water: 2, yieldNum: 15, diff: 'Hard', dur: 'Perennial', sus: 80, fact: 'Pomegranate is highly drought-resistant and thrives in semi-arid conditions.' },
            { name: 'Watermelon', temp: [25, 35], rain: 2, soil: ['sandy', 'loamy'], ph: [6.0, 7.5], season: ['summer'], water: 2, yieldNum: 40, diff: 'Medium', dur: '3-4 mo', sus: 70, fact: 'Watermelon requires a long, warm growing season and well-drained soil.' }
        ];

        const rainMap = { 'very low': 1, 'low': 2, 'medium': 3, 'high': 4, 'heavy': 4, 'very high': 5, 'very heavy': 5, 'abundant': 5 };

        // --- SVG ICONS ---
        const icons = {
            location: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
            season: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>',
            temp: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>',
            rain: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/></svg>',
            water: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>',
            soil: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22c1.25-.987 2.27-1.975 3.9-2 2.5-.03 3.78 2 6.1 2 2.3-.022 3.58-2 6.1-2 1.63.025 2.65 1.013 3.9 2M2 16c1.25-.987 2.27-1.975 3.9-2 2.5-.03 3.78 2 6.1 2 2.3-.022 3.58-2 6.1-2 1.63.025 2.65 1.013 3.9 2M2 10c1.25-.987 2.27-1.975 3.9-2 2.5-.03 3.78 2 6.1 2 2.3-.022 3.58-2 6.1-2 1.63.025 2.65 1.013 3.9 2"/></svg>',
            sun: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
            ph: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v18M3 9h18M15 3v18"/></svg>',
            check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
        };

        // --- LUSH DETAILED PLANT SVG STAGES ---
        const plantStages = {
            seed: `<svg class="plant-stage-svg" width="100" height="120" viewBox="0 0 100 120"><defs><radialGradient id="seedG" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#8d6e63" /><stop offset="100%" stop-color="#3e2723" /></radialGradient></defs><ellipse cx="50" cy="100" rx="12" ry="8" fill="url(#seedG)" /></svg>`,
            sprout: `<svg class="plant-stage-svg" width="120" height="140" viewBox="0 0 120 140"><defs><linearGradient id="leafG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8bc34a" /><stop offset="100%" stop-color="#4d7c0f" /></linearGradient></defs><path d="M60 110 L60 80" stroke="#4d7c0f" stroke-width="4" stroke-linecap="round" /><path d="M60 80 C40 70, 30 60, 35 50 C50 50, 60 60, 60 80" fill="url(#leafG1)" /><path d="M60 80 C80 70, 90 60, 85 50 C70 50, 60 60, 60 80" fill="url(#leafG1)" transform="scale(-1, 1) translate(-120, 0)" /></svg>`,
            plant: `<svg class="plant-stage-svg" width="160" height="220" viewBox="0 0 160 220"><defs><linearGradient id="leafG2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8bc34a" /><stop offset="100%" stop-color="#4d7c0f" /></linearGradient></defs><path d="M80 200 L80 40" stroke="#4d7c0f" stroke-width="6" stroke-linecap="round" /><path d="M80 140 C40 130, 20 110, 20 90 C50 90, 80 100, 80 140" fill="url(#leafG2)" /><path d="M80 90 C120 80, 140 60, 140 40 C110 40, 80 50, 80 90" fill="url(#leafG2)" /><path d="M80 60 C50 50, 40 30, 40 10 C70 10, 80 30, 80 60" fill="url(#leafG2)" /></svg>`,
            flower: `<svg class="plant-stage-svg" width="160" height="260" viewBox="0 0 160 260"><defs><linearGradient id="leafG3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8bc34a" /><stop offset="100%" stop-color="#4d7c0f" /></linearGradient><radialGradient id="flowerG" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fbbf24" /><stop offset="100%" stop-color="#d97706" /></radialGradient></defs><path d="M80 240 L80 40" stroke="#4d7c0f" stroke-width="6" stroke-linecap="round" /><path d="M80 180 C40 170, 20 150, 20 130 C50 130, 80 140, 80 180" fill="url(#leafG3)" /><path d="M80 130 C120 120, 140 100, 140 80 C110 80, 80 90, 80 130" fill="url(#leafG3)" /><circle cx="80" cy="30" r="15" fill="url(#flowerG)" /><circle cx="80" cy="30" r="8" fill="#fef3c7" /><circle cx="60" cy="50" r="8" fill="#f59e0b" /><circle cx="100" cy="50" r="8" fill="#f59e0b" /></svg>`,
            harvest: `<svg class="plant-stage-svg" width="160" height="300" viewBox="0 0 160 300"><defs><linearGradient id="leafG4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8bc34a" /><stop offset="100%" stop-color="#4d7c0f" /></linearGradient><linearGradient id="grainG" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fbbf24" /><stop offset="100%" stop-color="#b45309" /></linearGradient></defs><path d="M80 280 L80 40" stroke="#4d7c0f" stroke-width="6" stroke-linecap="round" /><path d="M80 200 C40 190, 20 170, 20 150 C50 150, 80 160, 80 200" fill="url(#leafG4)" /><path d="M80 150 C120 140, 140 120, 140 100 C110 100, 80 110, 80 150" fill="url(#leafG4)" /><path d="M80 40 C60 10, 80 0, 80 0 C80 0, 100 10, 80 40" fill="url(#grainG)" /><path d="M60 50 C40 20, 60 10, 60 10 C60 10, 80 20, 60 50" fill="url(#grainG)" /><path d="M100 50 C120 20, 100 10, 100 10 C100 10, 80 20, 100 50" fill="url(#grainG)" /></svg>`,
            dead: `<svg class="plant-stage-svg" width="160" height="220" viewBox="0 0 160 220"><defs><linearGradient id="deadG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8d6e63" /><stop offset="100%" stop-color="#3e2723" /></linearGradient></defs><path d="M80 200 L100 40" stroke="#3e2723" stroke-width="6" stroke-linecap="round" transform="rotate(15 80 200)" /><path d="M90 140 C120 130, 140 110, 140 90 C110 90, 90 100, 90 140" fill="url(#deadG)" transform="rotate(15 80 200)" /><path d="M90 90 C60 80, 40 60, 40 40 C70 40, 90 50, 90 90" fill="url(#deadG)" transform="rotate(15 80 200)" /></svg>`
        };

        // --- DOM ELEMENTS ---
        const landingScreen = document.getElementById('landing-screen');
        const gameScreen = document.getElementById('game-screen');
        const growthScreen = document.getElementById('growth-screen');
        const resultScreen = document.getElementById('result-screen');
        const bgElements = document.getElementById('bg-elements');

        // --- GAME LOGIC ---

        function startGame() {
            currentScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
            renderScenario(currentScenario);
            updateWeatherTheme(currentScenario);
            
            switchScreen(gameScreen);
            document.getElementById('crop-input').value = '';
            document.getElementById('error-msg').style.display = 'none';
            document.getElementById('hint-box').classList.remove('show');
        }

        function retryScenario() {
            switchScreen(gameScreen);
            document.getElementById('crop-input').value = '';
            document.getElementById('error-msg').style.display = 'none';
            document.getElementById('hint-box').classList.remove('show');
        }

        function switchScreen(screen) {
            [landingScreen, gameScreen, growthScreen, resultScreen].forEach(s => s.classList.add('hidden'));
            screen.classList.remove('hidden');
        }

        function renderScenario(s) {
            const specialBox = document.getElementById('special-condition-box');
            if (s.special) {
                specialBox.innerText = `⚠️ Special Condition: ${s.special}`;
                specialBox.classList.remove('hidden');
            } else {
                specialBox.classList.add('hidden');
            }

            const cards = [
                { icon: icons.location, label: 'Region', value: s.region },
                { icon: icons.season, label: 'Season', value: s.season },
                { icon: icons.temp, label: 'Temperature', value: `${s.temp}°C` },
                { icon: icons.rain, label: 'Rainfall', value: s.rainfall },
                { icon: icons.water, label: 'Water', value: s.water },
                { icon: icons.soil, label: 'Soil', value: s.soil },
                { icon: icons.sun, label: 'Sunlight', value: `${s.sunlight} Hrs` },
                { icon: icons.ph, label: 'Soil pH', value: s.ph }
            ];

            document.getElementById('scenario-cards').innerHTML = cards.map(c => `
                <div class="info-card">
                    <div class="icon-wrapper">${c.icon}</div>
                    <div class="label">${c.label}</div>
                    <div class="value">${c.value}</div>
                </div>
            `).join('');
        }

        function showHint() {
            const s = currentScenario;
            let hint = "";
            if (s.temp > 35) hint = "It's very hot! Try a heat-resistant crop like Bajra, Jowar, or Groundnut.";
            else if (s.temp < 20) hint = "It's quite cold. Try Wheat, Mustard, or Apple.";
            else if (s.soil.toLowerCase().includes('black')) hint = "Black soil is perfect for Cotton, Soybean, or Sunflower.";
            else if (s.soil.toLowerCase().includes('sandy')) hint = "Sandy soil drains fast. Try Groundnut, Bajra, or Watermelon.";
            else if (s.soil.toLowerCase().includes('mountain')) hint = "Mountain soil is great for Tea, Coffee, or Apple.";
            else if (s.rainfall.toLowerCase().includes('high') || s.rainfall.toLowerCase().includes('heavy')) hint = "Lots of rain! Rice or Sugarcane would love this.";
            else hint = "Try a versatile crop like Maize or Wheat.";
            
            document.getElementById('hint-text').innerText = hint;
            document.getElementById('hint-box').classList.add('show');
        }

        function updateWeatherTheme(s) {
            bgElements.innerHTML = '';
            document.body.style.background = 'var(--bg-gradient)';

            if (s.temp > 35) {
                document.body.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #f59e0b 100%)';
                const sunCore = document.createElement('div'); sunCore.className = 'sun-element'; bgElements.appendChild(sunCore);
                const sunRays = document.createElement('div'); sunRays.className = 'sun-rays';
                sunRays.innerHTML = `<svg width="160" height="160" viewBox="0 0 100 100"><path d="M50 0 L55 45 L50 50 L45 45 Z" fill="#f59e0b" opacity="0.6"/><path d="M100 50 L55 55 L50 50 L55 45 Z" fill="#f59e0b" opacity="0.6"/><path d="M50 100 L55 55 L50 50 L45 55 Z" fill="#f59e0b" opacity="0.6"/><path d="M0 50 L45 55 L50 50 L45 45 Z" fill="#f59e0b" opacity="0.6"/></svg>`;
                bgElements.appendChild(sunRays);
                for(let i=0; i<2; i++) { const cloud = document.createElement('div'); cloud.className = 'cloud'; cloud.style.width = '300px'; cloud.style.height = '80px'; cloud.style.top = `${10 + i * 20}%`; cloud.style.animationDuration = `${40 + i * 10}s`; bgElements.appendChild(cloud); }
            } else if (s.rainfall.toLowerCase().includes('high') || s.rainfall.toLowerCase().includes('heavy') || s.season === 'Monsoon') {
                document.body.style.background = 'linear-gradient(135deg, #8d6e63 0%, #a1887f 50%, #d7ccc8 100%)';
                for(let i=0; i<80; i++) { const drop = document.createElement('div'); drop.className = 'rain-drop'; drop.style.left = `${Math.random()*100}%`; drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`; drop.style.animationDelay = `${Math.random()*2}s`; bgElements.appendChild(drop); }
            } else if (s.temp < 20) {
                document.body.style.background = 'linear-gradient(135deg, #eceff1 0%, #cfd8dc 50%, #b0bec5 100%)';
            }
        }

        function growCrop() {
            const inputVal = document.getElementById('crop-input').value.trim().toLowerCase();
            const crop = crops.find(c => c.name.toLowerCase() === inputVal);

            if (!crop) { document.getElementById('error-msg').style.display = 'block'; return; }
            document.getElementById('error-msg').style.display = 'none';
            
            const result = analyzeCrop(crop, currentScenario);
            switchScreen(growthScreen);
            document.getElementById('growth-title').innerText = `Growing ${crop.name}...`;
            animateGrowth(result, crop);
        }

        function analyzeCrop(crop, s) {
            let score = 100; let reasons = []; let isGood = [];
            let params = { temp: 100, rain: 100, soil: 100, season: 100, ph: 100 };

            if (s.temp < crop.temp[0] - 5 || s.temp > crop.temp[1] + 5) { score -= 30; params.temp = 0; reasons.push({text: `Temperature ${s.temp}°C is highly unsuitable (Ideal: ${crop.temp[0]}-${crop.temp[1]}°C).`, good: false}); } 
            else if (s.temp < crop.temp[0] || s.temp > crop.temp[1]) { score -= 10; params.temp = 60; reasons.push({text: `Temperature is slightly out of ideal range.`, good: false}); } 
            else { isGood.push('Temperature is perfect.'); }

            const sRain = rainMap[s.rainfall.toLowerCase()] || 3;
            if (Math.abs(sRain - crop.rain) >= 3) { score -= 25; params.rain = 0; reasons.push({text: `${s.rainfall} rainfall is highly unsuitable.`, good: false}); } 
            else if (Math.abs(sRain - crop.rain) === 2) { score -= 10; params.rain = 60; reasons.push({text: `Rainfall levels are not optimal.`, good: false}); } 
            else { isGood.push('Rainfall is optimal.'); }

            const sSoil = s.soil.toLowerCase();
            const soilMatch = crop.soil.some(c => sSoil.includes(c));
            if (!soilMatch) { score -= 20; params.soil = 0; reasons.push({text: `${s.soil} is not suitable for ${crop.name}.`, good: false}); } 
            else { isGood.push('Soil type is correct.'); }

            if (!crop.season.includes(s.season.toLowerCase())) { score -= 10; params.season = 0; reasons.push({text: `${s.season} is not the ideal season.`, good: false}); } 
            else { isGood.push('Season is perfect.'); }

            if (s.ph < crop.ph[0] || s.ph > crop.ph[1]) { score -= 10; params.ph = 0; reasons.push({text: `Soil pH ${s.ph} is outside the ideal range.`, good: false}); } 
            else { isGood.push('pH level is balanced.'); }

            score = Math.max(0, Math.round(score));

            let finalYield = 0;
            if (score >= 85) { finalYield = crop.yieldNum; } 
            else if (score >= 40) { finalYield = parseFloat((crop.yieldNum * (score / 100)).toFixed(1)); } 
            else { finalYield = parseFloat((crop.yieldNum * 0.1).toFixed(1)); }

            const finalReasons = [...reasons, ...isGood.map(g => ({text: g, good: true}))];
            return { score, finalYield, reasons: finalReasons, crop, params };
        }

        function animateGrowth(result, crop) {
            const container = document.getElementById('plant-container');
            const progress = document.getElementById('progress-fill');
            container.innerHTML = ''; progress.style.width = '0%';

            let maxStage = 4; 
            if (result.score < 85) maxStage = 2; 
            if (result.score < 65) maxStage = 1; 
            if (result.score < 40) maxStage = 5; 

            let stagesHtml = '';
            stagesHtml += plantStages.seed.replace('class="plant-stage-svg"', 'class="plant-stage-svg" id="stage-0"');
            stagesHtml += plantStages.sprout.replace('class="plant-stage-svg"', 'class="plant-stage-svg" id="stage-1"');
            stagesHtml += plantStages.plant.replace('class="plant-stage-svg"', 'class="plant-stage-svg" id="stage-2"');
            if (result.score > 65) stagesHtml += plantStages.flower.replace('class="plant-stage-svg"', 'class="plant-stage-svg" id="stage-3"');
            if (result.score > 85) stagesHtml += plantStages.harvest.replace('class="plant-stage-svg"', 'class="plant-stage-svg" id="stage-4"');
            if (result.score < 40) stagesHtml += plantStages.dead.replace('class="plant-stage-svg"', 'class="plant-stage-svg" id="stage-5"');
            
            container.innerHTML = stagesHtml;

            let curr = 0;
            const interval = setInterval(() => {
                if (curr <= maxStage) {
                    const stageEl = document.getElementById(`stage-${curr}`);
                    if(stageEl) stageEl.classList.add('active');
                    if (curr > 0) { const prevEl = document.getElementById(`stage-${curr-1}`); if(prevEl) prevEl.style.opacity = '0.3'; }
                    progress.style.width = `${(curr / 5) * 100}%`;
                    curr++;
                } else {
                    clearInterval(interval);
                    progress.style.width = '100%';
                    setTimeout(() => showResult(result), 1000);
                }
            }, 1000);
        }

        function showResult(result) {
            switchScreen(resultScreen);
            const r = result;
            const healthScore = r.score > 85 ? 95 : r.score > 65 ? 74 : r.score > 40 ? 40 : 5;

            document.getElementById('result-title').innerText = r.score > 85 ? '🎉 Excellent Choice!' : r.score > 65 ? '👍 Good Choice' : r.score > 40 ? '⚠️ Poor Choice' : '🥀 Crop Failed';
            document.getElementById('result-title').className = `result-title ${r.score > 65 ? 'text-success' : r.score > 40 ? '' : 'text-danger'}`;
            document.getElementById('result-subtitle').innerText = r.score > 85 ? `${r.crop.name} grows extremely well under these conditions.` : 'Review the analysis below to improve your next harvest.';
            
            document.getElementById('r-compat').innerText = '0%';
            document.getElementById('r-health').innerText = '0%';
            
            const stars = r.crop.diff === 'Easy' ? '★☆☆' : r.crop.diff === 'Medium' ? '★★☆' : '★★★';
            document.getElementById('r-diff').innerText = stars;
            document.getElementById('r-sus').innerText = r.crop.sus + '%';
            
            // Animate Numbers
            animateValue('r-yield', 0, r.finalYield, 1500, "", " t/ha");
            
            setTimeout(() => {
                setRing('ring-compat', r.score);
                setRing('ring-health', healthScore);
                document.getElementById('r-compat').innerText = r.score + '%';
                document.getElementById('r-health').innerText = healthScore + '%';
            }, 200);

            const reasonsHtml = r.reasons.map(res => `
                <div class="list-item">
                    <div class="list-icon ${res.good ? 'good' : ''}">${res.good ? icons.check : '!'}</div>
                    <div style="font-weight: 500; color: var(--text-main);">${res.text}</div>
                </div>
            `).join('');
            document.getElementById('r-reasons').innerHTML = reasonsHtml;

            const paramsHtml = `
                <div class="param-row"><div class="param-label"><span>Temperature</span><span>${r.params.temp}%</span></div><div class="param-bar-bg"><div class="param-bar-fill" style="background: ${r.params.temp > 50 ? 'var(--green-leaf)' : 'var(--danger)'};" data-width="${r.params.temp}"></div></div></div>
                <div class="param-row"><div class="param-label"><span>Rainfall</span><span>${r.params.rain}%</span></div><div class="param-bar-bg"><div class="param-bar-fill" style="background: ${r.params.rain > 50 ? 'var(--green-leaf)' : 'var(--danger)'};" data-width="${r.params.rain}"></div></div></div>
                <div class="param-row"><div class="param-label"><span>Soil Type</span><span>${r.params.soil}%</span></div><div class="param-bar-bg"><div class="param-bar-fill" style="background: ${r.params.soil > 50 ? 'var(--green-leaf)' : 'var(--danger)'};" data-width="${r.params.soil}"></div></div></div>
                <div class="param-row"><div class="param-label"><span>Season</span><span>${r.params.season}%</span></div><div class="param-bar-bg"><div class="param-bar-fill" style="background: ${r.params.season > 50 ? 'var(--green-leaf)' : 'var(--danger)'};" data-width="${r.params.season}"></div></div></div>
                <div class="param-row"><div class="param-label"><span>Soil pH</span><span>${r.params.ph}%</span></div><div class="param-bar-bg"><div class="param-bar-fill" style="background: ${r.params.ph > 50 ? 'var(--green-leaf)' : 'var(--danger)'};" data-width="${r.params.ph}"></div></div></div>
            `;
            document.getElementById('r-params').innerHTML = paramsHtml;

            setTimeout(() => { document.querySelectorAll('.param-bar-fill').forEach(bar => { bar.style.width = bar.dataset.width + '%'; }); }, 300);

            document.getElementById('r-fact').innerText = r.crop.fact;

            if (r.score < 85) {
                document.getElementById('better-crops-box').style.display = 'block';
                const better = crops.filter(c => { return analyzeCrop(c, currentScenario).score > 85 && c.name !== r.crop.name; }).slice(0, 3);
                if(better.length > 0) { document.getElementById('r-better').innerHTML = better.map(c => `<div class="chip">${icons.check} ${c.name}</div>`).join(''); } 
                else { document.getElementById('r-better').innerHTML = '<div class="chip">No perfect matches found.</div>'; }
            } else {
                document.getElementById('better-crops-box').style.display = 'none';
            }

            if (r.score > 85) createConfetti();
        }

        function animateValue(id, start, end, duration, prefix = "", suffix = "") {
            const obj = document.getElementById(id);
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                obj.innerHTML = `${prefix}${value.toLocaleString('en-IN')}${suffix}`;
                if (progress < 1) { window.requestAnimationFrame(step); }
            };
            window.requestAnimationFrame(step);
        }

        function setRing(id, percent) {
            const circle = document.getElementById(id);
            if (!circle) return;
            const radius = 50; 
            const circumference = 2 * Math.PI * radius;
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = circumference;
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }

        function createConfetti() {
            const colors = ['#fbbf24', '#4d7c0f', '#d97706', '#b91c1c', '#6b4226'];
            for(let i=0; i<80; i++) {
                const conf = document.createElement('div');
                conf.classList.add('confetti-piece');
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.background = colors[Math.floor(Math.random()*colors.length)];
                conf.style.animationDuration = (2 + Math.random() * 2) + 's';
                conf.style.animationDelay = Math.random() + 's';
                conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                document.body.appendChild(conf);
                setTimeout(() => conf.remove(), 4000);
            }
        }
