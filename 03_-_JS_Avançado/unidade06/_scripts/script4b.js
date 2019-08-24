window.addEventListener('scroll', function()
{
	posicaoY.innerHTML = window.scrollY;

	if ( window.scrollY >= 300 )
	{
		conteudo.style.display = 'block';
	} else 
	{
		conteudo.style.display = 'none';
	}

});