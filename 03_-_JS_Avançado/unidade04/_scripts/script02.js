function atribuirTexto(valor) 
{
    nome.value = valor;   
}

function iniciar() 
{
    botao.addEventListener('click', function() 
    	{
    		atribuirTexto('Douglas C. Varollo');
    	});
}

window.onload = iniciar;