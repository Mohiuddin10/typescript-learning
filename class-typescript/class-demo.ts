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



// how to create class object

let mainUser = new NewUser("Mohammad Mohiuddin Sujon", 32)
mainUser.display()
let mainUser2 = new NewUser("Ummey Hani", 26)
mainUser2.display()