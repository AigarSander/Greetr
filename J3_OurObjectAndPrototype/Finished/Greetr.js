//turvaline/privaatne objekt, mille sisenditeks on globaalne väärtus ja jquery väärtus.
(function(global, $) {

    //uus objekt sisenditega firstName, lastName ja language
    var Greetr = function(firstName, lastName, language) {
        //tagastab selle objekti uue init funktsiooni.
        return new Greetr.init(firstName, lastName, language);   
    }

    //määrab objektile prototüübi
    Greetr.prototype = {};

    //määrab objektile Greetr init funktsiooni sisenditega firstName, lastName ja language.
    Greetr.init = function(firstName, lastName, language) {
        //muutuja self mis viitab sellele objektile.
        var self = this;
        //muudab selle objekti muutuja 'firstName' sisendiks (firstName) või vaikimisi väärtuseks ''.
        self.firstName = firstName || '';
        //muudab selle objekti muutuja 'lastName' sisendiks (lastName) või vaikimisi väärtuseks ''.
        self.lastName = lastName || '';
        //muudab selle objekti muutuja 'language' sisendiks (language) või vaikimisi väärtuseks 'en'.
        self.language = language || 'en';

    }

    //paneb init funktsiooni prototüübi võrduma objekti prototüübiga.
    Greetr.init.prototype = Greetr.prototype;

    //Teeb Greeter funktsiooni globaalseks aliasega G$
    global.Greetr = global.G$ = Greetr;

//funkstioonile sisestatakse globaalne väärtus window ja jquery väärtus
}(window, jQuery));