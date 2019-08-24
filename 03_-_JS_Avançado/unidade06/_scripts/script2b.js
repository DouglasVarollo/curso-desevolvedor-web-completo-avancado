function pegarPosicaoMouse(e)
{
	posicaoX.innerHTML = 'x: ' + e.clientX;
	posicaoY.innerHTML = 'y: ' + e.clientY;

	if ( e.clientY < 10 )
	{
		janela.style.display = 'block';
	}
}


document.addEventListener('mousemove', pegarPosicaoMouse);