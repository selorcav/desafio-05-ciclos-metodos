
        var opcionUsuario = prompt('Escoge un número entre el 1 y el 5', 0);

        while (opcionUsuario > 5 || opcionUsuario < 0 || isNaN(opcionUsuario)) {
            opcionUsuario = parseInt(prompt('Tu número es mayor que 5 o menor que 0. Escoge un número del 1 al 5'));
        }
        switch (opcionUsuario) {
            case "1":
                caso1();
                break;
            case "2":
                caso2();
                break;
            case "3":
                caso3();
                break;
            case "4":
                caso4();
            case "5":
                caso5();
        }

        function caso1() {
            let numeroUsuario = parseInt(prompt('Escoge un número del 1 al 100', 0));

            while (numeroUsuario > 100 || numeroUsuario < 0 || isNaN(numeroUsuario)) {
                numeroUsuario = parseInt(prompt('Tu número es mayor que 100 o menor que 0. Escoge un número del 1 al 100'));
            }
            for (i = 0; i <= numeroUsuario; i++) {
                console.log(i);
            }
        }
        function caso2() {
            let respuestaUsuario = prompt('¿De qué color es el caballo blanco de napoleón?', 'Blanco');

            while (respuestaUsuario != 'Blanco') {
                respuestaUsuario = prompt('Respuesta incorrecta. ¿De qué color es el caballo blanco de napoleón?', 'Blanco');
            }
            alert('Respuesta correcta!')
        }
        function caso3() {
            notaMatematica = parseInt(prompt('¿Cual fue tu nota en matemáticas, del 1 al 7?', 0));
            while (notaMatematica > 7 || notaMatematica < 0 || isNaN(notaMatematica)) {
                notaMatematica = parseInt(prompt('Dato incorrecto, vuelve a ingresar tu nota de matemáticas de nuevo, del 1 al 7.'));
            }

            notaFisica = parseInt(prompt('¿Cual fue tu nota en física, del 1 al 7? ', 0));
            while (notaFisica > 7 || notaFisica < 0 || isNaN(notaFisica)) {
                notaFisica = parseInt(prompt('Dato incorrecto, vuelve a ingresar tu nota de física de nuevo, del 1 al 7.'));
            }

            notaCiencia = parseInt(prompt('¿Cual fue tu nota en ciencias, del 1 al 7?', 0));
            while (notaCiencia > 7 || notaCiencia < 0 || isNaN(notaCiencia)) {
                notaCiencia = parseInt(prompt('Dato incorrecto, vuelve a ingresar tu nota de ciencias de nuevo, del 1 al 7.'));
            }

            promedioNotas = parseInt(notaMatematica + notaFisica + notaCiencia) / 3;
            alert('Tu promedio de notas es ' + parseInt(promedioNotas));
        }
        function caso4() {
            fruta1 = prompt('Escribe el nombre de una primera fruta');
            if (fruta1.toLowerCase() != 'manzana') {
                console.log(fruta1.toLowerCase());
            }
            fruta2 = prompt('Escribe el nombre de una segunda fruta');
            if (fruta2.toLowerCase() != 'manzana') {
                console.log(fruta2.toLowerCase());
            }
            fruta3 = prompt('Escribe el nombre de una tercera fruta');
            if (fruta3.toLowerCase() != 'manzana') {
                console.log(fruta3.toLowerCase());
            }
        }
        function caso5() {
            tuNombre = prompt('Hola ¿Cual es tu nombre?');
            contadorVocales = function (str) {
                
                var vocales = 'aeiouAEIOU';
                var contador = 0;

                for (var i = 0; i < str.length; i++) {
                    if (vocales.indexOf(str[i]) !== -1) {
                        contador += 1;
                    }
                }
                return contador
            }
            alert('Tu nombre tiene ' + contadorVocales(tuNombre) + ' vocales y ' + parseInt(tuNombre.length-contadorVocales(tuNombre)) + ' consonantes');
        }