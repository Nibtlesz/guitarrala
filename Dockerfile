# Utiliza Node.js 22 como base
FROM node:22-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto donde correrá la aplicación (Vite usa el puerto 3000 por defecto)
EXPOSE 3000

# Comando por defecto para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]