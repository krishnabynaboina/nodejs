var express = require('express');
var router = express.Router();
var persistance = require('../models')
const user = persistance.User

/* GET users listing. */
router.get('/', function(req, res, next) {
    user.findAll().then(response=>{
        res.send({code:200, data: response});
    })
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id
    if(id){
        user.findOne({where:{id: id}}).then(response=>{
            res.send({code:200, data: response});
        }).catch(error=>{
            res.send({code:300, error: 'User not found'});
        })
    }else{
        res.send({code:300, error: 'User not found'});
    }
});

router.post('/', function(req, res, next) {
    const newUser = req.body.data
    newUser ? delete  newUser.id : ''
    user.create(newUser).then(response=>{
        res.send({code:200, data: response});
    }).catch(error=>{
        res.send({code:300, error: 'User not found'});
    })
});

router.put('/:id', function(req, res, next) {
    const id = req.params.id
    if(id){
        const newUser = req.body.data
        newUser ? delete  newUser.id : ''
        user.update(newUser, {where:{id:id}}).then(response=>{
            if(response[0]>0)
                res.send({code:200, data: response});
            else
                res.send({code:300, error: 'User not found'});
        }).catch(error=>{
            res.send({code:300, error: 'User not found'});
        })
    }else{
        res.send({code:300, error: 'User not found'});
    }
});

module.exports = router;
