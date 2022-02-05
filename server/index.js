const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./model/user.model')
const app = express();
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user',()=>{
    console.log('db is running');
})


app.post('/api/login', async(req,res)=>{
    const user = await User.findOne({
        email : req.body.email,
    });
    if(user){
        // console.log(user);
        if(req.body.password===user.password){
            const token = jwt.sign({
                email : req.body.email
            },'secret4321')
            res.json({status : 'ok' , tokenId : token });
        }
        else{
            res.json({status : 'error', error : 'Incorrect Password'})
        }
    }
    else{
        res.json({status : 'error' , error : 'Invalid Email! Please register your account.'})
    }console.log(req.body);
});

app.post('/api/register', async(req,res)=>{
    console.log(req.body);
    try{
        await User.create({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name,
            number : req.body.number
        });
        const token = jwt.sign({
            email : req.body.email
        },'secret4321');
        res.json({status : 'ok' , tokenId : token });
    } catch(err) {
        console.log(err);
        res.json({status : 'error' , error : 'Already registered email!!'});
    }
});

app.post('/api/store-userblog',async(req,res)=> {
    const token = req.headers['x-access-token'];
        try{
            const decoded = jwt.verify(token, 'secret4321')
            const email = decoded.email
            console.log(email);
            const currentUser = await User.findOneAndUpdate(
                {
                    email : email
                },
                {
                    'userBlogs' : {
                        $push : {
                            title : req.body.title,
                            url : req.body.url,
                            content : req.body.url
                        }
                    }
                }
            )
            // console.log(user);
            res.json({status : 'detail updated'})
        }
        catch(error) {
            console.log(error);
            res.json({
                status : 'error'
            })
        }
})



app.listen('8000',()=>{
    console.log('server is running');
})