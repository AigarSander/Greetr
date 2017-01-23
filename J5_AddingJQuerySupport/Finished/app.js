//teeb objekti nimega g milleks on globaalne objekt G$ millele sisestatakse ('John' ja 'Doe').
var g = G$('John', 'Doe');
//läbi konsooli on prinditud objekti g funktsioon greet(vaikimisi seadetes), funktsioon setLang,
// uues keeles greet funktsioon ja log funktsioon
g.greet().setLang('es').greet(true).log();