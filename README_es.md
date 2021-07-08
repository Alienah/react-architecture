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
