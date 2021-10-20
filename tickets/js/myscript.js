function calculo(){


    var lista = document.getElementById("categorias");

    var valorseleccionado = parseFloat(lista.options[lista.selectedIndex].value);

    var cantidad=document.getElementById("cantidad").value;
    

   

   
  
switch(valorseleccionado){
case 1:
    total = (200*cantidad)-((200*cantidad)*80)/100
    document.getElementById("total").value=total;
    
    break;
case 2:
    total = (200*cantidad)-((200*cantidad)*50)/100
    document.getElementById("total").value=total;
    
    break;

case 3:
    total = (200*cantidad)-((200*cantidad)*15)/100
    document.getElementById("total").value=total;
    
    break;
}


}

function borrarTexto() {
    document.getElementById('cantidad').value = "";
    document.getElementById('total').value = "";
    document.getElementById('Nombre').value ="";
    document.getElementById('Apellido').value ="";
    document.getElementById('Mail').value ="";

}