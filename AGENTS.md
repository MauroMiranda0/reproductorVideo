# AGENTS.md - Principios del Proyecto

## Identidad del Proyecto
- **Nombre:** Reproductor Web3 para Entretenimiento
- **Autor:** Mauricio Vergara Miranda
- **Agencia:** Ingeniería Web Miranda
- **Metodología:** Spec-Driven Development (SDD)

## Estética Visual
- Azul eléctrico como color primario
- Contrastos blanco/amarillo para acentos
- Referencia visual: `/contents/img/skaJazz.JPG`

## Stack Tecnológico
- **Frontend actual:** HTML5 + CSS3 + JavaScript vanilla
- **Frontend objetivo:** React + Framer Motion + Web3.js/Ethers.js
- **Backend:** NodeJS + Express + Prisma
- **Base de Datos:** Supabase (PostgreSQL + pgvector)
- **Blockchain:** Ethereum/Polygon

## Convenciones de Código
- Variables en `camelCase`
- Funciones en `camelCase`
- IDs de elementos en `camelCase` (sin guiones)
- Clases CSS en `kebab-case`
- Comentarios solo cuando sea necesario para claridad
- Reutilizar ionicons para iconografía

## Estructura del Proyecto
```
reproductorVideo/
├── index.html          # Página principal
├── styles.css          # Estilos globales
├── scripts.js          # Lógica del reproductor
├── contents/           # Assets multimedia
│   ├── img/           # Imágenes
│   └── video/         # Videos
├── .specify/          # Configuración SDD
└── .github/           # Configuración CI/CD
```

## Módulos Clave (Roadmap SDD)
1. Reproductor audiovisual base (completado parcialmente)
2. Hotspots interactivos sobre video
3. Sistema de coleccionables NFT
4. Gamificación y tokens ERC-20
5. Panel de usuario con estadísticas
6. IA para recomendaciones

## Reglas de Trabajo
- No agregar comentarios innecesarios al código
- Mantener la consistencia con el estilo existente
- Verificar que los cambios no rompan funcionalidad existente
- Priorizar la experiencia de usuario
- Documentar decisiones técnicas importantes en CONSTITUTION.md

## Especificaciones del Proyecto
- `SPECIFICATIONS.md` contiene requisitos y historias de usuario
- Enfocarse en QUÉ y PORQUÉ, no en CÓMO (tecnologías)
- Cada funcionalidad debe tener criterios de aceptación claros
- Validar implementaciones contra especificaciones
