function calcular() {
  let ancho = document.getElementById("valorW").value;
  let largo = document.getElementById("valorH").value;


  if (ancho === "" || largo === "") {
    Swal.fire("Error", "Por favor, escribe el ancho y el largo", "error"); // ← CAMBIO
    return;
  }

  ancho = parseFloat(ancho);
  largo = parseFloat(largo);

  if (ancho <= 0 || largo <= 0) {
    Swal.fire("Error", "Los valores deben ser mayores a cero", "error"); // ← CAMBIO
    return;
  }

  const area = ancho * largo;


  Swal.fire("Resultado", `El área es ${area} m²`, "success"); // ← CAMBIO


  document.getElementById("resultado").textContent = area + " m²";
}

function limpiar() {
  document.getElementById("valorW").value = "";
  document.getElementById("valorH").value = "";
  document.getElementById("resultado").textContent = "";
}
