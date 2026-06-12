# QA learning
## Consola
### Comandos
- pwd: imprimir la ruta actual
- mkdir: crear una carpeta
- cd: cambiar de ruta y poner rutas completas
    - cd .. : devolverme una carpeta y se puede concatenar con /..
    - cd ~ : me envia a la ruta raiz del equipo
- ls: listar lo que hay en la carpeta
    - ls -l: listar lo que hay en la carpeta con los detalles de cada archivo
    - ls -a: lista lo que hay en la carpeta con archivos ocultos
    - ls -la: concatenar los dos comandos 
- touch: para crear archivos
- cp: copiar un archivo y carpetas (cp archivo copiar nuevo archivo)
- mv: mover archivos o carpetas (mv archivo a mover nueva ruta)
- cat: mostrar el contenido del archivo
- rm : eliminar archivos y carpetas vacias
  - rm -r : elimina carpetas de manera recursiva
- echo : imprime variables de entorno del sistema
## Git
- git init: para iniciar el proyecto
- git status: inprime el estado de los archivos en el repositorio
   - M = modificado
   - U = nuevos, aun no existen en el repositorio 
   - D = eliminado
- git clone: clona un repositorio en tu equipo local
- git branch: para ver las ramas que hay en el repositorio local
   - git branch -r: ver las ramas que hay en repositorio remoto
   - git branch -d: borrar una rama en el repositorio local
- git fetch: trae la informacion nueva del repositorio remoto, sin modificar el repositorio local
- git switch: cambiar de rama
   - git switch --track:crear una nueva rama desde una rama remota
- git stash: guarda temporalmente lo cambios de mi rama, que un no se quiere hacer commit 
   - git stash pop:aplicar los ultimos cambios guardados en la rama local y elimina el stash de la lista