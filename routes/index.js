const express = require('express')
const Router = express.Router()

Router.get('/instagram', function(req, res){
    const socialInsta = {
        username:'shanudutt',
        followers: '400k',
        follows: '50k'
    }

    res.status(200).send(socialInsta)
})

Router.get('/facebook', function(req, res){
    const socialInsta = {
        username:'shashankdutt64',
        followers: '400k',
        follows: '50k'
    }

    res.status(200).send(socialInsta)
})

Router.get('/linkedin', function(req, res){
    const socialInsta = {
        username:'shashankduttmathur',
        followers: '400k',
        follows: '50k'
    }

    res.status(200).send(socialInsta)
})

Router.get('/:token', function(req, res){
    res.send(req.params)
    console.log(req.params);
})

module.exports = Router