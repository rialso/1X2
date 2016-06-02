

define(['utils', 'call'], 
function(utils, call) {
    'use strict';

    function init() {

        //console.log('paso por home');

        //document.getElementById('default').removeAttribute('farm-select');
        //document.getElementById('home').setAttribute('farm-select', 'true');

        //farm_load.viewbox('home-page', tpl_home_page);
        //utils.mr('home-page', tpl_home_page);

        //console.log('token: ', utils.storeGet('token') )

        console.log('---------- home -----------')

        // var _home = document.getElementById("home-page");
        // utils.mr({
        //     ns      :'base',
        //     tpl     :tpl_home,
        //     elem    :_home
        // });


        mount_quini();
	}



    function mount_quini( $data ) {

        var _home = document.getElementById("home-page");
        utils.mr({
            ns      :'base',
            tpl     :tpl_home,
            elem    :_home,
            //data    : $data
        });

        var _num_jornadas = document.getElementById("num-jornadas");
        // para que no se vea ningun valor
        _num_jornadas.value = 0;

        quini( null, _num_jornadas );

        _num_jornadas.addEventListener("change", function(){
            document.getElementById("panel-quiniela").innerHTML = '';
            var round = this.value;
            quini( round );
        });
    }

    function quini( round, first ) {

        //var round = 49;
        call.ftb_quiniela( round ).then(function(response) {
            console.log("0038 books.js Success!", response);
            // para colocar el numero de jornada la primera vez
            if(first){
                first.value = response.quiniela.round;
            }

            if(response.quiniela){

                var elem = response.quiniela.lines;

                for(var i=0;i<elem.length;i++){
                    var e = elem[i];

                    e._order = i+1;
                    if(e.result){
                        e._result = true;
                    }
                    else{
                        e._result = false;
                    }
                    if(i == 0 || i == 4 || i == 8|| i == 11 || i == 14 ){
                        e._border = true;
                    }
                    if(i==14){
                        e._1X2 = false;
                        if(e.r1 > 2){
                            e['_p1M'] = true
                        }
                        else{
                            e['_p1'+e.r1] = true
                        }
                        if(e.r2 > 2){
                            e['_p2M'] = true
                        }
                        else{
                            e['_p2'+e.r2] = true
                        }
                    }
                    else{
                        e._1X2 = true;
                        e['_r'+e.result] = true
                    }
                }

                var _panel_quiniela = document.getElementById("panel-quiniela");
                utils.mr({
                    ns      :'base',
                    tpl     :tpl_quiniela,
                    elem    :_panel_quiniela,
                    data    :response
                });





                var _box_quiniela = document.querySelector(".box-quiniela");
                var div = document.createElement('div');
                div.id = 'panel-quiniela-create';
                div.classList.add('panel-quiniela-create');

                _box_quiniela.appendChild(div)

                var _panel_quiniela_create = document.getElementById("panel-quiniela-create");
                utils.mr({
                    ns      :'base',
                    tpl     :tpl_quiniela_create,
                    elem    :_panel_quiniela_create,
                    data    :response
                });



            }

        }, function(error) {
            console.error("0011 books.js call Failed!", error);
        });    
    }

	return {

      	init : init
  	}
});











