const express = require('express');
const app = express();

let courses =[
    {id: 1 , name : "Javascript"},
    {id: 2 , name : "CSS"},
    {id: 3 , name : "HTML"}
]

app.use(express.json()); //(a middleware)  -> take the req ,manipulate it and respond to it
app.use(middleware)


app.get('/courses', (req, res) => {
    res.json(courses);
})


app.post('/courses', (req, res) => {
    console.log(req.body);
    // courses.push(req.body);

    let singlecourse  =
        {
            id : courses.length+1 ,
            name : req.body.name
        }



    courses.push(singlecourse)
    res.send(courses)
})



app.put('/courses/:id', (req, res) => {
    let id = req.params.id;
    const newName = req.body.name;

    console.log("Updating course with id:", id);

    if (!courses[id]) {
        return res.status(404).send("Course not found");
    }

    console.log("Current course name:", courses[id].name);
    console.log("New course name:", newName);

    courses[id].name = newName;

    console.log("Updated course name:", courses[id].name);

    res.send(`Course with id ${id} updated successfully`);
});

app.delete('/courses/:id', (req, res) => {
    const id = req.params.id;

    // Check if the course with the specified id exists
    if (courses[id]) {
        // Delete the course from your data structure (e.g., courses array)
        delete courses[id];
        res.send(`Course with id ${id} deleted successfully.`);
    } else {
        // If course with id does not exist, return a 404 Not Found response
        res.status(404).send(`Course with id ${id} not found.`);
    }
});




function middleware (req, res, next) {
    console.log("called");
    next();
}






const port  =3000
app.listen(port ,()=>{
    console.log("server started")
});