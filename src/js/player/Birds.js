import { Sprite } from "../base/Sprite";

export class Birds extends Sprite {
    constructor() {
        const image = Sprite.getImage('birds');
        super(image,0,0,image.width,image.height,0,0,image.width,image.height);

        // 通過陣列儲存 bird 的狀態
        // bird width 34,bird height 24, 上下邊距 10, 左右邊距 9
        this.clippingX = [
            9,
            9+34+18,
            9+34+18+34+18
        ];
        this.clippingY =[10,10,10];
        this.clippingWidth = [34,34,34];
        this.clippingHeight = [24,24,24];
        this.birdX = window.innerWidth/4;
        this.birdsX = [this.birdX,this.birdX,this.birdX];
        this.birdY = window.innerHeight / 2;
        this.birdsY = [this.birdY,this.birdY,this.birdY];
        this.birdWidth = 34;
        this.birdsWidth = [this.birdWidth,this.birdWidth,this.birdWidth];
        this.birdHeight = 24;
        this.birdsHeight = [this.birdHeight,this.birdHeight,this.birdHeight];
        this.y = [this.birdY,this.birdY,this.birdY];
        this.index = 0;
        this.count = 0;
        this.time = 0;
    }
    draw () {
        const speed = 0.2;
        this.count = this.count + speed;
        if (this.index >= 2) {
            this.count = 0;
        }
        this.index = Math.floor(this.count);

        // 重力加速度
        const g = 0.98 / 2.4;
        const offsetUp = 30;
        const offsetY = (g * this.time * (this.time - offsetUp)) / 2;

        for (let i=0; i <= 2; i++) {
            this.birdsY[i] = this.y[i] + offsetY;
        }
        this.time += 1;

        super.draw(
            this.img,
            this.clippingX[this.index],
            this.clippingY[this.index],
            this.clippingWidth[this.index],
            this.clippingHeight[this.index],
            this.birdsX[this.index],
            this.birdsY[this.index],
            this.birdsWidth[this.index],
            this.birdsHeight[this.index]
        )
    }
}