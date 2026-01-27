# Sanity CMS Recovery & Migration Guide

Este documento sirve como referencia técnica en caso de que en el futuro se decida volver a implementar Sanity CMS o cualquier otro Headless CMS. Contiene la lógica, los esquemas y los pasos que se eliminaron para simplificar el proyecto.

## 1. El Esquema de Datos (Schema)
El esquema principal que usábamos para los Casos de Estudio era el siguiente:

```typescript
// sanity/schemas/caseStudy.ts
export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'tag', title: 'Tag', type: 'string' },
    { name: 'tagDisplay', title: 'Tag Display', type: 'string' },
    { name: 'color', title: 'Color Class', type: 'string', description: 'Tailwind color class like bg-neon-pink' },
    { name: 'mainImage', title: 'Main Image', type: 'image' },
    { name: 'keyMetrics', title: 'Key Metrics', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'value', type: 'string' },
        { name: 'label', type: 'string' }
      ]
    }]},
    { name: 'techStack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] },
    { name: 'challenge', title: 'Challenge', type: 'text' },
    { name: 'solution', title: 'Solution', type: 'text' },
    { name: 'impact', title: 'Impact', type: 'text' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
  ]
}
```

## 2. Configuración del Cliente
Para conectar Next.js con Sanity, usábamos `@sanity/client`:

```typescript
// sanity/lib/client.ts
import { createClient } from 'next-client-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
})
```

## 3. Query de Recuperación (GROQ)
Para traer los datos a la UI, la consulta era:

```groq
*[_type == "caseStudy"] {
  _id,
  title,
  subtitle,
  "slug": slug.current,
  tagDisplay,
  color,
  "img": mainImage.asset->url,
  keyMetrics,
  techStack,
  challenge,
  solution,
  impact,
  "gallery": gallery[].asset->url
}
```

## 4. Dependencias Eliminadas
Si necesitás reinstalar, estos eran los paquetes clave:
- `sanity`
- `next-sanity`
- `@sanity/image-url`
- `@sanity/client`

## 5. Razón de la Eliminación (Enero 2024)
Se decidió eliminar la integración con Sanity para:
1. **Reducir Complejidad**: El flujo de trabajo con un Agente AI como administrador de contenido es más rápido editando directamente `app/content.tsx`.
2. **Performance**: Se eliminan llamadas a APIs externas y tiempos de carga de skeletons.
3. **Estabilidad**: Se eliminan errores de hidratación y variables de entorno faltantes en producción.

---
*Archivo generado por Antigravity AI para JOSEREY STUDIO.*
