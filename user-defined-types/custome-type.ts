type User = {userName: string, userId?: number}
let users : object[] = [];

let user1: User;
user1 = { userName: "sujon", userId: 101 }
users.push(user1);

let user2: User;
user2 = {userName: "ummey hani", userId: 102};
users.push(user2);


let user3: User;
user3 = {userName: "siam", userId: 103}
users.push(user3)
console.log(users);



// this will print the name of that index number 
for(const key in users) {
    console.log(users[key]["userName"]);
}


type RequestType = "GET" | "POST";
let getRequest: RequestType;
