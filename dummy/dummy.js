const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//use async and await or Promise
app.get('/user', async (req,res)=>{
    try{
        const user = await User.find({});
        const userDetails = await UserDetails({userId:user[0]._id});
        return res.status(200).send(userDetails);
    }
    catch(error){
        return res.status(500).send("Some error occurred");
    }
});

//provide proper error handling
//same as above that is provide try catch

//always provide middleware


app.listen(8000, ()=>{
    console.log("listening");
})