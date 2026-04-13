# CLAUDE.md - Guia Completa de la Plataforma Claude Code

> Documento de referencia integral sobre Claude Code, sus skills, herramientas, configuraciones y capacidades.
> Proyecto: **my-app** | Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + GSAP + Three.js + OGL + Motion + Lenis

---

## 1. RESUMEN DE LA PLATAFORMA

**Claude Code** es una herramienta de desarrollo impulsada por IA que permite construir funcionalidades, corregir bugs y automatizar tareas de desarrollo mediante lenguaje natural. Opera como un agente completo que lee codebases enteras, edita archivos, ejecuta comandos y se integra con herramientas de desarrollo.

### Plataformas Disponibles

| Plataforma | Soporte |
|-----------|---------|
| Terminal (CLI) | macOS, Linux, Windows |
| VS Code / Cursor | Extension oficial |
| JetBrains IDEs | Plugin oficial |
| Desktop App | macOS, Windows |
| Web (claude.ai/code) | Todos los navegadores |
| GitHub | Issues, PRs, Actions |

### Modelos Disponibles

| Modelo | Contexto | Mejor Para |
|--------|----------|-----------|
| Claude Opus 4.6 | 1M tokens | Razonamiento complejo, codigo avanzado |
| Claude Sonnet 4.6 | 1M tokens | Balance velocidad/inteligencia |
| Claude Haiku 4.5 | 200k tokens | Rapido, costo-efectivo |

---

## 2. SKILLS INSTALADOS EN ESTE PROYECTO

### 2.1 Skills de Animacion (GSAP Suite)

#### `/gsap-core` - API Principal de GSAP
- `gsap.to()`, `gsap.from()`, `gsap.fromTo()`
- Easing, duration, stagger, defaults
- `gsap.matchMedia()` para responsive y `prefers-reduced-motion`
- Usar cuando se necesitan animaciones JavaScript

#### `/gsap-react` - GSAP en React/Next.js
- Hook `useGSAP` para integracion con React
- Uso de refs y `gsap.context()` para scoping
- Cleanup automatico al desmontar componentes
- Recomendado para animaciones en componentes React

#### `/gsap-scrolltrigger` - Animaciones con Scroll
- Animaciones vinculadas al scroll
- Pinning de secciones
- Scrub para animacion proporcional al scroll
- Parallax y efectos de scroll avanzados

#### `/gsap-timeline` - Secuencias de Animacion
- `gsap.timeline()` para secuencias complejas
- Position parameter para sincronizacion precisa
- Nesting de timelines
- Control de playback (play, pause, reverse, seek)

#### `/gsap-plugins` - Plugins de GSAP
- ScrollToPlugin, ScrollSmoother, Flip
- Draggable, Inertia, Observer
- SplitText, ScrambleText
- SVG plugins, CustomEase, EasePack
- GSDevTools para debugging

#### `/gsap-frameworks` - GSAP en Vue/Svelte
- Integracion con Vue (onMounted, lifecycle)
- Integracion con Svelte (onMount)
- Scoping de selectores por framework
- Cleanup al desmontar

#### `/gsap-performance` - Optimizacion de GSAP
- Preferir transforms sobre propiedades de layout
- Evitar layout thrashing
- Uso de `will-change` y batching
- Optimizacion para 60fps consistentes

#### `/gsap-utils` - Utilidades de GSAP
- `gsap.utils.clamp()`, `mapRange()`, `normalize()`
- `interpolate()`, `random()`, `snap()`
- `toArray()`, `wrap()`, `pipe()`
- Funciones helper para calculos de animacion

### 2.2 Skills de Desarrollo Web

#### `/frontend-design` - Diseno Frontend Profesional
- Crea interfaces de produccion con alta calidad de diseno
- Componentes web, paginas, dashboards
- Landing pages, aplicaciones React
- Diseno responsive y accesible

#### `/agent-browser` - Automatizacion de Navegador
- Navegar paginas web
- Llenar formularios, hacer clicks
- Tomar screenshots
- Extraer datos de sitios web
- Testing de aplicaciones web
- Automatizar cualquier tarea en el navegador

#### `/vercel-react-best-practices` - Optimizacion React/Next.js
- Guias de rendimiento de Vercel Engineering
- Patrones optimos para React y Next.js
- Escribir, revisar y refactorizar codigo React
- Mejores practicas de Server Components, Suspense, etc.

### 2.3 Skills Integrados del Sistema

#### `/simplify` - Simplificacion de Codigo
- Revisa codigo cambiado para reutilizacion
- Evalua calidad y eficiencia
- Corrige problemas encontrados automaticamente

#### `/update-config` - Configuracion del Harness
- Configura Claude Code via `settings.json`
- Establece hooks para comportamientos automatizados
- Gestiona permisos y reglas

---

## 3. HERRAMIENTAS CORE (TOOLS)

### 3.1 Herramientas de Archivos

| Herramienta | Funcion |
|------------|---------|
| **Read** | Leer archivos (codigo, imagenes, PDFs, notebooks) |
| **Write** | Crear archivos nuevos o reescribir completos |
| **Edit** | Ediciones precisas con reemplazo de texto |
| **Glob** | Buscar archivos por patron (ej: `**/*.tsx`) |
| **Grep** | Buscar contenido con regex en archivos |

### 3.2 Herramientas de Ejecucion

| Herramienta | Funcion |
|------------|---------|
| **Bash** | Ejecutar comandos de terminal |
| **Agent** | Lanzar sub-agentes para tareas complejas |
| **Skill** | Invocar skills especializados |

### 3.3 Herramientas de Interaccion

| Herramienta | Funcion |
|------------|---------|
| **WebFetch** | Obtener contenido de URLs |
| **WebSearch** | Buscar en la web |
| **AskUserQuestion** | Hacer preguntas al usuario |
| **NotebookEdit** | Editar celdas de Jupyter notebooks |

### 3.4 Herramientas de IDE

| Herramienta | Funcion |
|------------|---------|
| **mcp__ide__executeCode** | Ejecutar codigo en el IDE |
| **mcp__ide__getDiagnostics** | Obtener diagnosticos (errores, warnings) |

### 3.5 Herramientas de Tareas

| Herramienta | Funcion |
|------------|---------|
| **TaskCreate** | Crear tareas de seguimiento |
| **TaskGet** | Obtener estado de una tarea |
| **TaskList** | Listar todas las tareas |
| **TaskUpdate** | Actualizar estado de tarea |
| **TaskOutput** | Obtener output de tarea |
| **TaskStop** | Detener una tarea en ejecucion |

---

## 4. COMANDOS SLASH PRINCIPALES

### Gestion de Sesion

| Comando | Funcion |
|---------|---------|
| `/clear` | Limpiar historial de conversacion |
| `/compact` | Comprimir conversacion con instrucciones de foco |
| `/exit` | Salir de Claude Code |
| `/resume` | Reanudar conversacion previa |
| `/rename` | Renombrar sesion actual |

### Configuracion

| Comando | Funcion |
|---------|---------|
| `/config` | Abrir interfaz de configuracion |
| `/model` | Cambiar modelo (Opus/Sonnet/Haiku) |
| `/effort` | Ajustar nivel de esfuerzo (low/medium/high/max) |
| `/memory` | Ver y editar CLAUDE.md y memoria automatica |
| `/hooks` | Ver hooks configurados |
| `/mcp` | Gestionar servidores MCP |

### Desarrollo

| Comando | Funcion |
|---------|---------|
| `/init` | Generar CLAUDE.md desde analisis del codebase |
| `/diff` | Abrir visor de diffs interactivo |
| `/simplify` | Simplificar y optimizar codigo |
| `/ide` | Conectar a IDE |

### Informacion

| Comando | Funcion |
|---------|---------|
| `/help` | Mostrar documentacion |
| `/cost` | Mostrar estadisticas de tokens |
| `/context` | Visualizar uso de contexto |
| `/doctor` | Diagnosticar instalacion |

---

## 5. SISTEMA DE HOOKS

Los hooks permiten automatizar acciones antes/despues de operaciones de Claude.

### Eventos de Ciclo de Vida

```
Sesion:
  SessionStart     -> Al iniciar sesion
  SessionEnd       -> Al terminar sesion
  CwdChanged       -> Al cambiar directorio

Turno:
  UserPromptSubmit -> Antes de enviar prompt
  Stop             -> Cuando Claude termina
  StopFailure      -> Cuando hay error

Herramienta:
  PreToolUse       -> Antes de ejecutar herramienta (puede bloquear)
  PostToolUse      -> Despues de exito
  PermissionRequest -> Antes del dialogo de permisos
  PermissionDenied  -> Cuando se niega permiso
```

### Tipos de Hook

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "./scripts/validate.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "prettier --write \"$FILE_PATH\""
          }
        ]
      }
    ]
  }
}
```

### Ejemplo: Auto-formatear despues de editar

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write \"$FILE_PATH\""
          }
        ]
      }
    ]
  }
}
```

---

## 6. CONFIGURACION Y SETTINGS

### Jerarquia de Prioridad (mayor a menor)

1. **Managed Policy** - Politicas empresariales del sistema
2. **Proyecto compartido** - `.claude/settings.json` (git)
3. **Proyecto local** - `.claude/settings.local.json` (solo tu)
4. **Usuario global** - `~/.claude/settings.json` (todos los proyectos)

### Configuracion Actual del Proyecto

```json
// .claude/settings.local.json
{
  "permissions": {
    "allow": [
      "Bash(npx tsc:*)",
      "Bash(npm install:*)"
    ]
  }
}
```

### Opciones de Configuracion Principales

```json
{
  "permissions": {
    "defaultMode": "plan",
    "allowedTools": ["Bash(git *)", "Read", "Edit"],
    "deniedTools": ["Bash(rm -rf *)"]
  },
  "model": "claude-opus-4-6",
  "effort": "medium",
  "alwaysThinkingEnabled": true,
  "autoMemoryEnabled": true,
  "environmentVariables": {
    "NODE_ENV": "development"
  },
  "hooks": {}
}
```

### Modos de Permisos

| Modo | Comportamiento |
|------|---------------|
| **Default** | Pide permiso para cada accion |
| **Plan** | Muestra plan antes de hacer cambios |
| **Auto-Accept** | Acepta ediciones automaticamente |
| **Auto Mode** | Maneja operaciones seguras automaticamente (Team/Enterprise) |
| **Bypass** | Salta verificaciones (solo sandbox) |

---

## 7. SISTEMA DE MEMORIA

### CLAUDE.md (Este archivo)

Archivo persistente que da contexto a Claude en cada sesion. Incluye:
- Informacion del proyecto
- Comandos de build/test
- Estandares de codigo
- Arquitectura del proyecto

### Ubicaciones de CLAUDE.md

| Alcance | Ruta |
|---------|------|
| Proyecto | `./CLAUDE.md` (raiz del repo) |
| Directorio | `<cualquier-dir>/CLAUDE.md` |
| Personal global | `~/.claude/CLAUDE.md` |
| Managed | `/Library/Application Support/ClaudeCode/CLAUDE.md` |

### Auto-Memoria

Claude guarda automaticamente aprendizajes entre sesiones:
- Comandos de build descubiertos
- Patrones de debugging
- Preferencias de estilo de codigo
- Insights de arquitectura

Almacenado en: `~/.claude/projects/<proyecto>/memory/MEMORY.md`

---

## 8. MCP (MODEL CONTEXT PROTOCOL)

Protocolo abierto para conectar herramientas de IA con fuentes de datos externas.

### Servidores MCP Comunes

| Servidor | Funcion |
|----------|---------|
| GitHub | Issues, PRs, repos |
| Playwright | Automatizacion de navegador |
| PostgreSQL | Acceso a base de datos |
| Notion | Documentacion |
| Slack | Mensajeria |
| Jira/Linear | Gestion de proyectos |

### Comandos MCP

```bash
claude mcp add --transport http <nombre> <url>
claude mcp list
claude mcp remove <nombre>
claude mcp connect <nombre>
```

---

## 9. INTEGRACION CON IDEs

### VS Code

- **Extension**: `anthropic.claude-code`
- **Diffs inline**: Vista de cambios directamente en el editor
- **@-mentions**: Referenciar archivos con rangos de lineas
- **Atajos**:
  - `Cmd+Esc` / `Ctrl+Esc` - Toggle focus entre editor y Claude
  - `Cmd+Shift+Esc` / `Ctrl+Shift+Esc` - Abrir en tab nueva
  - `Option+K` / `Alt+K` - Insertar @-mention

### JetBrains

- **Plugin**: "Claude Code Beta" desde Marketplace
- **Diff viewer**: Integrado con el visor de diffs del IDE
- **Diagnosticos**: Comparte errores lint/warnings automaticamente
- **Atajos**:
  - `Cmd+Esc` / `Ctrl+Esc` - Abrir Claude
  - `Cmd+Option+K` / `Alt+Ctrl+K` - Insertar referencia a archivo

---

## 10. AGENT SDK

SDK para acceso programatico a las herramientas de Claude Code. Disponible en Python y TypeScript.

### Instalacion

```bash
# TypeScript
npm install @anthropic-ai/claude-agent-sdk

# Python
pip install claude-agent-sdk
```

### Capacidades

- **Sub-agentes**: Crear agentes especializados para tareas paralelas
- **Hooks programaticos**: Registrar hooks via codigo
- **Sesiones**: Crear y reanudar sesiones
- **MCP**: Integrar servidores MCP programaticamente
- **Permisos**: Control granular de herramientas

### Ejemplo Basico (TypeScript)

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

for await (const message of query({
  prompt: "Analiza este archivo y sugiere mejoras",
  options: {
    allowedTools: ["Read", "Glob", "Grep"],
    permissionMode: "acceptEdits"
  }
})) {
  console.log(message);
}
```

---

## 11. API DE CLAUDE (ANTHROPIC API)

### Funcionalidades Principales

| Feature | Descripcion |
|---------|-------------|
| **Tool Use** | Llamadas a funciones/herramientas |
| **Streaming** | Respuestas en tiempo real |
| **Vision** | Analisis de imagenes (multimodal) |
| **Extended Thinking** | Razonamiento profundo con budget de tokens |
| **Batch Processing** | Procesamiento en lote (50% descuento) |
| **Prompt Caching** | Cache de contenido repetido (ahorro significativo) |
| **Structured Outputs** | Respuestas en JSON Schema |

### Ejemplo: Streaming

```python
with client.messages.stream(
    model="claude-opus-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

### Ejemplo: Extended Thinking

```python
response = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 10000},
    messages=[...]
)
```

---

## 12. ATAJOS DE TECLADO

### Terminal / CLI

| Atajo | Accion |
|-------|--------|
| `/` | Abrir menu de comandos |
| `Shift+Tab` | Ciclar modos de permisos |
| `Ctrl+O` / `Cmd+O` | Toggle modo verbose (thinking) |
| `Option+T` / `Alt+T` | Toggle modo thinking |
| `Ctrl+C` | Interrumpir a Claude |
| `Shift+Enter` | Nueva linea sin enviar |
| `Ctrl+L` / `Cmd+L` | Limpiar input |
| `Ctrl+R` / `Cmd+R` | Recuperar prompt anterior |

### Niveles de Esfuerzo

```
/effort low    -> Rapido, razonamiento minimo
/effort medium -> Balanceado (default)
/effort high   -> Razonamiento profundo
/effort max    -> Maximo (solo Opus 4.6)
```

---

## 13. FLAGS DEL CLI

```bash
# Basicos
claude                          # Sesion interactiva
claude "prompt"                 # Iniciar con prompt
claude -p "query"               # Modo print (no interactivo)
claude --continue               # Continuar ultima sesion
claude --resume "nombre"        # Reanudar sesion especifica

# Permisos y Seguridad
--permission-mode plan
--tools "Bash,Edit,Read"
--allowedTools "Bash(git *)"

# Modelo y Rendimiento
--model claude-opus-4-6
--effort high
--max-turns 5
--max-budget-usd 10.00

# Organizacion y Contexto
-n "nombre-sesion"
--system-prompt "Eres un experto en Python"
--append-system-prompt "Siempre usa async/await"

# Debugging
--debug
--verbose
--output-format json

# Git y Worktrees
--worktree feature-auth
```

---

## 14. FLUJOS DE TRABAJO COMUNES

### Debugging

```
1. Compartir error: "Tengo este error al ejecutar npm test"
2. Claude analiza el error y traza la causa raiz
3. Propone y aplica la correccion
4. Ejecuta tests para confirmar
```

### Refactoring con Plan

```
1. /model opus  (usar el modelo mas potente)
2. Describir el refactoring deseado
3. Claude muestra el plan
4. Revisar y aprobar
5. Claude implementa los cambios
```

### Crear Pull Request

```
1. Hacer cambios con Claude
2. Claude puede crear el commit
3. Claude puede crear el PR con gh cli
4. Incluye resumen, test plan y contexto
```

### Sesiones Paralelas

```
claude --worktree feature-auth    # Branch de feature
claude --worktree bugfix-123      # Branch de bugfix
# Cada uno en entorno aislado
```

---

## 15. SEGURIDAD Y PRIVACIDAD

- **El codigo NO se usa para entrenar modelos**
- Cada sesion mantiene contexto independiente
- Solo se leen archivos que Claude necesita
- Permisos granulares por herramienta
- Hooks para validacion antes de ejecucion
- Modo sandbox para codigo no confiable
- Aislamiento con git worktrees

### Mejores Practicas

1. Usar Plan Mode para cambios significativos
2. Habilitar hooks para operaciones sensibles
3. Configurar reglas de permisos en settings del equipo
4. Revisar ediciones antes de hacer commit
5. Nunca commitear archivos sensibles (.env, credentials)

---

## 16. INFORMACION DEL PROYECTO ACTUAL

### Stack Tecnologico

- **Framework**: Next.js 16.1.6 con App Router
- **UI Library**: React 19.2.3
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Animaciones**: GSAP 3.14.2, Motion 12.34.3
- **3D**: Three.js 0.183.1, OGL 1.0.11
- **Scroll**: Lenis 1.3.17

### Comandos del Proyecto

```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build de produccion
npm run start  # Iniciar servidor de produccion
npm run lint   # Ejecutar ESLint
```

### Estructura del Proyecto

```
my-app/
  app/           # App Router de Next.js (paginas, layouts)
  components/    # Componentes React reutilizables
  public/        # Assets estaticos
  .claude/       # Configuracion de Claude Code
    skills/      # Skills instalados (GSAP, frontend, browser, etc.)
    settings.local.json  # Permisos locales
```

---

## 17. RECURSOS Y SOPORTE

| Recurso | URL |
|---------|-----|
| Documentacion | https://code.claude.com/docs |
| GitHub | https://github.com/anthropics/claude-code |
| Console API | https://console.anthropic.com |
| Discord | https://anthropic.com/discord |
| Soporte | https://support.claude.com |

---

*Generado el 13 de abril de 2026 con Claude Opus 4.6*
