const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');

const datamodel=require('./models/data');

mongoose.connect('mongodb://localhost:27017/Node-2', {useNewUrlParser: true,useUnifiedTopology: true});

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    datamodel.find().then(data=>{
       
        res.json(data)
    })
   

})


app.post('/',(req,res)=>{
    console.log(req.body)
    const name=req.body.name;
    const text=req.body.text;
    const data=new datamodel({name:name,text:text});
    data.save();
})



app.listen(3000,()=>{
    console.log('SEVRER.........');
})