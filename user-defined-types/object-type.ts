// create object of array 
let users : object[] = [];


let user1 : {userName: string, userId?: number};
user1 = { userName: "sujon", userId: 101 }
users.push(user1);

let user2 : {userName: string, userId: number};
user2 = {userName: "ummey hani", userId: 102};
users.push(user2);

console.log(users);



// this will print the name of that index number 
for(const key in users) {
    console.log(users[key]["userName"]);
}