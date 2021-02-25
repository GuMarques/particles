let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 120; i++) {
        let radius = random(1, 5);
        let xVelocity = random(-2, 2);
        let yVelocity = random(-2, 2);
        particles.push(new Particle(radius, xVelocity, yVelocity));
    }
}

function draw() {
    background('#0f0f0f');
    for (let i = 0; i < particles.length; i++) {

        particles[i].createParticle(255, 255, 255, 1);
        particles[i].moveParticle();
        particles[i].connectParticles(particles.slice(i), 255, 255, 255, 0.5);
        particles[i].drawShape(particles.slice(i));
    }
}