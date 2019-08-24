function pegarPosicaoMouse(e)
{
	posicaoX.innerHTML = 'x: ' + e.clientX;
	posicaoY.innerHTML = 'y: ' + e.clientY;
}


document.addEventListener('mousemove', pegarPosicaoMouse);