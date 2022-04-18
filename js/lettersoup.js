let itemA = document.getElementById("itemA");
let itemB = document.getElementById("itemB");
let itemC = document.getElementById("itemC");
let itemD = document.getElementById("itemD");
let itemE = document.getElementById("itemE");
let itemF = document.getElementById("itemF");
let itemG = document.getElementById("itemG");

let itemsCounter = 0;
function checkCounter(){
	if(itemsCounter == 7){
		alert("¡Felicidades! Has completado el último desafío. Revisa tu mail.");
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "tuamigoinvisiblebondi395@gmail.com",
			Password : "77BEEC299D6E5569491D5B7B9A3DE7559C90",
			To : 'micasvatzky@gmail.com',
			From : "tuamigoinvisiblebondi395@gmail.com",
			Subject : "Tercer reto completado✅",
			Body : "<h2>¡Enhorabuena, Micaela!</h2><p>Has completado exitosamente el tercer y último, muchísimas felicidades por jugar, y espero que no hayas trampa.</p><p>He aquí tu última pista: <span style=\"background:yellow;\">Sé que tu segundo nombre es Yael</span>.</p><p>Ahora sin más que revelar, me despido. ¿Has adivinado quién soy? Nos vemos pronto Micaela.</p>"
		}).then(
			message => alert(message)
		);
	}
}

itemA.addEventListener('change', function() {
	if(this.checked){
		itemsCounter++;
		checkCounter();
	}else{
		itemsCounter--;
		checkCounter();
	}
});

itemB.addEventListener('change', function() {
	if(this.checked){
		itemsCounter++;
		checkCounter();
	}else{
		itemsCounter--;
		checkCounter();
	}
});

itemC.addEventListener('change', function() {
	if(this.checked){
		itemsCounter++;
		checkCounter();
	}else{
		itemsCounter--;
		checkCounter();
	}
});

itemD.addEventListener('change', function() {
	if(this.checked){
		itemsCounter++;
		checkCounter();
	}else{
		itemsCounter--;
		checkCounter();
	}
});

itemE.addEventListener('change', function() {
	if(this.checked){
		itemsCounter++;
		checkCounter();
	}else{
		itemsCounter--;
		checkCounter();
	}
});

itemF.addEventListener('change', function() {
	if(this.checked){
		itemsCounter++;
		checkCounter();
	}else{
		itemsCounter--;
		checkCounter();
	}
});

itemG.addEventListener('change', function() {
	if(this.checked){
		itemsCounter++;
		checkCounter();
	}else{
		itemsCounter--;
		checkCounter();
	}
});

