// Función para guardar los datos del formulario en el almacenamiento local
function saveFormData() {
    const form = document.getElementById("pregnancy-form");
    const formData = new FormData(form);
    
    formData.forEach((value, key) => {
      localStorage.setItem(key, value);
    });
  }
  
  // Función para cargar los datos del almacenamiento local al formulario
  function loadFormData() {
    const form = document.getElementById("pregnancy-form");
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
      const input = form.querySelector(`[name="${key}"]`);
      if (input) {
        if (input.type === "radio" || input.type === "checkbox") {
          if (input.value === localStorage.getItem(key)) {
            input.checked = true;
          }
        } else if (input.type === "select-one") {
          input.value = localStorage.getItem(key);
        } else {
          input.value = localStorage.getItem(key);
        }
      }
    });
  }
  
  // Al cargar la página, cargar los datos del formulario si existen en el almacenamiento local
  window.onload = function() {
    loadFormData();
  };
  
  // Al enviar el formulario, limpiar el almacenamiento local
  document.getElementById("pregnancy-form").addEventListener("submit", function() {
    localStorage.clear();
  });
  
  // Función para mostrar una página del formulario y ocultar las demás
  function showPage(pageNumber) {
    const pages = document.querySelectorAll(".form-page");
    pages.forEach(page => {
      page.style.display = "none";
    });
    document.getElementById("page" + pageNumber).style.display = "block";
  }
  
  // Modificar las funciones nextPage y prevPage para guardar los datos antes de cambiar de página
  function nextPage(pageNumber) {
    saveFormData();
    showPage(pageNumber);
  }
  
  function prevPage(pageNumber) {
    saveFormData();
    showPage(pageNumber);
  }
  