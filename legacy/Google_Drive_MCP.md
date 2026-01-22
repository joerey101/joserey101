# Configuración de Servidor MCP para Google Drive

Esta guía detalla los pasos técnicos para permitir que el asistente de IA acceda a archivos de Google Drive mediante el **Model Context Protocol (MCP)**.

## 1. Preparación en Google Cloud Platform (GCP)
Para permitir el acceso a tu cuenta, necesitas crear un proyecto en Google Cloud y obtener credenciales.

1.  Accede a [Google Cloud Console](https://console.cloud.google.com/).
2.  **Nuevo Proyecto:** Crea un proyecto nuevo (ej. `mcp-drive-connector`).
3.  **Habilitar API:**
    *   Ve a "APIs & Services" > "Library".
    *   Busca **"Google Drive API"** y actívala.
4.  **Pantalla de Consentimiento (OAuth Consent Screen):**
    *   Ve a "OAuth consent screen".
    *   Selecciona "External" (si es cuenta personal @gmail) o "Internal" (si es Workspace).
    *   Rellena los datos básicos (nombre app, email).
    *   **Scope:** Añade `https://www.googleapis.com/auth/drive.readonly` (para solo lectura, más seguro).
    *   **Test Users:** Si usas modo "External", añade tu propio email como usuario de prueba.
5.  **Credenciales:**
    *   Ve a "Credentials" > "Create Credentials" > **"OAuth client ID"**.
    *   Tipo de Aplicación: **Desktop App**.
    *   Descarga el archivo JSON generado (renómbralo a `credentials.json` para facilitar su uso).

## 2. Instalación del Servidor MCP
Necesitas descargar y ejecutar el código del servidor MCP ("puente") en tu máquina local.

1.  **Clonar Repositorio (Ejemplo oficial o comunidad):**
    ```bash
    git clone https://github.com/modelcontextprotocol/servers.git
    cd servers/src/gdrive
    ```
2.  **Instalar Dependencias:**
    Requieres [Node.js](https://nodejs.org/) instalado.
    ```bash
    npm install
    npm run build
    ```

## 3. Configuración en el Editor/IDE
Debes instruir a tu entorno (Gemini Code Assist / Antigravity) para que lance este servidor al iniciar.

*   Localiza tu archivo de configuración MCP (ej. `~/.config/Code/User/globalStorage/mcp-servers.json` o similar, depende de tu IDE).
*   Añade la configuración:

```json
{
  "mcpServers": {
    "google-drive": {
      "command": "node",
      "args": [
        "/ruta/absoluta/a/servers/src/gdrive/dist/index.js"
      ],
      "env": {
        "CLIENT_ID": "TU_CLIENT_ID",
        "CLIENT_SECRET": "TU_CLIENT_SECRET"
      }
    }
  }
}
```
*(Nota: Algunos servidores requieren pasar el path al `credentials.json` en lugar de ID/Secret directos).*

## 4. Primer Uso (Autenticación)
La primera vez que uses una herramienta de Drive en el chat, o al iniciar el servidor, se abrirá una ventana de navegador solicitando permiso para acceder a tu cuenta de Google.

---
**Resultado:**
Una vez configurado, el asistente tendrá herramientas como `read_gdrive_file` o `list_gdrive_files` disponibles automáticamente.
