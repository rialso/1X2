define(['mustache', 'i18next'], 
function(Mustache, i18n) {
    'use strict';

    var idx = 0;
    var ns;
    
    function MustacheResponse(namespace) {
        idx = 0;
        ns  = namespace;
    }

    MustacheResponse.prototype.t=function(){
        return function (text, render) {
            //var ret = i18n.t(ns+'::::'+render(text));
            var ret = i18n.t(ns+'::::'+render(text),{defaultValue: render(text) });
            if(ret=='' || ret == undefined ) return render(text);               
            return ret;
        };
    }

    MustacheResponse.prototype.idx=function(){
        return function (text, render) {
            var ret = idx;
            idx++;
            return ret;
        };
    }

	// IMPORTANTE: hay que llamar a este metodo si hay dos bucles en el mismo template llamando a idx
	MustacheResponse.prototype.idx_reset=function(){
        return function (text, render) {
			idx=0;
            return render(text);
        };
	}	

	// Divide por diez y formatea el número con comas
	MustacheResponse.prototype.grade=function(){
        return function (text, render) {
        	if(isNaN(parseInt(render(text)))) return '';
        	return (parseInt(render(text))/10).toString().replace('.', ',');
        };
	}
    /*
	//Cambia las eses de final de palabra para el layout 1
	MustacheResponse.prototype.change_s=function(){
        return function (text, render) {
        	var ret = utilities.change_last_word_char(render(text), 's', '„');
            return ret;
        };
	}
    */

   

	return MustacheResponse;
});