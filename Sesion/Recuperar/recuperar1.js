const formulario = document.getElementById("formRecuperar");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();

    if(usuario.length < 4){

        alert("El usuario debe tener mínimo 4 caracteres.");

        return;

    }

    alert("Si el usuario existe, recibirá las instrucciones para recuperar su contraseña.");

    formulario.reset();

});