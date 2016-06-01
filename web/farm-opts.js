/*
*
* 
*
*
*/




farm.o = {
    mode            : 1,
    dev             : true,
    animation       : false,
    console         : true,
    opts_ext        : false,

    //cut_the_mustard
    ctm:{
        classList :true,
        querySelector :true,
        localStorage :true,
        addEventListener :true,
        svg : true
    },
    
    bwstatus  : { 'mozilla':'22', 'chrome':'20', 'msie':'9', 'safari':'6', 'opera':'15' },

    cache_ver : '1438169169385'
};

farm.r = {

    //baseUrl for if start in /
    base_url        :'',  

	//require
    require         :'farm/farm-load-require.js', 
    //others roots 
    others          :'farm/farm-load-others.js', 

	//link to require.js
    requirejs       :'node_modules/requirejs/require.js',
    ctm             :'node_modules/farm-base/source/ctm.js', 

    lang_dir        :'languages/',

    bk              :'http://localhost:3009/api/'

    /*********************************/

};






