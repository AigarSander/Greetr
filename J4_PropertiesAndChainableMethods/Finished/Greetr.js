(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }

    // peidetud IIFE skoobi eest ja pole otseselt kättesaadav
    var supportedLangs = ['en', 'es'];

    //tervitused
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //ametlikud tervitused
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //logide s]numid
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    Greetr.prototype = {

        //avalik funktsioon mis tagastab objekti täisnime
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },

        //funktsioon mis kontrollib kas sisestatud keel on toetatud
        validate: function() {
            //viitab väljaspoolt kättesaamatule 'supportedLangs' loetelule
             if (supportedLangs.indexOf(this.language)  === -1) {
                 //tagastab veateate
                throw "Invalid language";   
             }
        },

        //funktsioon mis tagastab sõnumi toetudes sisestatud andmetele ja omadustele.
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        //funktsioon mis tagastab sõnumi toetudes sisestatud andmetele ja omadustele.
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        //aheldatud meetodid tagastavad enda objektis olevad väärtused.
        greet: function(formal) {
            //määraja
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

            // this viitab selle objekti kutsumisele käivituse ajal.
            // muudab meetodi järjestikuliseks
            return this;
        },

        //aheldatud meetodid tagastavad enda objektis olevad väärtused.
        log: function() {
            //kui määraja console on tõene
            if (console) {
                //prindib console.logiga funktsiooni logMessages tagastuse ja funktsiooni fullName tagastuse.
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }

            return this;
        },

        //aheldatud meetodid tagastavad enda objektis olevad väärtused.
        setLang: function(lang) {
            //muudab selle objekti language sisestatud väärtuseks 'lang'
            this.language = lang;
             //valideerib sisestatud keelt, kas see on toetatud.
            this.validate();

            return this;
        }
        
    };

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        //valideerib keele.
        self.validate();
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));