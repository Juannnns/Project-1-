# Sistema de reserva para Clases
Es una Single Page Application (SPA) utilizando JavaScript Vanilla y JSON Server. Con el implemento de roles:
* __Admin:__ El admin puede crear, editar y eliminar clases.
* __User:__ El user solo puede ver y reservar un lugar, siempre y cuando el cupo no esté lleno.


## Características
* Rutas protegidas según el rol del user. 
* Validación de login.
* Registros de reservas or usuario.
* Estilos para diferenciar roles y vistas.
* Impide más reservas que los cupos que están disponibles.

## Credenciales de prueba
* User admin:
    * User: admin
    * Password: admin1234

* User:
    * User: User
    * Password: user1234

## Requisitos
Algunos requisitos que tiene este proyectos son:

__1.__ Tener un navegador compatible con módulos ES

__2.__ Tener `node.js` en la última versión

__Primero actualizar el sistema__ 
```bash
sudo apt update && sudo apt upgrade -y
```

__Instalar Node.js y npm__
```bash
sudo apt install nodejs npm
```

__Verificar la instalación del Node.js__
```bash
node -v
```

__Instalar NVM__
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
```bash
source ~/.bashrc
```
```bash
nvm -v
```
__Instalar Node.js con NVM__
```bash
nvm install node 22.14.0
```


## Instalación
```bash
# 1. Clonar este repositorio
git clone https://github.com/Juannnns/Project-1-.git

# 2. Instalar las dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```