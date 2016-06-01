
define(['farm_router', 'farm_section', 'login', 'home'], 
function(farm_router, farm_section, login, home ) {

    // publica
    // registro
    // privada

    function init (){



        ////////////////// publica

        farm_router('', function(params) { 

            //farm_section.base('home');

            console.log('routes: farm_router /');

            farm_router('home');
        });

        farm_router('home', function(params) { 

            farm_section.base('home');

            home.init();
        });

        farm_router('login', function(params) { 

            farm_section.base('login');

            console.log('routes: login')

            login.init();
        });

      

        farm_router(/^(.*?)\/open$/, function(ctx, next) {  // '/user/:namedParam/*splat'

            console.log('ctx: ', ctx)
        });

        //////////// ultima

        farm_router('*', function(){
            console.error('Page not found :( ');

        });

        farm_router();
        //farm_router({hash:true});


        ///////////////////// routes functions ////////////////////////

        /*
        function show_caracteristicas(ctx, next) { 
            console.log(ctx)
            console.log(next)
            start.init({
                language:ctx.lang,
                callback : function (){  caracteristicas.init(); }
            });
        }
        */

        //return farm_router;

    }

    return {

        init :init
    }

});    