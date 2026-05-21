# Guía de Migración de npm a pnpm (v11+)

Esta guía detalla el proceso para migrar cualquier proyecto de este espacio de trabajo (por ejemplo, *Haddock*, *Fundación Consciencia Humana*, etc.) de `npm` a `pnpm` (versión 11 o superior). Está basada en los aprendizajes reales y resoluciones técnicas obtenidas durante la migración exitosa de `BeStarLight`.

---

## 1. ¿Por qué migrar a pnpm?
* **Seguridad (Resolución estricta):** pnpm no expone dependencias fantasma. Si tu código no declara una dependencia directamente en su `package.json`, Node no podrá importarla, previniendo fallos inesperados y mejorando la auditoría de seguridad.
* **Velocidad y Almacenamiento:** pnpm almacena todos los paquetes en una carpeta global única (`~/.local/share/pnpm/store`) y crea enlaces duros (hard links) y enlaces simbólicos (symlinks) en cada proyecto. Esto ahorra gigabytes de espacio y acelera las instalaciones.

---

## 2. Preparación

### Paso 2.1: Verificar versiones
Asegúrate de que estás utilizando una versión de Node moderna (Node v20+ recomendado).
```bash
node -v
```

### Paso 2.2: Instalar pnpm globalmente
Si no lo tienes instalado, añádelo con:
```bash
npm install -g pnpm
```
*Nota: En pnpm v11+, la versión mínima recomendada es pnpm >= 9.0.0.*

### Paso 2.3: Definir versiones mínimas (Opcional pero recomendado)
En tu `package.json`, fija las versiones recomendadas agregando el bloque `engines`:
```json
"engines": {
  "node": ">=20.0.0",
  "pnpm": ">=9.0.0"
}
```
Para forzar a que el proyecto o servidores de despliegue (como Vercel) respeten estrictamente estas versiones, crea un archivo `.npmrc` en la raíz del proyecto con:
```ini
engine-strict=true
```

---

## 3. Proceso de Migración Paso a Paso

### Paso 3.1: Conservar versiones actuales (`pnpm import`)
**IMPORTANTE:** Ejecuta esto antes de borrar nada. Este comando lee el `package-lock.json` actual para generar un `pnpm-lock.yaml` equivalente, asegurando que no se actualicen dependencias sin tu consentimiento.
```bash
pnpm import
```

### Paso 3.2: Limpiar archivos antiguos de npm
Una vez generado el lockfile de pnpm, elimina el lockfile y los módulos de npm:
```bash
rm -rf node_modules package-lock.json
```

### Paso 3.3: Ajustar Dependencias Locales (`link:`)
Si usas paquetes de desarrollo local (ej. `@joserey/device-viewer`), npm suele copiarlos físicamente o usar esquemas `file:`.
* **Acción:** En tu `package.json`, cambia el prefijo de `"file:..."` a `"link:..."` apuntando a la ruta relativa correcta.
* **Ejemplo:**
  ```json
  "@joserey/device-viewer": "link:../Sandbox Mobile/device-viewer"
  ```
Esto le indica a pnpm que mantenga un enlace simbólico directo en tiempo real hacia tu carpeta local de desarrollo, haciendo que cualquier cambio local se refleje de inmediato sin reinstalar.

### Paso 3.4: Configurar Seguridad de Scripts de Compilación (pnpm v11)
Por defecto, pnpm v11 bloquea los scripts de compilación de dependencias (como `postinstall` de `esbuild`, `@swc/core`, `sharp`) por razones de seguridad.
* **Acción:** En lugar de `package.json`, pnpm v11 lee estas excepciones desde un archivo centralizado en la raíz del proyecto llamado `pnpm-workspace.yaml`.
* Crea un archivo `pnpm-workspace.yaml` en la raíz de tu proyecto con el siguiente contenido (ajustado según tus librerías):
  ```yaml
  allowBuilds:
    "@swc/core": true
    esbuild: true
    sharp: true
    unrs-resolver: true
  ```

### Paso 3.5: Instalar Dependencias
Una vez creados los archivos anteriores, realiza la instalación limpia:
```bash
pnpm install
```

### Paso 3.6: Verificar que la Dependencia Local sea un Symlink
Verifica que tu dependencia local realmente quedó vinculada mediante enlace simbólico y no copiada física:
```bash
# En macOS/Linux
readlink node_modules/@joserey/device-viewer
# Debería retornar la ruta relativa hacia el proyecto local (ej. ../../../Sandbox Mobile/device-viewer)
```

---

## 4. Verificación del Proyecto

### Paso 4.1: Compilar en modo Producción
Antes de levantar el servidor de desarrollo, corre un build de producción. El proceso de build es mucho más estricto con la resolución de módulos y detectará problemas de inmediato:
```bash
pnpm run build
```

### Paso 4.2: Levantar Servidor de Desarrollo
Si el build de producción fue exitoso, levanta el entorno de desarrollo habitual:
```bash
pnpm dev
```

---

## 5. Resolución de Problemas (Troubleshooting)

### Error: `Module not found` o dependencias perdidas
Si pnpm levanta un error diciendo que un módulo no puede ser importado tras migrar, sigue este flujo mental de resolución:

1. **¿Tu código importa directamente la librería faltante?**
   * *Causa:* Estaba siendo resuelta indirectamente por el comportamiento de "hoisting" plano de npm, pero no estaba declarada en tu `package.json`.
   * *Solución:* Agrégala de forma explícita a tu proyecto:
     ```bash
     pnpm add nombre-del-paquete
     ```
2. **¿Una librería de terceros (dependencia de tu dependencia) no encuentra su propia subdependencia transitiva?**
   * *Causa:* Un paquete de terceros mal optimizado espera una estructura plana de `node_modules`.
   * *Solución:* Activa el modo de hoisting de compatibilidad creando o añadiendo a tu archivo `.npmrc` la siguiente línea y vuelve a correr `pnpm install`:
     ```ini
     shamefully-hoist=true
     ```

### Despliegue en Vercel
Vercel detecta automáticamente la presencia de `pnpm-lock.yaml` y cambiará el comando de instalación de `npm install` a `pnpm install` sin requerir cambios manuales en la consola web de Vercel.

---

## 6. Punto de Retorno (Rollback)
Si por alguna razón crítica necesitas dar marcha atrás antes de confirmar y subir los cambios a tu rama git, puedes restaurar el proyecto a npm ejecutando:
```bash
git checkout package-lock.json package.json
rm -rf node_modules pnpm-lock.yaml pnpm-workspace.yaml .npmrc
npm install
```
