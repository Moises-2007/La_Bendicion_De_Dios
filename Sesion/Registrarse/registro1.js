const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmar").value;

    if(usuario.length < 4){
        alert("El usuario debe tener mínimo 4 caracteres.");
        return;
    }

    if(password.length < 8){
        alert("La contraseña debe tener mínimo 8 caracteres.");
        return;
    }

    if(password !== confirmar){
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Registro realizado correctamente.");

    formulario.reset();

});