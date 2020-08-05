"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Pessoa.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
