var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Username: ".concat(this.userName, " and age: ").concat(this.age, " & id is: ").concat(this.studentId));
    };
    return Student;
}(NewUser));
// how to create class object
var newStudent = new Student("sujon", 35, 102120);
newStudent.display();
