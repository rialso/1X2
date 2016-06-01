module.exports = function (grunt) {

    // Load all grunt-* packages from package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        i18next_conv: {
          target: {
            files: [
              {dest: 'es_ES.json',
               src: 'es_ES.po',
               domain: 'es',
               country: 'ES',
               namespace: 'pb',
              },
              {dest: 'en_GB.json',
               src: 'en_GB.po',
               domain: 'en',
               country: 'GB',
               namespace: 'pb',
              },
              {dest: 'ca_ES.json',
               src: 'ca_ES.po',
               domain: 'ca',
               country: 'ES',
               namespace: 'pb',
              },
              {dest: 'gl_ES.json',
               src: 'gl_ES.po',
               domain: 'gl',
               country: 'ES',
               namespace: 'pb',
              },
            ],
          }
        },     
        exec: {
          parsetranslations: '',
          clean: 'rm -rf temp/*; rm -rf *_*.po; rm -rf *_*.json; rm -rf *_*.po~; rm -rf offline/*.js',
          clean_tmp: 'rm -rf temp/*; rm -rf *_*tmp.po; rm -rf *_*.po~'
        },
        json_wrapper: {
            options: {
                wrapper: 'var {filePrefix}_resources = { {filePrefix}: { pb:  {content} }};',
                raw: true
            },
            target: {
              files: [{
                  expand: true,
                  flatten: true,
                  src: [
                      '*_*.json'
                  ],
                  // Generate individual files under another folder
                  dest: 'offline'
              }]
            }
        },             
    });

    var parse_command = '';
    grunt.config.get('i18next_conv').target.files.forEach(function(file) {
        parse_command += './parse_translations.sh ' + file.domain + '_' + file.country + ';';// + ' ' + file.namespace + ';';
        //parse_command += './parse_translations.sh ' + file.domain + '_' + file.country + ' ' + file.namespace + ';';
        grunt.config.set('exec.parsetranslations', parse_command)
    });

    // Execute using grunt
    grunt.registerTask('default', '', function () {        
        grunt.task.run('exec:parsetranslations', 'i18next_conv', 'json_wrapper', 'exec:clean_tmp');

    });

    // Execute using grunt no_clean
    grunt.registerTask('no_clean', '', function () {        
        grunt.task.run('exec:parsetranslations', 'i18next_conv', 'json_wrapper');

    });    

    // Execute using grunt clean
    grunt.registerTask('clean', '', function () { 
        grunt.task.run('exec:clean');

    });    

    // Execute using grunt clean_tmp
    grunt.registerTask('clean_tmp', '', function () { 
        grunt.task.run('exec:clean_tmp');

    });

    // Execute using grunt parsetranslations
    grunt.registerTask('parsetranslations', '', function () {        
        grunt.task.run('exec:parsetranslations');

    });

    // Execute using grunt po2json
    grunt.registerTask('po2json', '', function () {        
        grunt.task.run('i18next_conv', 'json_wrapper');
    });            
};
