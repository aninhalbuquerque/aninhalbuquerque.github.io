function calc(){
    var min = parseInt(document.getElementById("min").value, 10);
    var max = parseInt(document.getElementById("max").value, 10);
    var p = document.getElementById("n");
    if(min.length != 0 && max.length != 0){
        if(max - min >= 0){
            var resp = Math.floor((Math.random()*(max - min + 1))) + min;
            p.innerHTML = resp;
        } else{
            p.innerHTML = "Entrada invalida";
        }
    } else{
        p.innerHTML = "Entrada invalida";
    }
}

function tecla(){
	if(event.keyCode == 13) calc();
}
