// enum- store ConstantSourceNode, no duplicate value are allowed here 
// enum types: numeric, string, hetergenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GetData"] = 3] = "GetData";
    RequestType[RequestType["ReadData"] = 2] = "ReadData";
    RequestType[RequestType["DeleteData"] = 3] = "DeleteData";
    RequestType[RequestType["SaveData"] = 4] = "SaveData";
})(RequestType || (RequestType = {}));
console.log(RequestType.DeleteData);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["GetData"] = "get-data";
    RequestType2["ReadData"] = "read-data";
    RequestType2["DeleteData"] = "delete-data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2["ReadData"]);
