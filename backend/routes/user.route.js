const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken')
const User = require('../models/user.model');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/goodreads'

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
    console.log('signup');

    const { username, email, password, role } = req.body;
    mongoose.connect(DB_URL, { useNewUrlParser: true }, () => { console.log('succcessfully connected to mongodb') })


    User.findOne({ email }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } })
        if (user)
            res.status(400).json({ message: { msgBody: 'Email is already taken', msgErroe: true } })
        else {
            const newUser = new User({ username, email,password, role })
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


router.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username, role } });
});

module.exports = router;