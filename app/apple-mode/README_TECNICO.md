# Apple Mode: Guía de Implementación del Efecto "Esfumado"

Este módulo replica el sistema de transición de scroll de Apple (visto en Apple Watch Series 11), donde una imagen fija se desenfoca progresivamente para dar paso a contenido textual con un efecto parallax.

## 🚀 Requisitos Técnicos
Para que este efecto funcione en cualquier parte de la web, el proyecto debe tener:
- **Next.js 14+ / 15+** (App Router).
- **Tailwind CSS v3+** (con soporte para `backdrop-blur`).
- **Framer Motion**: `npm install framer-motion`.

## 📦 Componentes Creados
1.  `@/components/AppleHealthSection.tsx`: El componente core que maneja la lógica de scroll.
2.  `app/apple-mode/page.tsx`: Ejemplo de implementación.

## 🛠 Cómo Replicarlo en otra Sección
Para usar este efecto en una nueva página o sección:

1.  **Importar el componente**:
    ```tsx
    import AppleHealthSection from "@/components/AppleHealthSection";
    ```

2.  **Configuración de Altura**:
    El componente utiliza una altura de `h-[300vh]`. Esto es necesario para que haya "espacio de scroll" suficiente para que el usuario experimente la transición del desenfoque. Puedes ajustarlo según qué tan "lenta" quieras la animación.

3.  **Lógica del Filtro (Framer Motion)**:
    En `AppleHealthSection.tsx`, la clave es el mapeo de `scrollYProgress`:
    - `[0, 0.4]`: Significa que la transición ocurre en el primer 40% del scroll del contenedor.
    - `blurOpacity`: Controla el `opacity` de la capa de desenfoque.
    - `imageScale`: Controla un zoom sutil (de 1 a 1.05) para efecto profundidad.

## 🎨 Personalización Estética
- **Desenfoque**: Si quieres un desenfoque más fuerte, cambia `backdrop-blur-2xl` por un valor custom en Tailwind o CSS puro (`blur(40px)`).
- **Velocidad**: Cambia los rangos en `useTransform(scrollYProgress, [0, 0.4], [0, 1])`. Si pones `[0, 0.2]`, el efecto ocurrirá mucho más rápido.

## 🤖 Instrucciones para el Agente (Prompt Copy-Paste)
"Usa el componente `AppleHealthSection` que está en `/components` como base. Necesito replicar el efecto de scroll de Apple en la sección [NOMBRE_SECCION], usando la imagen [RUTA_IMAGEN]. Asegúrate de mantener el posicionamiento `sticky` y sincronizar el `scrollYProgress` con la opacidad del desenfoque para que el texto sea perfectamente legible al subir."

---
*Módulo generado por Antigravity para Bestarlight.*
