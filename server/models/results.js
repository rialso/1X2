
var c_api   = require('../config_api');
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





