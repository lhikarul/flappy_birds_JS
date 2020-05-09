// 變數緩存，方便我們在不同的類中訪問和修改
export class DataStore {

    constructor() {
        this.map = new Map();
    }

    static getInstance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    put(key,value) {
        if (typeof value === 'function') {
            value = new value();
        }
        this.map.set(key,value);
        return this;
    }

    get(key) {
        return this.map.get(key);
    }

    destory() {
        for (let value of this.map.values()) {
            value = null;
        }
    }
}