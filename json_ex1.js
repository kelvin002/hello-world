// content
var contents = {
  "user1": {
    "username":"John",
    "password":"xyz@123",
    "email":"xyz@xyz.com",
    "uid": 1100
  },
  "user2": {
    "username":"David",
    "password":"abc@456",
    "email":"abc@abc.com",
    "uid": 1200
  }
};

if (!contents.user2) {
  console.log('User3 not found!');
  } else {
    console.log("User object (JSON):", contents.user2);
    console.log("User Name:", contents.user2.username);
  }

//console.log("User Name:", contents.user3);
