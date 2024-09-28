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
// how to create class object
var mainUser = new NewUser("Mohammad Mohiuddin Sujon", 32);
mainUser.display();
var mainUser2 = new NewUser("Ummey Hani", 26);
mainUser2.display();
