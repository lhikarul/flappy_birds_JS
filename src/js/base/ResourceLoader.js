// 資源文件加載，確保 canvas 圖片資源加載完成之後，才進行渲染
import {Resources} from './Resources';
export class ResourceLoader {
    constructor() {
        this.map = new Map(Resources);
        
        for (let [key,value] of this.map) {
            const image = new Image();
            image.src = value;
            this.map.set(key,image);
        }
    }

    onLoaded(callback) {
        let loadedCount = 0;
        for (let value of this.map.values()) {
            value.onload = () => {
                loadedCount += 1;
                if (loadedCount >= this.map.size) {
                    callback(this.map);
                }
            }
        }
    }

    static create() {
        return new ResourceLoader();
    }
}