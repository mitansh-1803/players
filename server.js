const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require("dotenv").config();
const password = process.env.password;
console.log(password)
const database = "edyodaDB";



const connectingString = `mongodb+srv://dbMitansh:${password}@cluster1.dkwws.mongodb.net/${database}?retryWrites=true&w=majority`;
const options ={
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(connectingString,options)
.then(() => console.log('Database Connected!!!'))
.catch((err) => console.log(err))

const PlayersSchema = new mongoose.Schema({},{strict: false});

const Player = mongoose.model('players',PlayersSchema)

app.use(cors());

app.get("/players",async (req,res)=>{
    var data = await Player.find();
    console.log(data)
    if(!data || !data.length) return res.send('no data about players!!')
    res.send(data)
})
app.get("/players/:id",async (req,res)=>{
    var searchId = parseInt(req.params.id);
    console.log(searchId)
    var data = await Player.find({id: searchId});
    console.log(data)
    if(!data || !data.length) return res.send('no data about players!!')
    res.send(data)
})

app.listen(3000,()=>console.log('Server Started!!'))