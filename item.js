const items = require('./fakeDb');

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    static findAll() {
        return items;
    }

    static update(name, data) {
        let foundItem = Item.findAll(name);
        if (foundItem === undefined) {
            throw {message: "Not found", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    static find(name) {
        const foundIdx = items.find(v => v.name === name);
        if (foundIdx === -1) {
            throw {message: "Not found", status: 404}
        }
        items.splice(foundIdx, 1);
    }

    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
            throw {message: "not found", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = Item;