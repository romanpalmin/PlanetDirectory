/**
 * Created by romkin on 03.09.2014.
 */
$(document).ready(function () {
    Start();
});

function Start() {
    Init();
}

function Init() {
    var model = new PMVC.Model();
    var view = new PMVC.View(model, $('body'));
    var controller = new PMVC.Controller(model, view);
}