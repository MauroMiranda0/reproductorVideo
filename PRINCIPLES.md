# PRINCIPLES.md
**Proyecto:** Reproductor Web3 para Entretenimiento  
**Propósito:** Directrices obligatorias para el agente en todo el ciclo de desarrollo

---

## 1. Identidad del Proyecto
- **Nombre:** Reproductor Web3 para Entretenimiento
- **Autor:** Mauricio Vergara Miranda
- **Agencia:** Ingeniería Web Miranda
- **Metodología:** Spec-Driven Development (SDD)

---

## 2. Estética Visual Obligatoria
- **Color primario:** Azul eléctrico (#0066FF o similar)
- **Acentos:** Blanco y amarillo para contraste
- **Inspiración:** Música Ska-Jazz (ritmo, improvisación, fusión)
- **Tono:** Consultivo-tecnológico, profesional, innovador

---

## 3. Stack Tecnológico

### MVP Actual
| Capa | Tecnología |
|------|------------|
| Frontend | HTML5 + CSS3 + JavaScript vanilla |
| Backend | - |
| BD | - |
| Blockchain | - |

### Stack Objetivo (Post-MVP)
| Capa | Tecnología |
|------|------------|
| Frontend | React + Framer Motion + Web3.js/Ethers.js |
| Backend | NodeJS + Express + Prisma |
| BD | Supabase (PostgreSQL + pgvector) |
| Blockchain | Ethereum/Polygon |

---

## 4. Funcionalidades Clave
1. **Hotspots interactivos** sobre video (trivia, minijuegos)
2. **NFTs coleccionables** con "Mint to Wallet"
3. **Gamificación** (tokens ERC-20, logros, ranking)
4. **Panel de usuario** (colección, recompensas, estadísticas)
5. **IA** para recomendaciones personalizadas (pgvector)

---

## 5. Reglas de Código
- Variables y funciones en `camelCase`
- IDs en `camelCase` (sin guiones)
- Clases CSS en `kebab-case`
- Reutilizar ionicons para iconografía
- Solo comentarios cuando sea estrictamente necesario
- No agregar dependencias sin verificar compatibilidad

---

## 6. Filosofía de Desarrollo
- **Improvisación:** Cada interacción debe ser única y dinámica
- **Fusión:** HTML audiovisual + Web3 + IA
- **Inmersión:** Usuario como protagonista, no espectador
- **Modularidad:** Arquitectura separada por capas

---

## 7. Roadmap de Ejecución
1. Especificaciones → 2. Arquitectura → 3. Prototipo base → 
4. Interactividad → 5. Web3 → 6. IA → 7. Despliegue

---

## 8. Restricciones del Agente
- SIEMPRE referenciar este documento antes de cada cambio
- NO alterar la estética sin autorización explícita
- NO romper funcionalidad existente
- PRIORIZAR experiencia de usuario sobre complejidad técnica
- DOCUMENTAR decisiones técnicas importantes
- VERIFICAR que los cambios mantengan la coherencia visual

---

**Última actualización:** $(Get-Date -Format "yyyy-MM-dd")  
**Archivo fuente:** CONSTITUTION.md
