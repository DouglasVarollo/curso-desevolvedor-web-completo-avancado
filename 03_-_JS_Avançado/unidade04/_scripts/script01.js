function atribuirTexto()
{
	nome.value = 'Douglas';
}

function iniciar()
{
	botao.addEventListener('click', atribuirTexto);
}

window.onload = iniciar;