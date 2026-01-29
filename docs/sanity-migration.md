# Guía de Migración y Despliegue de Sanity CMS

Esta guía detalla los pasos seguidos para integrar Sanity.io en **JOSEREY101** y cómo proceder con la importación de datos y el despliegue final.

---

## 🏗️ Estado Actual del Proyecto

1.  **Framework:** Next.js (App Router).
2.  **Sanity Configurado:** 
    *   **Project ID:** `gpqwat0z`
    *   **Dataset:** `production`
    *   **Studio Path:** `/studio`
3.  **Esquema:** Definido en `sanity/schemaTypes/caseStudy.ts`. Soporta títulos, texto enriquecido, tags de colores, métricas clave (tipo Apple) y multilingüismo.
4.  **UI:** El componente `CaseStudySystemV2` ya está consumiendo datos de Sanity y aplicando los efectos de scroll "Apple Style".

---

## 🚀 Pasos para el Usuario (Handover)

### 1. Inicializar Sanity Localmente
Si aún no tienes el CLI de Sanity instalado:
```bash
npm install -g sanity
```
Luego, asegúrate de estar logueado:
```bash
sanity login
```

### 2. Importar los Datos de Semilla (Seed)
He dejado un archivo preparado con los casos de estudio originales en formato NDJSON. Para cargarlos en tu Content Lake de Sanity, ejecuta:
```bash
sanity dataset import sanity-seed.ndjson production
```
*Si te pregunta por conflictos de ID, puedes elegir "overwrite" o "clean dataset" si es la primera vez.*

### 3. Gestionar Imágenes en el Studio
1. Entra a `http://localhost:3000/studio`.
2. Verás los documentos importados (NeoBank, Cultura Híbrida, etc.).
3. **Importante:** Las imágenes en el seed son URLs externas o placeholders. Debes subir las imágenes finales directamente en el campo `mainImage` de cada documento en el Studio para que Sanity genere las variantes y el blur dinámico.

### 4. Despliegue en Vercel
Para que los datos se vean en producción:
1. Asegúrate de que estas variables de entorno estén en Vercel:
   * `NEXT_PUBLIC_SANITY_PROJECT_ID=gpqwat0z`
   * `NEXT_PUBLIC_SANITY_DATASET=production`
2. Si usas un Token de lectura para contenido privado:
   * `SANITY_API_READ_TOKEN=tu_token_aqui`

---

## 🎨 Notas sobre el "Apple Mode"
En el componente `CaseStudySystemV2.tsx`, el efecto de "esfumado" (blur progresivo) se activa al hacer scroll dentro del modal. 
*   **Filtro:** Usa `backdrop-blur-3xl`.
*   **Trigger:** La animación comienza al 20% del scroll para asegurar que la imagen de cabecera se luzca antes de que aparezca el contenido.

---
*Documentación generada por Antigravity.*
