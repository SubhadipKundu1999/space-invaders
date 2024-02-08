class Inveders {

    constructor({ position }) {

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.rotation = 0;
        // this.image
        const image = new Image()
        image.src = "../assets/invader.png";
        image.onload = () => {
            const scale = 1
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;

            this.position = {
                x: position.x,
                y: position.y
            }

        }

    }
    draw() {

        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }
    update({ velocity }) {

        if (this.image) {
            this.draw();
            this.position.x += velocity.x;
            this.position.y += velocity.y;
        }
    }
}
