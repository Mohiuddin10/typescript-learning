// create object of array 
var users = [];
var user1;
user1 = { userName: "sujon", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "ummey hani", userId: 102 };
users.push(user2);
console.log(users);
// this will print the name of that index number 
for (var key in users) {
    console.log(users[key]["userName"]);
}
