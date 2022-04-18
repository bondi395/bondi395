let p01 = document.getElementById("chat-line--p01");
let p02 = document.getElementById("chat-line--p02");
let p03 = document.getElementById("chat-line--p03");
let p04 = document.getElementById("chat-line--p04");
let p05 = document.getElementById("chat-line--p05");
let btn = document.getElementById("chat-line--btn");

setTimeout(function(){
	p01.style.display = "block";
	
	setTimeout(function(){
	p02.style.display = "block";
	
		setTimeout(function(){
			p03.style.display = "block";
			
			setTimeout(function(){
				p04.style.display = "block";
				
				setTimeout(function(){
					p05.style.display = "block";
					
					setTimeout(function(){
						btn.style.display = "block";
					}, 3000);
				}, 3000);
			}, 3000);
		}, 3000);
	}, 3000);
}, 3000);

