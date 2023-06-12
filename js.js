function calcularTotal() {
    var cantEntradas,
        total,
        categoria,
        entradaEstudiante,
        entradaTrainee,
        entradaJr,
        general;
    
    console.log('funcion');
    cantEntradas = document.getElementById('inputCantidad').value;
    categoria = document.getElementById('inputCategoria').value;

    console.log('cantidad entradas' + cantEntradas + 'categoria' + categoria);
    
    entradaEstudiante = 200 - (200 * 80) / 100;
    entradaTrainee = 200 - (200 * 50) / 100;
    entradaJr = 200 - (200 * 15) / 100;
    general = 200;

    if (cantEntradas > 0 && !isNaN(cantEntradas && cantEntradas % 1 == 0)){
        if(categoria == 'Estudiante') {
            total = entradaEstudiante * cantEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        }
        if(categoria == 'Trainee'){
            total = entradaTrainee * cantEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        }
        if(categoria == 'Junior'){
            total = entradaJr * cantEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        }
        if(categoria == 'General'){
            total = general * cantEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        }
    }else{
        window.alert('La cantidad de entradas debe ser en números enteros');
    }
    }

    function borrar() {
        document.getElementById('inputNombre').value = ' ';
        document.getElementById('inputApellido').value = ' ';
        document.getElementById('inputEmail').value = ' ';
        document.getElementById('inputCantidad').value = ' ';
        document.getElementById('inputCategoria').value = 'Estudiante';
        document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
      }