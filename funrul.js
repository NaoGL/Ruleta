function tercia(){
	var mens="Sin igualdad"
	var nombre = document.getElementById("nombre").value;
	var uno = Math.trunc( Math.random()*9)+1;
	var dos = Math.trunc( Math.random()*9)+1;
	var tres = Math.trunc( Math.random()*9)+1;

	switch(uno){
		case 1:
		document.getElementById("caja1").innerHTML="<img src='img/nao.jpg'>";
		break;
		case 2:
		document.getElementById("caja1").innerHTML="<img src='img/hilarioaburrido.jpg'>";
		break;
		case 3:
		document.getElementById("caja1").innerHTML="<img src='img/mayalaptop.jpg'>";
		break;
		case 4:
		document.getElementById("caja1").innerHTML="<img src='img/sergio.jpg'>";
		break;
		case 5:
		document.getElementById("caja1").innerHTML="<img src='img/naomi.jpg'>";
		break;
		case 6:
		document.getElementById("caja1").innerHTML="<img src='img/hilariofeliz.jpg'>";
		break;
		case 7:
		document.getElementById("caja1").innerHTML="<img src='img/sergiocubrebocas.jpg'>";
		break;
		case 8:
		document.getElementById("caja1").innerHTML="<img src='img/michis.jpg'>";
		break;
		case 9:
		document.getElementById("caja1").innerHTML="<img src='img/familia.jpg'>";
		break;
		case 10:
		document.getElementById("caja1").innerHTML="<img src='img/waffle.jpeg'>";
		break;	
	}
	switch(dos){
		case 1:
		document.getElementById("caja2").innerHTML="<img src='img/nao.jpg'>";
		break;
		case 2:
		document.getElementById("caja2").innerHTML="<img src='img/hilarioaburrido.jpg'>";
		break;
		case 3:
		document.getElementById("caja2").innerHTML="<img src='img/mayalaptop.jpg'>";
		break;
		case 4:
		document.getElementById("caja2").innerHTML="<img src='img/sergio.jpg'>";
		break;
		case 5:
		document.getElementById("caja2").innerHTML="<img src='img/naomi.jpg'>";
		break;
		case 6:
		document.getElementById("caja2").innerHTML="<img src='img/hilariofeliz.jpg'>";
		break;
		case 7:
		document.getElementById("caja2").innerHTML="<img src='img/sergiocubrebocas.jpg'>";
		break;
		case 8:
		document.getElementById("caja2").innerHTML="<img src='img/michis.jpg'>";
		break;
		case 9:
		document.getElementById("caja2").innerHTML="<img src='img/familia.jpg'>";
		break;
		case 10:
		document.getElementById("caja2").innerHTML="<img src='img/waffle.jpeg'>";
		break;	
	}
	switch(tres){
		case 1:
		document.getElementById("caja3").innerHTML="<img src='img/nao.jpg'>";
		break;
		case 2:
		document.getElementById("caja3").innerHTML="<img src='img/hilarioaburrido.jpg'>";
		break;
		case 3:
		document.getElementById("caja3").innerHTML="<img src='img/mayalaptop.jpg'>";
		break;
		case 4:
		document.getElementById("caja3").innerHTML="<img src='img/sergio.jpg'>";
		break;
		case 5:
		document.getElementById("caja3").innerHTML="<img src='img/naomi.jpg'>";
		break;
		case 6:
		document.getElementById("caja3").innerHTML="<img src='img/hilariofeliz.jpg'>";
		break;
		case 7:
		document.getElementById("caja3").innerHTML="<img src='img/sergiocubrebocas.jpg'>";
		break;
		case 8:
		document.getElementById("caja3").innerHTML="<img src='img/michis.jpg'>";
		break;
		case 9:
		document.getElementById("caja3").innerHTML="<img src='img/familia.jpg'>";
		break;
		case 10:
		document.getElementById("caja3").innerHTML="<img src='img/waffle.jpeg'>";
		break;	
	}

		if ((uno==dos) && (uno==tres)) 
			{
			mensaje="¡Tercias! ¡Asombroso!";
			}
		else if ((uno==dos) || (uno==tres) || (dos==tres)) 
			{
			mensaje="¡Pares!";
			}
		else
			mensaje="Sin igualdad ¡Mala suerte!";
	document.getElementById("sal").innerHTML="¡Hola "+nombre+"! Tu resultado es: ";
	document.getElementById("resul").innerHTML= mensaje;
}