# proyect-e
aqui un poco de las acciones que realice

### HTML ###
cree el documento html donde estructure todas las partes conformantes de la pagina web de acuerdo a lo que se me solicitaba.
### CSS ###
di estilo a el conjunto de elementos que conformaban la pagina web.
### JavaScript ###
Di funcionalidad a elementos desde la solicitud a la API, hasta reaccion de elementos HTML en diferentes casos que se presentasen.


# ELEMENTOS QUE CONFORMAN LA PAGINA 
### Header ###
aqui coloque solo elementos graficos, por lo que solo ocupe HTML y CSS, 
centre el titulo de la pagina dejando una breve descripcion de que es lo que hace la pagina

### Box de busqueda ###
se puso un titulo con un icono donde aclaro cual es la funcionalidad de ese box, ademas de agregar un pequeño subtitulo
donde explico que es lo que debe hacer uno para utilizar la pagina web. Hay un input donde coloca uno el usuario que desea buscar,
si el usuario no coloca ni un solo caracter, no puede buscar ni pulsar el boton, pero, si se coloca un caracter, el boton se puede pulsar.
al pulsar el boton este hara la peticion a la API donde buscara al usuario y en caso de no encontrarlo, aparecera un mensaje emergente de
"Usuario no encontrado"

<img width="993" height="422" alt="image" src="https://github.com/user-attachments/assets/41584d80-96e6-476e-8ff7-44c077c6b9f8" />

pero, si el perfil existe, hara el procesamiento de los datos rescatandolos del objeto recibido por la API.

<img width="925" height="906" alt="image" src="https://github.com/user-attachments/assets/07574722-7254-47eb-a6a2-49403c742b1d" />

### Box de Perfil ###
antes de llegar aqui, los datos del objeto que retorno la API, se separan, ya que, la API da mas de la necesaria. Cuando los datos son 
procesados y almacenados correctamente, podemos llegar a recibir datos nulos, por lo que, se usa la alternativa de crear constantes vacias o 
con valor "o" para no mostrar algun mensaje en pantalla que no sea deseado.

<img width="718" height="238" alt="image" src="https://github.com/user-attachments/assets/9263032c-3e45-4545-89c4-97f3a03c59f1" />

una vez guardados los datos, vamos poco a poco, implementando cada elemento en la interfaz.

#### Datos Relevantes ####
primero mostramos la foto de perfil, nombre registrado, nombre de usuario, descripcion, ciudad o lugar, fecha de union a github.
pude visualizar que en la pagina dada de referencia, si estos datos son nulos o no se reciben, estos no se muestran, no obstante
en el caso de el nombre, este se sustituye por el nombre de usuario. Estas funcionalidades tambien fueron implementadas de la mejor
manera posible a mi conocimiento.

<img width="866" height="153" alt="image" src="https://github.com/user-attachments/assets/9abbdc30-c1bf-4b7d-9c26-273b8e813965" />


#### Estadisticas ####
aqui de forma general pero muy llamativa, muestro los repositorios, seguidores y los seguidos del usuario en github, aqui aunque carece
de funcionalidad, es la parte mas visual del sistema.
<img width="853" height="140" alt="image" src="https://github.com/user-attachments/assets/c0271734-9ee8-48c4-b6ff-9d8ac76f066c" />


#### informacion detallada ####
aqui mostramos el nombre completo, el nombre de usuario, los repositorios publicos, los seguidores y los seguidos. aqui los datos ya
fueron recuperados con anterioridad, por lo que, siguen el mismo tratado que en anteriores segmentos.
<img width="843" height="212" alt="image" src="https://github.com/user-attachments/assets/40f2bbc6-6923-4f01-9125-fdf0ac8aaf5b" />
<img width="1122" height="509" alt="image" src="https://github.com/user-attachments/assets/bd2a6cc3-ccf8-47b1-b58b-9a8175cee243" />



#### botonera ####
la penultima parte del sitio web, fue un boton que te lleva a el blog del github y el github propiamente, en caso de no recibir algun
blog, el sistema no mostrara el boton de sitio web puesto que no tiene a que sitio web acceder. pero, ¿porque no hice lo mismo con el
boton de github? sencillamente porque si estas solicitando ver un github y te arroja una respuesta valida, eso significa que
es existente este perfil, por lo tanto, no tiene sentido comprobar nuevamente el perfil.
<img width="852" height="92" alt="image" src="https://github.com/user-attachments/assets/e900f2b7-ead3-43bd-8114-e3fdda894f4c" />

#### footer o pie de pagina ####
pequeña leyenda que dice "Desarrollado con ❤️ usando la API pública de GitHub"

# la pagina completa se veria algo asi:
<img width="933" height="907" alt="image" src="https://github.com/user-attachments/assets/23c3429a-7cbb-4e17-952e-86417e8a0c58" />

## Observaciones ##
- cree una funcion de javascript para leer el formato de la fecha y poderla escribir como el sistema lo requeria.
- cree varias funciones para ocultar o visualizar elementos graficos.
- use el ID de elementos en HTML para visualizarlos u ocultarlos.
- un framework ayuda muchisimo al desarrollo de estos proyectos, aunque es retador hacerlo en vanilla, no es algo que sea imposible de hacer.
- el tiempo que me llevo terminar este proyecto fue de aproximadamente 7 horas y 14 minutos.


