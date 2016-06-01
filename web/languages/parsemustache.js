#!/usr/bin/env node
var fs = require('graceful-fs');
var Mustache = require('Mustache');
var path = require('path');

var content = "\n";
var view = {
    't' : function () {
        return function (text, render) {
        	//console.log(JSON.stringify(render(text)));
        	content += "i18n.t(" + JSON.stringify(render(text)) + ");\n";	        	
            //return i18n.t(text);
        };
    },
};
//Load templates from index.html
loadFileHtml('../index.html');

//Load templates from js
var dir_array = ["../src/templates/pb"];
for (var j in dir_array){
	var dir = dir_array[j];
	try{
		var files = fs.readdirSync(dir);
		for (var i in files){
			var ext = path.extname(files[i].toString());  
			if(ext==='.js'){
				console.log("file: " + dir + '/' + files[i]);
				loadFileJs(dir + '/' + files[i], files[i]);
			}
		}
	}
	catch(e){
		//console.log(e);
	}
}

fs.writeFile('./temp/temp.js', content, function (err) {
  if (err) return console.log(err);
  console.log('DONE');
});

function loadFileJs(file, filename){
	try{
		var data = fs.readFileSync(file, {encoding: 'utf8'});
		data = cleanData(data);
		eval(data);
		var varname = filename.replace('.js','');
		var output = Mustache.render(eval('tpl_' + varname), view);
	}
	catch(e){
		//console.log(e);
	}
}

function cleanData(data){
	// Quita los tags del tipo {{ #algo }} {{ /algo }} {{ ^algo }} {{#algo}} {{/algo}} {{^algo}} excepto para las {{#t}} y {{/t}} 
	data = data.replace(/(?!{{\s?#t){{\s?#/g, '{{');
	data = data.replace(/(?!{{\s?\/t){{\s?\//g, '{{');
	data = data.replace(/{{\s?\^/g, '{{');
	return data;	
}

function loadFileHtml(file){
	var data = fs.readFileSync(file, {encoding: 'utf8'});
	data = cleanData(data);
	var output = Mustache.render(data, view);
}
