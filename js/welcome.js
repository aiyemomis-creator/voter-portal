// Simple Fireworks Animation via Canvas
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Array of civic green theme colors (and gold/yellows to pop against it)
    const colors = ['#2d6a4f', '#1b5e42', '#4caf50', '#81c784', '#fbc02d', '#fdd835', '#ffffff'];

    let particles = [];

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;

            // Random velocity
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 6 + 2;
            this.vx = Math.cos(angle) * velocity;
            this.vy = Math.sin(angle) * velocity;

            this.life = 1.0;          // starts fully alive
            this.decay = Math.random() * 0.015 + 0.015; // fade rate
            this.size = Math.random() * 3 + 1.5;
        }

        update() {
            // Add gravity
            this.vy += 0.05;

            // Ease velocity (drag)
            this.vx *= 0.95;
            this.vy *= 0.95;

            this.x += this.vx;
            this.y += this.vy;

            this.life -= this.decay;
        }

        draw(ctx) {
            ctx.globalAlpha = Math.max(0, this.life);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createFirework(x, y) {
        const particleCount = Math.floor(Math.random() * 50) + 40;
        for (let i = 0; i < particleCount; i++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(new Particle(x, y, color));
        }
    }

    // Animate loop
    let animationId;
    function animate() {
        // Semi-transparent trailing effect
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw particles normally
        ctx.globalCompositeOperation = 'source-over';

        // Sometimes randomly fire off a firework 
        // High chance at the beginning (because we want a barrage!)
        if (Math.random() < 0.1) {
            createFirework(
                Math.random() * canvas.width,
                Math.random() * (canvas.height * 0.6) + canvas.height * 0.1 // Mostly upper half
            );
        }

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);
            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }

        // Stop eventually so we aren't running forever in the background
        // (though the canvas is removed/hidden anyway)
        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Handle overlay dismissal
    const overlay = document.getElementById('welcome-overlay');

    // Make the body unscrollable initially
    document.body.classList.add('welcome-active');

    // Let the fireworks & text run for ~4 seconds, then fade out
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.body.classList.remove('welcome-active');

        // After fade transition (1.5s), stop canvas drawing to save resources
        setTimeout(() => {
            cancelAnimationFrame(animationId);
            overlay.style.display = 'none';
        }, 1500);
    }, 4000);
});
