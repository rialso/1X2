var tpl_quiniela_create = "\n<div class=\"quiniela\">\n  \n  <ul>\n  \n  \t{{#quiniela.lines}}\n    \n        {{#_border}}\n        <li class=\"border\"></li>\n        {{/_border}}\n  \n  \t\t<li class=\"line-{{_order}}\">\n          \n          \t\t\t<div class=\"order\">{{_order}}</div>\n          \n          \t\t\t{{#_1X2}}\n          \t\t\t\t<div class=\"equipos line\">\n                          \t<span class=\"text\">{{team1_name}}\n                          \t\t</span><span class=\"guion\"> - </span>\n                        \t<span class=\"text\">{{team2_name}}</span>\n          \t\t\t\t</div>\n          \n    \t\t\t\t\t<div class=\"results-boxes line\">                   \n                          \t\t   <input  id=\"uno_{{_order}}\" type=\"radio\" name=\"{{_order}}\" value=\"1\" class=\"uno\"><!--\n\t\t\t\t\t\t\t\t--><label for=\"uno_{{_order}}\" class=\"uno\"></label><!--\n                          \t\t--><input  id=\"ixs_{{_order}}\" type=\"radio\" name=\"{{_order}}\" value=\"X\" class=\"ixs\"><!--\n\t\t\t\t\t\t\t\t--><label for=\"ixs_{{_order}}\" class=\"ixs\"></label><!--\n                          \t\t--><input  id=\"dos_{{_order}}\" type=\"radio\" name=\"{{_order}}\" value=\"2\" class=\"dos\"><!--\n                         \t\t--><label for=\"dos_{{_order}}\" class=\"dos\"></label>\n                        </div>\n          \t\t\t{{/_1X2}}\n                    {{^_1X2}}\n          \t\t\t\t<div class=\"wrap-equipo-pleno\">\n                            <div class=\"equipo-pleno\">\n                                <div class=\"equipos line\">{{team1_name}}</div>\n                                <div class=\"results-boxes line\">\n                                           <input type=\"radio\" name=\"15\" value=\"0\" class=\"mts\" id=\"radio20\"><!--\n                          \t\t\t\t--><input type=\"radio\" name=\"15\" value=\"1\" class=\"mts\" id=\"radio21\"><!--\n\t\t\t\t\t\t\t\t\t\t--><input type=\"radio\" name=\"15\" value=\"2\" class=\"mts\" id=\"radio21\"><!--\n                          \t\t\t\t--><input type=\"radio\" name=\"15\" value=\"M\" class=\"mts\" id=\"radio21\">\n                                </div>\n                            </div>\n\n                            <div class=\"equipo-pleno\">\n                                <div class=\"equipos line\">{{team2_name}}</div>\n                                <div class=\"results-boxes line\">\n                                           <input type=\"radio\" name=\"16\" value=\"0\" class=\"mts\" id=\"radio20\"><!--\n                          \t\t\t\t--><input type=\"radio\" name=\"16\" value=\"1\" class=\"mts\" id=\"radio21\"><!--\n\t\t\t\t\t\t\t\t\t\t--><input type=\"radio\" name=\"16\" value=\"2\" class=\"mts\" id=\"radio21\"><!--\n                          \t\t\t\t--><input type=\"radio\" name=\"16\" value=\"M\" class=\"mts\" id=\"radio21\"> \n                                </div>\n                            </div>\n                        </div>\n          \t\t\t{{/_1X2}}\n          \t\t\t<!--\n          \t\t\t{{#_result}}\n          \t\t\t<div class=\"result\">{{r1}} - {{r2}}</div>\n          \t\t\t{{/_result}}\n\t\t\t\t\t-->\n          \t\t\t\n    \n    </li>\n\n\t{{/quiniela.lines}}\n    \n   </ul>\n</div>\n";
var tpl_folder="/Users/rtb/Sites/1X2/web/templates/";