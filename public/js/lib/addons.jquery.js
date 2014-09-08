/**
 * Created by romkin on 05.09.2014.
 * Расширение для jQuery для получения get-параметров
 *
 * Использование:
 * getUrlVar() - массив get-параметров
 * getUrlVar(name) - значение get-параметра
 */
$.extend({
    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name){
        return $.getUrlVars()[name];
    }
});