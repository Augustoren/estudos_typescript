"use strict";
// boolean (true / false)
var isOpen;
isOpen = true || false;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number
var total;
total = 10;
// array
var items;
items = [1, 2, 3];
var person;
person = ['Augusto', 'Laura', 'Maria'];
// array generics
var values;
values = [1, 2, 3, 4];
// tuple
var title;
title = [1, "foo", "bar"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any
var coisa;
coisa = true || 3 || 'text' || [1, 2, 3] || { chave: "valor" };
// void (vazio)
function logger() {
    console.log('foo');
}
var variable;
// never (Nunca retorna)
function error() {
    throw new Error('Novo erro');
}
// object 
var cart;
cart = {
    key: 'value'
};
// Type Inference
var message2 = "mensagem definida";
message2 = "nova string";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
