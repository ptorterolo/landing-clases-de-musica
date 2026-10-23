# Landing Page Mobile-First Pablo Torterolo - Clases de Música

Un sitio web interactivo de alto impacto, concebido con arquitectura **Mobile-First** (optimizado para navegación con pulgar, pantallas táctiles de smartphones 375px–430px y expansión fluida a escritorio) para Pablo Torterolo, músico sesionista, productor y profesor particular en Buenos Aires.

## Decisiones Críticas y Preferencias Confirmadas

> [!IMPORTANT]
> A continuación se detallan las decisiones confirmadas incluyendo la directiva de **arquitectura Mobile-First**:

- **Enfoque Mobile-First**: Diseñado primordialmente para la pantalla del celular (donde ocurre el 85%+ del tráfico de Instagram, Facebook y boca a boca musical). Áreas de toque de $\ge 48\text{px}$, navegación en la zona natural del pulgar, modal de WhatsApp tipo *Bottom Sheet* deslizable en móvil, carrusel táctil deslizable por gestos y barra de acción rápida flotante optimizada sin exceder el 15% de altura en pantalla.
- **Idioma y Tono**: Español rioplatense auténtico y profesional ("Tocá, creá y grabá tu propia música", "Clases personalizadas en CABA y Online").
- **Captura Inteligente por WhatsApp**: Modal interactivo (Bottom Sheet en móvil / modal centrado en desktop) que prepara el mensaje con los datos exactos del alumno (instrumento, nivel, modalidad y canciones preferidas) y lo envía directo al WhatsApp `+54 11 5220-7483`.
- **Discografía Curada**: Álbumes y sencillos con portadas de alta resolución, créditos específicos (guitarra, bajo, producción) y reproductor integrado de Spotify optimizado para móviles y escritorio.
- **Compatibilidad GitHub Pages**: Empaquetado estático con `base: './'` y cero dependencias de servidor.

---

## 1. Visión General y Ergonomía Móvil

- **Experiencia en Celular**: Al abrir la página desde Instagram o Facebook, el alumno ve de inmediato el video de escenario en loop con el titular épico, selector rápido de instrumentos y el botón flotante de WhatsApp siempre accesible.
- **Zona del Pulgar (Thumb Zone)**:
  - *Zona inferior (Reach natural)*: Botón flotante de WhatsApp, CTA directo de reserva y controles de reproducción.
  - *Zona media (Scroll & Exploración)*: Pilares de clase, carrusel táctil de fotos, tarjetas de discografía y reproductor de Spotify.
  - *Zona superior (Lectura)*: Marca personal "PABLO TORTEROLO", insignias de modalidades y menú compacto.

---

## 2. Experiencia de Usuario y Diseño Visual

### Paleta de Colores (Flyer Oficial)
- **Fondo Dominante (60%)**: `#0A0B10` y `#12131A` (estética de escenario oscuro y estudio).
- **Superficies y Tarjetas (30%)**: `#181A24` y `#202330` con bordes sutiles en `rgba(255, 255, 255, 0.08)`.
- **Acento Eléctrico (10%)**: Amarillo cálido de recital (`#F59E0B` y `#FBBF24`), presente en los títulos destacados, insignias de instrumentos y botones de acción.

### Jerarquía de Secciones

1. **Header Móvil / Top Bar**:
   - Barra compacta (`h-14`) fija con desenfoque de fondo (`backdrop-blur-md`).
   - Wordmark `"PABLO TORTEROLO"` a la izquierda y botón de contacto directo a la derecha. Menú deslizable para accesos directos.
2. **Hero Section con Video de Escenario**:
   - Video de fondo en loop (`autoplay`, `muted`, `playsinline`, `loop`) con overlay de contraste y control táctil para pausar/silenciar.
   - Titular principal: **"TOCÁ, CREÁ Y GRABÁ TU PROPIA MÚSICA"**.
   - Selector táctil de instrumentos: **GUITARRA · BAJO · PIANO · PRODUCCIÓN**.
   - Indicador de modalidades: *Online · Presencial · A Domicilio en CABA*.
   - Botón primario prominente: *"Consultar por Clases"*.
3. **Sección Pilares + Carrusel Táctil**:
   - En móvil: Pila vertical armónica comenzando por los 4 pilares clave (*Clases personalizadas*, *De cero a tu primera canción*, *Sacá tus temas favoritos*, *Grabá tu primer cover*), seguido inmediatamente por el carrusel táctil interactivo con soporte de deslizamiento swipe y controles grandes.
   - En desktop (`lg:`): Se expande a la disposición solicitada de contenido a la izquierda y carrusel a la derecha.
4. **Discografía & Grabaciones en Spotify**:
   - Tarjetas de álbumes y sencillos con portadas táctiles de aspecto 1:1, créditos de rol y botón de reproducción / apertura en Spotify.
   - Reproductor embebido de Spotify integrado sin salir de la página.
5. **Sobre Pablo & Enfoque de Estudio**:
   - Imagen en vivo del afiche (`PabloClasesMusica_b3a22499.png`), trayectoria como músico sesionista y docente, equipamiento disponible en el estudio para los alumnos.
6. **Redes Sociales & Canales Oficiales**:
   - Botones táctiles grandes para Instagram (`@pablotorterologtr`) y Facebook (`@pdtclasesdeguitarra`).
7. **Barra Flotante de WhatsApp**:
   - Botón flotante inferior derecho con badge de estado en línea ("Respondé en minutos").
   - Al tocarlo, despliega un *Bottom Sheet* con selector visual de 4 pasos (Instrumento, Nivel, Modalidad, Canción preferida) que compone el enlace de WhatsApp listo para enviar.

---

## 3. Decisiones de Producto y Arquitectura

- **Bottom Sheet en Móviles**: En viewports `< 768px`, el diálogo de consulta surge desde la parte inferior con arrastre táctil natural, garantizando máxima facilidad con una sola mano. En pantallas de escritorio se convierte en modal centrado elegante.
- **Rendimiento y Video Móvil**: El video cuenta con atributo `playsinline` y `poster` estático de alta calidad para evitar demoras en redes móviles 4G/5G, ahorrando datos si el usuario lo prefiere.
- **GitHub Pages Ready**: Todo el código se empaqueta de forma estática con rutas relativas (`./`), compatible 100% con GitHub Pages sin requerir Node en tiempo de ejecución.

---

## 4. Arquitectura Técnica y Diagrama

```
┌─────────────────────────────────────────────────────────────┐
│                   App.tsx (Mobile-First)                    │
│                                                             │
│  [Top Mobile Bar] : Logo + Botón WhatsApp Rápido            │
│                                                             │
│  [Hero Section]   : Video loop de escenario                 │
│                     Titular "TOCÁ, CREÁ Y GRABÁ"             │
│                     Tags de Instrumentos & Modalidades      │
│                     CTA Principal con botón táctil >=48px   │
│                                                             │
│  [Mobile Flow]    : Pilares Pedagógicos                     │
│                     Carrusel Táctil (Swipe + Dots + Flechas)│
│                     (Desktop: 2 columnas Izq/Der)           │
│                                                             │
│  [Discografía]    : Grid de Portadas de Álbumes             │
│                     Preview Player Embebido de Spotify      │
│                     Créditos de Guitarras / Producción      │
│                                                             │
│  [Bio & Redes]    : Foto Oficial en Vivo                    │
│                     Instagram & Facebook Links Directos     │
│                                                             │
│  [Bottom Sheet]   : Floating WhatsApp CTA -> Formulario     │
│                     (Instrumento + Nivel + Modalidad)       │
└─────────────────────────────────────────────────────────────┘
```

### Plan de Verificación
1. **Verificación Mobile**: Comprobación en dimensiones móviles (375px iPhone SE, 390px iPhone 14/15, 412px Pixel/Samsung) asegurando que no haya desbordamiento horizontal y que los botones cumplan el tamaño mínimo táctil.
2. **Verificación Desktop**: Comprobación en 1440px verificando la distribución de 2 columnas de contenido + carrusel.
3. **Flujo de WhatsApp**: Validar la generación dinámica de la URL `https://wa.me/541152207483?text=...` con caracteres codificados y mensaje amigable.
4. **Compilación**: Ejecutar `compile_applet` para confirmar la compilación exitosa.
