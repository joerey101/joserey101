# BeStarLight - Brief de Diseño y Filosofía (V2)

Este documento unifica la visión, los principios estéticos y las reglas de diseño documentadas a lo largo de la evolución del proyecto **BeStarLight**, concebido bajo el estándar "José Rey".

---

## 1. El ADN del Proyecto (Filosofía y Manifiesto)
*Extraído de `legacy/MANIFIESTO.md`*

- **El Estándar "Fortune 500"**: La vara de medición es la excelencia global (Tier 1). No importa el tamaño del cliente; la solidez visual y la profundidad estratégica deben sentirse como una presentación de directorio de una empresa Fortune 500. Se busca **solidez absoluta**, estructura y seriedad.
- **Escultor por Negación**: La precisión nace de limpiar el ruido. Se aplica un pensamiento sistémico y de ingeniería (Navaja de Ockham): la belleza es consecuencia de una función clara. Todo adorno innecesario se descarta.
- **Construcción sobre Evolución**: Se construyen cimientos, no fachadas. La superficialidad visual y el "humo" del marketing (ej: palabras vacías) están prohibidos. Asumimos una audiencia exigente e inteligente; no se nivela para abajo.

## 2. Dirección de Arte y Diseño Visual
*Extraído de `legacy/README.md` y `docs/starlight_v2_status.md`*

- **Estilo Base**: "Neo-Swiss Pop" / "Brutalismo Refinado".
- **Fusión de Referencias**: La estructura sólida y arquitectónica de grandes agencias (como *Code & Theory*) combinada con la audacia y vitalidad vibrante de *Huge Inc*.
- **Tipografía**: Pesos intensos (ej: "Black" / 900) con un *tracking* (espaciado entre letras) muy ajustado (`tighter`). Se favorece el uso de tipografías cinéticas (Kinetic Typography) y títulos masivos.
- **Color y Paleta Unificada (V2)**:
  - Se utiliza una paleta industrial y corporativa.
  - El color primario/acento es un **Azul Corporativo Unificado** (Electric Blue: `#0041c9`). Este azul rige los botones, etiquetas de servicios y bordes de acento.
  - Fondos: Blanco puro (`#FFFFFF`) / Oyster White, combinados con Deep Carbon (`#1A1A1A`) para los textos.
- **Detalles Arquitectónicos (Reglas V2)**:
  - **Alineación del Hero**: Existe una regla visual crítica; por ejemplo, la caja del botón principal ("COTIZAR PROYECTO") debe reposar en su **base inferior** exactamente sobre la misma línea base de la última palabra del título gigantesco ("CAPACIDADES.").
  - **Footer Marquee**: Una marquesina infinita con la palabra "FUTURO" pasando al 10% de opacidad, dando una sensación de dinamismo industrial.

## 3. Interacción y "Apple Mode" (Motion Design)
*Extraído de `docs/bajada-tecnica-sidebar.md` y `app/apple-mode/README_TECNICO.md`*

La interacción de BeStarLight busca replicar la experiencia táctil y visual premium de los sistemas operativos de Apple (iOS / watchOS):

- **Transiciones Físicas (Inercia y Fricción)**: Las animaciones no usan curvas de tiempo lineales estándar, sino físicas de tipo "muelle" (Spring). Se controla la oscilación (Damping: 30) y la rigidez (Stiffness: 300) para un rebote o deslizamiento orgánico.
- **Efectos "Crystal" (Esfumado Inteligente)**: No se usan fondos sólidos negros para superposiciones (overlays). Se utiliza `backdrop-blur` (esfumado) combinado con opacidad, para que el contenido de atrás se adivine (como el cristal esmerilado de iOS).
- **Parallax y Scroll Blur**: Se implementan desenfoques progresivos basados en el scroll. Al hacer scroll, una imagen de fondo puede desenfocarse gradualmente para dar legibilidad a un texto superpuesto, sumado a un leve zoom (escala 1 a 1.05) para ganar profundidad.
- **Micro-interacciones Cascadas**: Los elementos (ej: ítems de un menú) no aparecen de golpe, sino que "fluyen" con un retraso incremental, reforzando una sensación fluida.

## 4. Red Flags y Qué Evitar (Aprendizajes Críticos)
*Extraído de `docs/FRUSTRACIONES.md`*

- **Cero Regresiones de Calidad**: Nunca reemplazar un efecto visual premium y funcional (como un buen `backdrop-blur`) por una solución de menor fidelidad visual (como imágenes oscurecidas de manera brusca o esfumados prematuros).
- **Consistencia de Rendimiento**: Asegurarse de que los efectos de cristal y animaciones no generen *glitches* de renderizado o parpadeos negros. La estética y la funcionalidad deben ir de la mano.

---
**Nota para el Estudio de Diseño:**
Este proyecto no busca ser "lindo" de manera genérica. Busca ser imponente, estructuralmente impecable, con el refinamiento en la interacción de un producto de Apple, y la solidez gráfica del diseño Suizo moderno. Cada píxel, cada animación y cada margen tiene que tener un porqué y transmitir autoridad.
