

var bodyParser 	= require('body-parser');

//var data = require('../controllers/results');

var data = require('../models/results');



exports.quiniela = function(req, res){

    var round = req.params.round;
    data.quiniela( round ).then(function(data){


        //res.status(200).end(JSON.stringify(data) );
        res.status(200).json({
            //success :true, //borrar
            status      :200,
            message     :'Success',
            //quiniela    :JSON.stringify(data)
            quiniela    :data.quiniela
        });


    },function(err){

    	//res.status(401).end('----');
        //reject(err);

        res.status(401).json({ 
			status  :401,
			message :'Error - '+err.error
		});

    });



};





