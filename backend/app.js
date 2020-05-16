const express = require('express')
const cockieParser = require('cookie-parser')
var cors = require('cors')
const app = express();
const userRouter = require('./routes/user.route')
//const userPageRoute =require('./routes/userPage.route');
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/goodreads' ;
const categoriesRouter = require('./routes/categoriesRoute')
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

app.use(cockieParser());
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/goodreads',{
    useNewUrlParser: true ,
    useUnifiedTopology: true
},(err)=>{
    if(!err){
        return console.log("Sucessfully Connected DataBase")
    }
    console.log(err);
})

app.use('/user', userRouter)
//app.use('/userpage' , userPageRoute)
app.use('/categories',categoriesRouter);


app.listen(PORT, () =>
    console.log(`server is listening at port ${PORT}`)
    
)


