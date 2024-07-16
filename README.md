# Instrucciones para Descargar y Ejecutar la aplicación web

1. **Descarga del Repositorio**
```bash
git clone https://github.com/Angeltp629/ft_brickbro_angeltorresperez.git
```

2. **Crear fichero .env.local e instalar dependencias**
```bash
cd ft_brickbro_angeltorresperez

# Crea el fichero .env.local en la raiz del proyecto y sustituye la API de Google por la tuya
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_de_google

# Instalar las dependencias
npm install
```

3. **Ejecutar servidor**
```bash
# Iniciar servidor
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

4. **Abre el navegador y busca http://localhost:3000**