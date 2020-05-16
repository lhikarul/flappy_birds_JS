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
    }
}