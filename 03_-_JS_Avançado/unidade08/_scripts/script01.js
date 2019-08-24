function iniciar()
{
	var minhaFoto = document.querySelector('#espacofoto');

	function mudarFoto()
	{
		minhaFoto.setAttribute('src', '_img/arco.jpg');
	}

	setTimeout(mudarFoto, 1000);
}

window.onload = iniciar;