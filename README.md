# React Boilerplate

Poniendo todo el conocimiento aprendido en la clase CC3004 del año 2018, la realización del proyecto 1 es la integración de todo este conocimiento en un único boilerplate de react. 

# ¿Qué es un Boilerplate?
En computación, un boilerplate es una unidad de escritura que puede ser reusada múltiples veces para diferentes propósitos. El termino se adhiere para código reusable. Se deriva de la manifactura ya que un boilerplate es un pedazo de metal que era enrollado para las calderas de vapor. El boilerplate es de acero, lo cual permite decir que ha sido probado y es una estructura segura de código y además que es bastante flexible para realizar el trabajoque se le asigno. Tomemoslo como un formato pero de código que tiene a su cargo. En este repositorio, se tiene un boilerplate de un contador de clicks que hace uso de Server Side Render y de React para lograrlo.  

# ¿Qué es React? 
[React](https://reactjs.org/) es una librería del lenguaje JavaScript que se enfoca en el desarrollo de interfaces de usuario. Ha permitido a programadores diseñar vistas simples de estados de aplicaciones web y renderizar los componentes que cambian a medida que se actualiza la aplicaciñn. 

# Content
- React: 
- Webpack: 
- Babel: 
- ESlint: 
- Server side rendering"

# Instalación
Cabe aclarar que le demo funcionara para sistemas linux. Esto es por una instruccion dentro de package.json 
```
"start-dev": "NODE_ENV=development webpack -w & NODE_ENV=development node server.js",
```
Para la cual, en Windows, se tendria que poner como: 
```
"start-dev": "SET NODE_ENV=development webpack -w & SET NODE_ENV=development node server.js",
```
Por lo cual, y dado que la computadora donde fue creado tiene como Sistema Operativo Linux, se decidio tomar la primera opcion y se anima al usuario a cambiarlo de ser necesario para utilizarlo en otro Sistema Operativo

1. Asegurarse de tener instalado [npm](https://www.npmjs.com) para el manejo de paquetes a usar. 

2. Abrir la consola, ya sea windows con cmd o en linux y mac con Bash.

3. Instalar los paquetes del proyecto.
```
npm install
```

4. Correr la aplicación.
```
npm run start-dev
```

5. Abrir la dirección en el browser de su gusto. 
```
localhost:3000
```
