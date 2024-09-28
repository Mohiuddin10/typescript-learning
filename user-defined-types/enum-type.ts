// enum- store ConstantSourceNode, no duplicate value are allowed here 
// enum types: numeric, string, hetergenous


// numeric enum
enum RequestType {
    GetData = 3,
    ReadData = 2,
    DeleteData,
    SaveData
}


console.log(RequestType.DeleteData);

// string enum
enum RequestType2 {
    GetData = "get-data",
    ReadData = "read-data",
    DeleteData = "delete-data"
}
console.log(RequestType2["ReadData"]);