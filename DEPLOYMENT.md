# 🚀 Guía de Deployment para Spitech Landing

## 📦 Pasos para Subir a Git

### 1️⃣ Preparar tu Repositorio Local

```bash
# Ver el estado actual
git status

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Spitech landing page completa"
```

### 2️⃣ Conectar con GitHub/GitLab

**Si aún NO has creado el repositorio remoto:**

1. Ve a GitHub.com o GitLab.com
2. Crea un nuevo repositorio (NO lo inicialices con README)
3. Copia la URL del repositorio

**Luego ejecuta:**

```bash
# Conectar con el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/spitech-landing.git

# Verificar que se agregó correctamente
git remote -v

# Subir los archivos
git branch -M main
git push -u origin main
```

### 3️⃣ Actualizaciones Futuras

```bash
# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub/GitLab
git push
```

---

## 🌐 Deployment en Servicios de Hosting

### Netlify (Recomendado - Más fácil)

1. Ve a [app.netlify.com](https://app.netlify.com)
2. Click en "Add new site" → "Import an existing project"
3. Conecta con GitHub/GitLab
4. Selecciona tu repositorio `spitech-landing`
5. Configuración:
   - **Build command:** (deja en blanco)
   - **Publish directory:** `public`
6. Click "Deploy site"

✅ Tu sitio estará disponible en `https://random-name.netlify.app`
✅ Puedes cambiar el dominio en Site settings

---

### Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Importa tu repositorio de GitHub
4. Configuración:
   - **Framework Preset:** Other
   - **Root Directory:** `public`
   - **Build Command:** (deja en blanco)
5. Click "Deploy"

---

### GitHub Pages (Gratis)

1. En tu repositorio de GitHub, ve a **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → Carpeta: `/public`
4. Click "Save"
5. Espera unos minutos

✅ Tu sitio estará en `https://tu-usuario.github.io/spitech-landing`

**IMPORTANTE para GitHub Pages:**
- Necesitarás ajustar las rutas de tus archivos
- Cambia `../src/` por `/spitech-landing/src/` en index.html

---

### Render

1. Ve a [render.com](https://render.com)
2. Click "New" → "Static Site"
3. Conecta tu repositorio
4. Configuración:
   - **Build Command:** (deja en blanco)
   - **Publish Directory:** `public`
5. Click "Create Static Site"

---

## ⚠️ Configuración Post-Deployment

### CORS y Google Apps Script

Si tienes problemas con el envío de formularios después del deployment:

1. Ve a tu Google Apps Script
2. En el código, asegúrate de tener:
   ```javascript
   function doPost(e) {
     // Tu código existente...
   }
   ```
3. Re-despliega el script como "Nueva implementación"
4. Actualiza la URL en `src/scripts/main.js` línea 30
5. Haz commit y push de los cambios

---

## 🔍 Verificación

Después del deployment, verifica:

- ✅ La página se carga correctamente
- ✅ Los estilos se aplican
- ✅ Las imágenes se muestran
- ✅ El formulario se abre
- ✅ El envío a Google Sheets funciona

---

## 📞 Problemas Comunes

### "404 Not Found" en archivos CSS/JS
- Verifica las rutas en `index.html`
- En GitHub Pages, usa rutas absolutas: `/spitech-landing/src/...`

### Formulario no envía datos
- Verifica la URL de Google Apps Script
- Asegúrate de que el script esté desplegado como "Aplicación web"
- Revisa que "Quién tiene acceso" sea "Cualquier usuario"

### Imágenes no se muestran
- Verifica que las rutas sean correctas
- Asegúrate de que las imágenes estén en el repositorio
- No uses rutas absolutas de tu PC local

---

## 🎉 ¡Listo!

Tu landing page está lista para el mundo. 🚀
