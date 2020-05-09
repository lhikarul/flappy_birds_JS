import {DataStore} from './DataStore';
// 角色的基類，負責初始化角色加載的資源和大小以及位置
export class Sprite {
    constructor(
        img= null,
        srcX =0,
        srcY =0,
        srcW =0,
        srcH =0,
        x = 0,
        y = 0,
        width = 0,
        height = 0) 
    {   
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;    
    }
    /**
        * img 傳入Image 對象
        * srcX 要剪裁的起始X坐標
        * srcY 要剪裁的起始Y坐標
        * srcW 剪裁的寬度
        * srcH 剪裁的高度
        * x 放置的x坐標
        * y 放置的y坐標
        * width 要使用的寬度
        * height 要使用的高度
    */
    draw (  img = this.img, 
            srcX = this.srcX, 
            srcY = this.srcY,
            srcW = this.srcW, 
            srcH = this.srcH, 
            x = this.x, 
            y = this.y, 
            width = this.width, 
            height = this.height) {
        this.ctx.drawImage(
            img,
            srcX,
            srcY,
            srcW,
            srcH,
            x,
            y,
            width,
            height
        )
    }
    static getImage(key) {
        return DataStore.getInstance().res.get(key);
    }
}