document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for skill bars animation
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Projects filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Sample projects data - replace with your actual projects
    const projects = [
        {
            title: 'E-commerce Website',
            description: 'A fully responsive e-commerce platform with product listings, cart functionality, and secure checkout.',
            tags: ['Web', 'React', 'Node.js'],
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            category: 'web'
        },
        {
            title: 'Mobile Fitness App',
            description: 'A cross-platform mobile application for tracking workouts and nutrition with personalized plans.',
            tags: ['App', 'React Native', 'Firebase'],
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            category: 'app'
        },
        {
            title: 'Portfolio Design',
            description: 'Modern portfolio design for a graphic designer with gallery and contact sections.',
            tags: ['Design', 'UI/UX', 'Figma'],
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            category: 'design'
        },
        {
            title: 'Blog Platform',
            description: 'A content management system for bloggers with markdown support and SEO optimization.',
            tags: ['Web', 'JavaScript', 'MongoDB'],
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            category: 'web'
        },
        {
            title: 'Task Manager',
            description: 'Productivity application for managing tasks with drag-and-drop interface and team collaboration.',
            tags: ['App', 'Vue.js', 'Node.js'],
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            category: 'app'
        },
        {
            title: 'Brand Identity',
            description: 'Complete brand identity design including logo, color palette, and typography guidelines.',
            tags: ['Design', 'Branding', 'Illustrator'],
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            category: 'design'
        }
    ];
    
    // Display projects
    function displayProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.setAttribute('data-category', project.category);
            
            projectItem.innerHTML = `
                <div class="project-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demo}" target="_blank">Live Demo</a>
                        <a href="${project.code}" target="_blank">View Code</a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectItem);
        });
    }
    
    // Initialize projects
    displayProjects();
    
    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            displayProjects(filter);
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Download CV button
    const downloadCvBtn = document.getElementById('download-cv');
    
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('This would typically download your CV. Replace with actual download link.');
            // window.location.href = 'path-to-your-cv.pdf';
        });
    }
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});