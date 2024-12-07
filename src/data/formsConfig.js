// ./src/config/seccionConfig.js

import Dashboard from '../components/Dashboard.jsx';

// Section 4 Imports
import { questions4_1 } from '../pages/sections/section4/section4_1/questions4_1';
import { questions4_2 } from '../pages/sections/section4/section4_2/questions4_2';
import { questions4_3 } from '../pages/sections/section4/section4_3/questions4_3';
import { questions4_4 } from '../pages/sections/section4/section4_4/questions4_4';
import { questions4_5 } from '../pages/sections/section4/section4_5/questions4_5';
import { questions4_6 } from '../pages/sections/section4/section4_6/questions4_6';
import { questions4_7 } from '../pages/sections/section4/section4_7/questions4_7';
import { questions4_8 } from '../pages/sections/section4/section4_8/questions4_8';
import { questions4_9 } from '../pages/sections/section4/section4_9/questions4_9';
import { questions4_10 } from '../pages/sections/section4/section4_10/questions4_10';

// Section 5 Imports
import { questions5_1 } from '../pages/sections/section5/section5_1/questions5_1';
import { questions5_2 } from '../pages/sections/section5/section5_2/questions5_2';
import { questions5_3 } from '../pages/sections/section5/section5_3/questions5_3';
import { questions5_4 } from '../pages/sections/section5/section5_4/questions5_4';
import { questions5_5 } from '../pages/sections/section5/section5_5/questions5_5';
import { questions5_6 } from '../pages/sections/section5/section5_6/questions5_6';
import { questions5_7 } from '../pages/sections/section5/section5_7/questions5_7';

// Section 6 Imports
import { questions6_1 } from '../pages/sections/section6/section6_1/questions6_1';
import { questions6_2 } from '../pages/sections/section6/section6_2/questions6_2';
import { questions6_3 } from '../pages/sections/section6/section6_3/questions6_3';
import { questions6_4 } from '../pages/sections/section6/section6_4/questions6_4';
import { questions6_5 } from '../pages/sections/section6/section6_5/questions6_5';
import { questions6_6 } from '../pages/sections/section6/section6_6/questions6_6';
import { questions6_7 } from '../pages/sections/section6/section6_7/questions6_7';
import { questions6_8 } from '../pages/sections/section6/section6_8/questions6_8';
import { questions6_9 } from '../pages/sections/section6/section6_9/questions6_9';
import { questions6_10 } from '../pages/sections/section6/section6_10/questions6_10';
import { questions6_11 } from '../pages/sections/section6/section6_11/questions6_11';
import { questions6_12 } from '../pages/sections/section6/section6_12/questions6_12';

// Section 7 Imports
import { questions7_1 } from '../pages/sections/section7/section7_1/questions7_1';
import { questions7_2 } from '../pages/sections/section7/section7_2/questions7_2';
import { questions7_3 } from '../pages/sections/section7/section7_3/questions7_3';
import { questions7_4 } from '../pages/sections/section7/section7_4/questions7_4';
import { questions7_5 } from '../pages/sections/section7/section7_5/questions7_5';
import { questions7_6 } from '../pages/sections/section7/section7_6/questions7_6';
import { questions7_7 } from '../pages/sections/section7/section7_7/questions7_7';

// Section 8 Imports
import { questions8_1 } from '../pages/sections/section8/section8_1/questions8_1';
import { questions8_2 } from '../pages/sections/section8/section8_2/questions8_2';
import { questions8_3 } from '../pages/sections/section8/section8_3/questions8_3';

// Section 9 Imports
import { questions9_1 } from '../pages/sections/section9/section9_1/questions9_1';
import { questions9_2 } from '../pages/sections/section9/section9_2/questions9_2';
import { questions9_3 } from '../pages/sections/section9/section9_3/questions9_3';
import { questions9_4 } from '../pages/sections/section9/section9_4/questions9_4';
import { questions9_5 } from '../pages/sections/section9/section9_5/questions9_5';
import { questions9_6 } from '../pages/sections/section9/section9_6/questions9_6';

// Section 10 Imports
import { questions10_3 } from '../pages/sections/section10/section10_3/questions10_3';

// Section 11 Imports
import { questions11_1 } from '../pages/sections/section11/section11_1/questions11_1';
import { questions11_2 } from '../pages/sections/section11/section11_2/questions11_2';
import { questions11_3 } from '../pages/sections/section11/section11_3/questions11_3';
import { questions11_4 } from '../pages/sections/section11/section11_4/questions11_4';
import { questions11_5 } from '../pages/sections/section11/section11_5/questions11_5';
import { questions11_6 } from '../pages/sections/section11/section11_6/questions11_6';
import { questions11_7 } from '../pages/sections/section11/section11_7/questions11_7';
import { questions11_8 } from '../pages/sections/section11/section11_8/questions11_8';
import { questions11_9 } from '../pages/sections/section11/section11_9/questions11_9';

// Section 12 Imports
import { questions12_4 } from '../pages/sections/section12/section12_4/questions12_4';
import { questions12_5 } from '../pages/sections/section12/section12_5/questions12_5';

// Section 13 Imports
import { questions13_1 } from '../pages/sections/section13/section13_1/questions13_1';
import { questions13_2 } from '../pages/sections/section13/section13_2/questions13_2';
import { questions13_3 } from '../pages/sections/section13/section13_3/questions13_3';

const seccionConfig = [
  {
    section: "4",
    sectionLabel: "Sección 4 - Requisitos Generales",
    icon: "FaGavel", // Icono relacionado con reglas
    subsections: [
      {
        subsection: "4.1",
        label: "4.1 Responsabilidades de la Alta Dirección",
        introductions: [
          "Introducción",
          "La Alta Dirección desempeña un papel fundamental en la implementación de la Norma Técnica de Calidad del Proceso Estadístico (NTC PE). Esta subsección destaca la necesidad de un liderazgo comprometido para establecer directrices estratégicas que impulsen la calidad estadística. Se subrayan responsabilidades como la asignación adecuada de recursos, la promoción de una cultura organizacional orientada a la calidad, y la garantía del cumplimiento de los principios éticos y legales asociados al proceso estadístico.",
        ],
        path: "/seccion/4/4.1",
        formQuestions: questions4_1,
        dashboard: Dashboard,
      },
      {
        subsection: "4.2",
        label: "4.2 Requisitos de la Entidad",
        introductions: [
          "Introducción",
          "Establece los requisitos fundamentales que deben cumplir las entidades para garantizar la implementación efectiva de los procesos estadísticos con calidad. Esta sección se enfoca en asegurar que la organización cuente con la infraestructura, los procedimientos y los recursos necesarios para soportar las actividades estadísticas de manera eficiente y conforme a los principios establecidos en la norma.",
          "Entre los aspectos clave, se incluye la importancia de adoptar una política de calidad estadística, documentar procesos, y establecer un sistema de gestión que permita el monitoreo y la mejora continua. La alineación de estos requisitos con los objetivos institucionales asegura una base sólida para cumplir con las demandas de transparencia, confiabilidad y accesibilidad de los datos.",
        ],
        path: "/seccion/4/4.2",
        formQuestions: questions4_2,
        dashboard: Dashboard,
      },
      {
        subsection: "4.3",
        label: "4.3 Confidencialidad de Datos Recolectados e Información Estadística",
        path: "/seccion/4/4.3",
        formQuestions: questions4_3,
        dashboard: Dashboard,
      },
      {
        subsection: "4.4",
        label: "4.4 Información Documentada del Proceso Estadístico",
        path: "/seccion/4/4.4",
        formQuestions: questions4_4,
        dashboard: Dashboard,
      },
      {
        subsection: "4.5",
        label: "4.5 Personal del Proceso Estadístico",
        path: "/seccion/4/4.5",
        formQuestions: questions4_5,
        dashboard: Dashboard,
      },
      {
        subsection: "4.6",
        label: "4.6 Uso y Aplicación de Lineamientos Estadísticos",
        path: "/seccion/4/4.6",
        formQuestions: questions4_6,
        dashboard: Dashboard,
      },
      {
        subsection: "4.7",
        label: "4.7 Gestión de los Riesgos",
        path: "/seccion/4/4.7",
        formQuestions: questions4_7,
        dashboard: Dashboard,
      },
      {
        subsection: "4.8",
        label: "4.8 Implementación del Proceso Estadístico",
        path: "/seccion/4/4.8",
        formQuestions: questions4_8,
        dashboard: Dashboard,
      },
      {
        subsection: "4.9",
        label: "4.9 Subcontratación para el Desarrollo de la Operación Estadística",
        path: "/seccion/4/4.9",
        formQuestions: questions4_9,
        dashboard: Dashboard,
      },
      {
        subsection: "4.10",
        label: "4.10 Seguimiento y Medición",
        path: "/seccion/4/4.10",
        formQuestions: questions4_10,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "5",
    sectionLabel: "Sección 5 - Detección y Análisis de Necesidades",
    icon: "FaBook", // Icono relacionado con conocimiento
    subsections: [
      {
        subsection: "5.1",
        label: "5.1 Identificación de Usuarios y Necesidades de Información",
        path: "/seccion/5/5.1",
        formQuestions: questions5_1,
        dashboard: Dashboard,
      },
      {
        subsection: "5.2",
        label: "5.2 Análisis de las Necesidades Recolectadas",
        path: "/seccion/5/5.2",
        formQuestions: questions5_2,
        dashboard: Dashboard,
      },
      {
        subsection: "5.3",
        label: "5.3 Relevancia de los Resultados de la Operación Estadística para la Política Pública",
        path: "/seccion/5/5.3",
        formQuestions: questions5_3,
        dashboard: Dashboard,
      },
      {
        subsection: "5.4",
        label: "5.4 Objetivos de la Operación Estadística",
        path: "/seccion/5/5.4",
        formQuestions: questions5_4,
        dashboard: Dashboard,
      },
      {
        subsection: "5.5",
        label: "5.5 Identificación de Conceptos",
        path: "/seccion/5/5.5",
        formQuestions: questions5_5,
        dashboard: Dashboard,
      },
      {
        subsection: "5.6",
        label: "5.6 Comprobación de la Disponibilidad de Datos",
        path: "/seccion/5/5.6",
        formQuestions: questions5_6,
        dashboard: Dashboard,
      },
      {
        subsection: "5.7",
        label: "5.7 Plan General de la Operación Estadística",
        path: "/seccion/5/5.7",
        formQuestions: questions5_7,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "6",
    sectionLabel: "Sección 6 - Diseño",
    icon: "FaRegLightbulb", // Otro icono relacionado con conocimiento
    subsections: [
      {
        subsection: "6.1",
        label: "6.1 Verificar las Necesidades",
        path: "/seccion/6/6.1",
        formQuestions: questions6_1,
        dashboard: Dashboard,
      },
      {
        subsection: "6.2",
        label: "6.2 Confirmar el Tipo de Fuente de Datos",
        path: "/seccion/6/6.2",
        formQuestions: questions6_2,
        dashboard: Dashboard,
      },
      {
        subsection: "6.3",
        label: "6.3 Diseño Temático",
        path: "/seccion/6/6.3",
        formQuestions: questions6_3,
        dashboard: Dashboard,
      },
      {
        subsection: "6.4",
        label: "6.4 Diseño Estadístico",
        path: "/seccion/6/6.4",
        formQuestions: questions6_4,
        dashboard: Dashboard,
      },
      {
        subsection: "6.5",
        label: "6.5 Diseño de la Recolección o Acopio",
        path: "/seccion/6/6.5",
        formQuestions: questions6_5,
        dashboard: Dashboard,
      },
      {
        subsection: "6.6",
        label: "6.6 Diseño del Procesamiento de los Datos",
        path: "/seccion/6/6.6",
        formQuestions: questions6_6,
        dashboard: Dashboard,
      },
      {
        subsection: "6.7",
        label: "6.7 Diseño del Análisis",
        path: "/seccion/6/6.7",
        formQuestions: questions6_7,
        dashboard: Dashboard,
      },
      {
        subsection: "6.8",
        label: "6.8 Diseño de la Difusión",
        path: "/seccion/6/6.8",
        formQuestions: questions6_8,
        dashboard: Dashboard,
      },
      {
        subsection: "6.9",
        label: "6.9 Diseño de Flujos de Trabajo",
        path: "/seccion/6/6.9",
        formQuestions: questions6_9,
        dashboard: Dashboard,
      },
      {
        subsection: "6.10",
        label: "6.10 Finalización de Archivos de Datos",
        path: "/seccion/6/6.10",
        formQuestions: questions6_10,
        dashboard: Dashboard,
      },
      {
        subsection: "6.11",
        label: "6.11 Diseño de las Pruebas",
        path: "/seccion/6/6.11",
        formQuestions: questions6_11,
        dashboard: Dashboard,
      },
      {
        subsection: "6.12",
        label: "6.12 Diseño de la Evaluación del Desempeño",
        path: "/seccion/6/6.12",
        formQuestions: questions6_12,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "7",
    sectionLabel: "Sección 7 - Construcción",
    icon: "FaTools", // Icono relacionado con herramientas/construcción
    subsections: [
      {
        subsection: "7.1",
        label: "7.1 Marco Estadístico",
        path: "/seccion/7/7.1",
        formQuestions: questions7_1,
        dashboard: Dashboard,
      },
      {
        subsection: "7.2",
        label: "7.2 Instrumento de Recolección",
        path: "/seccion/7/7.2",
        formQuestions: questions7_2,
        dashboard: Dashboard,
      },
      {
        subsection: "7.3",
        label: "7.3 Desarrollo del Software Aplicativo de la Operación Estadística",
        path: "/seccion/7/7.3",
        formQuestions: questions7_3,
        dashboard: Dashboard,
      },
      {
        subsection: "7.4",
        label: "7.4 Selección de Muestra",
        path: "/seccion/7/7.4",
        formQuestions: questions7_4,
        dashboard: Dashboard,
      },
      {
        subsection: "7.5",
        label: "7.5 Elaboración de Materiales para la Recolección o Acopio",
        path: "/seccion/7/7.5",
        formQuestions: questions7_5,
        dashboard: Dashboard,
      },
      {
        subsection: "7.6",
        label: "7.6 Construcción de los Flujos de Trabajo",
        path: "/seccion/7/7.6",
        formQuestions: questions7_6,
        dashboard: Dashboard,
      },
      {
        subsection: "7.7",
        label: "7.7 Pruebas",
        path: "/seccion/7/7.7",
        formQuestions: questions7_7,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "8",
    sectionLabel: "Sección 8 - Recolección o Acopio",
    icon: "FaDatabase", // Icono relacionado con datos
    subsections: [
      {
        subsection: "8.1",
        label: "8.1 Actividades Previas a la Recolección o Acopio",
        path: "/seccion/8/8.1",
        formQuestions: questions8_1,
        dashboard: Dashboard,
      },
      {
        subsection: "8.2",
        label: "8.2 Recolección o Acopio de Datos",
        path: "/seccion/8/8.2",
        formQuestions: questions8_2,
        dashboard: Dashboard,
      },
      {
        subsection: "8.3",
        label: "8.3 Control en la Recolección o Acopio de Datos",
        path: "/seccion/8/8.3",
        formQuestions: questions8_3,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "9",
    sectionLabel: "Sección 9 - Procesamiento",
    icon: "FaCog", // Icono relacionado con procesamiento/mecanismos
    subsections: [
      {
        subsection: "9.1",
        label: "9.1 Integración de Datos",
        path: "/seccion/9/9.1",
        formQuestions: questions9_1,
        dashboard: Dashboard,
      },
      {
        subsection: "9.2",
        label: "9.2 Clasificación y Codificación",
        path: "/seccion/9/9.2",
        formQuestions: questions9_2,
        dashboard: Dashboard,
      },
      {
        subsection: "9.3",
        label: "9.3 Revisión y Validación de Datos",
        path: "/seccion/9/9.3",
        formQuestions: questions9_3,
        dashboard: Dashboard,
      },
      {
        subsection: "9.4",
        label: "9.4 Edición e Imputación",
        path: "/seccion/9/9.4",
        formQuestions: questions9_4,
        dashboard: Dashboard,
      },
      {
        subsection: "9.5",
        label: "9.5 Cálculo de Ponderadores",
        path: "/seccion/9/9.5",
        formQuestions: questions9_5,
        dashboard: Dashboard,
      },
      {
        subsection: "9.6",
        label: "9.6 Finalización de los Archivos de Datos",
        path: "/seccion/9/9.6",
        formQuestions: questions9_6,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "10",
    sectionLabel: "Sección 10 - Análisis",
    icon: "FaChartLine", // Icono relacionado con análisis
    subsections: [
      {
        subsection: "10.3",
        label: "10.3 Cálculo de Agregaciones (Resultados)",
        path: "/seccion/10/10.3",
        formQuestions: questions10_3,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "11",
    sectionLabel: "Sección 11 - Difusión",
    icon: "FaShareAlt", // Icono relacionado con difusión
    subsections: [
      {
        subsection: "11.1",
        label: "11.1 Productos, Canales y Medios de Difusión",
        path: "/seccion/11/11.1",
        formQuestions: questions11_1,
        dashboard: Dashboard,
      },
      {
        subsection: "11.2",
        label: "11.2 Metadatos",
        path: "/seccion/11/11.2",
        formQuestions: questions11_2,
        dashboard: Dashboard,
      },
      {
        subsection: "11.3",
        label: "11.3 Puntualidad y Oportunidad",
        path: "/seccion/11/11.3",
        formQuestions: questions11_3,
        dashboard: Dashboard,
      },
      {
        subsection: "11.4",
        label: "11.4 Continuidad de la Operación Estadística",
        path: "/seccion/11/11.4",
        formQuestions: questions11_4,
        dashboard: Dashboard,
      },
      {
        subsection: "11.5",
        label: "11.5 Publicación de Medidas de Calidad",
        path: "/seccion/11/11.5",
        formQuestions: questions11_5,
        dashboard: Dashboard,
      },
      {
        subsection: "11.6",
        label: "11.6 Series Históricas",
        path: "/seccion/11/11.6",
        formQuestions: questions11_6,
        dashboard: Dashboard,
      },
      {
        subsection: "11.7",
        label: "11.7 Condiciones de Uso de la Información Estadística",
        path: "/seccion/11/11.7",
        formQuestions: questions11_7,
        dashboard: Dashboard,
      },
      {
        subsection: "11.8",
        label: "11.8 Autorización de Publicación de Información Estadística",
        path: "/seccion/11/11.8",
        formQuestions: questions11_8,
        dashboard: Dashboard,
      },
      {
        subsection: "11.9",
        label: "11.9 Soporte a Usuarios de la Información Estadística",
        path: "/seccion/11/11.9",
        formQuestions: questions11_9,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "12",
    sectionLabel: "Sección 12 - Evaluación del Desempeño",
    icon: "FaChartPie", // Icono relacionado con evaluación
    subsections: [
      {
        subsection: "12.4",
        label: "12.4 Análisis de la Evaluación del Desempeño",
        path: "/seccion/12/12.4",
        formQuestions: questions12_4,
        dashboard: Dashboard,
      },
      {
        subsection: "12.5",
        label: "12.5 Auditoría Interna",
        path: "/seccion/12/12.5",
        formQuestions: questions12_5,
        dashboard: Dashboard,
      },
    ],
  },
  {
    section: "13",
    sectionLabel: "Sección 13 - Mejora",
    icon: "FaWrench", // Icono relacionado con mejora
    subsections: [
      {
        subsection: "13.1",
        label: "13.1 Generalidades",
        path: "/seccion/13/13.1",
        formQuestions: questions13_1,
        dashboard: Dashboard,
      },
      {
        subsection: "13.2",
        label: "13.2 No Conformidad y Acción Correctiva",
        path: "/seccion/13/13.2",
        formQuestions: questions13_2,
        dashboard: Dashboard,
      },
      {
        subsection: "13.3",
        label: "13.3 Mejora Continua",
        path: "/seccion/13/13.3",
        formQuestions: questions13_3,
        dashboard: Dashboard,
      },
    ],
  },
];

export default seccionConfig;
