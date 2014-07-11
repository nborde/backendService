//GET '/wines' return the wine list
exports.findAll = function(req, res) {
res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};
 
//GET '/wines/{id}' return the wine identified by id
exports.findById = function(req, res) {
res.send({id:req.params.id, name: "The Name", description: "description"});
};

//POST '/wines' create a new wine
//PUT '/wines/{id}' modify the wine identified by the Id.
//DELETE '/wines/{id}' deletes the specific wine.


