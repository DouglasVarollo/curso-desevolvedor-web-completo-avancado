function detectarResolucao()
{
	var largura;

	if ( window.innerWidth ) 
	{

		largura = window.innerWidth;

	} else if ( document.documentElement && document.documentElement.clientWidth)
	{

		largura = document.documentElement.clientWidth;

	} else if ( document.body )
	{
		largura = document.body;
	}

	if ( largura < 426 )
	{
		meuCSS.setAttribute('href', '_css/css_smartphone.css');
	} else 
	{
		meuCSS.setAttribute('href', '_css/css_desktop.css');
	}
}

window.onload = window.onresize = detectarResolucao;