# Linéo

**Linéo** es una herramienta innovadora diseñada para verificar y realizar el seguimiento de la implementación de los lineamientos de la norma NTC PE 1000:2020 en la Supersalud. Facilita la gestión eficiente de los procesos, optimizando la calidad y el manejo de información estadística, y apoyando la autogestión y la mejora continua.

## Características

- **Autenticación Segura:** Inicia sesión y regístrate de manera protegida.
- **Dashboard Interactivo:** Visualiza estadísticas y análisis en tiempo real.
- **Formularios Personalizados:** Completa y gestiona formularios para el seguimiento de la norma.
- **Notificaciones:** Recibe alertas y actualizaciones relevantes.
- **Panel de Administración:** Revisa los últimos envios y el seguimiento de cada dato.

## Tecnologías Utilizadas

- **Frontend:** React.js, Tailwind CSS, Material Tailwind
- **Backend:** Supabase
- **Gráficos:** Nivo, React-Toastify
- **Iconos:** React Icons

## Instalación

### Prerrequisitos

Asegúrate de tener instalados los siguientes elementos:

- [**Node.js**](https://nodejs.org/en) (v14 o superior)
- **npm** (v6 o superior)
- **Cuenta en Supabase** para gestionar la base de datos

### Pasos

#### Clona el repositorio

```bash
# Clonar el repositorio

git clone https://github.com/tu_usuario/lineo.git
cd lineo
```

#### Instala las dependencias

```bash
# Instalar las dependencias

npm install
```

#### Configura las variables de entorno

Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de Supabase:

```env
REACT_APP_SUPABASE_URL=https://tu-supabase-url.supabase.co
REACT_APP_SUPABASE_ANON_KEY=tu-anon-key
```

## Uso

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### Instalar dependencias

```bash
npm install
```

### Iniciar la aplicación en modo desarrollo

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Ejecutar pruebas

```bash
npm test
```

### Construir la aplicación para producción

```bash
npm run build
```

## Despliegue

Para desplegar la aplicación, consulta la documentación de [**Create React App**](https://create-react-app.dev/docs/deployment/).

