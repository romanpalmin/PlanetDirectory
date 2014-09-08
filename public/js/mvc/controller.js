/**
 * Created by rpalmin on 03.09.2014.
 * Класс Controller. Отвечает за интерфейс. Обработчики событий.
 */
PMVC.Controller = function (model, view) {

    // variables
    var _currentID = 0;
    var _isAnimation = true;

    // Инициализация класса
    InitApp();
    InitHandlers();

    function InitApp()
    {
        if(history.pushState && history.replaceState) {
            // значение по умолчанию
            var _id = $.getUrlVar('planetID');
            if (_id === undefined) {
                _id = 3;
            }
            history.replaceState("{Planetid:"+_id+"}", "Planet#"+_id, "index.html?planetID="+_id);
            ToggleDetails(_id, false); // при первом запуске обновляется контент, но не обновляется история
        }
    }

    /**
     * Привязка обработчиков
     */
    function InitHandlers(){
        $('.rowselect, a.nav').bind('click', function(){
            ToggleDetails(this.id, true); // при переходе по ячейкам - обновляем контент и добавляем запись в историю
        });

        $(window).bind("popstate", function(evt) {
            Reload(false); // при переходе по истории обновляется контент, но не обновляется история
            return false;
        });
    }


    /**
     * Перезагружает информацию о планете по get-параметру
     */
    function Reload(isAddToHistory) {
        var _id = $.getUrlVar('planetID');
        ToggleDetails(_id, isAddToHistory);
    }

    /**
     * Основное обновление детальной информации
     */
    function ToggleDetails(id, pushState){
        if (id == _currentID) return false;
        if (_isAnimation) {
            $(view.div_content_detail).fadeOut('normal', function () {
                view.FillDetailsDiv(id);
                AddToHistory(id, pushState);
                $(view.div_content_detail).fadeIn('normal');
            });
        }
        else{
            view.FillDetailsDiv(id);
            AddToHistory(id, pushState);
            $(view.div_content_detail).show(); //fadeIn('normal');
        }
        _currentID = id;
        return true;
    }

    /**
     * Добавляет запись в History
     */
    function AddToHistory(id, isAdd){
        if(history.pushState && history.replaceState && isAdd) {
            history.pushState("{Planetid:" + id+"}", "Planet#" + id, "index.html?planetID="+id);
        }
    }




};