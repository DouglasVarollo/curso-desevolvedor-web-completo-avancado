var elemento = document.getElementById("opcoesPizza");

// console.log(elemento.children);
// console.log(elemento.children[1].innerHTML);
// console.log(elemento.childElementCount);
// console.log(elemento.firstElementChild.textContent);
// console.log(elemento.firstChild);

var tamanho = elemento.childElementCount;

for ( var i=0; i<tamanho; i++)
{
	console.log(elemento.children[i].innerHTML);
}