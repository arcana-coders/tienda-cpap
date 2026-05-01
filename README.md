# CPAP México — E-commerce de Alto Rendimiento

Este proyecto es la implementación de referencia para las tiendas e-commerce premium de Arturo Carrillo. Diseñado para escala masiva (77+ productos actualmente, meta 10k+) con un enfoque en **costo cero de mantenimiento** y **rendimiento extremo**.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Base de Datos**: Neon PostgreSQL (Serverless)
- **ORM**: Drizzle ORM
- **Estilos**: Tailwind CSS v4 + GSAP (Animaciones)
- **Pagos**: PayPal Smart Buttons (Server-side validation)
- **Infraestructura**: Desplegado en Vercel con imágenes en Cloudflare R2.

## 🛠️ Optimización y Estabilidad (Log de Ingeniería)

### Histórico de Mejoras Técnicas (Abril 2026)

Para garantizar la estabilidad del blueprint, se implementaron las siguientes mejoras tras detectar un consumo excesivo de memoria (15GB heap crash) en el entorno de desarrollo:

1.  **Estrategia ISR (Vercel Cost Optimization)**:
    - Se eliminó `force-dynamic` en favor de `revalidate = 600`.
    - Las páginas se sirven desde el CDN de Vercel, reduciendo las llamadas a la base de datos y el tiempo de ejecución de Serverless Functions a niveles mínimos.
    
2.  **Protección de Memoria (Column Projection)**:
    - Optimizamos las consultas de Drizzle en Home, Categorías y Búsqueda.
    - **Cambio**: Dejamos de pedir el objeto completo (`.select()`) para pedir solo los campos de la card (`id, titulo, precio, slug, imagenes`). 
    - **Resultado**: Evitamos la carga masiva de miles de reseñas y descripciones pesadas en las páginas de listado, estabilizando el consumo de RAM.

3.  **Remoción de Waterfalls (Pre-loading)**:
    - La carga de categorías del menú se movió del cliente (`useEffect`) al servidor (`RootLayout`). 
    - La navegación ahora es instantánea y no presenta latencia visual al cargar.

4.  **Robustez de UI y Animaciones (GSAP fromTo)**:
    - Se detectó un fallo en el escalado de opacidad de GSAP que dejaba elementos "faded" tras la hidratación en React.
    - **Lección**: Usar siempre `gsap.fromTo` en ScrollTrigger para forzar el estado final del 100%. Evitar colores de bajo contraste (grises claros) en fondos blancos para evitar la sensación de "desvanecimiento" en pantallas de alta resolución.

## 📖 Documentación Relacionada

- [Manual Maestro (Blueprint)](file:///c:/Asistente/blueprint-tienda-premium.md)
- [Catálogo de MCPs](file:///c:/Asistente/mcp_catalog.md)

---

### 🛡️ Transformación Estratégica (Mayo 2026)

Tras estabilizar el stack técnico, se realizó un pivote estratégico para pasar de un "catálogo genérico de importación" a una **"plataforma de autoridad en salud respiratoria"**.

**¿Por qué este cambio?**
El cliente objetivo (adultos 40-65 años con apnea) no busca un producto técnico; busca una solución para volver a dormir bien. La confianza es el factor determinante de compra.

#### Mejoras Realizadas:

1.  **Rediseño de Homepage (Tono de Empatía)**:
    - Se reemplazó el grid de productos tradicional por un **Hero Section** enfocado en el problema del usuario ("¿Cansado de dormir mal?").
    - Se añadieron secciones de **Educación** (síntomas/soluciones) y **Testimonios Reales** para reducir la fricción psicológica.

2.  **Ecosistema de Contenido y Autoridad**:
    - Implementación de un **Blog Educativo** (`/blog`) y una **Guía de Apnea del Sueño** (`/guia-apnea-sueno`).
    - **Uso de IA**: Se generaron imágenes fotorrealistas personalizadas para estos artículos, evitando el uso de stock genérico y reforzando la marca propia.

3.  **Consolidación de Identidad (Cpap-Mexico)**:
    - Eliminación total de la marca heredada "Respiratory Atelier".
    - Estandarización de toda la comunicación bajo la marca **Cpap-Mexico**, incluyendo correos (`contacto@cpap-mexico.com`), redes sociales (FB/IG) y páginas legales.

4.  **Optimización de Conversión (WhatsApp-First)**:
    - El botón de WhatsApp ahora incluye un **ping de animación** y un **tooltip dinámico** para guiar al usuario.
    - Mensajes prellenados específicos para iniciar una asesoría personalizada, no solo una venta.

---
*Mantenido por Rocket para Arturo Carrillo.*
