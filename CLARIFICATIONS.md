# CLARIFICATIONS.md
**Proyecto:** Reproductor Web3 para Entretenimiento  
**Propósito:** Documentar aclaraciones y resolver dudas antes de planificar técnicamente

---

## 🔍 Estado: CLARIFICADO ✅

---

## 1. Preguntas Pendientes

### 📹 Módulo: Reproductor Audiovisual
| # | Pregunta | Estado | Respuesta |
|---|----------|--------|-----------|
| 1.1 | ¿Cuántos videos soportará inicialmente? | ⏳ | Pendiente |
| 1.2 | ¿Qué formatos de video son prioritarios? | ⏳ | Pendiente |
| 1.3 | ¿El video será auto-reproducible? | ⏳ | Pendiente |
| 1.4 | ¿Se necesita soporte para subtítulos? | ⏳ | Pendiente |

### 🎯 Módulo: Hotspots Interactivos
| # | Pregunta | Estado | Respuesta |
|---|----------|--------|-----------|
| 2.1 | ¿Cuántos hotspots máximo por video? | ⏳ | Pendiente |
| 2.2 | ¿Los hotspots se crean desde panel admin o son hardcodeados? | ⏳ | Pendiente |
| 2.3 | ¿Qué tipos de trivia se necesitan? (opción múltiple, verdadero/falso, etc.) | ⏳ | Pendiente |
| 2.4 | ¿Los minijuegos tienen tiempo límite? | ⏳ | Pendiente |
| 2.5 | ¿Se permite saltar un hotspot sin completarlo? | ⏳ | Pendiente |

### 💎 Módulo: Coleccionables
| # | Pregunta | Estado | Respuesta |
|---|----------|--------|-----------|
| 3.1 | ¿Cuántos coleccionables会有 por video? | ⏳ | Pendiente |
| 3.2 | ¿Cómo se determina la rareza de un coleccionable? | ⏳ | Pendiente |
| 3.3 | ¿Se pueden intercambiar coleccionables entre usuarios? | ⏳ | Pendiente |
| 3.4 | ¿Hay límite de coleccionables por usuario? | ⏳ | Pendiente |
| 3.5 | ¿Los coleccionables tienen valor económico real? | ⏳ | Pendiente |

### 🎮 Módulo: Gamificación
| # | Pregunta | Estado | Respuesta |
|---|----------|--------|-----------|
| 4.1 | ¿Qué acciones generan tokens? | ⏳ | Pendiente |
| 4.2 | ¿Los tokens tienen uso dentro de la plataforma? | ⏳ | Pendiente |
| 4.3 | ¿El ranking es global o por categorías? | ⏳ | Pendiente |
| 4.4 | ¿Cuántos niveles de progreso habrá? | ⏳ | Pendiente |
| 4.5 | ¿Los logros son desbloqueables o aleatorios? | ⏳ | Pendiente |

### 👤 Módulo: Panel de Usuario
| # | Pregunta | Estado | Respuesta |
|---|----------|--------|-----------|
| 5.1 | ¿Qué estadísticas se muestran como mínimo? | ⏳ | Pendiente |
| 5.2 | ¿Se permite personalizar el perfil? | ⏳ | Pendiente |
| 5.3 | ¿Hay avatar de usuario? | ⏳ | Pendiente |
| 5.4 | ¿Se muestra historial de actividad reciente? | ⏳ | Pendiente |

### 🤖 Módulo: Recomendaciones
| # | Pregunta | Estado | Respuesta |
|---|----------|--------|-----------|
| 6.1 | ¿Cuántas recomendaciones se muestran simultáneamente? | ⏳ | Pendiente |
| 6.2 | ¿Se pueden descartar recomendaciones? | ⏳ | Pendiente |
| 6.3 | ¿Qué datos se usan para personalizar? | ⏳ | Pendiente |

---

## 2. Decisiones Pendientes

### 2.1 Alcance del MVP
| Pregunta | Estado | Decisión |
|----------|--------|----------|
| ¿Qué módulos incluye el MVP? | ✅ | Solo reproductor audiovisual |
| ¿Se lanza con todos los módulos o por fases? | ✅ | Por fases (fase 1: reproductor) |

### 2.2 Contenido Inicial
| Pregunta | Estado | Decisión |
|----------|--------|----------|
| ¿Cuántos videos tiene el catálogo inicial? | ✅ | 20 videos |
| ¿El contenido es propio o de terceros? | ✅ | Contenido de terceros |
| ¿Hay contenido de prueba para desarrollo? | ✅ | Sí, usar contenido de prueba |

### 2.3 Autenticación
| Pregunta | Estado | Decisión |
|----------|--------|----------|
| ¿Se requiere registro obligatorio? | ✅ | No, uso anónimo |
| ¿Qué métodos de login se habilitan? | ✅ | Ninguno (anónimo) |
| ¿Se permite uso anónimo con límites? | ✅ | Sí, completamente anónimo |

---

## 3. Ambigüedades Detectadas

### 3.1 En SPECIFICATIONS.md
| Línea | Ambigüedad | Clarificación Necesaria |
|-------|------------|------------------------|
| L90 | "grados de rareza" | Definir niveles exactos y probabilidad |
| L106 | "posición relativa" | Aclarar si es ranking global o por contenido |
| L160 | "conexiones estándar" | Definir velocidad mínima esperada |

### 3.2 En Historias de Usuario
| Historia | Ambigüedad | Clarificación Necesaria |
|----------|------------|------------------------|
| 3.3 Coleccionables | "intransferible" | Confirmar si no hay intercambio |
| 3.4 Gamificación | "beneficios" | Definir tipo de beneficios |
| 5.2 Social | "compartir" | Aclarar plataformas de compartir |

---

## 4. Información Requerida del Usuario

### Para Continuar con la Planificación:
1. **Priorización de módulos** - ¿Cuáles son esenciales para MVP?
2. **Presupuesto de tiempo** - ¿Cuánto tiempo hay para desarrollo?
3. **Contenido disponible** - ¿Hay videos de prueba?
4. **Objetivo de lanzamiento** - ¿Es demo o producción?
5. **Audiencia objetivo** - ¿Usuarios técnicos o generales?

---

## 5. Próximos Pasos

Una vez respondidas las preguntas:
1. Actualizar `SPECIFICATIONS.md` con aclaraciones
2. Definir alcance exacto del MVP
3. Crear user stories más detalladas
4. Proceder a planificación técnica

---

**Estado actual:** ✅ CLARIFICADO - Listo para planificación técnica  
**Archivo fuente:** SPECIFICATIONS.md  
**Última actualización:** $(Get-Date -Format "yyyy-MM-dd")
