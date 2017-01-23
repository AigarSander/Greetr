//turvaline/privaatne objekt, mille sisenditeks on globaalne väärtus ja jquery väärtus
(function(global, $) {

    //uus objekt sisenditega firstName, lastName ja language
    var Greetr = function(firstName, lastName, language) {
        //tagastab selle objekti uue init funktsiooni
        return new Greetr.init(firstName, lastName, language);   
    }

    //array toetavatest keeltest
    var supportedLangs = ['en', 'es'];

    //privaatne objekt
    var greetings = {
        //määraja ja väärtus
        en: 'Hello',
        //määraja ja väärtus
        es: 'Hola'
    };

    //privaatne objekt
    var formalGreetings = {
        //määraja ja väärtus
        en: 'Greetings',
        //määraja ja väärtus
        es: 'Saludos'
    };

    //privaatne objekt
    var logMessages = {
        //määraja ja väärtus
        en: 'Logged in',
        //määraja ja väärtus
        es: 'Inició sesión'
    };

    //määrab objektile prototüübi
    Greetr.prototype = {

        //avalik (objekti) funktsioon
        fullName: function() {
            //tagastab stringi mis on selle objekti firstname ja lastName väärtused
            return this.firstName + ' ' + this.lastName;   
        },

        //avalik (objekti) funktsioon
        validate: function() {
            //kontrollib kas sisestatud keele väärtus on toetatud
             if (supportedLangs.indexOf(this.language)  === -1) {
                 //annab veateate kui seda keelt ei ole toetatud
                throw "Invalid language";   
             }
        },

        //avalik (objekti) funktsioon
        greeting: function() {
            //tagastab stringi milles on selle objekti greetings väärtus keele järgi ja selle objekti firstName väärtus
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        //avalik (objekti) funktsioon
        formalGreeting: function() {
            //tagastab stringi milles on selle objekti formalGreeting väärtus keele järgi ja selle
            // objekti fullName funktsiooni tagastatud väärtus
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },

        //avalik (objekti) funktsioon
        greet: function(formal) {
            //määraja msg
            var msg;

            // kui undefined või null siis see muudetakse 'false'ks
            if (formal) {
                //määrab msg väärtuseks funktsiooni formalGreeting tagastuse.
                msg = this.formalGreeting();  
            }
            else {
                //määrab msg väärtuseks funktsiooni greeting tagastuse.
                msg = this.greeting();  
            }

            if (console) {
                //prindib läbi console.logi msg väärtuse
                console.log(msg);
            }

            // this tähendab selle objekti kutsumist käivituse ajal.
            //muudab meetodi järjestikuliseks
            return this;
        },

        //avalik (objekti) funktsioon
        log: function() {
            //kui määraja console on tõene
            if (console) {
                //prindib console.logiga funktsiooni logMessages tagastuse ja funktsiooni fullName tagastuse.
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }

            //muudab meetodi järjestikuliseks
            return this;
        },

        //avalik (objekti) funktsioon
        setLang: function(lang) {
            //muudab selle objekti language sisestatud väärtuseks 'lang'
            this.language = lang;
             //valideerib sisestatud keelt, kas see on toetatud.
            this.validate();

            //muudab meetodi järjestikuliseks
            return this;
        }
        
    };

    //määrab objektile Greetr init funktsiooni sisenditega firstName, lastName ja language.
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

    //paneb init funktsiooni prototüübi võrduma objekti prototüübiga.
    Greetr.init.prototype = Greetr.prototype;

    //Teeb Greeter funktsiooni globaalseks aliasega G$
    global.Greetr = global.G$ = Greetr;

    //funkstioonile sisestatakse globaalne väärtus window ja jquery väärtus
}(window, jQuery));