// server1.js
// use data at data1.js

let data1= require('./data1');

// for post put etc functions
const body_parser = require('body-parser');

// our API routes go here

server.get("/items", (req, res) => {
   res.json(data);
});

server.get("/items/:id", (req, res) => {
   const itemId = req.params.id;
   const item = data.find(_item => _item.id === itemId);

   if (item) {
      res.json(item);
   } else {
      res.json({ message: `item ${itemId} doesn't exist`})
   }
});


// parse JSON (application/json content-type)
server.use(body_parser.json());
server.post("/items", (req, res) => {
   const item = req.body;
   console.log('Adding new item: ', item);

   // add new item to array
   data.push(item)

   // return updated list
   res.json(data);
});

// curl -X POST -H "Content-Type: application/json" --data '{"id": "tt0109830", "name": "Forrest Gump", "genre": "drama"}' http://localhost:4000/items
// curl http://localhost:4000/items
// curl http://localhost:4000/items/tt0110357
// curl http://localhost:4000/items/blahblah

// update an item
server.put("/items/:id", (req, res) => {
   const itemId = req.params.id;
   const item = req.body;
   console.log("Editing item: ", itemId, " to be ", item);

   const updatedListItems = [];
   // loop through list to find and replace one item
   data.forEach(oldItem => {
      if (oldItem.id === itemId) {
         updatedListItems.push(item);
      } else {
         updatedListItems.push(oldItem);
      }
   });
   // replace old list with new one
   data = updatedListItems;
   res.json(data);
});

// curl -X PUT -H "Content-Type: application/json" --data '{"id": "tt0468569", "name": "The Dark Knight", "genre": "drama"}' http://localhost:4000/items/tt0468569


// delete item from list
server.delete("/items/:id", (req, res) => {
   const itemId = req.params.id;

   console.log("Delete item with id: ", itemId);

   // filter list copy, by excluding item to delete
   const filtered_list = data.filter(item => item.id !== itemId);

   // replace old list with new one
   data = filtered_list;

   res.json(data);
});

//curl -X DELETE http://localhost:4000/items/tt0468569

