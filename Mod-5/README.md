# Módulo 5: Creación de formularios para recoger y validar las entradas de los usuarios

1. **Nombres y apellidos:** José René Fuentes
2. **Fecha:** 24 de Septiembre 2020.
3. **Resumen del Ejercicio:**
    * Agregar en la página **Schedule** para mostrar las sesiones de la conferencias de la aplicación **ContosoConf**.
    * Actualizar la página **Schedule** para filtrar las sesiones basada en que canal o trayectoria han sido seleccionadas.
4. **Dificultad o problemas presentados y como se resolvieron:** Ninguna dificultad.

Fecha de entrega: Jueves 24 de septiembre de 2020

>**Objetivos**: 
* Agregar en la página **Schedule** para mostrar las sesiones de la conferencias de la aplicación **ContosoConf**.
* El principal objetivo de este laboratorio es actualizar la página **Schedule** para filtrar las sesiones basada en que canal o trayectoria han sido seleccionadas.

Dondequiera que la ruta de un archivo comience con *[Raíz del repositorio]*, reemplácela con la ruta absoluta de la carpeta en la que reside el repositorio 20480. Por ejemplo, si clonaste o extrajiste el repositorio 20480 a **C:\Usuarios\John Doe\Descargas\20480**, cambia la ruta: **[Raíz del Repositorio]\N-Todos los Archivos 20480CMod01** a **C:\N-Usuarios John Doe\N-Descargas 20480\N-Todos los Archivos 20480CMod01**.

# Módulo 5: Comunicarse con un servidor remoto

Dondequiera que la ruta de un archivo comience con *[Raíz del repositorio]*, reemplácela con la ruta absoluta de la carpeta en la que reside el repositorio 20480. Por ejemplo, si clonaste o extrajiste el repositorio 20480 a **C:\Usuarios\John Doe\Descargas\20480**, cambia la ruta: **[Raíz del Repositorio]\N-Todos los Archivos 20480CMod01** a **C:\N-Usuarios John Doe\N-Descargas 20480\N-Todos los Archivos 20480CMod01**.

# Lección 3: Enviar y recibir datos usando el API de Fetch

### Demonstration: Comunicarse con una fuente de datos remota

#### Pasos de preparación 

Asegúrate de que has clonado el directorio 20480C de GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). Contiene los segmentos de código para los laboratorios y demostraciones de este curso.

#### Pasos de la demostración

#### Crear un nuevo proyecto

1. Abrir Microsoft Visual Studio 2019.
2. En Visual Studio, en el menú **Archivo**, ir a **Nuevo**, y luego haz clic en **Proyecto**.
3. En el cuadro de diálogo **Nuevo proyecto**, en el panel izquierdo, en **Instalado**, amplíe el nodo **Visual C#** y, a continuación, haga clic en el nodo **Web**.
4. Haga clic en **Aplicación Web ASP.NET (.NET Framework)**.
5. En el cuadro **Nombre**, introduzca **New fetchWeb**.
6. En la casilla **Localización**, introduce **[Raíz del repositorio]\N-Todos los archivos{Mod05\Democode**, y luego haz clic en **OK**.
7. En **Nueva Aplicación Web ASP.NET - Nueva ventana de fetchWeb**, pulsa **Vacío** y luego pulsa **OK**.


#### Añadir la página de índice

1.	En **NewfetchWeb - Microsoft Visual Studio**, en el menú **Proyecto**, haga clic en **Agregar nuevo elemento**.
2.  En el cuadro de diálogo **Add New Item - fetchWeb**, haga clic en **HTML Page**.
3. En el cuadro **Nombre**, introduzca **index.html**.
4.	Haga clic en **Agregar**.
5. Abre el archivo **index.html**.
6. Dentro del archivo, añade el siguiente texto:
    ```html
       <!DOCTYPE html>
        <html>
        <cabeza>
            <meta charset="utf-8" />
            <título>HTML Basic</título>
        </cabeza>
        <cuerpo>
            <div>
                <button id="addPersonsBtn">Get Persons</button>
                <hr />
                <table id="PersonTable">
                    <tr>
                        <th>Nombre completo</th>
                        <th>Picture</th>
                        <th>Email</th>
                    </tr>
                </tabla>
            </div>
        </cuerpo>
        </html>
    ```

#### Añadir el archivo JavaScript

1. Haga clic con el botón derecho del ratón en **NewfetchWeb**, haga clic en **Add** y luego seleccione **New folder**. Escriba **Scripts**.
2. Haga clic con el botón derecho del ratón en la carpeta **Scripts**, haga clic en **Agregar** y luego seleccione **Nuevo elemento**.
3. En el cuadro de diálogo **Agregar nuevo elemento - fetchWeb**, haga clic en **Archivo JavaScript**.
4. En el cuadro **Nombre**, introduzca **indexScript.js**.
5. Haga clic en **Agregar**.
6. Abre el archivo **indexScript.js**.
7. Añade el siguiente código a **indexScript.js**:
    ```javascript
        //servidor URL
        const personApiUrl = "https://randomuser.me/api/?results=3";

        //Crear nuevo elemento por nombre de elemento
        función createNode(element) {
            return document.createElement(element); 
        }

        // Agregar el elemento(el) en el padre
        función append(parent, el) {
            Devuelva parent.appendChild(el); 
        }
    ```
8. Define un método de sincronización llamado **getPersons**.
    "Javascript
        función de sincronización getPersons() {
        }
    ```
9. Dentro del método **getPersons**, crear **fetch**, llamar a **personApiUrl**, y luego almacenar la respuesta en una variable.
    "Javascript
        Deje que la respuesta = espere a que lo traigan (personaApiUrl);
    ```
10. Si la **respuesta** está bien, crear una tabla y utilizar la función de mapa para iterar para cada elemento en el elemento de respuesta para generar una fila y añadirla a la tabla.
    ```javascript
        si (respuesta.ok) {
            //Convirtiendo la respuesta a Json
            datos de la const = espera respuesta.json();
            /Obtener elemento de la tabla
            const table = document.getElementById("PersonTable");
            //Mapping all persons into the table
            data.results.map(function (auther) {
                //Crear un nuevo elemento para insertar en la tabla
                const tr = createNode('tr'),
                    fullNameRow = createNode('td'),
                    PicRow = createNode('td'),
                    PicEl = createNode('img'),
                    emailRow = createNode('td');
                //Insertar los datos en el elemento
                fullNameRow.innerHTML = `${auther.name.title}. ${auther.nombre.apellido} ${auther.nombre.primero}`;
                PicEl.src = auther.picture.medium;
                emailRow.innerHTML = auther.email;
                //Insertar los elementos en la tabla
                append(tr, fullNameRow);
                append(PicRow, PicEl);
                append(tr, PicRow);
                append(tr, emailRow);
                append(table, tr);
            })
        }
    ```

11. Envuelve todo el código en el método **getPerson** con **trato-tratamiento**.
    ```javascript
            /Obtener la solicitud por fetch
            Deje que la respuesta = espere a que lo traigan (personaApiUrl);
            si (respuesta.ok) {
                //Convirtiendo la respuesta a Json
                datos de la const = espera respuesta.json();
                /Obtener elemento de la tabla
                const table = document.getElementById("PersonTable");
                //Mapping all persons into the table
                data.results.map(function (auther) {
                    //Crear un nuevo elemento para insertar en la tabla
                    const tr = createNode('tr'),
                        fullNameRow = createNode('td'),
                        PicRow = createNode('td'),
                        PicEl = createNode('img'),
                        emailRow = createNode('td');
                    //Insertar los datos en el elemento
                    fullNameRow.innerHTML = `${auther.name.title}. ${auther.nombre.apellido} ${auther.nombre.primero}`;
                    PicEl.src = auther.picture.medium;
                    emailRow.innerHTML = auther.email;
                    //Insertar los elementos en la tabla
                    append(tr, fullNameRow);
                    append(PicRow, PicEl);
                    append(tr, PicRow);
                    append(tr, emailRow);
                    append(table, tr);
                })
            }
        }
        captura (e) {
            console.log(e);
        }
    ```

12. Añade un oyente de eventos en **DOMContentLoaded**. 13. 13. Obtener el botón de añadir persona por su **addPersonsBtn** ID y luego agregar un escuchador de eventos en el evento **clic** para llamar al método **getPerson**.
    javascript
        document.addEventListener('DOMContentLoaded', function (event) {
            document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
        });
    ```
13. Añade la siguiente etiqueta **script** al elemento **&lt;Head** de la página **index.html**.
    ``html
        <script src="/Scripts/indexScript.js"></script>



#### Ejecute la aplicación web

1.	En **Solution Explorer**, haga doble clic en **Propiedades**.
2.	En el menú lateral, haz clic en **web**.
3.	Selecciona la **Página específica**, haz clic en **...**, y luego selecciona **Index.html**. 4. Haga clic en **OK**.
4.	Haga clic en **IIS Express (Microsoft Edge)**.
5.	En Microsoft Edge, haga clic en **Get Persons**.
6.	Verifica que la tabla lista todas las personas.
7.	Cierra Microsoft Edge, y luego regresa a Visual Studio.
8.  En el menú **Debug**, haga clic en **Detener depuración**.