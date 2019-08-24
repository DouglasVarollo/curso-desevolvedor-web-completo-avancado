window.onload = function()
{
	var caixa = document.querySelector('input#nome');
	caixa.onfocus = function()
	{
		console.log('On focus');
	}

	caixa.onblur = function()
	{
		console.log('On blur');
	}
}