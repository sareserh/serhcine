function temaSeleccionado(){
  var articulos = document.getElementsByTagName('article');

  for(var i = 0 ; i < articulos.length ; i++)
      articulos[i].style.display = 'none';
     
  var valor = document.getElementById('adultos').value;
  document.getElementById(valor).style.display = 'block';
}
document.getElementById('adultos').addEventListener('change',temaSeleccionado);
var contenido={
  avatar: function(){           
       
     return " El precio de boleto por adulto es de $90 y el precio de boleto por niño es de $75";
           
  },
  doctor: function(){      
    return " El precio de boleto por adulto es de $85 y el precio de boleto por niño es de $65";       
      
  },
  gato: function(){
    return " El precio de boleto por adulto es de $90 y el precio de boleto por niño es de $75";     
      
  }, 
  uno: function(){
    return `<div>
          <label>Ingresa la edad del menor
          <input type="text" name="descripcion" id="descripcion" placeholder="Captura la edad"/></label>
          </div>`;    
      
  },
  dos: function(){
    return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;  
      
  },  
  tres: function(){
    return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>3era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;    
      
  },
  cuatro: function(){
    return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>3era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>4ta Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;
      
  },
  
};

var fotografia=function(nombreFoto){
  document.getElementById('foto').src="img/"+nombreFoto+".png";
  switch (nombreFoto) {
    case "avatar2":
      document.getElementById("pelicula").innerHTML=contenido.avatar();
      break;
    case "doctorStrange":
        document.getElementById("pelicula").innerHTML=contenido.doctor();
        break;
    default:
      break;
  }
  
}/*
function seleccionar(){   
  var articulo=document.getElementById("adultos").value;  

    switch (articulo) {
        case 'uno':
            document.getElementById(articulo).style.display='block';
            break;
        case 'dos':
            document.getElementById(articulo).style.display = 'block';
            break;
        case 'tres':
            document.getElementById(articulo).style.display = 'block';
            break;
        case 'cuatro':
              document.getElementById(articulo).style.display = 'block';
              break;    
    
        default:
            break;
    }
}
function agregarEdades(){
  document.getElementById('generar').addEventListener('click',function(){edades()});
}*/
let edad=function(){
  let num=parseInt(document.getElementById("menor").value);  
  let num1=parseInt(document.getElementById("menor").value); 
  let num2=parseInt(document.getElementById("menor").value); 
  
  switch (num) {
    case 1:
      document.getElementById("edad").innerHTML=contenido.uno();
      break;
    case 2:
      document.getElementById("edad").innerHTML=contenido.dos();
      break;
    case 3:
      document.getElementById("edad").innerHTML=contenido.tres();
      break;
    case 4:
        document.getElementById("edad").innerHTML=contenido.cuatro();
        break;  
  
    default:
      break;
  }
}
let edades=function(){
    let num=parseInt(document.getElementById("menores1").value); 
    let num1=parseInt(document.getElementById("menores2").value); 
    let num2=parseInt(document.getElementById("menores3").value);  
        
    switch (num||num1||num2) {
      case 0:
        document.getElementById("edades").innerHTML="";
        document.getElementById("edades1").innerHTML="";
        document.getElementById("edades2").innerHTML="";
        break;
      case 1:
        document.getElementById("edades").innerHTML=contenido.uno();
        document.getElementById("edades1").innerHTML=contenido.uno();
        document.getElementById("edades2").innerHTML=contenido.uno();
        break;
      case 2:
        document.getElementById("edades").innerHTML=contenido.dos();
        document.getElementById("edades1").innerHTML=contenido.dos();
        document.getElementById("edades2").innerHTML=contenido.dos();
        break;
      case 3:
        document.getElementById("edades").innerHTML=contenido.tres();
        document.getElementById("edades1").innerHTML=contenido.tres();
        break;
      case 4:
          document.getElementById("edades").innerHTML=contenido.cuatro();
          break;  
    
      default:
        break;
    }/*
    if(num>0){
        
        while (num>j) {
          conceptos+=estructuraConceptos(j);          
          j++;
          document.getElementById("edades").innerHTML=conceptos;
        }
    }*/

  /*for (let i =0;  i<num; i++) {
            conceptos+=estructuraConceptos(i);
        }
        document.getElementById("edades").innerHTML=conceptos; */
}

function estructuraConceptos(num){
  //Agregar acento pero alreves
  return `<div>
          <label>Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;
}

/*var menores = funtion();{

  var menores=parseIntdocument.getElementById("menores").value;  

    switch (menores) {
        case '1':
            document.getElementById(menores).style.display='block';
            break;
        case '2':
            document.getElementById(menores).style.display = 'block';
            break;
        case '3':
            document.getElementById(menores).style.display = 'block';
            break;
        case '4':
              document.getElementById(menores).style.display = 'block';
              break;
        default:
            break;
    }
}*/


/*/FUNCIONES TAREA
function openImg(){
  var image = document.getElementById('ima');
  var source = image.src;
  window.open(source);
}


let edades=function(){
  var num=document.getElementById("menores").value;
  if(num>0){
      for (let i =0;  i<num; i++) {
          conceptos+=estructuraConceptos(i);
      }
      document.getElementById("contenedor").innerHTML=conceptos;
  }
}
//Función para dibujar las cajas de captura
function estructuraConceptos(num){
  //Agregar acento pero alreves
  return `<div>
          <label>Ingresa la edad del menor
          <input type="text" name="descripcion" id="descripcion" placeholder="Captura la edad"/></label>
          </div>`;
}
if (num==1) {
      return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;
    }else if (num==2) {
      return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;
    }
    else if (num==3) {
      return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>3era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;
    }else{
      return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          <label>3era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor"/></label> 
          </div>`;
    }*/