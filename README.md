# Spitech Landing Page

Landing page moderna construida con HTML, CSS y JavaScript vanilla.

## 📁 Estructura del Proyecto

```
spitech-landing/
├── public/              # Archivos públicos
│   └── index.html      # Página principal
├── src/
│   ├── styles/         # Estilos CSS
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── main.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── scripts/        # JavaScript
│   │   ├── utils.js
│   │   ├── components.js
│   │   ├── priceCalculator.js
│   │   └── main.js
│   ├── assets/         # Recursos estáticos
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   └── components/     # Componentes HTML (futuro)
├── config/             # Configuración
└── package.json
```

## 🚀 Cómo empezar

1. Clona el repositorio
2. Abre `public/index.html` directamente en tu navegador
3. O utiliza Live Server / cualquier servidor local para mejor experiencia de desarrollo

## 🔧 Configuración

### Variables de Entorno (Opcional)

Si deseas usar variables de entorno para la URL de Google Apps Script:

1. Copia `.env.example` a `.env`
2. Reemplaza la URL con tu URL de Google Apps Script real

**Nota:** El archivo `.env` está en `.gitignore` y NO se subirá al repositorio por seguridad.

## 📦 Deployment

Este proyecto está listo para deployment en cualquier servicio de hosting estático:

### Netlify
1. Conecta tu repositorio
2. Build command: `(deja en blanco)`
3. Publish directory: `public`

### Vercel
1. Importa tu repositorio
2. Framework Preset: `Other`
3. Root Directory: `public`

### GitHub Pages
1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` → carpeta `/public`

### Render / Railway / Cloudflare Pages
- Todos soportan HTML estático
- Solo apunta a la carpeta `public/`

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

