
//console.log("index.js: initializing...");

define(['farm_browser', 'farm_section', 'farm_icons', 'routes', 'call', 'utils'], 
function(farm_browser, farm_section, farm_icons, routes, call, utils) {
    'use strict';

    farm_browser({

        filter : farm.o.bwstatus,

        close  : function (data){ 

            if(data.passFilter){
                    farm.n = data;
                    ini();
            }else{
                    document.body.innerHTML = tpl_browser_alert;
            }
            return true; 
        }
    })

    function ini (){

        farm_section({
            pages :{
                home   :'home',
                login  :'login'
            }

        });

        //farm_section.base('home');
        

        farm_icons({
            //icons2 :'src/imgs/selection'
            vvd_icons :'imgs/vvd-icons',
            vvd_logos :'imgs/vvd-logos'
        });


        //window.location = "login";
        //routes.init();


        call.loginCheck().then(function(response) {
            console.log("0064 index.js login Success!", response);

            if ( response.status === 200 ){ 
                    //console.log('@@@@ pasar a la pagina siguiente');
                    utils.goToPage('home');

                     routes.init();
            }else{
                    //console.log('@@@@ pasar a login');
                    utils.goToPage('login');

                    routes.init();
            }

        }, function(error) {
            console.error("0072 index.js login Failed!", error);
            //window.location = "/login";
            utils.goToPage('login');
        }); 

        
    };
        return {
        ini: ini
    };



});









