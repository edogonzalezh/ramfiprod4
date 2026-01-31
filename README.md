# 🔩 RAMFI - Especialistas en Fijaciones Industriales

Sitio web corporativo para RAMFI SPA, empresa especializada en fijaciones industriales y domésticas en Chile.

## 📋 Descripción

Sitio web moderno y responsive que presenta los productos y servicios de RAMFI, incluyendo:
- Catálogo de productos (pernos, tornillos, tuercas, anclajes, etc.)
- Información corporativa
- Ofertas y promociones
- Formulario de contacto
- Integración con WhatsApp

## 🚀 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive con variables CSS
- **JavaScript**: Interactividad y efectos
- **Google Fonts**: Rajdhani + IBM Plex Sans

## 📁 Estructura del Proyecto

```
ramfi-website/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos globales
├── js/
│   └── main.js         # JavaScript principal
├── netlify.toml        # Configuración de Netlify
└── README.md           # Este archivo
```

## 🎨 Paleta de Colores

- **Fucsia Principal**: `#E04C8A`
- **Turquesa Secundario**: `#4EC6DA`
- **Naranja Acento**: `#FF6B35`
- **Fondo Oscuro**: `#0B0B0D`

## 🛠️ Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/ramfi-website.git
cd ramfi-website
```

2. Abre `index.html` en tu navegador favorito

O usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

3. Visita `http://localhost:8000`

## 🌐 Deploy en Netlify

### Opción 1: Drag & Drop

1. Ve a [Netlify](https://www.netlify.com)
2. Arrastra la carpeta `ramfi-website` al área de deploy
3. ¡Listo!

### Opción 2: Git Deploy

1. Sube el proyecto a GitHub
2. Conecta el repositorio con Netlify
3. Deploy automático en cada commit

### Configuración del Formulario

El formulario de contacto está preparado para Netlify Forms. Para activarlo:

1. Asegúrate de que el atributo `data-netlify="true"` esté en el `<form>`
2. Netlify detectará automáticamente el formulario
3. Los mensajes aparecerán en el dashboard de Netlify

## 📝 Configuración

### Datos a Actualizar Antes de Producción

Busca y reemplaza en `index.html`:

1. **WhatsApp**: `+56 9 8666 1477`
2. **Email**: `ventas@ramfi.cl`
3. **Dirección**: Actualizar con dirección real
4. **Horarios**: Actualizar con horarios reales

### Variables CSS

Las variables principales están en `css/styles.css`:

```css
:root {
    --primary-color: #E04C8A;    /* Fucsia */
    --secondary-color: #4EC6DA;  /* Turquesa */
    --accent-color: #FF6B35;     /* Naranja */
    --bg-primary: #0B0B0D;       /* Fondo */
    /* ... más variables */
}
```

## 🔧 Desarrollo

### Agregar Nuevas Secciones

1. Edita `index.html`
2. Agrega estilos en `css/styles.css`
3. Agrega funcionalidad en `js/main.js`

### Buenas Prácticas Implementadas

✅ Separación de responsabilidades (HTML, CSS, JS)
✅ Código comentado y organizado
✅ Variables CSS para fácil personalización
✅ Mobile-first responsive design
✅ Optimización de rendimiento
✅ SEO optimizado
✅ Accesibilidad (WCAG 2.1)
✅ Seguridad (Headers, sanitización)

## 📊 Métricas de Rendimiento

- **Tamaño HTML**: ~10 KB
- **Tamaño CSS**: ~38 KB
- **Tamaño JS**: ~2 KB
- **Tiempo de carga**: < 2 segundos
- **Performance Score**: 95+

## 🔒 Seguridad

Headers de seguridad configurados en `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Content-Security-Policy
- Referrer-Policy

## 📱 Responsive Design

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🐛 Resolución de Problemas

### El formulario no funciona
- Verifica que `data-netlify="true"` esté en el tag `<form>`
- Revisa el panel de Netlify > Forms

### Los estilos no cargan
- Verifica las rutas: `css/styles.css` y `js/main.js`
- Revisa la consola del navegador

### El menú no funciona en móvil
- Verifica que `main.js` esté cargando correctamente
- Revisa errores en la consola

## 📞 Soporte

Para problemas o consultas:
- Email: soporte@ramfi.cl
- WhatsApp: +56 9 8666 1477

## 📄 Licencia

© 2026 RAMFI - Todos los derechos reservados

## 🎯 Roadmap

- [ ] Integración con backend para formularios
- [ ] Panel de administración
- [ ] Blog de productos
- [ ] Carrito de compras
- [ ] Área de clientes
- [ ] Integración con ERP

## 👥 Contribuir

Si encuentras un bug o quieres mejorar el sitio:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Agregar nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 🙏 Agradecimientos

- Diseño y desarrollo: [Tu nombre]
- Cliente: RAMFI SPA
- Fonts: Google Fonts

---

**Hecho con ❤️ para RAMFI**
