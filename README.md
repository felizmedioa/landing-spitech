# Spitech Landing Page

Landing page moderna construida con HTML, CSS y JavaScript vanilla.

## 📁 Estructura del Proyecto

```
landing-spitech/
├── index.html          # Página principal
├── package.json        # Configuración del proyecto
├── DEPLOYMENT.md       # Guía de despliegue
├── .gitignore          # Archivos ignorados por Git
└── src/
    ├── styles/         # Estilos CSS
    │   ├── reset.css
    │   ├── main.css
    │   ├── components.css
    │   ├── dialogstyle.css
    │   └── responsive.css
    ├── scripts/        # JavaScript
    │   ├── utils.js
    │   ├── components.js
    │   ├── priceCalculator.js
    │   ├── modalThanks.js
    │   ├── notify.js
    │   └── main.js
    └── assets/         # Recursos estáticos
        ├── images/
        └── icons/
```

## 🚀 Cómo empezar

1. Clona el repositorio
2. Abre `index.html` directamente en tu navegador
3. O utiliza Live Server / cualquier servidor local para mejor experiencia de desarrollo

## 🔧 Configuración

### Variables de Entorno (Opcional)

Si deseas usar variables de entorno para la URL de Google Apps Script:

1. Copia `.env.example` a `.env`
2. Reemplaza la URL con tu URL de Google Apps Script real

**Nota:** El archivo `.env` está en `.gitignore` y NO se subirá al repositorio por seguridad.

## 📦 Deployment

Para instrucciones detalladas de deployment, consulta el archivo [`DEPLOYMENT.md`](DEPLOYMENT.md).

Este proyecto está listo para deployment en cualquier servicio de hosting estático:

### Netlify / Vercel / GitHub Pages
El archivo `index.html` está en la raíz del proyecto, lo que facilita el deployment. Simplemente apunta a la raíz del repositorio.

### Render / Railway / Cloudflare Pages
- Todos soportan HTML estático
- Root directory: `/` (raíz del proyecto)

## ⚙️ Configuración de Google Apps Script

El formulario envía datos a Google Sheets mediante Google Apps Script. Asegúrate de:

1. Tener el script configurado en Google Apps Script
2. Actualizar la URL en `src/scripts/main.js` (línea 30)
3. Verificar que el nombre de la hoja coincida con tu Google Sheet

## 📝 Notas

- La estructura está preparada para escalar en el futuro
- Los archivos están organizados de forma modular
- Proyecto sin dependencias externas (vanilla JS)
- Compatible con ES6 modules

## 📄 Licencia

MIT

