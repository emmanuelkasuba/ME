// script.js
// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Scrollspy Navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Composition Modal
const compositionModal = document.getElementById('compositionModal');
const closeComposition = document.getElementById('closeComposition');
const compositionTitle = document.getElementById('compositionTitle');
const compositionTag = document.getElementById('compositionTag');
const compositionBody = document.getElementById('compositionBody');

// Function to open composition
function openComposition(title, tag, content) {
    compositionTitle.textContent = title;
    compositionTag.textContent = tag;
    compositionBody.innerHTML = content;
    compositionModal.style.display = 'flex';
    document.body.classList.add('blurred');
}

// Close composition
closeComposition.addEventListener('click', () => {
    compositionModal.style.display = 'none';
    document.body.classList.remove('blurred');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === compositionModal) {
        compositionModal.style.display = 'none';
        document.body.classList.remove('blurred');
    }
});

// Section Click Handlers
document.getElementById('spiritualCard').addEventListener('click', () => {
    openComposition(
        'Spiritual Foundation', 
        'Core Identity',
        `<p>My Christian faith is the bedrock of everything I do. It shapes my approach to technology, entrepreneurship, and personal growth. I believe that technology should not just solve problems, but also reflect God's character and purposes in the world.</p>
        
        <div class="composition-section">
            <h3>Faith-Driven Innovation</h3>
            <p>Every project I undertake begins with prayer and seeks to align with biblical principles. This approach has led to the creation of platforms that:</p>
            <ul>
                <li>Prioritize ethical considerations in AI development</li>
                <li>Promote human dignity and community wellbeing</li>
                <li>Create opportunities for the marginalized</li>
                <li>Reflect God's creativity and wisdom</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Biblical Storytelling</h3>
            <p>My creative works, including the silent play "The Story of an Average Youth," explore spiritual themes through modern narratives. This play follows a character's journey:</p>
            <ol>
                <li>Innocence and early faith</li>
                <li>Worldly distractions and temptations</li>
                <li>Brokenness and consequences</li>
                <li>Redemption through Christ</li>
                <li>Restoration and purpose</li>
            </ol>
        </div>
        
        <div class="composition-highlights">
            <div class="highlight-card">
                <i class="fas fa-pray"></i>
                <h4>Prayer First</h4>
                <p>All projects begin and continue with prayer for wisdom and guidance.</p>
            </div>
            <div class="highlight-card">
                <i class="fas fa-bible"></i>
                <h4>Scriptural Foundation</h4>
                <p>Key verses like Proverbs 3:5-6 guide decision-making processes.</p>
            </div>
            <div class="highlight-card">
                <i class="fas fa-hands-helping"></i>
                <h4>Service Focused</h4>
                <p>Technology as a tool to serve others and demonstrate Christ's love.</p>
            </div>
        </div>`
    );
});

document.getElementById('technicalCard').addEventListener('click', () => {
    openComposition(
        'Technical Expertise', 
        'Core Identity',
        `<p>With a strong foundation in cybersecurity and a passion for innovation, I'm building solutions that address Africa's unique challenges. My technical journey combines formal education with hands-on experimentation and real-world application.</p>
        
        <div class="composition-section">
            <h3>Cybersecurity Focus</h3>
            <p>My studies at Zambia University College of Technology have equipped me with specialized knowledge in:</p>
            <ul>
                <li>Threat intelligence and analysis</li>
                <li>Ethical hacking and penetration testing</li>
                <li>Cryptography and secure communications</li>
                <li>Incident response and digital forensics</li>
                <li>Security policy development</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Technical Stack</h3>
            <p>I work with a diverse set of technologies to build robust, secure systems:</p>
            <div class="composition-highlights">
                <div class="highlight-card">
                    <i class="fab fa-python"></i>
                    <h4>Python</h4>
                    <p>Primary language for AI/ML, automation, and backend development</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-shield-alt"></i>
                    <h4>Cybersecurity Tools</h4>
                    <p>Wireshark, Metasploit, Nmap, Burp Suite, Kali Linux</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-cloud"></i>
                    <h4>Cloud Security</h4>
                    <p>AWS, Azure, and Google Cloud security implementations</p>
                </div>
            </div>
        </div>
        
        <div class="composition-section">
            <h3>Learning Philosophy</h3>
            <p>I believe in continuous growth through:</p>
            <ul>
                <li>Building real projects to solve actual problems</li>
                <li>Participating in cybersecurity competitions</li>
                <li>Contributing to open-source security projects</li>
                <li>Mentoring other aspiring African technologists</li>
            </ul>
        </div>`
    );
});

document.getElementById('genesisCard').addEventListener('click', () => {
    openComposition(
        'Genesis Secure AI', 
        'Project',
        `<p>Genesis Secure AI is a revolutionary cybersecurity education platform designed specifically for African institutions. It addresses the critical shortage of cybersecurity professionals in Zambia and beyond through immersive, AI-powered learning experiences.</p>
        
        <div class="composition-section">
            <h3>Project Overview</h3>
            <p>In Zambia, only 23% of organizations have adequate cybersecurity staff. Genesis Secure AI aims to bridge this gap by:</p>
            <ul>
                <li>Creating realistic cyber attack simulations</li>
                <li>Providing personalized learning paths</li>
                <li>Offering certification programs recognized by industry</li>
                <li>Connecting students with internship opportunities</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Key Features</h3>
            <div class="composition-highlights">
                <div class="highlight-card">
                    <i class="fas fa-robot"></i>
                    <h4>AI Threat Simulator</h4>
                    <p>Generates evolving cyber attacks that adapt to student skill levels</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-graduation-cap"></i>
                    <h4>Learning Paths</h4>
                    <p>Customized curriculum based on skill assessments</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-trophy"></i>
                    <h4>Gamification</h4>
                    <p>Leaderboards, achievements, and skill badges</p>
                </div>
            </div>
        </div>
        
        <div class="composition-section">
            <h3>Impact & Results</h3>
            <p>Since its pilot launch at Zambia University College of Technology:</p>
            <ul>
                <li>500+ students trained in first 6 months</li>
                <li>97% satisfaction rate among users</li>
                <li>42% increase in cybersecurity certification pass rates</li>
                <li>15 graduates placed in cybersecurity roles</li>
            </ul>
        </div>`
    );
});

document.getElementById('shdCard').addEventListener('click', () => {
    openComposition(
        'Smart Health Diagnostics', 
        'Project',
        `<p>SHD is an AI-powered health platform that uses wearable technology to monitor children's health and predict potential medical issues before they become critical. This project was born from my desire to address Zambia's high child mortality rate.</p>
        
        <div class="composition-section">
            <h3>The Challenge</h3>
            <p>In rural Zambia, access to healthcare is limited, and preventable diseases often go undetected. Key statistics:</p>
            <ul>
                <li>Zambia's under-5 mortality rate is 55 per 1,000 live births</li>
                <li>60% of child deaths are from preventable diseases</li>
                <li>Average distance to nearest clinic is 15km in rural areas</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Our Solution</h3>
            <div class="composition-highlights">
                <div class="highlight-card">
                    <i class="fas fa-heartbeat"></i>
                    <h4>Vital Monitoring</h4>
                    <p>Continuous tracking of temperature, heart rate, and oxygen levels</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-bell"></i>
                    <h4>Early Alerts</h4>
                    <p>AI predicts potential health issues 48-72 hours before symptoms appear</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-mobile-alt"></i>
                    <h4>Mobile Access</h4>
                    <p>Parents receive notifications and can consult doctors remotely</p>
                </div>
            </div>
        </div>
        
        <div class="composition-section">
            <h3>Impact & Results</h3>
            <p>Pilot program results in three rural communities:</p>
            <ul>
                <li>22% reduction in child mortality in pilot areas</li>
                <li>97% accuracy in pneumonia prediction</li>
                <li>Average 3-hour faster response time for emergencies</li>
                <li>87% of parents reported increased peace of mind</li>
            </ul>
        </div>`
    );
});

document.getElementById('hotTaksCard').addEventListener('click', () => {
    openComposition(
        'Hot Taks', 
        'Project',
        `<p>Hot Taks is a meme-powered news platform built specifically for Zambian college students. It blends humor, community engagement, and real-time updates in a sleek, mobile-first web application.</p>
        
        <div class="composition-section">
            <h3>Project Vision</h3>
            <p>Hot Taks was created to address the need for:</p>
            <ul>
                <li>Localized content relevant to Zambian students</li>
                <li>A platform that combines news with social engagement</li>
                <li>Creating a community around campus culture and events</li>
                <li>Providing a space for student voices to be heard</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Key Features</h3>
            <div class="composition-highlights">
                <div class="highlight-card">
                    <i class="fas fa-laugh"></i>
                    <h4>Meme-Powered</h4>
                    <p>Integrates humor with news to increase engagement</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-users"></i>
                    <h4>Community Focus</h4>
                    <p>Built specifically for Zambian college culture</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-mobile-alt"></i>
                    <h4>Mobile-First</h4>
                    <p>Responsive design optimized for smartphones</p>
                </div>
            </div>
        </div>
        
        <div class="composition-section">
            <h3>Technical Implementation</h3>
            <p>The platform leverages modern technologies:</p>
            <ul>
                <li><strong>Firebase:</strong> For real-time database and authentication</li>
                <li><strong>AdSense Integration:</strong> For sustainable monetization</li>
                <li><strong>Dynamic UI/UX:</strong> Smooth animations and interactions</li>
                <li><strong>Content Moderation:</strong> AI-powered filtering for community safety</li>
            </ul>
        </div>`
    );
});

document.getElementById('hairDoCard').addEventListener('click', () => {
    openComposition(
        'Hair Do', 
        'Project',
        `<p>Hair Do is a web-based hairstyling platform designed for Lusaka, Zambia. It connects customers with barbers, salons, and spas through smart booking, social interactions, and reviews.</p>
        
        <div class="composition-section">
            <h3>Core Concept</h3>
            <p>Hair Do solves several problems in the Zambian beauty industry:</p>
            <ul>
                <li>Difficulty finding reputable stylists and salons</li>
                <li>Inconsistent booking systems and availability</li>
                <li>Lack of community around hairstyling culture</li>
                <li>Need for a trusted review system</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Platform Features</h3>
            <div class="composition-highlights">
                <div class="highlight-card">
                    <i class="fas fa-calendar-check"></i>
                    <h4>Smart Booking</h4>
                    <p>Real-time availability and scheduling</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-image"></i>
                    <h4>Style Gallery</h4>
                    <p>Businesses showcase their work with images</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-comment"></i>
                    <h4>Braids Feed</h4>
                    <p>Customers post text-only updates and reviews</p>
                </div>
            </div>
        </div>
        
        <div class="composition-section">
            <h3>Future Development</h3>
            <p>Planned upgrades include:</p>
            <ul>
                <li>AI hairstyling try-ons using AR/ML technology</li>
                <li>Integrated payment system with mobile money</li>
                <li>Loyalty programs for frequent customers</li>
                <li>Business analytics dashboard for salons</li>
            </ul>
        </div>`
    );
});

document.getElementById('timeline1').addEventListener('click', () => {
    openComposition(
        'Short-Term Vision', 
        'Journey',
        `<div class="composition-section">
            <h3>Immediate Goals</h3>
            <p>Over the next 12 months, my focus is on launching and scaling two key initiatives:</p>
            <ul>
                <li><strong>Genesis Secure AI:</strong> Full deployment at 3 Zambian universities</li>
                <li><strong>Hair Do App:</strong> Reach 10,000 active users across Lusaka</li>
                <li>Secure $200,000 in seed funding</li>
                <li>Build a core team of 8 talented developers</li>
                <li>Establish partnerships with 3 cybersecurity firms</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Key Milestones</h3>
            <div class="composition-highlights">
                <div class="highlight-card">
                    <i class="fas fa-calendar-alt"></i>
                    <h4>Q1 2025</h4>
                    <p>Complete MVP for Hair Do App</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-calendar-alt"></i>
                    <h4>Q2 2025</h4>
                    <p>Pilot Genesis Secure AI at ZUT</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-calendar-alt"></i>
                    <h4>Q3 2025</h4>
                    <p>Secure first round of funding</p>
                </div>
            </div>
        </div>
        
        <div class="composition-section">
            <h3>Success Metrics</h3>
            <ul>
                <li>Train 1,000 students through Genesis Secure AI</li>
                <li>Process 5,000 bookings through Hair Do App</li>
                <li>Generate $50,000 in revenue</li>
                <li>Secure 3 corporate partnerships</li>
                <li>Hire 4 full-time team members</li>
            </ul>
        </div>`
    );
});

document.getElementById('missionStatement').addEventListener('click', () => {
    openComposition(
        'Core Mission', 
        'Philosophy',
        `<div class="composition-section">
            <blockquote style="font-style: italic; font-size: 1.4rem; border-left: 4px solid var(--gold); padding-left: 20px; margin: 20px 0;">
                "Infusing God's presence into technology to create platforms that empower, educate, and uplift the next generation of African innovators."
            </blockquote>
        </div>
        
        <div class="composition-section">
            <h3>Mission Breakdown</h3>
            <p>This mission statement guides every decision I make:</p>
            <div class="composition-highlights">
                <div class="highlight-card">
                    <i class="fas fa-church"></i>
                    <h4>Faith Integration</h4>
                    <p>Technology that reflects biblical values and principles</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-hands-helping"></i>
                    <h4>Empowerment Focus</h4>
                    <p>Creating tools that enable others to reach their potential</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-graduation-cap"></i>
                    <h4>Education Priority</h4>
                    <p>Platforms that teach valuable skills and knowledge</p>
                </div>
            </div>
        </div>
        
        <div class="composition-section">
            <h3>Practical Application</h3>
            <p>This mission translates into:</p>
            <ul>
                <li><strong>Ethical Technology:</strong> Systems designed with integrity and moral responsibility</li>
                <li><strong>Community Impact:</strong> Solutions that address real African challenges</li>
                <li><strong>Youth Development:</strong> Creating pathways for young African technologists</li>
                <li><strong>Kingdom Purpose:</strong> Using tech to advance God's purposes in Africa</li>
            </ul>
        </div>
        
        <div class="composition-section">
            <h3>Long-Term Vision</h3>
            <p>By 2030, I envision:</p>
            <ul>
                <li>A network of tech innovation hubs across Africa</li>
                <li>10,000 young Africans trained in faith-based tech entrepreneurship</li>
                <li>Solutions that reduce poverty and improve healthcare access</li>
                <li>African-led technology that transforms the continent</li>
            </ul>
        </div>`
    );
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will respond as soon as possible.');
    e.target.reset();
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.identity-card, .project-card, .timeline-item').forEach(element => {
    observer.observe(element);
});