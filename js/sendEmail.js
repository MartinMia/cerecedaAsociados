const btnEnvio = document.getElementById("btnEnviar");

btnEnvio.addEventListener("click", function (e) {
    // e.preventDefault(); 
    const name = document.getElementById("name").value;
    const cellphone = document.getElementById("cellphone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    window.location.href(`mailto:serviciosimpositivosr@gmail.com?Asunto%3A%20${subject}%0
        AHola%2C%20me%20llamo%3A%20${name}%0A
        Mi%20telefono%20es%3A%20${cellphone}%0A
        Este%20es%20mi%20mensaje%3A%20${message}`);
}); 