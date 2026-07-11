# TASKS.md
**Proyecto:** Reproductor Web3 para Entretenimiento  
**Fase:** MVP - Reproductor Audiovisual  
**Fecha:** $(Get-Date -Format "yyyy-MM-dd")

---

## 📊 Resumen de Tareas

| Métrica | Valor |
|---------|-------|
| **Total tareas** | 25 |
| **Secuenciales** | 18 |
| **Paralelas** | 7 |
| **Tiempo estimado** | 4-6 horas |

---

## 🔄 Diagrama de Dependencias

```
[1.1 Estructura directorios]
    ↓
[1.2 Crear index.html] ──→ [1.3 Crear styles.css]
    ↓                              ↓
[1.4 Crear scripts.js] ←──────────┘
    ↓
[2.1 Crear player.js]
    ↓
[2.2 Crear controls.js]
    ↓
[2.3 Crear playlist.js]
    ↓
[3.1 Crear helpers.js]
    ↓
[4.1-4.5 Obtener videos] (PARALELO)
    ↓
[5.1 Integrar componentes]
    ↓
[5.2 Testing]
    ↓
[6.1-6.5 Validación] (PARALELO)
```

---

## 📋 Lista de Tareas

### FASE 1: Estructura Base

| ID | Tarea | Estado | Dependencias | Archivos | Tipo |
|----|-------|--------|--------------|----------|------|
| 1.1 | Crear estructura de directorios | ⏳ | Ninguna | `components/`, `utils/`, `contents/video/`, `contents/img/` | Secuencial |
| 1.2 | Crear index.html | ⏳ | 1.1 | `index.html` | Secuencial |
| 1.3 | Crear styles.css | ⏳ | 1.2 | `styles.css` | Secuencial |
| 1.4 | Crear scripts.js | ⏳ | 1.3 | `scripts.js` | Secuencial |

---

### FASE 2: Componentes JavaScript

| ID | Tarea | Estado | Dependencias | Archivos | Tipo |
|----|-------|--------|--------------|----------|------|
| 2.1 | Crear clase Player | ⏳ | 1.4 | `components/player.js` | Secuencial |
| 2.2 | Crear módulo Controls | ⏳ | 2.1 | `components/controls.js` | Secuencial |
| 2.3 | Crear módulo Playlist | ⏳ | 2.2 | `components/playlist.js` | Secuencial |

---

### FASE 3: Utilidades

| ID | Tarea | Estado | Dependencias | Archivos | Tipo |
|----|-------|--------|--------------|----------|------|
| 3.1 | Crear helpers.js | ⏳ | 2.3 | `utils/helpers.js` | Secuencial |

---

### FASE 4: Contenido Multimedia

| ID | Tarea | Estado | Dependencias | Archivos | Tipo |
|----|-------|--------|--------------|----------|------|
| 4.1 | Obtener videos de Pexels (8) | ⏳ | 1.1 | `contents/video/pexels-*.mp4` | **Paralelo** |
| 4.2 | Obtener videos de Pixabay (7) | ⏳ | 1.1 | `contents/video/pixabay-*.mp4` | **Paralelo** |
| 4.3 | Obtener videos de Coverr (5) | ⏳ | 1.1 | `contents/video/coverr-*.mp4` | **Paralelo** |
| 4.4 | Crear thumbnails para videos | ⏳ | 4.1, 4.2, 4.3 | `contents/img/thumb-*.jpg` | **Paralelo** |
| 4.5 | Crear array de datos videos | ⏳ | 4.4 | `scripts.js` (línea 20-50) | Secuencial |

---

### FASE 5: Integración

| ID | Tarea | Estado | Dependencias | Archivos | Tipo |
|----|-------|--------|--------------|----------|------|
| 5.1 | Integrar componentes en index.html | ⏳ | 3.1, 4.5 | `index.html` | Secuencial |
| 5.2 | Probar funcionalidad básica | ⏳ | 5.1 | Ninguno | Secuencial |
| 5.3 | Ajustar estilos responsive | ⏳ | 5.2 | `styles.css` | Secuencial |

---

### FASE 6: Validación

| ID | Tarea | Estado | Dependencias | Archivos | Tipo |
|----|-------|--------|--------------|----------|------|
| 6.1 | Probar Play/Pausa | ⏳ | 5.3 | Ninguno | **Paralelo** |
| 6.2 | Probar control de volumen | ⏳ | 5.3 | Ninguno | **Paralelo** |
| 6.3 | Probar barra de progreso | ⏳ | 5.3 | Ninguno | **Paralelo** |
| 6.4 | Probar pantalla completa | ⏳ | 5.3 | Ninguno | **Paralelo** |
| 6.5 | Probar cambio de video | ⏳ | 5.3 | Ninguno | **Paralelo** |

---

## 📁 Rutas de Archivos

### Archivos a Crear
```
reproductorVideo/
├── index.html                    # Tarea 1.2
├── styles.css                    # Tarea 1.3
├── scripts.js                    # Tarea 1.4
├── components/
│   ├── player.js                 # Tarea 2.1
│   ├── controls.js               # Tarea 2.2
│   └── playlist.js               # Tarea 2.3
├── utils/
│   └── helpers.js                # Tarea 3.1
├── contents/
│   ├── video/
│   │   ├── pexels-01.mp4         # Tarea 4.1
│   │   ├── pexels-02.mp4         # Tarea 4.1
│   │   ├── pexels-03.mp4         # Tarea 4.1
│   │   ├── pexels-04.mp4         # Tarea 4.1
│   │   ├── pexels-05.mp4         # Tarea 4.1
│   │   ├── pexels-06.mp4         # Tarea 4.1
│   │   ├── pexels-07.mp4         # Tarea 4.1
│   │   ├── pexels-08.mp4         # Tarea 4.1
│   │   ├── pixabay-01.mp4        # Tarea 4.2
│   │   ├── pixabay-02.mp4        # Tarea 4.2
│   │   ├── pixabay-03.mp4        # Tarea 4.2
│   │   ├── pixabay-04.mp4        # Tarea 4.2
│   │   ├── pixabay-05.mp4        # Tarea 4.2
│   │   ├── pixabay-06.mp4        # Tarea 4.2
│   │   ├── pixabay-07.mp4        # Tarea 4.2
│   │   ├── coverr-01.mp4         # Tarea 4.3
│   │   ├── coverr-02.mp4         # Tarea 4.3
│   │   ├── coverr-03.mp4         # Tarea 4.3
│   │   ├── coverr-04.mp4         # Tarea 4.3
│   │   └── coverr-05.mp4         # Tarea 4.3
│   └── img/
│       ├── thumb-01.jpg          # Tarea 4.4
│       ├── thumb-02.jpg          # Tarea 4.4
│       ├── ... (20 thumbnails)
│       └── thumb-20.jpg          # Tarea 4.4
```

### Archivos Existentes (No Modificar)
```
reproductorVideo/
├── CONSTITUTION.md
├── PRINCIPLES.md
├── SPECIFICATIONS.md
├── CLARIFICATIONS.md
├── TECHNICAL_PLAN.md
├── QUICK_REFERENCE.md
├── TASKS.md                      # Este archivo
└── AGENTS.md
```

---

## ⏱️ Estimación de Tiempo

| Fase | Tareas | Tiempo Estimado |
|------|--------|-----------------|
| Fase 1: Estructura Base | 4 | 30 min |
| Fase 2: Componentes JS | 3 | 90 min |
| Fase 3: Utilidades | 1 | 15 min |
| Fase 4: Contenido | 5 | 60 min (paralelo: 20 min) |
| Fase 5: Integración | 3 | 45 min |
| Fase 6: Validación | 5 | 30 min (paralelo: 10 min) |
| **TOTAL** | **25** | **~4 horas** |

---

## 🎯 Criterios de Completado por Fase

### Fase 1 ✅
- [ ] Directorios creados
- [ ] index.html funcional
- [ ] styles.css con paleta correcta
- [ ] scripts.js con estructura base

### Fase 2 ✅
- [ ] player.js con métodos play/pause/volume
- [ ] controls.js con eventos
- [ ] playlist.js con array de videos

### Fase 3 ✅
- [ ] helpers.js con utilidades

### Fase 4 ✅
- [ ] 20 videos descargados
- [ ] Thumbnails generados
- [ ] Array de datos completado

### Fase 5 ✅
- [ ] Componentes integrados
- [ ] Reproductor funcional
- [ ] Responsive funcionando

### Fase 6 ✅
- [ ] Todos los criterios de aceptación cumplidos

---

## 🚀 Orden de Ejecución Recomendado

```
1. Ejecutar tareas 1.1 → 1.4 (secuencial)
2. Ejecutar tareas 4.1, 4.2, 4.3 en PARALELO
3. Ejecutar tareas 2.1 → 2.3 (secuencial)
4. Ejecutar tarea 3.1
5. Ejecutar tarea 4.4, 4.5 (secuencial)
6. Ejecutar tareas 5.1 → 5.3 (secuencial)
7. Ejecutar tareas 6.1 → 6.5 en PARALELO
```

---

**Estado:** Listo para ejecución  
**Siguiente acción:** Ejecutar Tarea 1.1
