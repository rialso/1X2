

//var url = 'http://www.resultados-futbol.com/scripts/api/api.php';
//var url = 'http://5.39.74.137/scripts/api/api.php';
//var key = '94c694751928db22f60b189594f8c5b6';

var c_api   = require('../config_api');
//var tz      = 'Europe/Madrid';
//var req     = 'quiniela';
//var round = 38;


var request = require("request");


exports.quiniela = function(round){

    //console.log(':::::::::::::::::::::::::', key);

    return new Promise(function(resolve, reject) {

        //var round = 38;


        // request(url+'?key='+key+'&format=json&req='+req+'&tz='+tz+'&round='+round, function(error, response, body) {
        //     console.log(':::::::::::::::::::::::::', body);

        //     resolve(body);
        // });

        request({
            url: c_api.url+'?key='+c_api.key+'&format=json&req='+c_api.quini+'&tz='+c_api.tz+'&round='+round,
            json: true
        }, function (error, response, body) {

            //console.log(':::::::::::::::::::::::::', body);
            //console.log(':::::::::::::::::::::::::', response);

            if (!error && response.statusCode === 200) {

                resolve(body);

            }
            else{

                reject({ message: 'user not found', error: error });
            }
        })  
    });
};





