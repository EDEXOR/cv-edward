

function aver(){
  		 var hola = document.getElementById("lol").checked;
  		if(hola == false){
  			swal("No puedes seguir", "Tienes que checkear la casilla", "error");
  		}
  		else{
  			swal('Estaba facil','Pasas a la siguiente fase','success')
            .then(() =>{
                    window.location="phase3/475191==e03728fffb890becf4fbc0360f5f2135a445f160.html";
                })
  		}
  	}
    var coloro ="";
function color(coloro){
  if (coloro=="#475191") {
swal("Para seguir tienes que decirme que color es este", {
  content: "input",
})
.then((value) => {
  if (value=="#475191" || value=="475191") {
    swal(`lol: ${value}`);
    window.location="4ase4/";
  }
  else{
    swal(`Lo siento pero no es ese el color xd : ${value}`);
  }
  
});
    
  }
  else{
    swal("Lo siento", "no es el color que tienes que conocer", "error");
    
  }
}
function contar(){
  
}