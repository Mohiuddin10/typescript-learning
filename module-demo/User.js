"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUser = void 0;
var NewUser = /** @class */ (function () {
    function NewUser(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    NewUser.prototype.display = function () {
        console.log("Username: ".concat(this.userName, " and age: ").concat(this.age));
    };
    return NewUser;
}());
exports.NewUser = NewUser;
