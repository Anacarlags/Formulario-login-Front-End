document.getElementById("botao").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("email").value !="" && document.getElementById("password").value != ""){
            alert('login realizado com sucesso!') 
    }else{
        alert('por favor Digite email e senha de login')
    }
}