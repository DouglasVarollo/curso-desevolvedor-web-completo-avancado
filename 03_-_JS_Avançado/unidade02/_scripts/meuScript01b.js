var elemento = document.getElementsByTagName('li');

console.log(elemento.length);

// console.log(elemento[4].innerText);

for (var i=0; i<elemento.length; i++)
{
	console.log(elemento[i].innerText);
}