
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//set canvas width and height;
canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

let keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

let move = 1;


//player class
const player = new Player();
console.log(player);


function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black';

    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    if (keys.a.pressed && player.position.x >= 0) {
        player.rotation = - 0.15;
        player.velocity.x = -5;
    }
    else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
        player.velocity.x = +5;
        player.rotation = +0.15;
    }
    else {
        player.velocity.x = 0;
        player.rotation = 0;
    }




}

animate();

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('a');
            // player.velocity.x = -5;
            keys.a.pressed = true;

            break;
        case 'd':
            // player.velocity.x = +5;
            keys.d.pressed = true;
    }

})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('a');
            keys.a.pressed = false;

            break;
        case 'd':
            keys.d.pressed = false;
    }

})

//event listener to move our player



