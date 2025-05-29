document.addEventListener("DOMContentLoaded", function() {
    console.log("Bootstrap cargado en todas las páginas");
});

function anioActual() {
    let anioActual = new Date().getFullYear();
    return anioActual;
  }

  document.addEventListener("DOMContentLoaded", function() {
    let añoActual = document.getElementById("añoActual").innerText ="Copyright © " + anioActual() + " Cereceda & Asociados.";
  });


  