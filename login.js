username="Camilly"
password="123456"

function autenticar(){
    var lgn= document.getElementById("login").value;
    var pwd= document.getElementById("passwd").value;

    if(lgn==username & pwd == password){
    alert("Preenchido corretamente")
    
    }else{
    alert("Tente novamente")

    }

}