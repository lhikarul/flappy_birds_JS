import { Sprite } from "../base/Sprite";

export class Birds extends Sprite {
    constructor() {
        const image = Sprite.getImage('birds');
        super(
            image,
            0,0,
            image.width,image.height,
            0,0,
            image.width,image.height
        )

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
        const birdX = window.innerWidth/4;
        this.birdsX = [birdX,birdX,birdX];
        const birdY = window.innerHeight / 2;
        this.birdsY = [birdY,birdY,birdY];
        const birdWidth = 34;
        this.birdsWidth = [birdWidth,birdWidth,birdWidth];
        const birdHeight = 24;
        this.birdsHeight = [birdHeight,birdHeight,birdHeight];
        this.y = [birdY,birdY,birdY];
        this.index = 0;
        this.count = 0;
        this.time = 0;
    }
}