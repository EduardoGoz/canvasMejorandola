var lienzo, dibujo, t, b, u;
function inicio(){
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
    
	b.addEventListener("click", trazarRayas);

	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.fillStyle = "#00F";
	lienzo.arc(150,150,100,(Math.PI * 2),false);
	lienzo.closePath();
	lienzo.fill();
	lienzo.stroke();
}

function trazarRayas(){
    
    u = document.getElementById("opcionUsuario").value;
    var l = lienzo;
	var rayas = Number(t.value); 
	var ancho = 300, alto = 300;
	var linea, punto, puntoX, puntoY, lineaX, lineaY;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;
	
	//Punto de inicio de la linea
    for(linea = 0; linea <= limiteX; linea++){
        
        punto = linea * anchoLinea;

        if( u != "Diagonales"){

            if( u == "Horizontales y Verticales" ){
            
                puntoX = punto;
                puntoY = 0;
                lineaX = punto
                lineaY = alto;
            
            }

            else{

                puntoX = punto;
                puntoY = 0;
                lineaX = ancho;
                lineaY = punto;

            }

            l.strokeStyle = "#FFFF00";
            l.beginPath();
            l.moveTo( puntoX , puntoY);
            l.lineTo( lineaX , lineaY);
            l.stroke();
            l.closePath();

        }

        else {

            puntoX = ancho;
            puntoY = punto;
            lineaX = punto;
            lineaY = alto;
            
            l.strokeStyle = "#FFFF00";
            l.beginPath();
            l.moveTo( puntoX , puntoY);
            l.lineTo( lineaX , lineaY);
            l.closePath();
            l.stroke();

            puntoX = punto;
            puntoY = 0;
            lineaX = 0;
            lineaY = punto;
            
            l.strokeStyle = "#FFFF00";
            l.beginPath();
            l.moveTo( puntoX , puntoY);
            l.lineTo( lineaX , lineaY);
            l.closePath();
            l.stroke();


        }
        
	}

    for(linea = 0; linea <= limiteY; linea++){

        punto = linea * anchoLinea;

        if( u != "Diagonales"){

            if( u == "Horizontales y Verticales" ){
            
                puntoX = 0;
                puntoY = punto;
                lineaX = ancho;
                lineaY = punto;
            
            }

            else {

                puntoX = 0;
                puntoY = punto;
                lineaX = punto;
                lineaY = alto;

            }

            l.strokeStyle = "#FF0000";
            l.beginPath();
            l.moveTo( puntoX , puntoY);
            l.lineTo( lineaX , lineaY);
            l.stroke();
            l.closePath();

        }

        else{

            puntoX = 0;
            puntoY = punto;
            lineaX = ancho;
            lineaY = punto + 300;

            l.strokeStyle = "#FF0000";
            l.beginPath();
            l.moveTo( puntoX , puntoY );
            l.lineTo( lineaX , lineaY );
            l.closePath();
            l.stroke();
            
            puntoX = punto;
            puntoY = 0;
            lineaX = ancho;
            lineaY = alto - punto;

            l.strokeStyle = "#FF0000";
            l.beginPath();
            l.moveTo( puntoX , puntoY );
            l.lineTo( lineaX , lineaY );
            l.closePath(); 
            l.stroke();

        }

    } 
	
}

