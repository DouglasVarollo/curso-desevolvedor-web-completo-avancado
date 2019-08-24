// JavaScript Document
window.onload = function() {
    var url         = "http://api.openweathermap.org/data/2.5/weather?";
    var minhaAPI    = "da662131b66c5641d9ec007c8e9fa6d9";
    var resultado;
    var cidade;
    
    cidades.onchange  = function() {
        
		var ajax = null;
		if( window.XMLHttpRequest ) {   
			ajax = new XMLHttpRequest();
		} else if( window.ActiveXObject ) {
			ajax = new ActiveXObject('Msxml2.XMLHTTP');	
		}

        cidade = cidades.value;
        
        if ( cidade != 0 ) {
            ajax.open("GET", url + 'appid=' + minhaAPI + '&q=' + cidade + '&units=metric&lang=pt',true);
            ajax.send(null);
            ajax.onreadystatechange = function() { 
                if (ajax.readyState == 4) {
                    if( ajax.status == 200 ) {
                        resultado = JSON.parse(ajax.responseText);

                        // console.log(resultado);
                        nome_cidade.innerHTML = resultado.name;
                        tempo_minimo.innerHTML = resultado.main.temp_min
                        tempo_maximo.innerHTML = resultado.main.temp_max;
                        descricao.innerHTML = resultado.weather[0].description;
                    }
                }
            }
        }
	};
}