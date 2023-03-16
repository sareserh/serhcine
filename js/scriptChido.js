function temaSeleccionado(){
  var articulos = document.getElementsByTagName('article');

  for(var i = 0 ; i < articulos.length ; i++)
      articulos[i].style.display = 'none';
     
  var valor = document.getElementById('adultos').value;
  document.getElementById(valor).style.display = 'block';
  localStorage.setItem('adultos',JSON.stringify(valor));
  document.getElementById("ticket").classList.add('mostrar-ticket');
}
document.getElementById('adultos').addEventListener('change',temaSeleccionado);
var contenido={
  nombre:"",
  correo:"",
  avatar: function(){           
               return `<table>
               <tr>
                   <th>PREMIUM:</th>
                   <td>ADULTO: $105</td>
                   <td>MENORES: $95</td>
               </tr>
               <tr>
                  <th>TRADICIONAL:</th>
                  <td>ADULTO: $85</td>
                  <td>MENORES: $75</td>
               </tr>
               <tr>
               <th>3D:</th>
               <td>ADULTO: $109</td>
               <td>MENORES: $98</td>
               </tr>
           </table><section>
           <select id="horas" onchange="hora();">
               <option value="0" selected>Selecciona la hora</option>
               <option value="14:30">14:30</option>
               <option value="17:30">17:30</option>
               <option value="20:30">20:30</option>    
           </select>
       <section>`;
           
  },
  avatar2: function(){
    let adult=parseInt(document.getElementById("adultos").value);
    let num=parseInt(document.getElementById("menores1").value);   
    let num1=parseInt(document.getElementById("menores2").value);  
    let num2=parseInt(document.getElementById("menores3").value);           
    let radio=document.getElementsByName("oper");
    
  console.log(radio);
  for (var s = 0; s < radio.length; s++) {
      if (radio[s].checked) {
          var e=radio[s].value;
      }                
  }
     switch (e) {      
      case 'premium':     
      if (num) {
        var import1=adult*105;
        var import2=num*95;
        var total=import1+import2;
      }else if(num1){
        var import1=adult*105;
        var import2=num1*95;
        var total=import1+import2;
      }
      else if(num2){
        var import1=adult*105;
        var import2=num2*95;
        var total=import1+import2;
      }else{
        var import1=adult*105;
        var total=import1+0;
      }
        return total;
        break;
      case 'tradicional':
        if (num) {
          var import1=adult*85;
          var import2=num*75;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*85;
          var import2=num1*75;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*85;
          var import2=num2*75;
          var total=import1+import2;
        }else{
          var import1=adult*85;
          var total=import1+0;
        }
          return total;
          break; 
      case 'tresD':
        if (num) {
          var import1=adult*109;
          var import2=num*98;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*109;
          var import2=num1*98;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*109;
          var import2=num2*98;
          var total=import1+import2;
        }else{
          var import1=adult*109;
          var total=import1+0;
        }
          return total;  
     
      default:
        break;
     }
     localStorage.setItem('radio',JSON.stringify(radio));
  },
  doctor: function(){      
    return `<table>
               <tr>
                   <th>PREMIUM:</th>
                   <td>ADULTO: $83</td>
                   <td>MENORES: $67</td>
               </tr>
               <tr>
                  <th>TRADICIONAL:</th>
                  <td>ADULTO: $78</td>
                  <td>MENORES: $62</td>
               </tr>
               <tr>
               <th>3D:</th>
               <td>ADULTO: $87</td>
               <td>MENORES: $70</td>
               </tr>
           </table><section>
           <select id="horas" onchange="hora();">
               <option value="0" selected>Selecciona la hora</option>
               <option value="14:30">14:30</option>
               <option value="17:30">17:30</option>
               <option value="20:30">20:30</option>    
           </select>
       <section>`;  
      
  },
  doctor2: function(){
    let adult=parseInt(document.getElementById("adultos").value);
    let num=parseInt(document.getElementById("menores1").value);   
    let num1=parseInt(document.getElementById("menores2").value);  
    let num2=parseInt(document.getElementById("menores3").value);           
    let radio=document.getElementsByName("oper");
    
  console.log(radio);
  for (var s = 0; s < radio.length; s++) {
      if (radio[s].checked) {
          var e=radio[s].value;
      }                
  }
     switch (e) {      
      case 'premium':     
      if (num) {
        var import1=adult*83;
        var import2=num*67;
        var total=import1+import2;
      }else if(num1){
        var import1=adult*83;
        var import2=num1*67;
        var total=import1+import2;
      }
      else if(num2){
        var import1=adult*83;
        var import2=num2*67;
        var total=import1+import2;
      }else{
        var import1=adult*83;
        var total=import1+0;
      }
        return total;
        break;
      case 'tradicional':
        if (num) {
          var import1=adult*78;
          var import2=num*62;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*78;
          var import2=num1*62;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*78;
          var import2=num2*62;
          var total=import1+import2;
        }else{
          var import1=adult*78;
          var total=import1+0;
        }
          return total;
          break; 
      case 'tresD':
        if (num) {
          var import1=adult*87;
          var import2=num*70;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*87;
          var import2=num1*70;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*87;
          var import2=num2*70;
          var total=import1+import2;
        }else{
          var import1=adult*87;
          var total=import1+0;
        }
          return total;  
     
      default:
        break;
     }
  },
  gato: function(){
    return `<table>
    <tr>
        <th>PREMIUM:</th>
        <td>ADULTO: $60</td>
        <td>MENORES: $60</td>
    </tr>
    <tr>
       <th>TRADICIONAL:</th>
       <td>ADULTO: $55</td>
       <td>MENORES: $55</td>
    </tr>
    <tr>
    <th>3D:</th>
    <td>ADULTO: $64</td>
    <td>MENORES: $63</td>
    </tr>
</table><section>
<select id="horas" onchange="hora();">
    <option value="0" selected>Selecciona la hora</option>
    <option value="14:30">14:30</option>
    <option value="17:30">17:30</option>
    <option value="20:30">20:30</option>    
</select>
<section>`;
  }, 
  gato2: function(){
    let adult=parseInt(document.getElementById("adultos").value);
    let num=parseInt(document.getElementById("menores1").value);   
    let num1=parseInt(document.getElementById("menores2").value);  
    let num2=parseInt(document.getElementById("menores3").value);           
    let radio=document.getElementsByName("oper");
    
  console.log(radio);
  for (var s = 0; s < radio.length; s++) {
      if (radio[s].checked) {
          var e=radio[s].value;
      }                
  }
     switch (e) {      
      case 'premium':     
      if (num) {
        var import1=adult*60;
        var import2=num*60;
        var total=import1+import2;
      }else if(num1){
        var import1=adult*60;
        var import2=num1*60;
        var total=import1+import2;
      }
      else if(num2){
        var import1=adult*60;
        var import2=num2*60;
        var total=import1+import2;
      }else{
        var import1=adult*60;
        var total=import1+0;
      }
        return total;
        break;
      case 'tradicional':
        if (num) {
          var import1=adult*55;
          var import2=num*55;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*55;
          var import2=num1*55;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*55;
          var import2=num2*55;
          var total=import1+import2;
        }else{
          var import1=adult*55;
          var total=import1+0;
        }
          return total;
          break; 
      case 'tresD':
        if (num) {
          var import1=adult*64;
          var import2=num*63;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*64;
          var import2=num1*63;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*64;
          var import2=num2*63;
          var total=import1+import2;
        }else{
          var import1=adult*64;
          var total=import1+0;
        }
          return total;  
     
      default:
        break;
     }
  },
   mario: function(){
    return `<table>
               <tr>
                   <th>PREMIUM:</th>
                   <td>ADULTO: $85</td>
                   <td>MENORES: $70</td>
               </tr>
               <tr>
                  <th>TRADICIONAL:</th>
                  <td>ADULTO: $80</td>
                  <td>MENORES: $65</td>
               </tr>
               <tr>
               <th>3D:</th>
               <td>ADULTO: $89</td>
               <td>MENORES: $73</td>
               </tr>
           </table><section>
           <select id="horas" onchange="hora();">
               <option value="0" selected>Selecciona la hora</option>
               <option value="14:30">14:30</option>
               <option value="17:30">17:30</option>
               <option value="20:30">20:30</option>    
           </select>
       <section>`;
  },
  mario2: function(){
    let adult=parseInt(document.getElementById("adultos").value);
    let num=parseInt(document.getElementById("menores1").value);   
    let num1=parseInt(document.getElementById("menores2").value);  
    let num2=parseInt(document.getElementById("menores3").value);           
    let radio=document.getElementsByName("oper");
    
  console.log(radio);
  for (var s = 0; s < radio.length; s++) {
      if (radio[s].checked) {
          var e=radio[s].value;
      }                
  }
     switch (e) {      
      case 'premium':     
      if (num) {
        var import1=adult*85;
        var import2=num*70;
        var total=import1+import2;
      }else if(num1){
        var import1=adult*85;
        var import2=num1*70;
        var total=import1+import2;
      }
      else if(num2){
        var import1=adult*85;
        var import2=num2*70;
        var total=import1+import2;
      }else{
        var import1=adult*85;
        var total=import1+0;
      }
        return total;
        break;
      case 'tradicional':
        if (num) {
          var import1=adult*80;
          var import2=num*65;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*80;
          var import2=num1*65;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*80;
          var import2=num2*65;
          var total=import1+import2;
        }else{
          var import1=adult*80;
          var total=import1+0;
        }
          return total;
          break; 
      case 'tresD':
        if (num) {
          var import1=adult*89;
          var import2=num*73;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*89;
          var import2=num1*73;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*89;
          var import2=num2*73;
          var total=import1+import2;
        }else{
          var import1=adult*89;
          var total=import1+0;
        }
          return total;  
     
      default:
        break;
     }
  },
  megan: function(){
    return `<table>
               <tr>
                   <th>PREMIUM:</th>
                   <td>ADULTO: $160</td>
                   <td>MENORES: $145</td>
               </tr>
               <tr>
                  <th>TRADICIONAL:</th>
                  <td>ADULTO: $155</td>
                  <td>MENORES: $140</td>
               </tr>
               <tr>
               <th>3D:</th>
               <td>ADULTO: $164</td>
               <td>MENORES: $143</td>
               </tr>
           </table><section>
           <select id="horas" onchange="hora();">
               <option value="0" selected requiered>Selecciona la hora</option>
               <option value="14:30">14:30</option>
               <option value="17:30">17:30</option>
               <option value="20:30">20:30</option>    
           </select>
       <section>`;
  },
  megan2: function(){
    let adult=parseInt(document.getElementById("adultos").value);
    let num=parseInt(document.getElementById("menores1").value);   
    let num1=parseInt(document.getElementById("menores2").value);  
    let num2=parseInt(document.getElementById("menores3").value);           
    let radio=document.getElementsByName("oper");
    
  console.log(radio);
  for (var s = 0; s < radio.length; s++) {
      if (radio[s].checked) {
          var e=radio[s].value;
      }                
  }
     switch (e) {      
      case 'premium':     
      if (num) {
        var import1=adult*160;
        var import2=num*145;
        var total=import1+import2;
      }else if(num1){
        var import1=adult*160;
        var import2=num1*145;
        var total=import1+import2;
      }
      else if(num2){
        var import1=adult*160;
        var import2=num2*145;
        var total=import1+import2;
      }else{
        var import1=adult*160;
        var total=import1+0;
      }
        return total;
        break;
      case 'tradicional':
        if (num) {
          var import1=adult*155;
          var import2=num*140;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*155;
          var import2=num1*140;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*155;
          var import2=num2*140;
          var total=import1+import2;
        }else{
          var import1=adult*155;
          var total=import1+0;
        }
          return total;
          break; 
      case 'tresD':
        if (num) {
          var import1=adult*164;
          var import2=num*143;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*164;
          var import2=num1*143;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*164;
          var import2=num2*143;
          var total=import1+import2;
        }else{
          var import1=adult*164;
          var total=import1+0;
        }
          return total;  
     
      default:
        break;
     }
  },
  sonic: function(){
    return `<table>
    <tr>
        <th>PREMIUM:</th>
        <td>ADULTO: $90</td>
        <td>MENORES: $75</td>
        
    </tr>
    <tr>
       <th>TRADICIONAL:</th>
       <td>ADULTO: $85</td>
       <td>MENORES: $70</td>
    </tr>
    <tr>
    <th>3D:</th>
    <td>ADULTO: $94</td>
    <td>MENORES: $78</td>
    </tr>
</table>
<section>
            <select id="horas" onchange="hora();">
                <option value="0" selected>Selecciona la hora</option>
                <option value="14:30">14:30</option>
                <option value="17:30">17:30</option>
                <option value="20:30">20:30</option>    
            </select>
  <section>`; 
  },
  sonic2: function(){
    let adult=parseInt(document.getElementById("adultos").value);
    let num=parseInt(document.getElementById("menores1").value);   
    let num1=parseInt(document.getElementById("menores2").value);  
    let num2=parseInt(document.getElementById("menores3").value);           
    let radio=document.getElementsByName("oper");
    
  console.log(radio);
  for (var s = 0; s < radio.length; s++) {
      if (radio[s].checked) {
          var e=radio[s].value;
      }                
  }
     switch (e) {      
      case 'premium':     
      if (num) {
        var import1=adult*90;
        var import2=num*75;
        var total=import1+import2;
      }else if(num1){
        var import1=adult*90;
        var import2=num1*75;
        var total=import1+import2;
      }
      else if(num2){
        var import1=adult*90;
        var import2=num2*75;
        var total=import1+import2;
      }else{
        var import1=adult*90;
        var total=import1+0;
      }
        return total;
        break;
      case 'tradicional':
        if (num) {
          var import1=adult*85;
          var import2=num*70;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*85;
          var import2=num1*70;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*85;
          var import2=num2*70;
          var total=import1+import2;
        }else{
          var import1=adult*85;
          var total=import1+0;
        }
          return total;
          break; 
      case 'tresD':
        if (num) {
          var import1=adult*94;
          var import2=num*78;
          var total=import1+import2;
        }else if(num1){
          var import1=adult*94;
          var import2=num1*78;
          var total=import1+import2;
        }
        else if(num2){
          var import1=adult*94;
          var import2=num2*78;
          var total=import1+import2;
        }else{
          var import1=adult*94;
          var total=import1+0;
        }
          return total;  
     
      default:
        break;
     }
  },
  uno: function(){
    return `<div>
          <label>Ingresa la edad del menor
          <input type="text" name="edad" id="edad" placeholder="Captura la edad" /></label>
          </div>`;    
      
  },
  dos: function(){
    return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          </div>`;  
      
  },  
  tres: function(){
    return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          <label>3era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          </div>`;    
      
  },
  cuatro: function(){
    return `<div>
          <label>1era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          <label>2da Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          <label>3era Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          <label>4ta Edad:
          <input type="text" name="edad" id="edad" placeholder="Captura la edad del menor" /></label> 
          </div>`;
      
  },
  
};

var fotografia=function(nombreFoto){
  document.getElementById('foto').src="img/"+nombreFoto+".png";
    
  switch (nombreFoto) {
    case "avatar2":
      document.getElementById("pelicula").innerHTML=contenido.avatar(); 
       calculosAdicionales=function(){
        let subtotal=contenido.avatar2(); 
         document.getElementById('subTotal').innerText=subtotal;
         let iva=subtotal*0.16;
         document.getElementById('iva').innerText=iva;
         let total=subtotal+iva;
         document.getElementById('total').innerText=total;
       
       
         localStorage.setItem('subTotal',JSON.stringify(subtotal));
         localStorage.setItem('iva',JSON.stringify(iva));
         localStorage.setItem('total',JSON.stringify(total));
       }
       
      break;
    case "doctorStrange":
        document.getElementById("pelicula").innerHTML=contenido.doctor();
        calculosAdicionales=function(){
          let subtotal=contenido.doctor2(); 
           document.getElementById('subTotal').innerText=subtotal;
           let iva=subtotal*0.16;
           document.getElementById('iva').innerText=iva;
           let total=subtotal+iva;
           document.getElementById('total').innerText=total;
         
         
           localStorage.setItem('subTotal',JSON.stringify(subtotal));
           localStorage.setItem('iva',JSON.stringify(iva));
           localStorage.setItem('total',JSON.stringify(total));
         }
        break;
    case "el gato con botas":
          document.getElementById("pelicula").innerHTML=contenido.gato();
          calculosAdicionales=function(){
            let subtotal=contenido.gato2(); 
             document.getElementById('subTotal').innerText=subtotal;
             let iva=subtotal*0.16;
             document.getElementById('iva').innerText=iva;
             let total=subtotal+iva;
             document.getElementById('total').innerText=total;
           
           
             localStorage.setItem('subTotal',JSON.stringify(subtotal));
             localStorage.setItem('iva',JSON.stringify(iva));
             localStorage.setItem('total',JSON.stringify(total));
           }
          break;  
    case "sonic":
      document.getElementById("pelicula").innerHTML=contenido.sonic();
      calculosAdicionales=function(){
        let subtotal=contenido.sonic2(); 
         document.getElementById('subTotal').innerText=subtotal;
         let iva=subtotal*0.16;
         document.getElementById('iva').innerText=iva;
         let total=subtotal+iva;
         document.getElementById('total').innerText=total;
       
       
         localStorage.setItem('subTotal',JSON.stringify(subtotal));
         localStorage.setItem('iva',JSON.stringify(iva));
         localStorage.setItem('total',JSON.stringify(total));
       }
      break;
    case "mario":
        document.getElementById("pelicula").innerHTML=contenido.mario();
        calculosAdicionales=function(){
          let subtotal=contenido.mario2(); 
           document.getElementById('subTotal').innerText=subtotal;
           let iva=subtotal*0.16;
           document.getElementById('iva').innerText=iva;
           let total=subtotal+iva;
           document.getElementById('total').innerText=total;
         
         
           localStorage.setItem('subTotal',JSON.stringify(subtotal));
           localStorage.setItem('iva',JSON.stringify(iva));
           localStorage.setItem('total',JSON.stringify(total));
         }
        break;
    case "megan":
          document.getElementById("pelicula").innerHTML=contenido.megan();
          calculosAdicionales=function(){
            let subtotal=contenido.megan2(); 
             document.getElementById('subTotal').innerText=subtotal;
             let iva=subtotal*0.16;
             document.getElementById('iva').innerText=iva;
             let total=subtotal+iva;
             document.getElementById('total').innerText=total;
           
           
             localStorage.setItem('subTotal',JSON.stringify(subtotal));
             localStorage.setItem('iva',JSON.stringify(iva));
             localStorage.setItem('total',JSON.stringify(total));
           }
          break;    
    default:
      break;
  }
  localStorage.setItem('foto',JSON.stringify(nombreFoto));
  
}

let hora=function(){
  let hora=document.getElementById("horas").value;  
  localStorage.setItem('horas',JSON.stringify(hora));

}
let edades=function(){
    contenido.nombre=document.getElementById('nombre').value;
    contenido.correo=document.getElementById('correo').value;
   
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
    }
    
      
      localStorage.setItem('nombre',JSON.stringify(contenido.nombre));
      localStorage.setItem('correo',JSON.stringify(contenido.correo));

      localStorage.setItem('menores1',JSON.stringify(num));
      localStorage.setItem('menores2',JSON.stringify(num1));
      localStorage.setItem('menores3',JSON.stringify(num2));
     
}

//HACER CUENTAS Y GENERAR TICKET
document.getElementById('ticket').addEventListener('click',function(){generarTicket()});

let generarTicket=function(){
  let edadAR=document.getElementsByName('edad');
  let Ticket=[];

  for(var i=0; i<edadAR.length; i++){
      var objEdad=edadAR[i].value;
      Ticket[i]={
          edad:objEdad,
      };
      //console.table(Ticket);        
  }
  localStorage.setItem('ticket',JSON.stringify(Ticket));
  
  console.table(JSON.stringify(Ticket));
 
// obtener el nombre del mes, día del mes, año, hora

  window.open("boletos.html", width="800", height="500" );
}
//https://github.com/sareserh/cineserh.git https://sareserh.github.io/cineserh/