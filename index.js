
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//set canvas width and height;
canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})


//player class
const player = new Player();
console.log(player);





function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

animate()