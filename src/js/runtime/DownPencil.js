import { Pencil } from "./Pencil";
import { Sprite } from "../base/Sprite";

export class DownPencil extends Pencil {
    constructor(top) {
        const image = Sprite.getImage('pencilDown');
        super(image,top);
    }
    draw () {
        let gap = window.innerHeight / 5;
        this.y = this.top + gap;
        super.draw();
    }
}