# Instalar ESLint y configurarlo

1. posicionarse en la carpeta raiz del proyecto

   > cd nombre-carpeta-proyecto
   >
2. inicializar proyecto Node

   > npm init -y
   >
3. instalar ESLint

   > npm install eslint --save-dev
   >
4. crear configuración

   touch eslint.config.js
5. configuracion básica global

   ```javascript
   export default [
   {
   files: ["**/*.js"], languageOptions: { ecmaVersion: 6
   },
   rules: { semi: ["error", "always"] } } ];
   ```
6. agregar script y type a package.json
   type: le indico que uso ES Module y no ComminJS

   ```javascript
   {
     "type": "module",
     "devDependencies": {
       "eslint": "^10.2.0"
     },
     "scripts": {
       "lint": "eslint ."
     }
   }
   ```
7. ejecutar

   ```javascript
   npm run lint
   ```
8. ejecutar ESLint

   npx eslint nombre-carpeta-especifica-a-ejecutar

   ---

   indicarle a ESLint que solucione los errores:


   > npx eslint nombre-archivo --fix
   >
