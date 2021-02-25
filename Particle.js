class Particle {
  constructor(radius, xVelocity, yVelocity) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.radius = radius;
    this.xVelocity = 2 * random(-1, 1);
    this.yVelocity = 2 * random(-1, 1);
    this.sensibility = 100;
  }

  createParticle(red, green, blue, alpha) {
    noStroke();
    fill('rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')');
    circle(this.x, this.y, this.radius);
  }

  moveParticle() {
    if (this.x < 0 || this.x > width)
      this.xVelocity *= -1;
    if (this.y < 0 || this.y > height)
      this.yVelocity *= -1;
    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }

  /*  connectParticles(particles, red, green, blue, alpha) {
     let mousedist = dist(this.x, this.y, mouseX, mouseY);
     if (mousedist < 255) {
       particles.forEach(element => {
         let particledist = dist(this.x, this.y, element.x, element.y);
         if (particledist < 255) {
           stroke('rgba(' + red + ',' + green + ',' + blue + ',' + (1 - particledist / 250) + ')');
           line(this.x, this.y, element.x, element.y);
         }
       });
     }
   } */

  connectParticles(particles, red, green, blue, alpha) {
    particles.forEach(element => {
      let particledist = dist(this.x, this.y, element.x, element.y);
      if (particledist < this.sensibility) {
        stroke('rgba(255, 255, 255' + (1 - particledist / this.sensibility) + ')');
        line(this.x, this.y, element.x, element.y);
      }
    });
  }

  /*drawShape(particles) {
    let mousedist = dist(this.x, this.y, mouseX, mouseY);
    if (mousedist < 255) {
      particles.forEach(i => {
        let firstparticledist = dist(this.x, this.y, i.x, i.y);
        if (firstparticledist < 255) {
          particles.forEach(j => {
            let secondparticledist = dist(this.x, this.y, j.x, j.y);
            let alpha = 1 - ((firstparticledist + secondparticledist) / 500);

            let red = parseInt(firstparticledist);
            let green = parseInt(secondparticledist);
            let blue = parseInt(mousedist);
            let rgba = red + "," + green + "," + blue + "," + alpha / 2;
            if (secondparticledist < 255) {
              fill('rgba(' + rgba + ')');
              triangle(this.x, this.y, i.x, i.y, j.x, j.y)
            }
          })
        }
      })
    }
  }
}*/

  drawShape(particles) {
    particles.forEach(i => {
      let firstparticledist = dist(this.x, this.y, i.x, i.y);
      if (firstparticledist < this.sensibility) {
        particles.forEach(j => {
          let secondparticledist = dist(this.x, this.y, j.x, j.y);

          if (secondparticledist < this.sensibility) {
            let thirdparticledist = dist(i.x, i.y, j.x, j.y);
            let alpha = ((firstparticledist + secondparticledist + thirdparticledist) / (this.sensibility * 3));
            let green = parseInt(firstparticledist * 2.55);
            let blue = parseInt(secondparticledist * 2.55);
            let red = parseInt(thirdparticledist * 2.55);
            let rgba = red + "," + green + "," + blue + "," + alpha / 2;
            fill('rgba(' + rgba + ')');
            triangle(this.x, this.y, i.x, i.y, j.x, j.y)
          }
        })
      }
    })
  }

}