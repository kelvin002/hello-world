// content
var contents = {
  "username":"xyz",
  "password":"xyz@123",
  "email":"xyz@xyz.com",
  "uid": 1100
};

var jsonContent = JSON.parse(contents);

console.log("User Name:", jsonContent.username);
console.log("Email:", jsonContent.email);
console.log("Password:", jsonContent.password);

// convert json object to string
var obj = {'key':'value'};
console.log(
    /* define stringify */
    JSON.stringify(obj)
);

// convert string to json object
var string = "{'key':'value'}";
var obj = JSON.parse(string);
console.log(obj.key);

// automatic reading a json file
var obj = require("../path/jsonfile.json");

// adding element to json object
var exjson = {'key':'value'};
//define key value
 exjson.key2 = '...abc...';
//define another key value in another way
 exjson[key3] = '...xyz...';

// transversing each element within the json
var exjson = {'key':'...abc...', 'key2':'...xyz...'};
for(var exKey in exjson) {
    console.log("key:"+exKey+", value:"+exjson[exKey]);
}

// Check json has a specific key
var exjson = {'key':'...abc...', 'key2':'...xyz...'};
if(exjson.hasOwnProperty('key2')){
    //define here
}

// Delete element from json
var exjson = {'key':'...abc...'};
 delete exjson['key'];








