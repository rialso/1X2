/*
 * Incluimos las librerias de las que dependemos
 */

//console.log("main.js: initializing require.config");

require.config({
    baseUrl: farm.r.base_url,
    paths: {
        
        mustache            :'node_modules/mustache/mustache.min',
        i18next             :'node_modules/i18next/i18next.min',

        farm_browser        :'node_modules/farm-browser/source/farm-browser',
        farm_icons          :'node_modules/farm-icons/source/farm-icons',
        farm_router         :'node_modules/farm-router/source/farm-router',
        farm_section        :'node_modules/farm-section/source/farm-section',


        routes              :'script/routes',
        
        mustache_response   :'script/MustacheResponse',
        utils               :'script/utils',

        index               :'script/index',

        call                :'script/call',
        login               :'script/login',
        home                :'script/home'

  
    },
    shim: {
        /*
       jquery : {
            exports : 'jQuery'
        },
        */
    } ,
    deps: ['index']  
});

