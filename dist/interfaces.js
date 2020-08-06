"use strict";
// Interfaces
var tlou = {
    title: "The last of US",
    description: "The best game in the world",
    genre: "action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log(title);
    }
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
