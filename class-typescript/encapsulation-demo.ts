// Public, Private, Protected, Readonly
//Public: means anyone can access this
//Private:
//Protected: Object can not directly use this but can be access through another sub class or can be inherita
class NewUser {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age
    }

    display(): void {
        console.log(`Username: ${this.userName} and age: ${this.age + 1}`);
    }
}

class Student extends NewUser {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`Username: ${this.userName} and age: ${this.age + 1} & id is: ${this.studentId}`);
    }

    setStudentId(newId: number): void{
        this.studentId = newId
    }

    getStudentId(): number{
        return this.studentId;
    }
}



// how to create class object

// let newUser = new NewUser("sujon", 35);

// newUser.userName = "Mohiuddin";

// newUser.display();

const newStudent = new Student("sujon", 35, 102120)
newStudent.setStudentId(673755)
console.log(newStudent.getStudentId());