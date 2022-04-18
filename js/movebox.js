let box = document.getElementById("primer-reto-box");

function randomNumber(max, min){
	// Devuelve un numero al azar entre un rango
	return Math.floor(Math.random() * (max - min) + min);
}
 
box.addEventListener('mouseover', function(){
	// Mueve un porcentaje aleatorio al hacer hover
	box.style.left = `${randomNumber(75, 1)}%`;
	box.style.top= `${randomNumber(75, 1)}%`;
});


let boxClicks = 0;
box.addEventListener('click', function(){
	boxClicks++;
	
	box.style.left = `${randomNumber(75, 1)}%`;
	box.style.top= `${randomNumber(75, 1)}%`;
	
	if(boxClicks == 5){
		alert("Felicidades! Se te mandará el mail.");
		boxClicks == 0;
		
		// Envio del mail
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "tuamigoinvisiblebondi395@gmail.com",
			Password : "77BEEC299D6E5569491D5B7B9A3DE7559C90",
			To : 'matutempereyra@gmail.com',
			From : "tuamigoinvisiblebondi395@gmail.com",
			Subject : "Primer reto completado✅",
			Body : '<h1>¡Enhorabuena!</h1><p>Ya has completado el primer desafío. Paulatinamente se harán algo más complicados de hacer. Pero no te preocupés, Bondi 395 sabe que vas a poder :)</p><p>Por tu esfuerzo te has ganado tu primera pista: <span style=\"background: yellow;\">Mi estatura es de 1,73m</span>.</p><br><a href="https://bondi395.github.io/736567756e646f7265746f/segundo-reto.html">Link al segundo reto</a>'
		}).then(
			message => alert(message)
		);
	}
});
