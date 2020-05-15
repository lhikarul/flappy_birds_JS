import { Resources } from "./Resources";

export class ResourceLoader {
    constructor() {
        this.map = new Map(Resources);

        for (let [key,value] of this.map) {
            const img = new Image();
            img.src = value;

            this.map.set(key,img);
        }
    }
    onLoaded (callback) {
        let loadedCount = 0;
        for (let img of this.map.values()) {
            img.onload = () => {
                loadedCount += 1;
                if (loadedCount >= this.map.size) {
                    callback(this.map);
                }
            }
        }
    }
    static create () {
        return new ResourceLoader();
    }
}