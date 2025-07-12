
//uso de scripts, aqui tratare de explicar como funciona todo el codigo para recuperar usuarios

//recuperacion de los elementos del HTML para trabajar con ellos en el programa
const input = document.getElementById('username');
const button = document.getElementById('submit-btn');
const mensajeError = document.getElementById('mensaje-error');
const userInfo = document.getElementById('user-info');
const website = document.getElementById('website');

function estadoDelBoton() { //empezamos con una funcion que se encargara de cambiar el estado del boton de acuerdo al input
    //recuperacion del input y comprobamos que la entrada no sean espacios en blanco, este valor es booleano donde recibimos true (si esta vacio) o false (se lleno el formulario)
    const inputBusqueda = input.value.trim() === ""; 
    if (inputBusqueda) { //si el input esta vacio se crea la clase disabled y se elimina la clase active
        button.classList.add('disabled');
        button.classList.remove('active');
    } else { //caso contrario, se crea la clase active y se elimina la clase disabled
        button.classList.remove('disabled');
        button.classList.add('active');
    }
}


//funciones para ocultar y ver los resultados obtenidos de la API
//PRIMER CASO: si no se encuentra al usuario predominara el mensaje de error
function mostrarError() {
    mensajeError.classList.remove('error-oculto');
    userInfo.classList.remove('user-info-visible');
    userInfo.classList.add('user-info-oculto');
    mensajeError.classList.add('error-visible');
}

//SEGUNDO CASO: si se encuentra al usuario predominara el mensaje de usuario encontrado
function ocultarError() {
    mensajeError.classList.remove('error-visible');
    userInfo.classList.remove('user-info-oculto');
    userInfo.classList.add('user-info-visible');
    mensajeError.classList.add('error-oculto');
}


//funcion donde recuperamos el input y llamamos a la api de github
function buscarUsuario(event) {
    event.preventDefault(); //esto es para que no se recargue la pagina al hacer click en el boton y no veamos el resultado
    const username = input.value.trim(); //recuperamos el valor del input
    //se exige no usar fetch, en su lugar podemos usar Axios o SuperAgent
    axios.get(`https://api.github.com/users/${username}`) //llamamos a la API de GitHub con username, usamos axios 
        .then(response => { //recibimos la respuesta de la API
            const user = response.data; //obtenemos los datos del usuario
            console.log(user); //mostramos los datos del usuario en la consola
            //ahora recuperamos los elementos que nos interesan del JSON
            recuperarUsuario(user); //llamamos a la funcion recuperarUsuario para mostrar los datos del usuario
            ocultarError(); //ocultamos el mensaje de error si se encuentra al usuario
        })
        .catch(error => {
            //si no encontramos el usuario, mandamos un hello world en html
            console.error('Usuario no encontrado:', error); //mostramos el error en la consola
            mostrarError(); //llamamos a la funcion mostrarError para mostrar el mensaje de error
        });
}


function recuperarUsuario(user){

    const avatarUrl = user.avatar_url || 'avatar no disponible'; //url del avatar del usuario
    const name = user.name || user.login; //nombre del usuario
    const username = user.login || 'Nombre de usuario no disponible'; //nombre de usuario
    const bio = user.bio || ''; //biografía del usuario
    const location = user.location || ''; //ubicación del usuario
    const fechaCreacion = user.created_at || ''; //fecha de creación del usuario
    const numRepositorios = user.public_repos || 0; //número de repositorios del usuario
    const numSeguidores = user.followers || 0; //número de seguidores del usuario
    const numSiguiendo = user.following || 0; //número de personas que
    const websiteUrl = user.blog || '0'; //sitio web del usuario
    const githubUrl = `https://github.com/${user.login}`; //url de github del usuario

    //ahora mandamos las variables a los elementos HTML correspondientes
    document.getElementById('avatarGH').src = avatarUrl; //asignamos la url del avatar al elemento img
    document.getElementById('nameGH').textContent = name; //asignamos el
    document.getElementById('usernameGH').textContent = `@${username}`; //asignamos el nombre de usuario al elemento span
    document.getElementById('usernameGHtwo').textContent = username; //asignamos el nombre de usuario al elemento span
    document.getElementById('bioGH').textContent = bio; //asignamos la
    document.getElementById('locationGH').textContent = `📍${location}`; //asignamos la ubicación al elemento span
    document.getElementById('fecha-creacionGH').textContent = descomponerFecha(fechaCreacion); //asignamos la fecha de creación al elemento span
    document.getElementById('num-repositoriosGH').textContent = numRepositorios; //asignamos el número de repositorios al elemento span
    document.getElementById('num-seguidoresGH').textContent = numSeguidores; //asignamos el número de seguidores al elemento span
    document.getElementById('num-siguiendoGH').textContent = numSiguiendo; //asignamos el número de personas que sigue al elemento span
    if (websiteUrl && websiteUrl.trim() !== '' && websiteUrl !== '0') { // Verificamos si la URL del sitio web existe, no está vacía y no es '0'
        //se agrega http al inicio del enlace si es que no lo tiene
        const formattedUrl = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;
        website.href = formattedUrl; // Asignamos la URL formateada al atributo href del botón/enlace

        website.classList.remove('web-oculto'); //removemos la clase web-oculto para ver el boton
        website.classList.add('web-visible'); //agregamos la clase web-visible para ver el boton
    } else { //si no existe el sitio web, ocultamos el boton
        website.href = "#"; // Asignamos un enlace vacío o "#"
        website.classList.remove('web-visible'); //removemos la clase web-visible para ocultar el boton
        website.classList.add('web-oculto'); //agregamos la clase web-oculto para ocultar el boton
    }

    document.getElementById('github-url').href = githubUrl; //asignamos la url de github al elemento


    //recuperacion de los elementos del HTML nuevamente para la informacion detallada
    document.getElementById('nameGHtwo').textContent = name; //asignamos el
    document.getElementById('usernameGHtwo').textContent = username; //asignamos el nombre de usuario al elemento span
    document.getElementById('num-repositoriosGHtwo').textContent = numRepositorios; //asignamos el número de repositorios al elemento span
    document.getElementById('num-seguidoresGHtwo').textContent = numSeguidores; //asignamos el número de seguidores al elemento span
    document.getElementById('num-siguiendoGHtwo').textContent = numSiguiendo; //asignamos el número de personas que sigue al elemento span
}

function descomponerFecha(fecha) {
    const fechaObj = new Date(fecha);
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return `📅Se unio ${fechaObj.toLocaleDateString('es-ES', opciones)}`;
}
//llamada a la funcion estadoDelBoton al cargar la pagina y al cambiar el input
input.addEventListener('input', estadoDelBoton); // cada vez que se escribe en el input, se llama a la funcion estadoDelBoton
button.addEventListener('click', buscarUsuario); // al hacer click en el boton, se llama a la funcion buscarUsuario