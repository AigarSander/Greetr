//teeb objekti nimega g milleks on globaalne objekt G$ millele sisestatakse ('John' ja 'Doe').
var g = G$('John', 'Doe');
//läbi konsooli on prinditud objekt g.
g.greet().setLang('es').greet(true);