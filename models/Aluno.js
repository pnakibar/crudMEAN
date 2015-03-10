var mongoose = require('mongoose');
var AlunoSchema = new mongoose.Schema({
	name: String,
	age: Number,
	forcelevel: String
});

module.exports = mongoose.model('Aluno', AlunoSchema);