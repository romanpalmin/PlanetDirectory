var PMVC = {};

/**
 * Created by rpalmin on 03.09.2014.
 * Класс Model. Отвечает за модель. Описание логических объектов, работа с источником данных и т.д.
 */
PMVC.Model = function () {

    var self = this;
    self.plServ = new PlanetService();

    //  Planet class
    function Planet(){
        this.id = 0;
        this.name = "";
        this.namerus = "";
        this.dist = "";
        this.img = "";
        this.weight = "";
        this.desc = "";
    };

    var PlanetList = []; //  набор планет

    //  Public methods
    /**
     * Получение списка планет
     */
    this.GetPlanets = function() {
        PlanetList = plServ.GetPlanets();
        return PlanetList;
    }

    /**
     * Получение детальной информации (для реального приложения)
     */
    this.GetPlanet = function(id) {
        var PlanetInfo = self.plServ.GetPlanetByID(id);
        if (PlanetInfo.length == 1)
            PlanetInfo = PlanetInfo[0];
        return PlanetInfo;
    }

    /**
     * Получение детальной информации (для тестового приложения)
     */
    this.GetPlanet_mock = function(id){
        if(PlanetList.length == 0)
            PlanetList = self.plServ.GetPlanets();

        var pl = new Planet();
        $.each(PlanetList, function(){
            if (this.id == id)
            {
                pl = self.plServ.FormPlanetRec(this);
                return pl;
            }
        });
        return pl;
    }

    /**
     * Создание словаря ID/Namerus планет
     */
    this.GetPlanetList = function(){
        var _planetList = [];
        if(PlanetList.length == 0)
            PlanetList = this.plServ.GetPlanets();
        $.each(PlanetList, function(){
            var _item = {};
            _item.id = this.id;
            _item.namerus = this.namerus;
            _planetList.push(_item);
        })
        return _planetList;
    }


    //  Класс работы с классом планет
    function PlanetService(){
        var self = this;
        this.FormPlanetRec = function formPlanetRec(source){
            var pl = new Planet();
            pl.id = source.id;
            pl.name = source.name;
            pl.namerus = source.namerus;
            pl.dist = source.dist;
            pl.img = source.img;
            pl.weight = source.weight;
            pl.desc = source.desc;
            return pl;
        }

        // Заполнение результата
        this.PopulatePlanets = function populatePlanets ( responseData ){
            var planets = [];
            // Если массив
            if ($.isArray( responseData )){
                // Заполняем массив записями
                $.each(
                    responseData,
                    function( index, RecData ){
                        planets.push(self.FormPlanetRec(RecData));
                    }
                );
                return( planets );

            } else { // Для одной записи

                var res = this.FormPlanetRec(responseData);
                return res;
            }
        };


        // Get Planets
        this.GetPlanets = function getPlanets(){
            //var self = this;
            var result = [];
            $.ajaxSetup({
                async: false
            });
            $.getJSON('data/getPlanets.json.txt', function(response) {
                if (response.success){
                    result = self.PopulatePlanets( response.data ) ;
                } else {
                    console.log(response.error);
                }
            });
            return result ;
        };



        // Get Planet
        this.GetPlanetByID = function getPlanetByID(id){
            var result;
            $.ajaxSetup({
                async: false
            });
            $.getJSON('data/getPlanet.json.txt', function(response) {
                if (response.success){
                    result = self.PopulatePlanets( response.data ) ;

                } else {
                    console.log(response.error);
                }
            });
            return result ;
        };
    };

    //  Инициализация класса
    PlanetService.prototype.init = function(){
    };
}