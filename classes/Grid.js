class Grid {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 5,
            y: 0
        }
        this.inveders = [];

        const rows = Math.floor(Math.random() * 5 + 2)
        const cols = Math.floor(Math.random() * 5 + 2)
        this.width = cols * 30;
        for (let x = 0; x < cols; x++) {

            for (let y = 0; y < rows; y++) {
                this.inveders.push(new Inveders({
                    position: {
                        x: x * 30,
                        y: y * 30
                    }
                }))
            }
        }

    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y = 0;

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x;
            this.velocity.y = this.velocity.y + 30

        }
        else {

        }

    }
}