const express = require("express");
const path = require("path")
const fs = require("fs")
const app= express();

const port= 80;
// express specific stuff
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// pug specific stuff
app.set('view engine', 'pug')

app.set('views', path.join(__dirname,'views'))

// app.get("/demo", (req,res)=>{
//     res.status(200).render('demo',{title:'hey David', message:'hello there i am learning to use pug template!'});
// });


// app.get("/", (req,res)=>{
//     res.status(200).send("This is my first express app");
// });

// app.get("/about", (req,res)=>{
//     res.send("This is about of my first express app");
// });

// app.post("/about", (req,res)=>{
//     res.send("This is post of about in my first express app");
// });

// app.get("/this", (req,res)=>{
//     res.status(404).send("404 not found");
// });

// endpoints

app.get("/", (req,res)=>{
    const con ='this is the best content'
    const params = {'title':'pug is the best template', 'content' : con}
        res.status(200).render('index.pug',params);
     });
app.post("/", (req,res)=>{
    // console.log(req.body)
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client ${name}, ${age} years old, ${gender} residing at ${address} more about him/her ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message':'Your form has been submited successfully'}
        res.status(200).render('index.pug',params);
     });


// start the server
app.listen(port, ()=>{
    console.log(`The application started successfully ${port}`);
})