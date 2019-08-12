const { round, random, PI } = Math;

// Vector2
////////////////////////////////////
class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  set(x, y) {this.x = x;this.y = y;}
  add(v) {this.x += v.x;this.y += v.y;}
  sub(v) {this.x -= v.x;this.y -= v.y;}
  mult(v) {this.x *= v.x;this.y *= v.y;}}


// Setup
////////////////////////////////////
let setup = {
  color: [0, 0, 255],
  mousePosition: true,
  size: 5,
  sizeReduction: .2,
  density: 20,
  trailOpacity: 0.1,
  gravity: .5,
  velocityX: 5,
  velocityY: 5,
  maximumLife: 50,
  probability: 3,
  walls: true,
  bounceX: 0.2,
  bounceY: 0.2,
  sideBounceX: 1,
  windX: 0,
  windY: 0,
  type: 'optimized' };


// Canvas
////////////////////////////////////
const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
const dancing = document.getElementById("dancing");
const margin = 0;

dancing.appendChild(canvas);

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight - margin;

// Canvas 2
////////////////////////////////////
const canvas2 = document.createElement("canvas");
const ctx2 = canvas2.getContext('2d');
canvas2.height = canvas2.width = 150;

// Particles
////////////////////////////////////
let particles = [];
let particleIndex = 0;
const wind = new Vector2(setup.windX, setup.windY);
class Particle {
  constructor() {
    this.position = new Vector2(mouse.x, mouse.y);
    this.velocity = new Vector2(random() * (setup.velocityX * 2) - setup.velocityX, random() * (setup.velocityY * 2) - setup.velocityY);
    this.color = setup.color;
    this.size = this.size2 = 1;
    this.life = 0;
    this.id = particleIndex++;
    particles[this.id] = this;
  }
  update() {
    this.life++;
    if (this.life >= setup.maximumLife) {
      delete particles[this.id];
    } else {
      this.velocity.sub(wind);
      this.position.add(this.velocity);
      this.bounce();
      this.velocity.y += setup.gravity;

      if (setup.type == "optimized") {
        if (this.id & 1) {
          this.size += setup.sizeReduction;
          const fsize = setup.size / this.size * 7;
          ctx.drawImage(image, this.position.x - fsize / 2, this.position.y - fsize / 2, fsize, fsize);
        } else {
          this.size2 += setup.sizeReduction * 2;
          const fsize = setup.size / this.size2 * 7;
          ctx.drawImage(image, this.position.x - fsize / 2, this.position.y, fsize, fsize);
        }
      } else if (setup.type == "realistic") {
        if (this.id & 1) {
          this.size += setup.sizeReduction;
          this.realisticShape(this.position.x, this.position.y, setup.size / this.size);
        } else {
          this.size2 += setup.sizeReduction * 2;
          this.realisticShape(this.position.x, this.position.y, setup.size / this.size2);
        }
      } else {
        if (this.id & 1) {
          this.size += setup.sizeReduction;
          this.basicShape(this.position.x, this.position.y, setup.size / this.size);
        } else {
          this.size2 += setup.sizeReduction * 2;
          this.basicShape(this.position.x, this.position.y, setup.size / this.size2);
        }
      }
    }
  }
  bounce() {
    if (setup.walls) {
      if (this.position.y + setup.size >= height) {
        this.velocity.y *= -setup.bounceY;
        this.velocity.x *= setup.bounceX;
        this.position.y = height - setup.size;
      } else if (this.position.y + setup.size <= 0) {
        this.velocity.y *= -setup.bounceY;
        this.velocity.x *= setup.bounceX;
        this.position.y = setup.size;
      } else if (this.position.x - setup.size <= 0) {
        this.velocity.x *= -setup.sideBounceX;
        this.x = setup.size;
      } else if (this.position.x + setup.size >= width) {
        this.velocity.x *= -setup.sideBounceX;
        this.x = width - setup.size;
      }
    }
  }
  optimizedShape(x, y, radius) {
    const innerRadius = 0.5 * radius;
    const outerRadius = 3 * radius;

    ctx2.beginPath();
    ctx2.fillStyle = `rgba(${this.color},.1)`;
    ctx2.arc(x, y, radius * 4, 0, Math.PI * 2, true);
    ctx2.closePath();
    ctx2.fill();

    ctx2.shadowColor = "white";
    ctx2.shadowBlur = 55;
    ctx2.fill();

    ctx2.beginPath();
    ctx2.fillStyle = `rgba(${this.color},.1)`;
    ctx2.arc(x, y, radius * 2.1, 0, Math.PI * 2, true);
    ctx2.closePath();
    ctx2.fill();

    ctx2.shadowColor = "white";
    ctx2.shadowBlur = 40;
    ctx2.fill();

    ctx2.beginPath();
    ctx2.fillStyle = `rgba(${this.color},.2)`;
    ctx2.arc(x, y, radius * 1.4, 0, Math.PI * 2, true);
    ctx2.closePath();
    ctx2.fill();

    const gradient = ctx2.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
    gradient.addColorStop(0, 'rgb(255, 255, 255)');
    gradient.addColorStop(1, `rgb(${this.color})`);

    ctx2.beginPath();
    ctx2.fillStyle = gradient;
    ctx2.arc(x, y, radius, 0, Math.PI * 2);
    ctx2.closePath();
    ctx2.fill();

    ctx2.shadowColor = "white";
    ctx2.shadowBlur = 55;
    ctx2.fill();
  }
  realisticShape(x, y, radius) {
    const innerRadius = 0.5 * radius;
    const outerRadius = 1.6 * radius;

    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.color},.1)`;
    ctx.arc(x, y, radius * 4, 0, PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.color},.2)`;
    ctx.arc(x, y, radius * 2.1, 0, PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.color},.2)`;
    ctx.arc(x, y, radius * 1.4, 0, PI * 2, true);
    ctx.closePath();
    ctx.fill();

    const gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
    gradient.addColorStop(0, 'rgb(255, 255, 255)');
    gradient.addColorStop(1, `rgb(${this.color})`);

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(x, y, radius, 0, PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.shadowColor = "white";
    ctx.shadowBlur = 5;
  }
  basicShape(x, y, radius) {
    const innerRadius = 0.5 * radius;
    const outerRadius = 1.6 * radius;

    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.color},1)`;
    ctx.arc(x, y, radius, 0, PI * 2);
    ctx.closePath();
    ctx.fill();
  }}


// Events
////////////////////////////////////
let savePos = new Vector2(width / 2, height / 2);
let mouse = new Vector2(savePos.x, savePos.y);

canvas.addEventListener('mousemove', function (e) {
  if (setup.mousePosition) {
    mouse.set(e.clientX, e.clientY);
  }
}, false);

canvas.addEventListener('mouseout', function (e) {
  mouse.set(savePos.x, savePos.y);
}, false);

canvas.addEventListener('click', function (e) {
  mouse.x = savePos.x = e.clientX;
  mouse.y = savePos.y = e.clientY;
}, false);

window.addEventListener('resize', function (e) {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight - margin;
  mouse.x = savePos.x = width / 2;
  mouse.y = savePos.y = height / 2;
  console.log(mouse / 2);
}, false);

// Optimized particle
////////////////////////////////////
const optimizedParticle = new Particle();
const image = new Image();
optimizedParticle.optimizedShape(canvas2.width / 2, canvas2.height / 2, 18);
image.src = canvas2.toDataURL();

// Update
////////////////////////////////////
function update() {
  for (let i = 0; i < setup.density; i++) {
    if (random() > -(setup.probability - 100) * 0.01) {
      new Particle();
    }
  }
  for (let i in particles) {
    particles[i].update();
  }
}

// Render
////////////////////////////////////
const fps = 40;
function render() {
  setTimeout(function () {
    requestAnimationFrame(render);
    ctx.shadowColor = "transparent";
    ctx.fillStyle = `rgba(0,0,0, ${-(setup.trailOpacity - 1)})`;
    ctx.fillRect(0, 0, width, height);
    update();
  }, 1000 / fps);
}
window.onload = render();