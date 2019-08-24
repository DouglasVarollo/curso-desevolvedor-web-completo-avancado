var agora;

function mostrarHora()
{
	agora = new Date();
	var hr = agora.getHours();
	var min = agora.getMinutes();
	var seg = agora.getSeconds();
	var mil = agora.getMilliseconds();

	var ponteiroHora    = hr * 30 + min/2;
	var ponteiroMinuto  = min * 6 + (seg * 6)/60;
	var ponteiroSegundo = seg * 6 + mil/166;

	hora.style.transform = 'rotate(' + ponteiroHora + 'deg)';
	minuto.style.transform = 'rotate(' + ponteiroMinuto + 'deg)';
	segundo.style.transform = 'rotate(' + ponteiroSegundo + 'deg)';
}

var intervalo = setInterval(mostrarHora, 1);

