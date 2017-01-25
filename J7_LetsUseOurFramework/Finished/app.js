var g = G$('John', 'Doe');

//kasutab aheldatud meetodit, et väljastada andmeid.
g.greet().setLang('es').greet(true).log();

// kasutab objekti peale klikki
$('#login').click(function() {
   
    // teeb uue Greetr objekti
    var loginGrtr = G$('John', 'Doe');
    
     // peidab logindiv'i
    $('#logindiv').hide();
    
     // väljasta HTML sõnum(tervitus), ja logi.
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});