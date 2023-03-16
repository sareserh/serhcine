let conceptos=JSON.parse(localStorage.getItem('ticket'));
let nom=JSON.parse(localStorage.getItem('nombre'));
let correo=JSON.parse(localStorage.getItem('correo'));
let subTotal=JSON.parse(localStorage.getItem('subTotal'));
let iva=JSON.parse(localStorage.getItem('iva'));
let total=JSON.parse(localStorage.getItem('total'));
let adultos=JSON.parse(localStorage.getItem('adultos'));
let menores=JSON.parse(localStorage.getItem('menores1'));
let menores2=JSON.parse(localStorage.getItem('menores2'));
let menores3=JSON.parse(localStorage.getItem('menores3'));
let hora1=JSON.parse(localStorage.getItem('horas'));
let foto=JSON.parse(localStorage.getItem('foto'));

//Funciones autoinvocadas
(
    function(){    
        let con='';

        for (var i = 0; i<conceptos.length; i++) {
            con+='<div id="ticket"><label><div name="edad" id="edad">'+conceptos[i].edad+'</div></label></div>';
            }
        
            document.getElementById('nombre').innerHTML=nom;
            document.getElementById('correo').innerHTML=correo;
            document.getElementById('subTotal').innerHTML=subTotal;
            document.getElementById('iva').innerHTML=iva;
            document.getElementById('total').innerHTML=total;
           //document.getElementById('adultos').innerHTML="En total son "+adultos+" boleto(s) para adulto(s) y "+menores+menores2+menores3+" boletos para niños de los cuales sus edades son: "+con+"<br>";
            document.getElementById('hora').innerHTML="Hora:"+hora1;
            document.getElementById('foto').innerHTML=foto;

            if (adultos==1) {
                //document.getElementById('adultos').innerHTML="En total son "+adultos+" boleto(s) para adulto(s) y "+menores+" boleto(s) para niños de los cuales su(s) edad(es) son: "+con+"<br>";
                document.getElementById('adultos').innerHTML="Adultos: "+adultos+"<br>Menores: "+menores+" <br>Edades menores: "+con+"<br>";
            }else if (adultos==2) {
                //document.getElementById('adultos').innerHTML="En total son "+adultos+" boleto(s) para adulto(s) y "+menores2+" boleto(s) para niños de los cuales su(s) edad(es) son: "+con+"<br>";
                document.getElementById('adultos').innerHTML="Adultos: "+adultos+"<br>Menores: "+menores2+" <br>Edades menores: "+con+"<br>";
            }else if (adultos==3) {
                //document.getElementById('adultos').innerHTML="En total son "+adultos+" boleto(s) para adulto(s) y "+menores3+" boleto(s) para niños de los cuales su(s) edad(es) son: "+con+"<br>";
                document.getElementById('adultos').innerHTML="Adultos: "+adultos+"<br>Menores: "+menores3+" <br>Edades menores: "+con+"<br>";
            } else {
                //document.getElementById('adultos').innerHTML="En total son "+adultos+" boleto(s) para adulto(s)";
                document.getElementById('adultos').innerHTML="Adultos: "+adultos;
            
            }

            switch (foto) {
                case "avatar2":
                  document.getElementById("foto").innerHTML="Pelicula: Avatar2"; 
                  
                  break;
                case "doctorStrange":
                    document.getElementById("foto").innerHTML="Pelicula: Doctor Strange2";
                     
                    break;
                case "el gato con botas":
                    document.getElementById("foto").innerHTML="Pelicula: El Gato con Botas2";
                     
                      break;  
                case "sonic":
                    document.getElementById("foto").innerHTML="Pelicula: Sonic2";
                 
                  break;
                case "mario":
                    document.getElementById("foto").innerHTML="Pelicula: Mario Bros";
                   
                    break;
                case "megan":
                    document.getElementById("foto").innerHTML="Pelicula: Megan";                               
                       
                      break;    
                default:
                  break;
              }}
              
            
)();