var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Aluno = require('../models/Aluno.js')

router.get('/',function(req,res,next){
	res.render('index');
});


/* GET home page. */
router.get('/aluno/', function(req, res, next) {
	Aluno.find(function(err, alunos){
		res.render('aluno', {alunos:alunos});
	});
});

router.get('/teste/', function(req, res, next) {
	res.render('inseriraluno');
});

router.get('/aluno/:id', function(req, res, next) {
	Aluno.findByIdAndUpdate(req.params.id, req.body, function (err, aluno) {
    	if (err) return next(err);
    	res.send(aluno);
	});
});


router.post('/aluno/', function(req, res, next) {
	console.log(req.body.name)
	console.log(req.body.age)
  	Aluno.create(req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);
  });
});

router.put('/aluno/:id', function(req, res, next) {
  Aluno.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/aluno/:id', function(req, res, next) {
  Aluno.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
	});
});


module.exports = router;