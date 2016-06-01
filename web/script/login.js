

define(['utils', 'call'], 
function(utils, call) {
    'use strict';

    function init (){ 

        var _login_page = document.getElementById("login-page");
        utils.mr({
            ns      :'base',
            tpl     :tpl_login,
            elem    :_login_page
        });

        //loginLogout();

        var form = document.getElementById('login-form');



        var submit = form.querySelector( "input[type=submit]" );


        submit.addEventListener( "click", function( event ) {
            event.stopPropagation();
            event.preventDefault();


            console.log('-------', utils.formElements(form));

            var $params = utils.formElements(form);

            //submit.submit();

            call.login( $params ).then(function(response) {

                console.log("0026 tm.js Success!", response);

                var username = form.querySelector( "input[name=username]" );
                var password = form.querySelector( "input[name=password]" );

                if(response.status === 200){

                    var opts = {
                        user  :username.value,
                        token :response.token 
                    }
                    utils.storeSet('token', opts);
                    //document.location ='index.html';
                    utils.goToPage('home');
                    
                }else {

                    username.value = "";
                    password.value = "";

                    // $('input[type=password]').select();
                    // $('.validate').addClass('error').delay(210).queue(function() { $(this).removeClass('error'); $(this).dequeue(); });
                    // return false;
                }

            }, function(error) {

                username.value = "";
                password.value = "";

                console.error("0061 login.js error Failed!", error);
            }); 
        });
        
/*
        $("#login_button").click(function(){
                $("#login_form").trigger('submit');
        });


        $("#login-form").submit(function(e){
            e.preventDefault();

            var $params = {username:$('#username').val(), password:$('#password').val()};

            call.login( $params ).then(function(response) {
                console.log("0026 tm.js Success!", response);
                //datos( response );
            
                if(response.status === 200){

                    var opts = {
                        user  :$('#username').val(),
                        token :response.token 
                    }
                    utils.storeSet('token', opts);
                    document.location ='index.html';
                    
                }else {

                    document.getElementById('username').value = "";
                    document.getElementById('password').value = "";

                    $('input[type=password]').select();
                    $('.validate').addClass('error').delay(210).queue(function() { $(this).removeClass('error'); $(this).dequeue(); });
                    return false;
                }

            }, function(error) {

                document.getElementById('username').value = "";
                document.getElementById('password').value = "";

                console.error("0061 login.js error Failed!", error);
            }); 

        });
        //now call the ajax also focus move from 
        //$("#password").blur(functio){ $("#login_form").trigger('submit'); });

        $("body").keyup(function(e){ 
            // keycode for cross browser
            var code = (e.keyCode ? e.keyCode : e.which);
            if(code === 13){
                //console.log( 'user: ' + $('#username').val() +' pass: '+ $('#password').val()  )
                if($('#username').val()==='' || $('#password').val()===''){
                    console.log('campos vacios');
                }else{
                    $("#login_form").trigger('submit');
                }
            }   
        });
*/
        //Para que no carge el resto del script
        return false;

    };


    return {
        init  :init
    };

});