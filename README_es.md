# React architectura

Partimos del boilerplate de [leomcode](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/04-frameworks/01-react/05-arquitectura):

- Contiene configuraciones de desarrollo, producción y estadisticas.
- Contiene el plumbing para soportar React.
- Prettier, reglas de linter así como hot loader.

## Construyendo una arquitectura mantenible

1. Primeras instalaciones

```
npm install react-router-dom --save
```

```
npm install @types/react-router-dom --save-dev
```

2. Estructura básica:

- common
- common-app
- core
- layout
- pods
- scenes

3. Creando scenes

Inicialmente solo definimos qué escenas queremos tener de momento y añadimos unfichero con un componente vacío para delimitar esas escenas.

4. Creando el core

Iniciamos con las rutas

- Creamos la carpeta router: y definimos las rutas tanto de switch como de link

5. Definimos alias para las carpetas:

```json
//tsconfig
"baseUrl": "./src/",
"paths": {
  "core": ["core"],
  "scenes": ["scenes"]
}
```

```js
//webpack config

resolve: {
  extensions: ['.js', '.ts', '.tsx'],
  alias: {
    core: helpers.resolveFromRootPath('src/core'),
    scenes: helpers.resolveFromRootPath('src/scenes'),
  },
},
```

Y ya podríamos acceder a los archivos dentro de scenes con solo poner ' scenes '
