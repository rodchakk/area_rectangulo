


function calcular() {
  let ancho = document.getElementById("valorW").value;
  let largo = document.getElementById("valorH").value;

  if (ancho === "" || largo === "") {
    alert("Por favor, escribe el ancho y el largo");
    return;
  }

  ancho = parseFloat(ancho);
  largo = parseFloat(largo);

  if (ancho <= 0 || largo <= 0) {
    alert("Los valores deben ser mayores a cero");
    return;
  }

  const area = ancho * largo;


  document.getElementById("resultado").textContent = area + " m²";
}

function limpiar() {
  document.getElementById("valorW").value = "";
  document.getElementById("valorH").value = "";
  document.getElementById("resultado").textContent = "";
}
