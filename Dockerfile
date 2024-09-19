# Usa la imagen base de Node.js 22 en su versión Alpine
FROM node:22 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente al contenedor
COPY . .

#Construir el proyecto
RUN npm run build

#Etapa 2: Servir la aplicación
FROM nginx:stable-alpine

# Copiar los archivos de build generados en la etapa anterior al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto en el que corre Vite
EXPOSE 80

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["nginx", "-g", "daemon off;"]