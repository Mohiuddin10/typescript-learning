class NewUser {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age
    }

    display(): void {
        console.log(`Username: ${this.userName} and age: ${this.age}`);
    }
}

class Student extends NewUser {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`Username: ${this.userName} and age: ${this.age} & id is: ${this.studentId}`);
    }
}



// how to create class object

let newStudent = new Student("sujon", 35, 102120);
newStudent.display()