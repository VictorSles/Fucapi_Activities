function func1(){
    variavel = document.getElementById("var")
    dia_s = document.getElementById("dia").value;
    dia = parseInt(dia_s)
    mes_s = document.getElementById("mes").value;
    mes = parseInt(mes_s - 1)
    ano_s = document.getElementById("ano").value;
    ano = parseInt(ano_s)
    if(dia > 31 || dia < 1 || mes > 12 || mes < 0){
        alert("Data inválida!")
    }else{
        if(dia = 22 && mes > 28){
            alert("Data inválida!")
        }
    }
    console.log("Data: " + dia + "/" + mes + "/" + ano);
}