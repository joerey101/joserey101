# BAJADA TÉCNICA: Módulo Menú Lateral "Apple Style"
**Proyecto:** Bestarlight
**Tecnología:** Next.js (App Router), Framer Motion, Tailwind CSS

---

## 🎯 Objetivo
Replicar la experiencia táctil y visual de los sistemas operativos de Apple (iOS/watchOS) en una interfaz web, específicamente el componente de **Side Drawer** (Menú Lateral). La clave es la "inercia", el "esfumado" (blur) y la "fricción" de los elementos.

## 🛠 Arquitectura del Módulo

### 1. Sistema de Transición (Framer Motion)
Utilizamos una transición de tipo `spring` (muelle) en lugar de curvas de tiempo lineales (`ease`).
*   **Damping:** 30 (Controla la oscilación).
*   **Stiffness:** 300 (Controla la rapidez/rigidez del rebote).
*   **X Axis:** El panel vive en `100%` y entra a `0` para un deslizamiento perfecto desde la derecha.

### 2. El Efecto "Esfumado" (Backdrop Blur)
Para lograr el look premium, el fondo no es negro sólido, sino una capa inteligente:
*   **Filtro:** `backdrop-blur-md` combinado con un `opacity` animado en el overlay.
*   **Visual:** Esto permite que el contenido de la web se "adivine" detrás del menú mientras se navega, eliminando la sensación de "pared" visual.

### 3. Cascada de Ítems (Staggered Children)
Los elementos del menú no aparecen todos a la vez. Cada ítem tiene un retraso incremental (`index * 0.1`):
*   **Efecto:** Los links parecen "fluir" dentro del panel una vez que este se ha detenido.

## 📝 Instrucciones para Procesamiento en Google Labs (Gemini/Stitch)

Si vas a usar este código en un entorno de IA para prototipar:

1.  **Contexto de Diseño:** El diseño de Bestarlight es "Brutalista Refinado". Usa tipografías `Black` (peso 900) y tracking muy ajustado (`tighter`).
2.  **Lógica del Trigger:** El botón de cierre (`X`) debe tener una micro-animación de rotación (`rotate-90`) al hacer hover para indicar interacción.
3.  **Manejo de Estados:** Asegúrate de que el `AnimatePresence` esté envolviendo todo el bloque para que el "Exit Animation" (cuando el menú se cierra) no sea abrupto.
4.  **Colores:** 
    *   Fondo Menú: Blanco puro (`#FFFFFF`).
    *   Acento Hover: `Electric Blue` o `Neon Pink`.
    *   Textos: `Carbon` (`#1A1A1A`).

---
*Este documento es el 'Blueprint' para la evolución visual del menú.*
