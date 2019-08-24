// OPCAO 1
var meuElemento = document.querySelector('#opcoesPizza');
var novaPizza = document.createElement('li');

// Adicionar novo li ao ul opcoesPizza
meuElemento.appendChild(novaPizza);

// Atribuir valor ao novo item li
novaPizza.innerHTML = "Quatro Pizza";

// OPCAO 2
meuElemento.appendChild(document.createElement('li')).innerHTML = 'Margueritta';
meuElemento.appendChild(document.createElement('li')).innerHTML = 'Cinco Queijos';
meuElemento.appendChild(document.createElement('li')).innerHTML = 'Camarão Catupiry';

// OPCAO 3
document.querySelector('#opcoesPizza').appendChild(document.createElement('li')).innerHTML = 'Lagosta Catupiry';



