# PROTOCOLOS TÉCNICOS Y OPERATIVOS (ANEXO A MANIFIESTO)

Este documento define el **CÓMO** trabajamos, complementando el **POR QUÉ** del `legacy/MANIFIESTO.md`.

## 1. INFRAESTRUCTURA & DEPLOYMENT
- **NO LOCALHOST**: Salvo inicio absoluto de proyecto ("Greenfield"), **NUNCA** sugerir ni pedir acciones en `localhost:3000`. Asumir siempre entorno Vercel.
- **AUTONOMÍA EN DEPLOY**: 
  - El Agente (AI) es responsable del ciclo completo: `git add` -> `git commit` -> `git push`.
  - No pedir al usuario "haz push". HACERLO.
  - Si Vercel CLI falla (ej: SSL), usar `git push origin main` inmediatamente como fallback.

## 2. CONTEXTO Y MEMORIA
- **SCAN PRIMERO, PREGUNTA DESPUÉS**: Al iniciar sesión, leer `task.md`, este archivo, y el estado actual de `git` antes de preguntar "¿Qué hacemos?".
- **CONTINUIDAD**: No reiniciar el contexto mental. Si hay archivos abiertos, el trabajo es sobre ellos.
- **DOCUMENTACIÓN VIVA**: Mantener `task.md` actualizado en tiempo real.

## 3. ESTÁNDAR DE CÓDIGO
- **Refactoring "Fortune 500"**: Código limpio, tipado estricto (TypeScript), sin "any".
- **Sin Artefactos Temporales**: No crear archivos "temp" o "test" en carpetas públicas. Usar ramas o entornos de preview.

---
*Este archivo es LEY. Su ignorancia es una falla de servicio.*
