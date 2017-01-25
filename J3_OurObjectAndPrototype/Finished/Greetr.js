(function(global, $) {

    //teeb uue objekti
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }

    //prototüüp hoiab objekti meetodeid
    Greetr.prototype = {};

    // tegelik objekt tehakse siin, lubamaks teha uut objekti ilma 'new' kasutamata
    Greetr.init = function(firstName, lastName, language) {
        //muutuja self mis viitab sellele objektile.
        var self = this;
        //muudab selle objekti muutuja 'firstName' sisendiks (firstName) või vaikimisi väärtuseks ''
        self.firstName = firstName || '';
        //muudab selle objekti muutuja 'lastName' sisendiks (lastName) või vaikimisi väärtuseks ''
        self.lastName = lastName || '';
        //muudab selle objekti muutuja 'language' sisendiks (language) või vaikimisi väärtuseks 'en'
        self.language = language || 'en';

    }

    //muudab objekti nii, et selle tegemseks ei pea enam kasutama 'new' võtmesõna
    Greetr.init.prototype = Greetr.prototype;
    
    // kinnitab Greetr globaalsele objektile ja annab sellele lühendi $G
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));