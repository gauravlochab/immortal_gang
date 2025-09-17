// Luxury Divine Hanuman Website JavaScript - No Analytics Version
class DivineHanumanApp {
    constructor() {
        this.data = {
            hanumanTimeline: [
                { title: "Birth in Anjana Giri", description: "Born to Anjana and Kesari, blessed by Vayu", era: "Treta Yuga" },
                { title: "Swallowing the Sun", description: "Mistook sun for fruit, showcasing divine power", era: "Childhood" },
                { title: "Meeting Lord Rama", description: "First encounter that changed everything", era: "Kishkindha" },
                { title: "Crossing the Ocean", description: "Leaping to Lanka in search of Sita", era: "Lanka Journey" },
                { title: "Burning Lanka", description: "Setting Lanka ablaze with devotion", era: "Lanka Victory" },
                { title: "Lifting Sanjeevani", description: "Carrying the entire mountain to save Lakshmana", era: "War Period" }
            ],
            hanumanFacts: [
                { title: "Meditation Pose", description: "Hanuman in deep contemplation, connecting with divine consciousness", pose: "🧘‍♂️" },
                { title: "Flying Form", description: "Soaring across skies with divine grace and infinite speed", pose: "🕊️" },
                { title: "Mountain Lifting", description: "Carrying Sanjeevani mountain, symbol of devotion and strength", pose: "🏔️" },
                { title: "Blessing Pose", description: "Bestowing blessings upon devotees with compassion", pose: "🙏" },
                { title: "Warrior Form", description: "Guardian of dharma, protector of devotees", pose: "⚔️" }
            ],
            sacredNumbers: [108, 1008, 21, 41, 11],
            timeBasedBlessings: {
                morning: "🌅 Blessed morning darshan with Surya's divine energy",
                afternoon: "🌞 Midday strength flows from Hanuman's infinite power", 
                evening: "🌇 Evening aarti brings peace and divine protection",
                night: "🌙 Peaceful night under Bajrang Bali's watchful care"
            }
        };
        
        this.particles = [];
        this.isAmbientPlaying = false;
        this.mantraCount = 108;
        
        this.init();
    }
    
    init() {
        this.showLoader();
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                this.hideLoader();
                this.initializeAll();
            }, 2000);
        });
    }
    
    showLoader() {
        const loader = document.getElementById('lux-loader');
        if (loader) {
            loader.style.display = 'flex';
        }
    }
    
    hideLoader() {
        const loader = document.getElementById('lux-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
        }
    }
    
    initializeAll() {
        this.initializeParticles();
        this.initializeGreeting();
        this.initializeTimeline();
        this.initializeFacts();
        this.initializeMantraPlayer();
        this.initializeNavigation();
        this.initializeCommunity();
        this.initializeScrollAnimations();
        this.initializeThemeToggle();
        this.initializeSacredNumbers();
        this.initializePrayerWheel();
        this.startDivineAnimations();
    }
    
    initializeParticles() {
        const canvas = document.getElementById('particles-bg');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedY: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                symbol: ['✨', '🌸', '🙏', '💫'][Math.floor(Math.random() * 4)]
            });
        }
        
        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            this.particles.forEach(particle => {
                ctx.save();
                ctx.globalAlpha = particle.opacity;
                ctx.font = `${particle.size * 8}px serif`;
                ctx.fillText(particle.symbol, particle.x, particle.y);
                ctx.restore();
                
                particle.y -= particle.speedY;
                if (particle.y < -20) {
                    particle.y = canvas.height + 20;
                    particle.x = Math.random() * canvas.width;
                }
            });
            
            requestAnimationFrame(animateParticles);
        };
        
        animateParticles();
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    initializeGreeting() {
        const greetingEl = document.getElementById('greeting');
        if (!greetingEl) return;
        
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 6) greeting = this.data.timeBasedBlessings.night;
        else if (hour < 12) greeting = this.data.timeBasedBlessings.morning;
        else if (hour < 18) greeting = this.data.timeBasedBlessings.afternoon;
        else greeting = this.data.timeBasedBlessings.evening;
        
        greetingEl.textContent = greeting;
        
        // Update blessing text
        const blessingEl = document.getElementById('blessingText');
        if (blessingEl) {
            const blessings = [
                "May Hanuman Ji's strength flow through you today 🙏",
                "Let divine protection surround your every step ✨",
                "Blessed be your journey with courage and wisdom 🌸",
                "May your devotion bring infinite peace and joy 💫"
            ];
            blessingEl.textContent = blessings[Math.floor(Math.random() * blessings.length)];
        }
    }
    
    initializeTimeline() {
        const timeline = document.getElementById('hanumanTimeline');
        if (!timeline) return;
        
        this.data.hanumanTimeline.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'timeline-item';
            li.style.animationDelay = `${index * 0.2}s`;
            
            li.innerHTML = `
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="timeline-era">${item.era}</span>
                </div>
            `;
            
            timeline.appendChild(li);
        });
    }
    
    initializeFacts() {
        const factsContainer = document.getElementById('hanumanFacts');
        if (!factsContainer) return;
        
        this.data.hanumanFacts.forEach((fact, index) => {
            const card = document.createElement('div');
            card.className = 'card-3d glass-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="fact-pose">${fact.pose}</div>
                <h3>${fact.title}</h3>
                <p>${fact.description}</p>
            `;
            
            card.addEventListener('click', () => {
                card.style.animation = 'morphing 2s ease-in-out';
                setTimeout(() => {
                    card.style.animation = '';
                }, 2000);
            });
            
            factsContainer.appendChild(card);
        });
    }
    
    initializeMantraPlayer() {
        const playBtn = document.getElementById('playMantra');
        const waveform = document.getElementById('waveform');
        const mantraCountEl = document.getElementById('mantraCount');
        
        if (!playBtn || !waveform || !mantraCountEl) return;
        
        // Set initial mantra count
        mantraCountEl.textContent = this.mantraCount;
        
        // Create waveform bars
        for (let i = 0; i < 20; i++) {
            const bar = document.createElement('div');
            bar.className = 'waveform-bar';
            bar.style.height = Math.random() * 20 + 10 + 'px';
            waveform.appendChild(bar);
        }
        
        playBtn.addEventListener('click', () => {
            const isPlaying = playBtn.textContent.includes('Pause');
            
            if (isPlaying) {
                playBtn.innerHTML = 'Play & Chant';
                waveform.style.display = 'none';
            } else {
                playBtn.innerHTML = 'Pause Mantra';
                waveform.style.display = 'flex';
                
                // Animate mantra counter
                const interval = setInterval(() => {
                    this.mantraCount++;
                    mantraCountEl.textContent = this.mantraCount;
                    
                    // Add glow effect
                    mantraCountEl.style.textShadow = '0 0 20px #FFD700';
                    setTimeout(() => {
                        mantraCountEl.style.textShadow = '';
                    }, 500);
                }, 2000);
                
                setTimeout(() => {
                    clearInterval(interval);
                    playBtn.innerHTML = 'Play & Chant';
                    waveform.style.display = 'none';
                    this.showNotification('🕉️ Mantra session completed! Divine merit earned');
                }, 30000);
            }
        });
    }
    
    initializeNavigation() {
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Get the exact position of the target element
                    const rect = targetElement.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const targetPosition = rect.top + scrollTop - 80; // Account for fixed header
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Show confirmation
                    this.showNotification(`✨ Navigating to ${targetElement.id} section`);
                }
            });
        });
    }
    
    initializeCommunity() {
        // Make sure all elements exist first
        const shareBtn = document.getElementById('sharePrayer');
        const prayerInput = document.getElementById('communityPrayer');
        const prayerFeed = document.getElementById('communityPrayerFeed');
        
        console.log('Community elements:', { shareBtn, prayerInput, prayerFeed });
        
        if (shareBtn && prayerInput && prayerFeed) {
            // Remove any existing event listeners
            const newShareBtn = shareBtn.cloneNode(true);
            shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);
            
            // Add fresh event listener
            newShareBtn.addEventListener('click', (e) => {
                console.log('Share button clicked!');
                e.preventDefault();
                
                const prayer = prayerInput.value.trim();
                console.log('Prayer text:', prayer);
                
                if (prayer) {
                    // Create and add new prayer item
                    const prayerItem = document.createElement('div');
                    prayerItem.className = 'prayer-item';
                    prayerItem.innerHTML = `"${prayer}" - Anonymous Devotee 🙏`;
                    
                    // Add to the beginning of the feed
                    if (prayerFeed.firstChild) {
                        prayerFeed.insertBefore(prayerItem, prayerFeed.firstChild);
                    } else {
                        prayerFeed.appendChild(prayerItem);
                    }
                    
                    // Clear the input
                    prayerInput.value = '';
                    
                    // Show success notification
                    this.showNotification('🙏 Your prayer has been shared with the community!');
                    
                    console.log('Prayer added successfully!');
                } else {
                    this.showNotification('Please enter a prayer intention to share', 'warning');
                }
            });
            
            // Add some example prayers on load
            setTimeout(() => {
                const examplePrayers = [
                    "May all beings find peace and happiness 🕉️",
                    "Grant strength to overcome all obstacles 💪",
                    "Bless our families with health and prosperity 🌸"
                ];
                
                examplePrayers.forEach((prayer, index) => {
                    setTimeout(() => {
                        const prayerItem = document.createElement('div');
                        prayerItem.className = 'prayer-item';
                        prayerItem.innerHTML = `"${prayer}" - Devotee Community 🙏`;
                        prayerFeed.appendChild(prayerItem);
                    }, index * 500);
                });
            }, 1000);
            
        } else {
            console.error('Community elements not found:', { shareBtn, prayerInput, prayerFeed });
        }
    }
    
    initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.glass-card, .timeline-item, .card-3d').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
    
    initializeThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                this.showNotification('✨ Theme switched for better spiritual experience');
            });
        }
    }
    
    initializeSacredNumbers() {
        const sacredContainer = document.getElementById('communitySacredNumbers');
        if (!sacredContainer) return;
        
        this.data.sacredNumbers.forEach(num => {
            const numEl = document.createElement('span');
            numEl.className = 'sacred-num';
            numEl.textContent = num;
            sacredContainer.appendChild(numEl);
        });
    }
    
    initializePrayerWheel() {
        const prayerWheelBtn = document.getElementById('prayerWheelBtn');
        if (prayerWheelBtn) {
            prayerWheelBtn.addEventListener('click', () => {
                prayerWheelBtn.classList.add('spinning');
                
                setTimeout(() => {
                    prayerWheelBtn.classList.remove('spinning');
                    this.showNotification('🔄 Prayer wheel completed one revolution - Merit earned!');
                }, 3000);
            });
        }
        
        // Ambient sound toggle
        const ambientBtn = document.getElementById('toggleAmbient');
        if (ambientBtn) {
            ambientBtn.addEventListener('click', () => {
                this.isAmbientPlaying = !this.isAmbientPlaying;
                ambientBtn.textContent = this.isAmbientPlaying ? '🔇' : '🔊';
                this.showNotification(this.isAmbientPlaying ? '🎵 Ambient spiritual sounds enabled' : '🔇 Ambient sounds paused');
            });
        }
    }
    
    startDivineAnimations() {
        // Floating animations for various elements (except static ones)
        setInterval(() => {
            document.querySelectorAll('.lux-decor-symbol').forEach(symbol => {
                symbol.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 5}px)`;
            });
            
            // Animate offering icons
            document.querySelectorAll('.offering-icon').forEach((icon, index) => {
                const offset = Math.sin(Date.now() * 0.001 + index * 0.5) * 5;
                icon.style.transform = `translateY(${offset}px)`;
            });
        }, 16);
        
        // Auto-update mantra count occasionally
        setInterval(() => {
            if (Math.random() > 0.8) { // 20% chance every 30 seconds
                this.updateMantraCount();
            }
        }, 30000);
    }
    
    updateMantraCount() {
        const mantraCountEl = document.getElementById('mantraCount');
        if (mantraCountEl) {
            this.mantraCount += Math.floor(Math.random() * 3) + 1;
            mantraCountEl.textContent = this.mantraCount;
            
            // Add glow effect
            mantraCountEl.style.textShadow = '0 0 20px #FFD700';
            setTimeout(() => {
                mantraCountEl.style.textShadow = '';
            }, 1000);
        }
    }
    
    showNotification(message, type = 'success') {
        // Remove any existing notifications first
        document.querySelectorAll('.divine-notification').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = 'divine-notification';
        notification.textContent = message;
        
        const backgroundColor = type === 'warning' ? 
            'linear-gradient(135deg, #FF4500, #FF6B35)' : 
            'linear-gradient(135deg, #FF6B35, #FFD700)';
            
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${backgroundColor};
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
            z-index: 10000;
            font-weight: 500;
            animation: slideInRight 0.5s ease-out;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.5s ease-in';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 500);
            }
        }, 2500);
        
        console.log('Notification shown:', message);
    }
}

// Additional CSS for notifications and components
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .fact-pose {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 1rem;
        animation: float 3s ease-in-out infinite;
    }
    
    .timeline-era {
        display: inline-block;
        background: linear-gradient(135deg, #FF6B35, #FFD700);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
        margin-top: 8px;
    }
    
    .dark-theme {
        --color-background: var(--color-charcoal-700);
        --color-surface: var(--color-charcoal-800);
        --color-text: var(--color-gray-200);
    }
    
    .dark-theme .glass-card {
        background: rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 215, 0, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// Initialize the application
const divineApp = new DivineHanumanApp();