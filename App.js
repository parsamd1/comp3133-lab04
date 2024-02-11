const userModel=require('./UserModel')
const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors');
const app=express()

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://john123:john123@cluster0.sqtw7uq.mongodb.net/comp3133%2dlab04?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection')
    process.exit()
});

app.post('/users', (req, res)=>{
    const obj1=new userModel({
        ...req.body
    })
    obj1.save()
        .then(()=>{
            res.status(200).send('success')
            console.log('success')
        })
        .catch((e)=>{
            res.status(500).send(e)
            console.log(e)
        })
})




const PORT = process.env.PORT || 3000;
const express_server=app.listen(PORT, () => { console.log('Server is running...') });