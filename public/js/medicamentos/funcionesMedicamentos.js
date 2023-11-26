

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
            <a href=""><img src="../images/eye-svgrepo-com.svg" alt="icon" class="opc_eyes" ></a>          
            <img src="../images/editar.png" alt="icon" class="opc_edit" >          
            <img src="../images/borrar.png" alt="icon" class="opc_delete" onclick="mostrarAlerta()" >
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