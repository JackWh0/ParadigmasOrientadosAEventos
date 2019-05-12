function MudarImagem(){
    document.getElementById("All_Might").src="imgs/All_Might2.png";
}

function VoltarImagemOriginal(){
    document.getElementById("All_Might").src="imgs/All_Might1.png";
}

function Somar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    res = num1 + num2;
    document.getElementById("Resultado").innerHTML = res;
}