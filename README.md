# CiberConCiencia 🛡️

Un proyecto educativo dedicado a concienciar y empoderar a jóvenes, padres y educadores en la lucha contra el ciberacoso. Esta plataforma ofrece información, recursos y herramientas interactivas para entender, identificar y actuar frente al acoso en línea.

---

## 📋 Estructura del Proyecto

### Archivos HTML

#### **index.html** - Página de Inicio
- Punto de entrada principal del sitio
- Contiene una sección hero con el mensaje principal: "El Conocimiento es tu Escudo"
- Presenta tarjetas informativas con enlaces a las principales secciones
- Navegación responsiva con menú hamburguesa

#### **que-es.html** - ¿Qué es el Ciberacoso?
- Define el concepto de "cyberbullying" y sus características principales
- Detalla 6 tipos comunes de ciberacoso con imágenes descriptivas:
  - Hostigamiento
  - Denigración o Difamación
  - Suplantación de Identidad
  - Exclusión Social
  - Doxing
  - Trolleo (Trolling)
- Diseño de grid responsive para mostrar tipos de acoso

#### **repercusiones.html** - Impacto del Ciberacoso
- Explora las consecuencias reales del acoso digital
- Secciones principales:
  - **Impacto Psicológico y Emocional**: Ansiedad, depresión, baja autoestima, ideación suicida
  - **Impacto Social y de Comportamiento**: Aislamiento, bajo rendimiento académico, cambios en sueño/alimentación
- Incluye un video embebido de YouTube para reforzar el mensaje

#### **como-actuar.html** - ¿Cómo Actuar?
- Guía práctica de respuesta ante ciberacoso
- Estrategias para víctimas, testigos y padres
- Pasos concretos para reportar y obtener ayuda

#### **recursos.html** - Centro de Recursos
- Recopilación de herramientas, enlaces y contactos útiles
- Información de organizaciones de apoyo
- Referencias para padres y educadores

#### **quiz.html** - Quiz Interactivo
- Evaluación de conocimientos sobre ciberacoso
- Incluye validación de respuestas correctas/incorrectas
- Sistema de puntuación final
- Pantallas de inicio, preguntas y resultados

---

## 🎨 Estilos CSS

### **css/style.css** (512 líneas)
Sistema de diseño completo con:

**Variables de Color:**
- `--primary-color`: #3a0ca3 (Violeta oscuro)
- `--secondary-color`: #4361ee (Azul)
- `--accent-color`: #4cc9f0 (Cian)
- `--danger-color`: #f72585 (Rosa)
- `--success-color`: #48bfe3 (Verde agua)
- `--light-color`: #f4f4f9 (Fondo claro)
- `--dark-color`: #1b263b (Texto oscuro)

**Tipografía:**
- Headings: Poppins (600, 700)
- Body: Roboto (400, 500, 700)

**Componentes Principales:**
- Header sticky con navegación responsiva
- Grid layout para contenido
- Tarjetas (cards) con efectos hover
- Botones con estilos consistentes
- Menú hamburguesa para móvil
- Footer con información
- Contenedor de video responsive
- Transiciones y animaciones suaves

---

## ⚙️ Scripts JavaScript

### **js/main.js** (46 líneas)
Funcionalidad de navegación principal:
- `navSlide()`: Activa/desactiva el menú móvil
- Anima los enlaces de navegación con transiciones suaves
- Crea dinámicamente animaciones CSS para navLinkFade
- Se ejecuta al cargar la página (defer)

**Características:**
- Toggle del menú hamburguesa
- Animación en cascada de links de navegación
- Integración de keyframes dinámicos

### **js/quiz.js** (151 líneas)
Sistema completo de quiz interactivo:

**Funcionalidades:**
- Array de preguntas con respuestas múltiples
- 3 pantallas: inicio, preguntas, resultados
- Contador de progreso (Pregunta X de Y)
- Sistema de puntuación
- Mensajes personalizados según score final
- Validación de respuestas correctas/incorrectas
- Botones de inicio y reinicio

**Ejemplo de Preguntas:**
- Identificación de ciberacoso
- Primeros pasos como víctima
- Definición de "Doxing"
- Acciones recomendadas para testigos

### **js/escenarios.js** (96 líneas)
Simulador interactivo de escenarios de ciberacoso:

**Características:**
- 3 escenarios diferentes (víctima, contenido burlista, testigo)
- Múltiples opciones de respuesta por escenario
- Retroalimentación inmediata después de elegir
- Sistema de puntuación
- Navegación entre escenarios

**Escenarios Incluidos:**
1. Recibir insulto de desconocido → Estrategias de bloqueo
2. Meme burlista compartido → Importancia de guardar evidencia
3. Amigo siendo acosado → Rol del testigo activo

---

## 🖼️ Imágenes

Carpeta: **img/**

### Contenido Visual:

| Archivo | Descripción |
|---------|-------------|
| **logo.svg** | Logo principal de CiberConCiencia |
| **Hostigamiento.jpeg** | Ilustración sobre acoso repetido |
| **Denigracion.jpg** | Imagen sobre difamación/rumores |
| **Suplantacion.jpg** | Ilustración de robo de identidad digital |
| **Exclusion social.jpg** | Imagen sobre aislamiento en línea |
| **Doxing.jpg** | Visualización de exposición de datos privados |
| **Trolling.jpg** | Ilustración sobre provocaciones en línea |
| **Impacto Psicológico y Emocional.jpg** | Efectos mentales del ciberacoso |
| **Impacto Social y de Comportamiento.jpg** | Consecuencias sociales y académicas |

---

## 🌐 Navegación del Sitio

```
Inicio
  ├─ ¿Qué es?
  │   └─ (Tipos de ciberacoso con imágenes)
  ├─ Repercusiones
  │   └─ (Impactos psicológicos y sociales)
  ├─ ¿Cómo Actuar?
  │   └─ (Guías de respuesta)
  ├─ Recursos
  │   └─ (Enlaces y referencias útiles)
  └─ Quiz
      └─ (Evaluación interactiva + Escenarios)
```

---

## 🎯 Características Principales

✅ **Diseño Responsivo**: Compatible con dispositivos móviles, tablets y escritorio  
✅ **Navegación Intuitiva**: Menú fijo y hamburguesa para móvil  
✅ **Contenido Educativo**: Información clara sobre tipos y consecuencias  
✅ **Interactividad**: Quiz y escenarios simulados  
✅ **Accesibilidad**: Imágenes con alt-text descriptivos  
✅ **Paleta Vibrante**: Colores llamativos pero profesionales  
✅ **Animaciones**: Transiciones suaves en navegación y elementos  
✅ **Video Embebido**: Recursos multimedia integrados  

---

## 🚀 Cómo Usar

1. **Abrir en navegador**: Abre `index.html` en tu navegador predeterminado
2. **Navegar**: Usa el menú superior para acceder a las diferentes secciones
3. **En móvil**: Toca el icono de hamburguesa para abrir el menú
4. **Interactuar**: Completa el quiz o prueba los escenarios interactivos
5. **Aprender**: Explora cada sección para educarte sobre ciberacoso

---

## 📝 Notas Técnicas

- **Lenguaje**: HTML5, CSS3, JavaScript (Vanilla)
- **Sin dependencias externas**: Solo fuentes de Google Fonts
- **Idioma**: Español
- **Responsive**: Mobile-first design
- **Animaciones CSS**: Dinamicamente inyectadas vía JS cuando es necesario

---

## 🤝 Propósito

CiberConCiencia busca:
- 🎓 **Educar** a jóvenes sobre los peligros del ciberacoso
- 💪 **Empoderar** a víctimas con estrategias de respuesta
- 👥 **Informar** a padres y educadores
- 🛡️ **Crear** comunidades más seguras en línea

---

## 📄 Licencia

Este proyecto es educativo y está disponible para uso público con fines de concientización sobre ciberacoso.

---

**Última actualización**: 11 de diciembre de 2025

