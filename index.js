
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
    },
    space: {
        pressed: false
    }
}

let move = 1;

//frames
let frames = 0;
let randomInterval = Math.floor((Math.random() * 500) + 500);


//player instance
const player = new Player();

//projectile 
let projectiles = []


//grid instace
let grids = [];





function animate() {
    requestAnimationFrame(animate);

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();

    grids.forEach(grid => {
        grid.update();
        grid.inveders.forEach((inveder, i) => {
            inveder.update({ velocity: grid.velocity });
            projectiles.forEach((projectile, p) => {
                if (
                    projectile.position.y - projectile.radius <= inveder.position.y + inveder.height
                    && projectile.position.y + projectile.radius >= inveder.position.y
                    && projectile.position.x - projectile.radius <= inveder.position.x + inveder.width
                    && projectile.position.x + projectile.radius >= inveder.position.x
                ) {
                    setTimeout(() => {

                        //remove invader and projectile
                        grid.inveders.splice(i, 1);
                        projectiles.splice(p, 1);

                        if (grid.inveder.length > 0) {
                            const firstInveder = grid.inveders[0];
                            const lastInveder = grid.inveders[inveders.length - 1];
                            grid.width = lastInveder.position.x - firstInveder.position.x + lastInveder.width;
                            grid.position.x = firstInveder.position.x;
                        }
                    }, 0)
                }
            })
        })
    })


    projectiles.forEach((projectile, index) => {

        if (projectile.position.y + projectile.radius <= 0) {
            projectiles.splice(index, 1)
        }
        else {
            projectile.update();
        }
        //remove the projectile out of screen

    })


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

    if (frames % randomInterval === 0) {
        randomInterval = Math.floor((Math.random() * 500) + 500);
        frames = 0;
        grids.push(new Grid())
    }
    frames++

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
            break;
        case ' ':
            console.log(key)
            projectiles.push(
                new Projectile(

                    position = {
                        x: player.position.x + player.width / 4,
                        y: player.position.y,
                    },
                    velocity = {
                        x: 0,
                        y: -10
                    },
                    radius = 3

                )
            )
            console.log(projectiles);
            break
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
        case 'space':
            keys.space.pressed = false
            console.log(key)
    }


})

//event listener to move our player



