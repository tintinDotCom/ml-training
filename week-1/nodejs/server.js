const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const tempObj = [];
let i = 1;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json(tempObj);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Get users by id
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = tempObj.find(el => el.id === id);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).send(`User with ID ${id} not found.`);
    }
});

// Create new users
app.post('/create', (req, res) => {
    const { name, email, age } = req.body;
    const newUser = {
        id: tempObj.length + 1,
        name,
        email,
        age
    };
    tempObj.push(newUser);
    res.status(201).json(newUser);
});


// Update a user
app.put('/update', (req, res) => {
    const id = parseInt(req.query.id);
    const newData = req.body;

    const index = tempObj.findIndex(obj => obj.id === id);

    if(index !== -1){
        const updatedUser = {...tempObj[index], ...newData};
        tempObj[index] = updatedUser;
        res.status(200).json({message: "User updated successfully.", data: updatedUser})
    } else {
        res.status(404).json({
            message: `User with ID ${id} not found.`
        });
    }
});

app.delete('/delete' ,(req, res) => {
    const id = parseInt(req.query.id);

    const index = tempObj.findIndex(el => el.id === id);

    if(index !== -1 ) {
        tempObj.splice(index, 1);
        res.status(200).send({
            message: "User deleted successfully"
        });
    }else {
        res.status(404).send({
            msg: "User not found."
        })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});