const express = require('express')
const cockieParser = require('cookie-parser')
const mongoose = require('mongoose');
const User = require('./models/user.model')
const app = express();
const userRouter = require('./routes/user.route')

const DB_URL = 'mongodb://localhost:27017/goodreads'
const PORT = process.env.PORT || 5000;
mongoose.connect(DB_URL, { useNewUrlParser: true }, () => { console.log('succcessfully connected to mongodb') })

app.use(cockieParser());
app.use(express.json())

app.use('/user', userRouter)

app.get('/', (req, res) => res.send('Hello World!'))


// const userInput = {
//     username: 'mhmdft',
//     email: "mo@SpeechGrammarList.com",
//     password: '123456789'
// }

// const user = new User(userInput);

// user.save((err, document) => {
//     if (err) console.log(err);
//     console.log(document);

// })


app.listen(PORT, () =>
    console.log(`server is listening at port ${PORT}`)
)


