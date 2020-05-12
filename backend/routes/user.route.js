const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken')
const User = require('../models/user.model');
const Todo = require('../models/todo.model');

const signToken = (userID) => {
    return JWT.sign({
        iss: 'goodreads',
        sub: userID,
    },
        'goodreads',
        { expiresIn: '1h' }
    );
}

router.post('/signup', (req, res) => {
    const { username, password, role } = req.body;
    console.log({ username, password, role });

    User.findOne({ username }, (err, user) => {
        console.log('find');

        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } })
        if (user)
            res.status(400).json({ message: { msgBody: 'Username is already taken', msgErroe: true } })
        else {
            const newUser = new User({ username, password, role })
            newUser.save(err => {
                if (err)
                    res.status(500).json({ message: { msgBody: 'Error has occured', msgError: true } })
                else
                    res.status(201).json({ message: { msgBody: 'Account successfully created', msgErroe: false } })
            })
        }
    })
})


router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    console.log('login');
    if (req.isAuthenticated()) {
        const { _id, username, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
});

router.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log('logout');
    res.clearCookie('access_token');
    res.json({ user: { username: "", role: "" }, success: true });
});

router.post('/todo', passport.authenticate('jwt', { session: false }), (req, res) => {
    const todo = new Todo(req.body);
    todo.save(err => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else {
            req.user.todos.push(todo);
            req.user.save(err => {
                if (err)
                    res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
                else
                    res.status(200).json({ message: { msgBody: "Successfully created todo", msgError: false } });
            });
        }
    })
});

router.get('/todos', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id }).populate('todos').exec((err, document) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured" }, msgErroe: true })
        else
            res.status(200).json({ todos: document.todos, authenticated: true })
    })
})

router.get('/admin', passport.authenticate('jwt', {session:false}), (req, res) => {
    if(req.user.role == 'admin'){
        res.status(200).json({message:{msgBody:"You are an admin"}, msgError: false})
    }
    else{
        res.status(403).json({message:{msgBody: "You are not an admin"}, msgError: true })
    }
})

router.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}});
});


module.exports = router;