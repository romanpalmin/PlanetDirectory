/**
 * Created by rpalmin on 03.09.2014.
 * Класс View. Отвечает за представление. Генерация HTML, разметка, вид.
 */
PMVC.View = function (model, rootObject) {
    /* vars */
    var that = this;
    var title = 'Справочник планет';
    var headerHTML = '';
    var contentHTML = '';
    var footerHTML = '';
    var _htmlDetails = "";
    var vs = new ViewService();
    /*----------  создание элементов страницы ------*/
    that.div_header = $(vs.GenerateDiv('header', rootObject));
    that.div_content =  $(vs.GenerateDiv('content', rootObject));
    that.div_footer = $(vs.GenerateDiv('footer', rootObject));
    that.div_content_master =  $(vs.GenerateDiv('master', that.div_content));
    that.div_content_detail = $(vs.GenerateDiv('detail', that.div_content));

    /*--------  API (public) methods --------------*/

    /**
     Формирование блока подробной информации
     */
    that.FillDetailsDiv = function(id){
        _htmlDetails = vs.FillDetailsDiv(id);
        that.div_content_detail.html(_htmlDetails);
    };

    /**
     Формирование блока списка планет
     */
    that.FillMasterDiv = function(){
        _htmlDetails = vs.FillMasterDiv();
        that.div_content_master.html(_htmlDetails);
    };


    /*-------------- Private methods --------------*/

    function InsertStaticElements()
    {
        vs.GenerateStatic();
    }


    /*-------------- Start application --------------*/
    InsertStaticElements();
    that.FillMasterDiv();
    /*-----------------------------------------------*/




    /**
     Класс, обслуживающий View
     */
    function ViewService(){
        var self = this;

        /*--------  API (public) methods --------------*/

        /** Заполнение списка планет
         */
        self.FillMasterDiv = function(){
            return FillMasterDivArray();
        }

        /** Заполнение детальной информации по планете
         */
        self.FillDetailsDiv = function(id){
            return FillDetailDiv(id);
        }

        /** Генерация div'ов
         */
        self.GenerateDiv = function(id, root){
            return generateDiv(id, root);
        }

        /** Формирование статических элементов сайта
         */
        self.GenerateStatic = function(){
            return generateStatic();
        }

        /*--------  Private methods --------------*/

        // формирование детальной информации в html
        function FillDetailDiv(id){
            var _detail = model.GetPlanet_mock(id);
            //var _detail = model.GetPlanet(id);  // в реальном приложении раскомментировать
            return  FormDetailHTMLfromObject(_detail);
        }

        function FillMasterDivArray(){
            var _detailsArr = model.GetPlanetList();

            return FormMasterHTML(_detailsArr);
        }


        //  формирование HTML для детальной информации
        function FormDetailHTMLfromObject(detail){
            var _tblDetail = "";
            if(detail.id == 0){
                dust.render('p404_template', '', function(err, out) {
                    _tblDetail = out;
                });
            }
            else{
                dust.render('details_template', detail, function(err, out) {
                    _tblDetail = out;
                });
            }

            return _tblDetail;
        }

        //  формирование HTML для списка планет
        function FormMasterHTML(details)
        {
            var masterJSON =  {};  // в реальном приложении закомментировать, возвращать строку с сервера в нужном формате
            masterJSON.data = details;
            var _tblMaster = '';
            dust.render('master_template', masterJSON, function(err, out) {
                _tblMaster = out;
            });
            return _tblMaster;
        }

        //  формирование div'а с привязкой к родительскому элементу
        function generateDiv(id, rootObject){
            var _divHtml = '';
            dust.render('div_template', {'id':id}, function(err, out){
                _divHtml = out;
            });
            return $(_divHtml).appendTo(rootObject);
        }

        //  Генерация статических элементов страницы
        function generateStatic(){
            var _json = {'title':'Справочник планет', 'href':'index.html'};

            dust.render('header_template', _json, function(err, out) {
                console.log(out);
                that.div_header.html(out);
            });
            dust.render('footer_template', _json, function(err, out) {
                console.log(out);
                that.div_footer.html(out);
            });
        }

    }
};