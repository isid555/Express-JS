const express = require('express');
const app = express();

let courses =[
{id: 1 , name : "Javascript"},
    {id: 2 , name : "CSS"},
    {id: 3 , name : "Javascript"}
]


app.get('/courses', (req, res) => {
    res.json(courses);
})


app.listen(3000 ,()=>{
    console.log("server started")
});