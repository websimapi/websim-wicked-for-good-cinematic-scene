document.addEventListener('DOMContentLoaded', function() {
    // Create magical particles
    createMagicalParticles();
    
    // Add touch interactions for mobile
    addTouchInteractions();
    
    // Dynamic lightning
    scheduleLightning();
    
    // Character animations
    animateCharacters();
});

function createMagicalParticles() {
    const particleContainer = document.querySelector('.magical-particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = ['#00ff00', '#ff69b4', '#ffd700'][Math.floor(Math.random() * 3)];
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = '0.7';
        
        // Animate particles
        particle.style.animation = `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`;
        
        particleContainer.appendChild(particle);
    }
    
    // Add particle animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1); 
                opacity: 0.7; 
            }
            25% { 
                transform: translateY(-20px) translateX(10px) scale(1.1); 
                opacity: 1; 
            }
            75% { 
                transform: translateY(-10px) translateX(-5px) scale(0.9); 
                opacity: 0.8; 
            }
        }
    `;
    document.head.appendChild(style);
}

function addTouchInteractions() {
    const characters = document.querySelectorAll('.character');
    
    characters.forEach(character => {
        character.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
            
            // Add magical effect on touch
            const magicRipple = document.createElement('div');
            magicRipple.style.position = 'absolute';
            magicRipple.style.top = '50%';
            magicRipple.style.left = '50%';
            magicRipple.style.transform = 'translate(-50%, -50%)';
            magicRipple.style.width = '0px';
            magicRipple.style.height = '0px';
            magicRipple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)';
            magicRipple.style.borderRadius = '50%';
            magicRipple.style.pointerEvents = 'none';
            magicRipple.style.animation = 'rippleEffect 0.6s ease-out';
            
            this.appendChild(magicRipple);
            
            setTimeout(() => {
                if (magicRipple.parentNode) {
                    magicRipple.parentNode.removeChild(magicRipple);
                }
            }, 600);
        });
        
        character.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add ripple effect animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            0% { 
                width: 0px; 
                height: 0px; 
                opacity: 1; 
            }
            100% { 
                width: 100px; 
                height: 100px; 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(style);
}

function scheduleLightning() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            const flash = document.querySelector('.lightning-flash');
            flash.style.animation = 'none';
            flash.offsetHeight; // Trigger reflow
            flash.style.animation = 'lightning 1s ease-out';
        }
    }, 3000);
}

function animateCharacters() {
    // Add subtle breathing animation to characters
    const characters = document.querySelectorAll('.character-image');
    
    characters.forEach((char, index) => {
        char.style.animation = `characterBreathe ${2 + Math.random()}s ease-in-out infinite ${index * 0.5}s`;
    });
    
    // Add breathing animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes characterBreathe {
            0%, 100% { transform: scale(1) translateY(0px); }
            50% { transform: scale(1.02) translateY(-2px); }
        }
    `;
    document.head.appendChild(style);
}

// Add scroll/gesture effects for mobile
document.addEventListener('touchmove', function(e) {
    const touch = e.touches[0];
    const x = touch.clientX / window.innerWidth;
    const y = touch.clientY / window.innerHeight;
    
    // Parallax effect for background elements
    const auroras = document.querySelectorAll('.aurora');
    auroras.forEach((aurora, index) => {
        const speed = 0.5 + index * 0.2;
        aurora.style.transform = `translate(${x * speed * 10 - 5}px, ${y * speed * 10 - 5}px)`;
    });
});