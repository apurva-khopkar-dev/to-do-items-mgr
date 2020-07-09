const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());


// Dummy To Do Items APIs

let getRandomId = function() {
    return Math.random().toString(36).substr(2, 5);
}

 let dummyToDoItems = [
                { id: getRandomId(),  label: 'Groceries', priority: 1},
                { id: getRandomId(), label: 'Bike repair', priority: 2},
                { id: getRandomId(), label: 'Bill payments', priority: 3},
                { id: getRandomId(), label: 'Car servicing', priority: 4},
                { id: getRandomId(), label: 'Call plumber', priority: 5},
                { id: getRandomId(), label: 'Fund transfer to bank', priority: 6},
                { id: getRandomId(), label: 'Annual medical checkup', priority: 7},
                { id: getRandomId(), label: 'Society meeting', priority: 8},
                { id: getRandomId(), label: 'School reunion planner', priority: 9},
                { id: getRandomId(), label: 'UPS replacement', priority: 10},
                { id: getRandomId(), label: 'Mobile recharge', priority: 11},
                { id: getRandomId(), label: 'Technology meetup', priority: 12},
                { id: getRandomId(), label: 'Read a book', priority: 13}
        ];

// API to get list of all to-do-items
app.get('/api/todo/list', (request, response) => {
	const responseData = { items: dummyToDoItems};
	response.send(responseData);
})

// API to add or create a new to-do-item
app.post('/api/todo/add', (request, response) => {
    const item =  request.body;
     dummyToDoItems.push({
            id: Math.random().toString(36).substr(2, 5),
            label:  item.label,
            priority: item.priority
        });
     response.json({items: dummyToDoItems});
})

// API to update a particular to-do-item
app.put('/api/todo/:itemId', (request, response) => {
    const itemId = request.params.itemId;
    const item =  request.body;
     dummyToDoItems.forEach(oldItem => {
         if (oldItem.id == itemId) {
            oldItem.label = item.label;
            oldItem.priority = item.priority
        }
      });
     response.json({items: dummyToDoItems});
})

// API to delete a particular to-do-item
app.delete('/api/todo/:itemId', (request, response) => {
    const itemId = request.params.itemId;
	dummyToDoItems.splice(dummyToDoItems.findIndex(item => item.id == itemId), 1)

   response.json({items: dummyToDoItems});
})

app.listen(port, () => console.log(`To do list node App is listening on port ${port}`));
