define(['mustache', 'mustache_response', 'i18next', 'farm_icons', 'farm_router'], 
function(Mustache, MustacheResponse, i18n, farm_icons, farm_router) {
    'use strict';

    function extend(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];

        return arguments[0];
    };

    function goToPage(page) {
        farm_router(page);
    };

    /*
        utils.mr({
            ns      :'vve',
            tpl     :tpl_blocks,
            id      :'temeBox_'+x[i].id,
            data    :{blocks: response},
            ptls    :{blocks: tpl_blocks}
        });
    */

    function mr($dts) { //$ns, $tpl, $id, $data, $ptls

        var response = new MustacheResponse($dts.ns);

        if($dts.data){
            response = extend( response, $dts.data);
        }
        //console.log('function mr: ', response);
        var ptls = {};
        if ($dts.ptls){
            ptls = $dts.ptls;
        }
        response.lang = farm.lg;
        var output = Mustache.render($dts.tpl, response, ptls);

        if($dts.elem){

                farm_icons.load($dts.elem, output);
        }else{
                return output   
        }

        //farm.fn.viewbox($id, output);
        //document.getElementById($id).innerHTML += output;
    };

    // get the folder of index.html, mame of last '/' of window.location.pathname
    function folderURL($url) {

        var url, pathArray, last, getext, folder;

        //var url = 'file:///Users/rtb/Sites/front/marmitefrwk/legal2/index.html';
        url = window.location.pathname;
        console.log(url)
        url = url.replace(/\/$/, '') // Match a forward slash / at the end of the string ($)        
        pathArray = url.split( '/' );
        last = pathArray[pathArray.length-1];
        getext = last.lastIndexOf(".");
        if(getext > 0){
            folder = pathArray[pathArray.length-2];
        }
        else{
            folder = pathArray[pathArray.length-1];
        }

        //console.log('folder: ', folder);

        return folder;
    };
    
    function firstURL($url) {

        var url, pathArray, last, getext, folder;

        //var url = 'file:///Users/rtb/Sites/front/marmitefrwk/legal2/index.html';
        url = window.location;
        console.log(url)
    };

    function parseQueryString(b){
        console.log('parseQueryString: ',b)
        var ret = {};
        var v = b.split("&");
        for (var i = 0; i < v.length; i++) {
            var s = v[i].split('=');
            ret[s[0]] = s[1];
        }
        return ret;        
    };

    function storeLoad( key, value ){

        if(typeof( store.get(key) ) != 'object'){
            // ia -> informacion actividades
            // ep -> equivalencia papel
            store.set(key,value);

            storeGet(key);
        }
    };

    function storeGet( key ){
        //var x = store.get(key);
        //farm.o[key]= x;

        var get = localStorage.getItem( key );
        //console.log( 'typeof get: ',typeof( get ) )

        if(typeof( get ) == 'object'){

                return get;
        }else{
                return JSON.parse( get );  
        }
    };
    
    function storeSet( key, value ){
        //store.set(key, value);
        //farm.o[key]= value;

        if(typeof( value ) == 'object'){

                var save = JSON.stringify( value );
        }else{
                var save = value;
        }
        localStorage.setItem( key, save );
    };

    function i18nInit(lang, namespace, ccaa, callback){

        //console.log('i18nInit')

        var country = 'ES';
        if(!lang)
            lang = 'es';
        if(lang=='en')
            country = 'GB';

        // Para cargar idiomas para el modo offline
        // var resources = {
        //   dev: { translation: { 'Mis libros': 'Libross' } },
        //   ca: { translation: { 'Mis libros': 'Llibres' } }
        // }; 

        var translations = lang + '_' + country + '_resources';
        if(typeof(ccaa)==='string'){
            translations = lang + '_' + country + '_' + ccaa + '_resources';
        }
        else{
            callback = ccaa;
        }


        //console.log('--', translations)

        //i18n.init({ 
        //    lng: farm.l.lang, 
        //    resGetPath: '../languages/__ns_____lng___' + farm.l.country + '.json',
        
        i18n.init({    
            lng: lang + '_' + country, 
            resStore: eval(translations),
            ns: {  namespaces: [namespace],  defaultNs: 'base' },  
            fallbackLng: false,  
            keyseparator: ':::', 
            nsseparator: '::::' 
        }, function(err, t){
            callback(err, t);
        });
    };

    function animEndEventName() {

        var  s = document.body.style
            ,animationProperty =
                'WebkitAnimation' in s ? 'webkitAnimationEnd' :
                'OAnimation' in s ? 'oAnimationEnd' :
                'msAnimation' in s ? 'MSAnimationEnd':
                'animation' in s ? 'animationend': 'no-supported'
            ;

        //console.log( s ) ;
        //console.log( 'animationProperty -->', animationProperty );

        return animationProperty === 'no-supported' ? false : animationProperty;
    };

    function animationEnd(id_page, callback){
        /*
        var animEndEN = animEndEventName();

        if(farm.o.animation){
            //$("#"+id_page).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            $("#"+id_page).on(animEndEN,
            function(e){
                callback();

                $(this).off(e);
            });
        }
        else{
            callback();
        }
        */
    };

    // get object of elements or form
    function formElements(form){
        var formElements=form;    
        var postData={};
        for (var i=0; i<formElements.length; i++){
            //we dont want to include the submit-buttom
            if (formElements[i].type!="submit"){
                postData[formElements[i].name]=formElements[i].value;
            }
        }
        return postData;        
    };

	return {

      	mr          :mr,
        goToPage    :goToPage,
        i18nInit    :i18nInit,
        folderURL   :folderURL,
        firstURL    :firstURL,

        parseQueryString    :parseQueryString,

        storeLoad           :storeLoad,
        storeGet            :storeGet,
        storeSet            :storeSet,
    
        animationEnd        :animationEnd,
        formElements        :formElements

  	}
});

