const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/api/courses/:id',(req,res)=>{
    // res.send(req.params);
    const cs = courses.find(c => c.id === parseInt(req.params.id));
    // res.send(cs);
    if(!cs) res.status(404).send("The given course is not found in the records.");
    else res.send(cs);
});

//api/2019/12?sortBy=name
//route parameters - api/2019/12
//query parameters - sortBy
app.get('/api/:year/:month',(req,res)=>{
    res.send(req.params);
    // res.send(req.query);
});

const courses =[
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"}
];

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.use(express.json());
const Joi = require('joi');
app.post('/api/courses',(req,res) => {
    let schema = Joi.object({
        name:Joi.string().min(3).required()
    });
    result = schema.validate(req.body);
    if(result.error){
        // res.status(400).send("Name is required and length should be greater than 3.");
        // result.error.details[0].message
        res.status(400).send(result.error);
        return ;
    }
    let course = {
        id:courses.length +1,
        name: req.body.name
    };

    courses.push(course);
    res.send(courses);
});

app.put('/api/courses/:id',(req,res) => {

    const cs = courses.find(c => c.id === parseInt(req.params.id));

    if(!cs){
        res.status(404).send("The given course is not found in the records.");
    }
    else{
        let schema = Joi.object({
            name:Joi.string().min(3).required()
        });
        result = schema.validate(req.body);
        if(result.error){
            // res.status(400).send("Name is required and length should be greater than 3.");
            // result.error.details[0].message
            res.status(400).send(result.error);
        }else{
            cs.name = req.body.name;
            res.send(csß);
        }
        
    }
});

app.delete('/api/courses/:id',(req,res) => {

    const cs = courses.find(c => c.id === parseInt(req.params.id));

    if(!cs){
        res.status(404).send("The given course is not found in the records.");
    }
    else{
        let index = courses.indexOf(cs);
        courses.splice(index,1);
        res.send(courses);
    }
});
//if environment var PORT is set then used that otherwise use 3000
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{console.log('Listening ...');});
