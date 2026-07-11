# TECHNICAL_PLAN.md
**Proyecto:** Reproductor Web3 para Entretenimiento  
**Fase:** MVP - Reproductor Audiovisual  
**Fecha:** $(Get-Date -Format "yyyy-MM-dd")

---

## 1. Resumen Ejecutivo

| Aspecto | Decisión |
|---------|----------|
| **Alcance** | Solo reproductor audiovisual |
| **Videos** | 20 (contenido de terceros) |
| **Autenticación** | Anónima (sin registro) |
| **Tipo** | Demo funcional |
| **Stack** | HTML5 + CSS3 + JavaScript vanilla |

---

## 2. Arquitectura del Sistema

```
reproductorVideo/
├── index.html              # Página principal
├── styles.css              # Estilos globales
├── scripts.js              # Lógica del reproductor
├── contents/
│   ├── img/               # Imágenes del proyecto
│   │   └── skaJazz.JPG    # Referencia visual
│   └── video/             # Videos de prueba (20)
│       ├── video1.mp4
│       ├── video2.mp4
│       └── ...
├── components/             # Componentes modulares
│   ├── player.js          # Clase reproductor
│   ├── controls.js        # Controles de reproducción
│   └── playlist.js        # Lista de reproducción
└── utils/                  # Utilidades
    └── helpers.js         # Funciones auxiliares
```

---

## 3. Componentes del MVP

### 3.1 Reproductor Base
| Característica | Descripción |
|----------------|-------------|
| **Reproducción** | Play/Pausa con un clic |
| **Volumen** | Control deslizante + mute |
| **Progreso** | Barra navegable con tiempo |
| **Pantalla** | Fullscreen disponible |
| **Velocidad** | 0.5x, 1x, 1.5x, 2x |

### 3.2 Lista de Reproducción
| Característica | Descripción |
|----------------|-------------|
| **Navegación** | Lista lateral con thumbnails |
| **Selección** | Clic para cambiar video |
| **Indicador** | Video actual resaltado |
| **Contador** | Total de videos disponibles |

### 3.3 Interfaz de Usuario
| Elemento | Estilo |
|----------|--------|
| **Fondo** | Azul eléctrico (#0066FF) |
| **Controles** | Blanco con hover amarillo |
| **Tipografía** | Sans-serif moderna |
| **Iconos** | Ionicons |

---

## 4. Funcionalidades Detalladas

### 4.1 Controles de Video
```javascript
// Funcionalidades mínimas
- playPause()
- toggleMute()
- setVolume(value)
- seekTo(time)
- setPlaybackSpeed(rate)
- toggleFullscreen()
```

### 4.2 Eventos del Reproductor
| Evento | Acción |
|--------|--------|
| `loadedmetadata` | Actualizar duración total |
| `timeupdate` | Actualizar barra de progreso |
| `ended` | Auto-reproducir siguiente |
| `error` | Mostrar mensaje de error |

### 4.3 Responsive Design
| Dispositivo | Comportamiento |
|-------------|----------------|
| **Desktop** | Controles completos |
| **Tablet** | Controles adaptados |
| **Móvil** | Controles simplificados |

---

## 5. Contenido de Prueba

### Videos Recomendados (Libre de Derechos)
| Fuente | Tipo | Cantidad |
|--------|------|----------|
| Pexels Videos | Naturaleza, ciudad | 8 |
| Pixabay Videos | Abstracto, gente | 7 |
| Coverr | Texturas, fondos | 5 |

### Formato Óptimo
- **Resolución:** 1280x720 (720p)
- **Codec:** H.264
- **Contenedor:** MP4
- **Tamaño máximo:** 50MB por video

---

## 6. Paleta de Colores (MVP)

| Uso | Color | Hex |
|-----|-------|-----|
| **Primario** | Azul eléctrico | #0066FF |
| **Secundario** | Blanco | #FFFFFF |
| **Acento** | Amarillo | #FFD700 |
| **Fondo** | Azul oscuro | #001A33 |
| **Texto** | Blanco | #FFFFFF |

---

## 7. Iconografía

### Ionicons a Utilizar
| Icono | Uso |
|-------|-----|
| `play` | Reproducir |
| `pause` | Pausar |
| `volume-high` | Volumen alto |
| `volume-mute` | Silenciar |
| `expand` | Pantalla completa |
| `contract` | Salir de pantalla completa |
| `musical-notes` | Lista de reproducción |
| `film` | Selector de videos |

---

## 8. Estructura de Datos

### Objeto Video
```javascript
{
  id: 1,
  title: "Video Title",
  src: "contents/video/video1.mp4",
  poster: "contents/img/thumb1.jpg",
  duration: "3:45",
  category: "naturaleza"
}
```

### Array de Videos
```javascript
const videos = [
  { id: 1, title: "Playa Tropical", src: "...", poster: "..." },
  { id: 2, title: "Ciudad Nocturna", src: "...", poster: "..." },
  // ... 20 videos
];
```

---

## 9. Flujo de Usuario

```
1. Usuario carga página
   ↓
2. Se muestra primer video (en pausa)
   ↓
3. Usuario hace clic en Play
   ↓
4. Video se reproduce
   ↓
5. Controles aparecen al hover
   ↓
6. Usuario puede:
   - Cambiar video (lista lateral)
   - Ajustar volumen
   - Navegar barra de progreso
   - Activar pantalla completa
   - Cambiar velocidad
   ↓
7. Al terminar video → siguiente automático
```

---

## 10. Criterios de Aceptación (MVP)

| # | Criterio | Estado |
|---|----------|--------|
| 1 | Play/Pausa funcional | ⏳ |
| 2 | Control de volumen | ⏳ |
| 3 | Barra de progreso navegable | ⏳ |
| 4 | Pantalla completa | ⏳ |
| 5 | Tiempo actual/duración total | ⏳ |
| 6 | Lista de 20 videos | ⏳ |
| 7 | Cambio de video funcional | ⏳ |
| 8 | Diseño responsive | ⏳ |
| 9 | Colores azul eléctrico + blanco/amarillo | ⏳ |
| 10 | Iconos ionicons | ⏳ |

---

## 11. Validación

### Antes de Cada Cambio
- [ ] ¿Respeta paleta de colores?
- [ ] ¿Mantiene responsive?
- [ ] ¿Funciona en Chrome, Firefox, Safari?
- [ ] ¿No rompe funcionalidad existente?

### Testing Manual
- [ ] Probar en desktop
- [ ] Probar en tablet
- [ ] Probar en móvil
- [ ] Verificar accesibilidad básica

---

## 12. Próximos Pasos (Post-MVP)

| Fase | Módulo | Dependencias |
|------|--------|--------------|
| 2 | Hotspots | Reproductor base |
| 3 | Coleccionables | Sistema de usuario |
| 4 | Gamificación | Coleccionables |
| 5 | Panel Usuario | Gamificación |
| 6 | Recomendaciones | Datos de usuario |

---

**Estado:** Listo para implementación  
**Archivo fuente:** SPECIFICATIONS.md + CLARIFICATIONS.md
