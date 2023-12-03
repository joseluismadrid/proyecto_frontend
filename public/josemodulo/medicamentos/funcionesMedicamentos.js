

//  Inicio funcion para desscargar
function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);

    // Obtén las filas de la tabla
    var rows = tableSelect.getElementsByTagName('tr');

    // Crear un objeto HTML para almacenar solo las columnas deseadas
    var filteredTable = document.createElement('table');

    // Agregar encabezados a la nueva tabla
    var headerRow = filteredTable.createTHead().insertRow(0);
    headerRow.innerHTML = "<th>Id</th><th>Id acudiente</th><th>Tipo de documento</th><th>Documento</th><th>Nombre completo</th><th>Beneficiario</th><th>Telefono</th><th>Direccion</th><th>Ciudad-Barrio</th>";

    // Recorrer las filas de la tabla original y copiar solo las columnas deseadas a la nueva tabla
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        if (cells.length >= 5) { // Asegurarse de que haya al menos 5 celdas (las columnas deseadas)
            var newRow = filteredTable.insertRow(-1);
            for (var j = 0; j < 5; j++) { // Copiar solo las primeras 5 celdas (las columnas deseadas)
                var newCell = newRow.insertCell(j);
                newCell.innerHTML = cells[j].innerHTML;
            }
        }
    }

    // Convertir la nueva tabla a HTML
    var tableHTML = filteredTable.outerHTML.replace(/ /g, '%20');

    // Especificar el nombre de archivo
    filename = filename ? filename + '.xls' : 'Listado_Acudientes.xls';

    // Crear el elemento de enlace de descarga
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Crear un enlace al archivo
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Establecer el nombre de archivo
        downloadLink.download = filename;

        // Activar la función
        downloadLink.click();
    }
}
// Fin de funcion de descarga

// inicio de en paginado
const data = [{ "id_medicamento": 100, "nombre_medicamento": "Acetaminafen", "stock_Medicamentos": 5, "tipo_Cantidad": "sobres", "gramaje": 200 }, { "id_medicamento": 101, "nombre_medicamento": "ibuprofeno", "stock_Medicamentos": 3, "tipo_Cantidad": "sobres", "gramaje": 100 }, { "id_medicamento": 102, "nombre_medicamento": "Actinomicina-D", "stock_Medicamentos": 3, "tipo_Cantidad": "sobres", "gramaje": 500 }, { "id_medicamento": 103, "nombre_medicamento": "Daunorrubicina ", "stock_Medicamentos": 4, "tipo_Cantidad": "sobres", "gramaje": 50 }, { "id_medicamento": 104, "nombre_medicamento": "Acetaminafen", "stock_Medicamentos": 5, "tipo_Cantidad": "sobres", "gramaje": 200 }, { "id_medicamento": 105, "nombre_medicamento": "ibuprofeno", "stock_Medicamentos": 3, "tipo_Cantidad": "sobres", "gramaje": 100 }, { "id_medicamento": 106, "nombre_medicamento": "Actinomicina-D", "stock_Medicamentos": 3, "tipo_Cantidad": "sobres", "gramaje": 500 }, { "id_medicamento": 103, "nombre_medicamento": "Daunorrubicina ", "stock_Medicamentos": 4, "tipo_Cantidad": "sobres", "gramaje": 50 }, { "id_medicamento": 107, "nombre_medicamento": "Acetaminafen", "stock_Medicamentos": 5, "tipo_Cantidad": "sobres", "gramaje": 200 }, { "id_medicamento": 108, "nombre_medicamento": "ibuprofeno", "stock_Medicamentos": 3, "tipo_Cantidad": "sobres", "gramaje": 100 }, { "id_medicamento": 109, "nombre_medicamento": "Actinomicina-D", "stock_Medicamentos": 3, "tipo_Cantidad": "sobres", "gramaje": 500 }, { "id_medicamento": 110, "nombre_medicamento": "Daunorrubicina ", "stock_Medicamentos": 4, "tipo_Cantidad": "sobres", "gramaje": 50 }]
const table = document.getElementById('data-table');
const pagination = document.getElementById('pagination');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');

let currentPage = 1;
const itemsPerPage = 5; // Cambia esto para ajustar la cantidad de filas por página

function showData(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    table.tBodies[0].innerHTML = '';

    for (const item of paginatedData) {
        const row = table.tBodies[0].insertRow();
        row.insertCell(0).textContent = item.id_medicamento;
        row.insertCell(1).textContent = item.nombre_medicamento;
        row.insertCell(2).textContent = item.stock_Medicamentos;
        row.insertCell(3).textContent = item.tipo_Cantidad;
        row.insertCell(4).textContent = item.gramaje;


        // Crear una nueva celda para las opciones
        const opcionesCell = row.insertCell(5);
        opcionesCell.className = 'opcion';

        // Agregar los elementos de opciones dentro de la celda
        opcionesCell.innerHTML = `
          <div class="opcion">
            <img src="../images/eye-svgrepo-com.svg" alt="icon" class="opc_eyes" >         
            <img src="../images/editar.png" alt="icon" class="opc_edit ">          
            <img src="../images/senal.png" alt="icon" class="opc_delete"  >
          </div>
        `;
    }

    currentPage = page;
    currentPageSpan.textContent = currentPage;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === Math.ceil(data.length / itemsPerPage);

}

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        showData(currentPage - 1);
    }
});

nextPageButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
        showData(currentPage + 1);
    }
});

showData(currentPage); // Mostrar la primera página al cargar la página

// fin del enpaginado



document.addEventListener("DOMContentLoaded", function () {
    const btnAbrirModal = document.querySelector("#btn-abrir-modal");
    const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
    const modal = document.querySelector("#modal");


    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
    });


    btnCerrarModal.addEventListener("click", () => {
        modal.close();
    });
});
table.addEventListener("click", (event) => {
    if (event.target.classList.contains("opc_eyes")) {
        const rowIndex = event.target.closest("tr").rowIndex - 1 + (currentPage - 1) * itemsPerPage;

        if (rowIndex >= 0 && rowIndex < data.length) {
            const selectedItem = data[rowIndex];
            // Llenar campos del modal con los datos obtenidos
            document.getElementById("idMedicamento").value = selectedItem.id_medicamento;
            document.getElementById("nombre").value = selectedItem.nombre_medicamento;
            document.getElementById("stocks").value = selectedItem.stock_Medicamentos;
            document.getElementById("mediciones").value = selectedItem.tipo_Cantidad;
            document.getElementById("Gramajes").value = selectedItem.gramaje;

            // Muestra el modal
            const modal = document.getElementById("modal_ver");
            modal.showModal();
        }
    }
});
table.addEventListener("click", (event) => {
    if (event.target.classList.contains("opc_edit")) {
        const rowIndex = event.target.closest("tr").rowIndex - 1 + (currentPage - 1) * itemsPerPage;
        const btnCerrarModal = document.querySelector("#btn-cerrar-modal2");
        const modal = document.querySelector("#modal_editar");

        if (rowIndex >= 0 && rowIndex < data.length) {
            const selectedItem = data[rowIndex];
            // Llenar campos del modal con los datos obtenidos
            document.getElementById("idMedicamento").value = selectedItem.id_medicamento;
            document.getElementById("nombre").value = selectedItem.nombre_medicamento;
            document.getElementById("stocks").value = selectedItem.stock_Medicamentos;
            document.getElementById("mediciones").value = selectedItem.tipo_Cantidad;
            document.getElementById("Gramajes").value = selectedItem.gramaje;

            // Muestra el modal
            const modal = document.getElementById("modal_editar");
            modal.showModal();
        }
        btnCerrarModal.addEventListener("click", () => {
            modal.close();
        });

    }



});



table.addEventListener("click", (event) => {
    const btnCerrarModal = document.querySelector("#btn-cerrar-modal3");
    const modal = document.querySelector("#modal_dardebaja");
    const eliminar = document.querySelector("#baja");
    if (event.target.classList.contains("opc_delete")) {
        const rowIndex = event.target.closest("tr").rowIndex - 1 + (currentPage - 1) * itemsPerPage;
        // Muestra el modal


        modal.showModal();
    }   
    btnCerrarModal.addEventListener("click", () => {
        modal.close();
    });
    eliminar.addEventListener("click", () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'dado de baja exitoso',
            showConfirmButton: false,
            timer: 1000
        })
    });
    






});




const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    usuario: /^[a-zA-Z0-9ñ\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    documento: /^[0-9]+([.][0-9]+)?$/,
    fecha: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    observacion: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    ciudad: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/,
};


const campos = {
    nombremedicamento: false,
    stock: false,
    medicion: false,
    cantidad: false,
    gramaje: false,



}
const validarFormulario = (e) => {
    switch (e.target.name) {


        case "nombreMedicamento":
            validarCampo(expresiones.nombre, e.target, 'tipo');
            break;

        case "stock":
            validarCampo(expresiones.documento, e.target, 'estado');
            break;

        case "medicion":
            validarCampo(expresiones.nombre, e.target, 'beneficiario');
            break;
        case "cantidad":
            validarCampo(expresiones.documento, e.target, 'ciudad');
            break;
        case "gramaje":
            validarCampo(expresiones.observacion, e.target, 'observacion');
            break;



    }
}
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();


    const terminos = document.getElementById('terminos');
    if (campos.nombremedicamento && campos.stock && campos.medicion && campos.cantidad && campos.gramaje && terminos.checked) {
        formulario.reset();


        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);


        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
