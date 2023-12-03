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
                    beneficiario: false,
                    tipo: false,
                    fechaNacimiento: false,                    
                    Acudiente: false,
                    documento: false,
                    parentesco: false,
                    estado: false,
                    sexoBiologico: false,                   
                    numeroContacto: false,
                    direccion: false,                    
                    correo: false,
                    ciudad: false,   
                    observacion: false,       
                    

                }
                const validarFormulario = (e) => {
                    switch (e.target.name) {


                        // case "tipo":
                        //     validarCampo(expresiones.nombre, e.target, 'tipo');
                        //     break;

                        // case "estado":
                        //     validarCampo(expresiones.nombre, e.target, 'estado');
                        //     break;

                        // case "beneficiario":
                        //     validarCampo(expresiones.nombre, e.target, 'beneficiario');
                        //     break;
                        case "ciudad":
                            validarCampo(expresiones.ciudad, e.target, 'ciudad');
                            break;
                        // case "observacion":
                        //     validarCampo(expresiones.observacion, e.target, 'observacion');
                        //     break;

                        // case "fechaNacimiento":
                        //     validarCampo(expresiones.fecha, e.target, 'fechaNacimiento');
                        //     break;
                        // case "sexoBiologico":
                        //     validarCampo(expresiones.nombre, e.target, 'sexoBiologico');
                        //     break;
                        // case "Acudiente":
                        //     validarCampo(expresiones.nombre, e.target, 'Acudiente');
                        //     break;
                        // case "documento":
                        //     validarCampo(expresiones.documento, e.target, 'documento');
                        //     break;
                        // case "parentesco":
                        //     validarCampo(expresiones.nombre, e.target, 'parentesco');
                        //     break;
                        case "numeroContacto":
                            validarCampo(expresiones.telefono, e.target, 'numeroContacto');
                            break;
                        case "direccion":
                            validarCampo(expresiones.observacion, e.target, 'direccion');
                            break;

                        case "correo":
                            validarCampo(expresiones.correo, e.target, 'correo');
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

                inputs.forEach((input ) => {
                    input.addEventListener('keyup', validarFormulario);
                    input.addEventListener('blur', validarFormulario)

                });

                formulario.addEventListener('submit', (e) => {
                    e.preventDefault();


                    const terminos = document.getElementById('terminos');
                    if (campos.ciudad && campos.direccion && campos.correo && campos.numeroContacto && terminos.checked) {
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