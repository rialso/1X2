

define(['utils'], 
function(utils) {
    'use strict';


    function login ( $params ){ 

        console.log( $params )

        return new Promise(function(resolve, reject) { 

            var request = new XMLHttpRequest();
            //request.open('GET', farm.r.bk+'login/'+ $params, true);
            request.open('POST', farm.r.bk+'login', true);
            var params = 'username='+$params.username+'&password='+$params.password;

            //Send the proper header information along with the request
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //request.setRequestHeader("Content-length", params.length);
            //request.setRequestHeader("Connection", "close");

            request.onload = function() {

                console.log( 'request', request )

                if (request.status >= 200 && request.status < 400) {

                    

                    // Success!
                    var json = JSON.parse(request.responseText);
                    var dta = typeof json !== 'object' ? JSON.parse(json) : json;       
                    //resolve(dta); 

                    if (dta.status === 200){ 
                            resolve(dta);
                    }else{
                            reject(dta);
                    }

                } else {

                    // We reached our target server, but it returned an error
                    var json = JSON.parse(request.responseText);
                    var dta = typeof json !== 'object' ? JSON.parse(json) : json;     
                    reject(dta); 
                }
            };
            request.onerror = function() {
                console.log( 'request.onerror' )
                console.log( 'request', request )
              // There was a connection error of some sort
            };
            request.send(params);
        }); 
    }


    function loginCheck (){ 

        return new Promise(function(resolve, reject) { 

            /*
            averiguamos si el usuario esta en SESSION
            si lo esta devolvemos el usuario
            si no lo devolvemos NO
            */
            
            var cn = utils.storeGet('token');

            //console.log('verifing cn: ', cn)

            if(cn){

                var request = new XMLHttpRequest();
                request.open('GET', farm.r.bk+'token', true);

                request.setRequestHeader('x-access-token', cn.token );

                request.onload = function() {

                    if (request.status >= 200 && request.status < 400) {

                        // Success!
                        var json = JSON.parse(request.responseText);
                        var dta = typeof json !== 'object' ? JSON.parse(json) : json;       
                        //resolve(dta); 

                        if (dta.status === 200){ 
                                resolve(dta);
                        }else{
                                reject(dta);
                        }

                    } else {

                        // We reached our target server, but it returned an error
                        var json = JSON.parse(request.responseText);
                        var dta = typeof json !== 'object' ? JSON.parse(json) : json;     
                        reject(dta); 
                    }
                };
                request.onerror = function() {
                    // There was a connection error of some sort
                    console.log( 'request.onerror' )
                    console.log( 'request', request )
                };
                request.send();
            }
            else{

                var data =  { 
                    success: false, 
                    message: 'No token stored.' 
                };
                resolve(data);
            }
        }); 
    }


    function ftb_quiniela ( $round ){ 

        return new Promise(function(resolve, reject) { 
            
            var cn = utils.storeGet('token');

            if(cn){

                var request = new XMLHttpRequest();
                request.open('GET', farm.r.bk+'quiniela/'+$round, true);

                request.setRequestHeader('x-access-token', cn.token );

                request.onload = function() {

                    console.log(request)

                    if (request.status >= 200 && request.status < 400) {

                        // Success!
                        var json = JSON.parse(request.responseText);
                        var dta = typeof json !== 'object' ? JSON.parse(json) : json;       
                        //resolve(dta); 

                        //console.log(dta)

                        if (dta.status === 200){ 
                                resolve(dta);
                        }else{
                                reject(dta);
                        }

                    } else {

                        // We reached our target server, but it returned an error
                        var json = JSON.parse(request.responseText);
                        var dta = typeof json !== 'object' ? JSON.parse(json) : json;     
                        reject(dta); 
                    }
                };
                request.onerror = function() {
                    // There was a connection error of some sort
                    console.log( 'request.onerror' )
                    console.log( 'request', request )
                };
                request.send();
            }
            else{

                var data =  { 
                    success: false, 
                    message: 'No token stored.' 
                };
                resolve(data);
            }
        }); 
    }



    return {
        login           :login,
        loginCheck      :loginCheck,

        ftb_quiniela    :ftb_quiniela
    };

});
