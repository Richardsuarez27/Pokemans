"use strict";
export class Badge {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return ` ${this.name}`
    }
}
