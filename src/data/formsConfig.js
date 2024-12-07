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
          "La Alta Dirección desempeña un papel fundamental en la implementación de la Norma Técnica de Calidad del Proceso Estadístico (NTC PE). Esta subsección destaca la necesidad de un liderazgo comprometido para establecer directrices estratégicas que impulsen la calidad estadística. Se subrayan responsabilidades como la asignación adecuada de recursos, la promoción de una cultura organizacional orientada a la calidad, y la garantía del cumplimiento de los principios éticos y legales asociados al proceso estadístico."
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
        introductions: [
          "Introducción",
          "Este principio garantiza que toda información obtenida durante el desarrollo de actividades estadísticas sea manejada bajo estrictos estándares éticos y normativos, protegiendo la privacidad de las personas, entidades y organizaciones involucradas.",
          "Asimismo, establece directrices claras para evitar el acceso, uso o divulgación no autorizados de los datos, promoviendo la confianza en los procesos estadísticos y asegurando su adhesión a la legislación aplicable, particularmente en el contexto de entidades públicas como la Superintendencia Nacional de Salud.",
        ],
        path: "/seccion/4/4.3",
        formQuestions: questions4_3,
        dashboard: Dashboard,
      },
      {
        subsection: "4.4",
        label: "4.4 Información Documentada del Proceso Estadístico",
        introductions: [
          "Introducción",
          "La información documentada constituye la base para garantizar la trazabilidad, transparencia y reproducibilidad del proceso estadístico. Esta sección detalla los requisitos para registrar y organizar toda la documentación relacionada con las actividades estadísticas, incluidas las metodologías, procedimientos, flujos de trabajo y decisiones tomadas. Esta información no solo debe ser accesible y comprensible, sino que también debe mantenerse actualizada, permitiendo evaluaciones técnicas y auditorías que aseguren el cumplimiento de los estándares establecidos."
        ],
        path: "/seccion/4/4.4",
        formQuestions: questions4_4,
        dashboard: Dashboard,
      },
      {
        subsection: "4.5",
        label: "4.5 Personal del Proceso Estadístico",
        introductions: [
          "Introducción",
          "El personal involucrado en el proceso estadístico desempeña un rol fundamental en la implementación efectiva de los lineamientos de la NTC PE 1000:2020. Esta sección aborda los requisitos relacionados con la formación, competencias y asignación de responsabilidades del equipo estadístico. Se enfatiza la necesidad de contar con personal calificado y capacitado, asegurando la correcta ejecución de las actividades estadísticas y promoviendo un enfoque de mejora continua a través de planes de capacitación y evaluación de desempeño."
        ],
        path: "/seccion/4/4.5",
        formQuestions: questions4_5,
        dashboard: Dashboard,
      },
      {
        subsection: "4.6",
        label: "4.6 Uso y Aplicación de Lineamientos Estadísticos",
        introductions: [
          "Introducción",
          "El uso y la aplicación de lineamientos estadísticos son esenciales para la estandarización y la calidad de los productos generados. La NTC PE 1000:2020, establece la necesidad de adoptar normas, metodologías y buenas prácticas reconocidas que garanticen la consistencia, comparabilidad y utilidad de los datos. La implementación rigurosa de estos lineamientos asegura la alineación con estándares nacionales e internacionales, fortaleciendo la credibilidad del proceso estadístico."
        ],
        path: "/seccion/4/4.6",
        formQuestions: questions4_6,
        dashboard: Dashboard,
      },
      {
        subsection: "4.7",
        label: "4.7 Gestión de los Riesgos",
        introductions: [
          "Introducción",
          "La gestión de riesgos en el proceso estadístico es un componente crítico para anticipar, mitigar y controlar posibles eventos que puedan comprometer la calidad, integridad o continuidad del proceso. En el marco de la NTC PE 1000:2020, esta sección establece directrices para identificar, evaluar y gestionar los riesgos asociados a todas las fases del proceso estadístico. Se promueve un enfoque preventivo que integre controles y medidas correctivas, asegurando la sostenibilidad y robustez de las actividades estadísticas."
        ],
        path: "/seccion/4/4.7",
        formQuestions: questions4_7,
        dashboard: Dashboard,
      },
      {
        subsection: "4.8",
        label: "4.8 Implementación del Proceso Estadístico",
        introductions: [
          "Introducción",
          " La implementación efectiva del proceso estadístico requiere de una planificación estructurada y la ejecución coordinada de todas las fases definidas en la NTC PE 1000:2020. Esta sección describe las actividades esenciales para garantizar que los procesos se desarrollen conforme a los objetivos, lineamientos técnicos y normativos establecidos. Asimismo, incluye las medidas necesarias para la integración de recursos, tecnologías y metodologías que aseguren resultados confiables y oportunos."
        ],
        path: "/seccion/4/4.8",
        formQuestions: questions4_8,
        dashboard: Dashboard,
      },
      {
        subsection: "4.9",
        label: "4.9 Subcontratación para el Desarrollo de la Operación Estadística",
        introductions: [
          "Introducción",
          " La subcontratación en el contexto del proceso estadístico debe realizarse bajo criterios claros y estrictos que garanticen el cumplimiento de los estándares de calidad definidos por la NTC PE 1000:2020. Esta sección detalla los requisitos para la selección, contratación, supervisión y evaluación de terceros encargados de desarrollar actividades específicas del proceso estadístico. La gestión adecuada de la subcontratación asegura que los resultados se alineen con los objetivos estratégicos y normativos de la operación estadística."
        ],
        path: "/seccion/4/4.9",
        formQuestions: questions4_9,
        dashboard: Dashboard,
      },
      {
        subsection: "4.10",
        label: "4.10 Seguimiento y Medición",
        introductions: [
          "Introducción",
          "El seguimiento y la medición son herramientas clave para evaluar el desempeño del proceso estadístico y garantizar su mejora continua. Esta sección establece directrices para la implementación de sistemas de monitoreo que permitan medir indicadores de calidad, eficiencia y efectividad en todas las fases del proceso. Los resultados de estas mediciones constituyen la base para realizar ajustes, documentar lecciones aprendidas y fortalecer la capacidad institucional en la generación de información estadística confiable."
        ],
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
        introductions: [
          "Introducción",
          "La identificación de usuarios y sus necesidades de información constituye el punto inicial indispensable para garantizar que las operaciones estadísticas se ajusten a los requerimientos específicos de sus beneficiarios. Según la NTC PE 1000:2020, esta sección describe directrices para reconocer y caracterizar a los usuarios potenciales y sus demandas, priorizando un enfoque participativo y estructurado. Este proceso permite alinear la planeación estadística con las expectativas y los objetivos estratégicos definidos por la entidad productora de estadísticas."
        ],
        path: "/seccion/5/5.1",
        formQuestions: questions5_1,
        dashboard: Dashboard,
      },
      {
        subsection: "5.2",
        label: "5.2 Análisis de las Necesidades Recolectadas",
        introductions: [
          "Introducción",
          "El análisis de las necesidades recogidas asegura que las demandas identificadas se traduzcan en requisitos técnicos y metodológicos viables. La NTC PE 1000:2020 señala que este análisis debe considerar la factibilidad técnica, la disponibilidad de recursos, el marco normativo y el impacto potencial de la información estadística. Este ejercicio garantiza que las operaciones estén diseñadas para maximizar su pertinencia, utilidad y calidad, de acuerdo con las necesidades detectadas en la fase previa."
        ],
        path: "/seccion/5/5.2",
        formQuestions: questions5_2,
        dashboard: Dashboard,
      },
      {
        subsection: "5.3",
        label: "5.3 Relevancia de los Resultados de la Operación Estadística para la Política Pública",
        introductions: [
          "Introducción",
          "La relevancia de los resultados de la operación estadística radica en su capacidad de influir en la formulación, seguimiento y evaluación de políticas públicas. De acuerdo con la NTC PE 1000:2020, esta sección destaca la importancia de vincular los objetivos y resultados estadísticos con los marcos de política pública existentes, asegurando que los datos generados contribuyan efectivamente a la toma de decisiones basadas en evidencia. Esto exige un análisis detallado del contexto institucional y de las prioridades estratégicas de la entidad y del país."
        ],
        path: "/seccion/5/5.3",
        formQuestions: questions5_3,
        dashboard: Dashboard,
      },
      {
        subsection: "5.4",
        label: "5.4 Objetivos de la Operación Estadística",
        introductions: [
          "Introducción",
          "Los objetivos de la operación estadística constituyen la referencia principal que orienta todo el desarrollo del proceso estadístico. En el contexto de la NTC PE 1000:2020, esta sección establece la necesidad de formular objetivos claros, medibles y alineados con las necesidades de información identificadas. Estos, deben guiar la planificación, ejecución y evaluación de la operación, asegurando que los recursos se empleen de manera eficiente y los resultados sean consistentes con las expectativas de los usuarios."
        ],
        path: "/seccion/5/5.4",
        formQuestions: questions5_4,
        dashboard: Dashboard,
      },
      {
        subsection: "5.5",
        label: "5.5 Identificación de Conceptos",
        introductions: [
          "Introducción",
          "La identificación de conceptos estadísticos es un paso imprescindible para garantizar la coherencia y comparabilidad de los datos generados. Según la NTC PE 1000:2020, esta sección aborda la definición precisa y consensuada de términos, categorías y clasificaciones utilizados en la operación estadística. Este proceso debe alinearse con estándares nacionales e internacionales, asegurando la interoperabilidad y la comprensión homogénea de los resultados."
        ],
        path: "/seccion/5/5.5",
        formQuestions: questions5_5,
        dashboard: Dashboard,
      },
      {
        subsection: "5.6",
        label: "5.6 Comprobación de la Disponibilidad de Datos",
        introductions: [
          "Introducción",
          "La comprobación de la disponibilidad de datos resulta fundamental para evaluar la viabilidad técnica de la operación estadística. Esta sección de la NTC PE 1000:2020 establece los procedimientos para identificar, analizar y validar las fuentes de información existentes, determinando si son suficientes, pertinentes y confiables para satisfacer los objetivos planteados. En caso de insuficiencia, se deben diseñar estrategias complementarias de recolección de datos o ajustes en los objetivos de la operación."
        ],
        path: "/seccion/5/5.6",
        formQuestions: questions5_6,
        dashboard: Dashboard,
      },
      {
        subsection: "5.7",
        label: "5.7 Plan General de la Operación Estadística",
        introductions: [
          "Introducción",
          "El plan general de la operación estadística, conforme a la NTC PE 1000:2020, es un documento integrador que organiza las actividades, recursos y cronogramas necesarios para desarrollar el proceso estadístico. Esta sección detalla la importancia de definir roles y responsabilidades, establecer controles de calidad y anticipar posibles riesgos o contingencias. Un plan bien estructurado garantiza la coherencia y la eficiencia en todas las fases del proceso, contribuyendo al éxito de la operación estadística."
        ],
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
        introductions: [
          "Introducción",
          " La verificación de las necesidades es un paso primordial para garantizar que las demandas de información identificadas sean precisas, viables y alineadas con los objetivos de la operación estadística. Según los lineamientos de la NTC PE 1000:2020, esta etapa requiere una revisión sistemática de los requisitos recogidos, asegurando su pertinencia y priorización, además de identificar cualquier posible discrepancia o limitación que deba ser abordada antes del diseño de la operación."
        ],
        path: "/seccion/6/6.1",
        formQuestions: questions6_1,
        dashboard: Dashboard,
      },
      {
        subsection: "6.2",
        label: "6.2 Confirmar el Tipo de Fuente de Datos",
        introductions: [
          "Introducción",
          "La confirmación del tipo de fuente de datos constituye un aspecto estratégico en el diseño del proceso estadístico. En el marco de la NTC PE 1000:2020, esta sección aborda la necesidad de validar si las fuentes identificadas (administrativas, censales, muestrales o mixtas) cumplen con los criterios de calidad, oportunidad y representatividad requeridos para responder a las necesidades de información, y si estas son accesibles dentro del marco legal e institucional aplicable."
        ],
        path: "/seccion/6/6.2",
        formQuestions: questions6_2,
        dashboard: Dashboard,
      },
      {
        subsection: "6.3",
        label: "6.3 Diseño Temático",
        introductions: [
          "Introducción",
          "El diseño temático define los temas y variables centrales de la operación estadística, estableciendo el alcance conceptual y el marco lógico para la recolección y análisis de datos. De acuerdo con la NTC PE 1000:2020, esta sección detalla los procedimientos para seleccionar y estructurar los temas relevantes, garantizando que estén alineados con las necesidades identificadas y se ajusten a clasificaciones y estándares internacionales."
        ],
        path: "/seccion/6/6.3",
        formQuestions: questions6_3,
        dashboard: Dashboard,
      },
      {
        subsection: "6.4",
        label: "6.4 Diseño Estadístico",
        introductions: [
          "Introducción",
          "El diseño estadístico es una fase fundamental que garantiza que la estructura y metodología de la operación estadística sean coherentes con los objetivos establecidos y cumplan los estándares de calidad definidos. De acuerdo con los lineamientos de la NTC PE 1000:2020, este proceso incluye la definición de variables, la selección de unidades de observación, el diseño muestral y la elección de técnicas de recolección y procesamiento de datos. Su correcta implementación permite asegurar la fiabilidad, la representatividad y la utilidad de la información generada, minimizando posibles sesgos y optimizando los recursos disponibles."
        ],
        path: "/seccion/6/6.4",
        formQuestions: questions6_4,
        dashboard: Dashboard,
      },
      {
        subsection: "6.5",
        label: "6.5 Diseño de la Recolección o Acopio",
        introductions: [
          "Introducción",
          "El diseño de la recolección o acopio es una etapa crucial para garantizar que los datos recolectados sean pertinentes, confiables y adecuados para los objetivos de la operación estadística. Según los lineamientos de la NTC PE 1000:2020, esta fase implica la definición detallada de los métodos, instrumentos y procedimientos necesarios para captar la información requerida, asegurando la calidad y consistencia de los datos. Además, considera aspectos como la validación de los instrumentos y la planeación logística, minimizando posibles sesgos o errores durante la recolección."
        ],
        path: "/seccion/6/6.5",
        formQuestions: questions6_5,
        dashboard: Dashboard,
      },
      {
        subsection: "6.6",
        label: "6.6 Diseño del Procesamiento de los Datos",
        introductions: [
          "Introducción",
          "El diseño del procesamiento de los datos es una etapa esencial para asegurar que la información recopilada sea transformada de manera eficiente en resultados estadísticos útiles y confiables. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta fase implica la definición de procedimientos claros para la depuración, validación y análisis de los datos, garantizando la calidad y consistencia de la información procesada. Además, considera la implementación de herramientas y metodologías adecuadas para mitigar posibles errores y optimizar el flujo de trabajo, alineando cada paso con los objetivos de la operación estadística."
        ],
        path: "/seccion/6/6.6",
        formQuestions: questions6_6,
        dashboard: Dashboard,
      },
      {
        subsection: "6.7",
        label: "6.7 Diseño del Análisis",
        introductions: [
          "Introducción",
          "El diseño del análisis es una etapa fundamental para asegurar que los métodos y técnicas empleadas sean adecuados, consistentes y alineados con los objetivos de la operación estadística. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta fase implica la selección cuidadosa de herramientas analíticas, la definición de criterios de interpretación y la identificación de las variables clave a evaluar. Este diseño debe garantizar la generación de resultados fiables y útiles, además de prever posibles limitaciones técnicas o metodológicas que puedan influir en la calidad del análisis estadístico."
        ],
        path: "/seccion/6/6.7",
        formQuestions: questions6_7,
        dashboard: Dashboard,
      },
      {
        subsection: "6.8",
        label: "6.8 Diseño de la Difusión",
        introductions: [
          "Introducción",
          "El diseño de la difusión es una etapa esencial para garantizar que la información estadística generada sea accesible, comprensible y útil para los diferentes grupos de interés. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta fase implica establecer estrategias y canales efectivos para la comunicación de los resultados, asegurando que cumplan con los principios de transparencia, oportunidad y relevancia. Además, se deben considerar aspectos como la adaptación del contenido a las necesidades de los usuarios y la implementación de formatos estandarizados que faciliten la interpretación y el aprovechamiento de la información publicada."
        ],
        path: "/seccion/6/6.8",
        formQuestions: questions6_8,
        dashboard: Dashboard,
      },
      {
        subsection: "6.9",
        label: "6.9 Diseño de Flujos de Trabajo",
        introductions: [
          "Introducción",
          "El diseño de flujos de trabajo es una etapa fundamental para asegurar que los procesos estadísticos se desarrollen de manera eficiente, coherente y alineada con los objetivos de la operación. Según los lineamientos de la NTC PE 1000:2020, esta etapa implica establecer una secuencia clara y lógica de actividades, definiendo las interacciones entre los actores involucrados, los recursos necesarios y los tiempos estimados. Además, permite identificar posibles cuellos de botella y áreas de mejora, asegurando una integración adecuada de los procedimientos técnicos y administrativos para el éxito de la operación estadística."
        ],
        path: "/seccion/6/6.9",
        formQuestions: questions6_9,
        dashboard: Dashboard,
      },
      {
        subsection: "6.10",
        label: "6.10 Finalización de Archivos de Datos",
        introductions: [
          "Introducción",
          "La finalización de archivos de datos es un proceso clave para asegurar que los datos estadísticos sean completos, consistentes y estén listos para su difusión o análisis. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta etapa implica una revisión exhaustiva de los archivos, garantizando que todos los elementos necesarios, como variables, metadatos y registros, estén correctamente definidos y validados. Además, se deben aplicar procedimientos de calidad para verificar la integridad de los datos y resolver cualquier inconsistencia antes de su almacenamiento o publicación, asegurando que cumplan con los estándares requeridos para su uso en operaciones estadísticas futuras."
        ],
        path: "/seccion/6/6.10",
        formQuestions: questions6_10,
        dashboard: Dashboard,
      },
      {
        subsection: "6.11",
        label: "6.11 Diseño de las Pruebas",
        introductions: [
          "Introducción",
          "El diseño de las pruebas según la norma técnica estadística es un proceso fundamental para garantizar la validez y confiabilidad de los resultados obtenidos en una operación estadística. Siguiendo los lineamientos establecidos por la NTC PE 1000:2020, esta etapa implica la planificación detallada de los procedimientos y metodologías que se emplearán para evaluar la calidad y consistencia de los datos. Se debe asegurar que las pruebas sean adecuadas para los objetivos de la operación, estableciendo criterios claros para su ejecución, controlando las posibles fuentes de error y validando los resultados de manera sistemática antes de la implementación final de la operación estadística."
        ],
        path: "/seccion/6/6.11",
        formQuestions: questions6_11,
        dashboard: Dashboard,
      },
      {
        subsection: "6.12",
        label: "6.12 Diseño de la Evaluación del Desempeño",
        introductions: [
          "Introducción",
          "El diseño de la Evaluación de Desempeño, según lo estipulado en la norma técnica estadística, es un proceso clave para asegurar que los sistemas y métodos de producción estadística cumplan con los estándares de calidad establecidos. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta fase implica la elaboración de un plan detallado que especifique los criterios y métodos de evaluación, los indicadores de desempeño a medir y los procedimientos de recolección y análisis de datos. Además, se deben considerar las necesidades y expectativas de los usuarios de la información estadística, garantizando que la evaluación sea pertinente, objetiva y útil para la mejora continua de los procesos estadísticos."
        ],
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
        introductions: [
          "Introducción",
          "La construcción del Marco Estadístico es una fase esencial en la implementación de la Norma Técnica Estadística, ya que establece las bases para el desarrollo y la organización de los procesos estadísticos. Según los lineamientos de la NTC PE 1000:2020, esta etapa implica la creación de un marco estructurado que defina claramente los conceptos, métodos y herramientas necesarios para garantizar la coherencia y la calidad en la producción de estadísticas. Es fundamental asegurar que el marco estadístico sea flexible y adaptable, permitiendo su actualización constante en función de los avances tecnológicos y las necesidades de los usuarios, además de facilitar la integración de nuevas fuentes de datos e información."
        ],
        path: "/seccion/7/7.1",
        formQuestions: questions7_1,
        dashboard: Dashboard,
      },
      {
        subsection: "7.2",
        label: "7.2 Instrumento de Recolección",
        introductions: [
          "Introducción",
          "La construcción del Instrumento de Recolección es una etapa clave en el proceso de producción estadística, ya que define las herramientas y métodos que se utilizarán para captar los datos necesarios. De acuerdo con la NTC PE 1000:2020, esta fase debe seguir un diseño riguroso que asegure la claridad, precisión y relevancia de las preguntas o variables a recolectar, garantizando que los datos obtenidos sean confiables y útiles para los fines estadísticos previstos. Además, es esencial que el instrumento esté alineado con los objetivos de la operación estadística, considerando aspectos como la facilidad de uso, la accesibilidad para los encuestados y la capacidad de obtener información de calidad."
        ],
        path: "/seccion/7/7.2",
        formQuestions: questions7_2,
        dashboard: Dashboard,
      },
      {
        subsection: "7.3",
        label: "7.3 Desarrollo del Software Aplicativo de la Operación Estadística",
        introductions: [
          "Introducción",
          " El desarrollo del software aplicativo para la operación estadística, conforme a los lineamientos establecidos en la norma técnica estadística, es un proceso clave para asegurar la eficiencia y precisión en la recolección, procesamiento y difusión de datos. Según lo estipulado en la NTC PE 1000:2020, esta etapa involucra la creación de herramientas digitales que faciliten la implementación de las metodologías estadísticas definidas, permitiendo la automatización de procesos y la integración de los flujos de trabajo. Es crucial que el software sea diseñado de manera flexible y escalable, considerando las necesidades específicas de cada operación estadística y garantizando su compatibilidad con los sistemas existentes, a la vez que se prioriza la calidad y seguridad de los datos."
        ],
        path: "/seccion/7/7.3",
        formQuestions: questions7_3,
        dashboard: Dashboard,
      },
      {
        subsection: "7.4",
        label: "7.4 Selección de Muestra",
        introductions: [
          "Introducción",
          "La construcción de la selección de muestra es un proceso esencial para garantizar que los datos obtenidos sean representativos y válidos para la operación estadística. De acuerdo con la NTC PE 1000:2020, esta etapa implica definir criterios claros y metodológicos para la selección de la muestra, asegurando que los elementos seleccionados reflejen adecuadamente la población objetivo. ",
          "Además, se debe considerar el tamaño y la distribución de la muestra, así como los posibles sesgos que puedan afectar los resultados. Es fundamental realizar un análisis detallado de los métodos de muestreo, asegurando que se cumpla con los estándares establecidos para obtener conclusiones fiables y precisas. "
        ],
        path: "/seccion/7/7.4",
        formQuestions: questions7_4,
        dashboard: Dashboard,
      },
      {
        subsection: "7.5",
        label: "7.5 Elaboración de Materiales para la Recolección o Acopio",
        introductions: [
          "Introducción",
          "La elaboración de materiales para la recolección o acopio de datos es un componente clave en la implementación de la norma técnica estadística, ya que asegura que los procesos de captura de información sean consistentes y eficientes. De acuerdo con los lineamientos establecidos por la NTC PE 1000:2020, esta fase implica la creación de formularios, cuestionarios y otros instrumentos de recolección que sean claros, comprensibles y estén alineados con los objetivos específicos de la operación estadística. Además, se deben considerar aspectos como la estandarización de las preguntas, la precisión en las variables a recolectar y la facilidad de uso por parte de los encuestadores o responsables del acopio, con el fin de garantizar la calidad y la integridad de los datos recogidos."
        ],
        path: "/seccion/7/7.5",
        formQuestions: questions7_5,
        dashboard: Dashboard,
      },
      {
        subsection: "7.6",
        label: "7.6 Construcción de los Flujos de Trabajo",
        introductions: [
          "Introducción",
          "La construcción de los flujos de trabajo es una etapa esencial en la implementación de la norma técnica estadística, ya que asegura la eficiencia y coherencia en la ejecución de las operaciones estadísticas. De acuerdo con los lineamientos establecidos por la NTC PE 1000:2020, esta fase implica la definición clara de las actividades, responsabilidades y secuencias de tareas dentro de la operación estadística. Es crucial que los flujos de trabajo sean diseñados de manera que optimicen los recursos disponibles, minimicen errores y faciliten la trazabilidad de los procesos, garantizando que todos los pasos se realicen de acuerdo con los estándares técnicos establecidos y los objetivos definidos."
        ],
        path: "/seccion/7/7.6",
        formQuestions: questions7_6,
        dashboard: Dashboard,
      },
      {
        subsection: "7.7",
        label: "7.7 Pruebas",
        introductions: [
          "Introducción",
          "La construcción de pruebas según la norma técnica estadística es fundamental para asegurar la validez y confiabilidad de los procesos estadísticos. Conforme a lo establecido en la NTC PE 1000:2020, esta fase implica diseñar pruebas que evalúen la exactitud, consistencia y aplicabilidad de los métodos estadísticos utilizados. Es crucial que las pruebas sean adecuadas para verificar los procedimientos, asegurando que los datos y los resultados obtenidos sean precisos y representativos. Además, se debe considerar la integración de diversas variables y escenarios que permitan detectar posibles errores o desviaciones, con el fin de implementar las correcciones necesarias antes de la aplicación definitiva de las metodologías."
        ],
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
        introductions: [
          "Introducción",
          "La recolección o acopio de actividades previas es una fase crucial en el proceso estadístico, ya que sienta las bases para una recopilación de datos eficiente y coherente con los objetivos de la operación. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, esta etapa implica la planificación meticulosa de las actividades necesarias antes de la recolección de datos, incluyendo la identificación de fuentes de información, la determinación de los métodos de recolección y la definición de los recursos requeridos. Además, se debe asegurar que todas las actividades previas estén alineadas con las necesidades de calidad y consistencia de los datos, con el fin de evitar errores o limitaciones que puedan comprometer la validez de la operación estadística."
        ],
        path: "/seccion/8/8.1",
        formQuestions: questions8_1,
        dashboard: Dashboard,
      },
      {
        subsection: "8.2",
        label: "8.2 Recolección o Acopio de Datos",
        introductions: [
          "Introducción",
          "La recolección o acopio de datos es una etapa fundamental en el proceso de producción estadística, ya que asegura la obtención de información precisa y confiable para el análisis posterior. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta fase implica la planificación adecuada de los métodos y herramientas para la recopilación de datos, garantizando su calidad y consistencia. Es esencial que se definan claramente las fuentes de información, los procedimientos de recolección y los criterios de validación, con el fin de evitar sesgos y errores. Además, se deben establecer protocolos para la supervisión y el control de calidad durante todo el proceso, asegurando que los datos recopilados sean representativos y aptos para el análisis estadístico."
        ],
        path: "/seccion/8/8.2",
        formQuestions: questions8_2,
        dashboard: Dashboard,
      },
      {
        subsection: "8.3",
        label: "8.3 Control en la Recolección o Acopio de Datos",
        introductions: [
          "Introducción",
          "La recolección o acopio de datos es un componente esencial en la ejecución de una operación estadística, ya que establece las bases para obtener información precisa y confiable. Según la NTC PE 1000:2020, esta etapa debe estar regida por un proceso de control riguroso que garantice la calidad y la integridad de los datos recolectados. Se requiere un diseño detallado de los métodos y técnicas de recolección, con mecanismos de verificación que aseguren la consistencia y exactitud de los datos en cada fase del proceso. Asimismo, es fundamental establecer protocolos claros para la supervisión y el seguimiento de la recolección, con el fin de identificar y corregir cualquier error o inconsistencia de manera temprana, antes de su procesamiento y análisis."
        ],
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
        introductions: [
          "Introducción",
          "El procesamiento e integración de datos es un componente clave para asegurar la calidad y coherencia de la información en las operaciones estadísticas. Según la NTC PE 1000:2020, esta fase implica la recopilación, validación y consolidación de datos provenientes de diversas fuentes, garantizando su compatibilidad y fiabilidad. Se debe realizar un proceso riguroso de verificación y ajuste, asegurando que los datos integrados sean consistentes y estén alineados con los requisitos definidos en la operación estadística. Además, es fundamental establecer procedimientos claros para la gestión de inconsistencias y la optimización de la base de datos antes de proceder con el análisis y la difusión de los resultados."
        ],
        path: "/seccion/9/9.1",
        formQuestions: questions9_1,
        dashboard: Dashboard,
      },
      {
        subsection: "9.2",
        label: "9.2 Clasificación y Codificación",
        introductions: [
          "Introducción",
          "El procesamiento de clasificación y codificación es un componente esencial en la implementación de la norma técnica estadística, ya que garantiza la organización y la estandarización de los datos recolectados. Según la NTC PE 1000:2020, esta fase involucra la asignación de códigos y categorías a las variables para facilitar su análisis y comparabilidad. Este proceso requiere una atención detallada para asegurar que las categorías sean consistentes, coherentes y alineadas con los estándares internacionales, lo que permite una interpretación precisa y una integración eficiente de la información en las operaciones estadísticas. La correcta clasificación y codificación también contribuyen a la mejora de la calidad de los datos y a la transparencia en su manejo."
        ],
        path: "/seccion/9/9.2",
        formQuestions: questions9_2,
        dashboard: Dashboard,
      },
      {
        subsection: "9.3",
        label: "9.3 Revisión y Validación de Datos",
        introductions: [
          "Introducción",
          "El procesamiento de revisión y validación de datos es una etapa crucial para asegurar la calidad y confiabilidad de la información utilizada en las operaciones estadísticas. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, este proceso implica una evaluación exhaustiva de los datos recolectados, verificando su integridad, consistencia y precisión. Es necesario aplicar técnicas y procedimientos estandarizados para identificar y corregir posibles errores, inconsistencias o anomalías antes de su utilización en el análisis y la toma de decisiones. Además, se debe garantizar que los datos validados sean aptos para cumplir con los objetivos específicos de la operación estadística, respetando los criterios de calidad definidos previamente."
        ],
        path: "/seccion/9/9.3",
        formQuestions: questions9_3,
        dashboard: Dashboard,
      },
      {
        subsection: "9.4",
        label: "9.4 Edición e Imputación",
        introductions: [
          "Introducción",
          "El procesamiento de edición e imputación es un componente esencial en el manejo de datos estadísticos, ya que permite garantizar la calidad y fiabilidad de la información antes de su análisis y difusión. Según los lineamientos establecidos en la NTC PE 1000:2020, esta fase implica la identificación y corrección de errores, inconsistencias o valores faltantes en los datos recolectados, a través de procedimientos técnicos adecuados. La imputación de datos faltantes y la edición de valores erróneos aseguran que los resultados obtenidos sean representativos y no se vean distorsionados por fallos en la calidad de los registros, lo que facilita una toma de decisiones más precisa y basada en datos confiables."
        ],
        path: "/seccion/9/9.4",
        formQuestions: questions9_4,
        dashboard: Dashboard,
      },
      {
        subsection: "9.5",
        label: "9.5 Cálculo de Ponderadores",
        introductions: [
          "Introducción",
          " El procesamiento de cálculo de ponderadores es una fase esencial en la producción de estadísticas confiables, ya que asegura que los datos obtenidos reflejen adecuadamente la estructura poblacional o muestral. Según lo establecido en la norma técnica estadística NTC PE 1000:2020, esta etapa implica la aplicación de métodos matemáticos y estadísticos para ajustar los resultados de la encuesta o censo, con el fin de corregir sesgos y representar de manera precisa las características de la población objetivo. El proceso requiere una revisión minuciosa de las variables de ponderación y de los criterios utilizados, garantizando que los ponderadores sean adecuados y permitan obtener estimaciones que cumplan con los estándares de calidad y fiabilidad requeridos por los usuarios de la información."
        ],
        path: "/seccion/9/9.5",
        formQuestions: questions9_5,
        dashboard: Dashboard,
      },
      {
        subsection: "9.6",
        label: "9.6 Finalización de los Archivos de Datos",
        introductions: [
          "Introducción",
          "El procesamiento de finalización de los archivos de datos es una fase crucial en el ciclo de la operación estadística, según los lineamientos establecidos en la NTC PE 1000:2020. Esta etapa implica la revisión y consolidación de los datos recolectados, asegurando su integridad, coherencia y calidad antes de ser almacenados y difundidos. Es necesario realizar una depuración de posibles errores, validar las inconsistencias y aplicar procedimientos estadísticos adecuados para garantizar que los archivos finales sean completos y aptos para su uso en el análisis. Además, se debe verificar que los metadatos estén debidamente documentados, permitiendo una interpretación clara y precisa de los datos procesados."
        ],
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
        introductions: [
          "Introducción",
          "El análisis de cálculo de agregaciones (resultados) es un componente esencial dentro del marco de la norma técnica estadística, ya que asegura que los datos obtenidos sean procesados y presentados de manera coherente y precisa. Conforme a los lineamientos establecidos en la NTC PE 1000:2020, esta fase implica una evaluación detallada de los métodos de agregación utilizados, garantizando que los resultados reflejen fielmente la información contenida en las bases de datos. Es crucial realizar una validación de los cálculos, considerando las fórmulas y procedimientos aplicados, para evitar inconsistencias que puedan comprometer la calidad de la información estadística y su utilidad para los usuarios finales."
        ],
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
        introductions: [
          "Introducción",
          "La difusión de productos estadísticos es un proceso clave para asegurar que la información generada sea accesible y útil para los usuarios finales. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, esta etapa involucra la selección adecuada de canales y medios de difusión, garantizando que los productos sean distribuidos de manera efectiva y oportuna. La norma establece que la información debe ser accesible a través de plataformas digitales, como sitios web institucionales, bases de datos abiertas y servicios de datos en línea, además de considerar otros medios tradicionales cuando sea necesario. Es esencial que la difusión de productos cumpla con los principios de transparencia y claridad, permitiendo a los usuarios interpretar correctamente los datos y tomar decisiones informadas."
        ],
        path: "/seccion/11/11.1",
        formQuestions: questions11_1,
        dashboard: Dashboard,
      },
      {
        subsection: "11.2",
        label: "11.2 Metadatos",
        introductions: [
          "Introducción",
          "La difusión de metadatos es un proceso esencial para garantizar la transparencia y accesibilidad de la información estadística, permitiendo a los usuarios comprender el contexto, la metodología y las fuentes de los datos. Según los lineamientos establecidos en la NTC PE 1000:2020, esta fase debe ser implementada de manera estructurada, asegurando que los metadatos sean completos, claros y fácilmente accesibles. Es fundamental que los metadatos se difundan de forma sistemática, cumpliendo con los estándares técnicos establecidos, para facilitar el uso adecuado de los datos y promover su reutilización en diversas aplicaciones estadísticas."
        ],
        path: "/seccion/11/11.2",
        formQuestions: questions11_2,
        dashboard: Dashboard,
      },
      {
        subsection: "11.3",
        label: "11.3 Puntualidad y Oportunidad",
        introductions: [
          "Introducción",
          "La difusión de la puntualidad y la oportunidad en la aplicación de la norma técnica estadística es fundamental para asegurar que los procesos y productos estadísticos sean entregados de manera eficiente y dentro de los plazos establecidos. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta fase implica garantizar que los productos estadísticos sean difundidos en el tiempo adecuado, permitiendo que los usuarios accedan a la información actualizada y relevante sin demoras. La correcta implementación de esta norma asegura que los datos sean difundidos con precisión y en el momento oportuno, optimizando la toma de decisiones y el uso de la información estadística en diversas áreas."
        ],
        path: "/seccion/11/11.3",
        formQuestions: questions11_3,
        dashboard: Dashboard,
      },
      {
        subsection: "11.4",
        label: "11.4 Continuidad de la Operación Estadística",
        introductions: [
          "Introducción",
          "La difusión de la continuidad de la operación estadística es un aspecto clave para asegurar la transparencia y accesibilidad de los procesos estadísticos, conforme a los lineamientos establecidos en la NTC PE 1000:2020. Esta fase implica la comunicación clara y oportuna sobre el estado y los avances de la operación estadística, garantizando que los usuarios y partes interesadas estén informados sobre cualquier actualización, ajuste o cambio relevante en el desarrollo de la operación. Además, se requiere un monitoreo constante para asegurar que la difusión de la información mantenga su coherencia, calidad y pertinencia a lo largo del ciclo de la operación."
        ],
        path: "/seccion/11/11.4",
        formQuestions: questions11_4,
        dashboard: Dashboard,
      },
      {
        subsection: "11.5",
        label: "11.5 Publicación de Medidas de Calidad",
        introductions: [
          "Introducción",
          "La difusión de la publicación de las medidas de calidad en la norma técnica estadística es un proceso esencial para garantizar la transparencia y la fiabilidad de las estadísticas producidas. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, esta etapa implica la divulgación clara y accesible de los indicadores de calidad utilizados para evaluar las operaciones estadísticas. Es crucial que la información sobre estos indicadores sea compartida de manera sistemática y precisa, permitiendo a los usuarios y partes interesadas entender el proceso de calidad detrás de los datos, así como identificar áreas de mejora y asegurar la confianza en la información estadística."
        ],
        path: "/seccion/11/11.5",
        formQuestions: questions11_5,
        dashboard: Dashboard,
      },
      {
        subsection: "11.6",
        label: "11.6 Series Históricas",
        introductions: [
          "Introducción",
          "La difusión de series históricas es un componente esencial para asegurar la transparencia y el acceso a la información estadística de calidad. Según la NTC PE 1000:2020, esta etapa implica la correcta publicación y divulgación de las series históricas, garantizando que los datos sean comprensibles, accesibles y actualizados. La norma establece que se debe asegurar la disponibilidad de las series en formatos adecuados y en plataformas accesibles para los usuarios, promoviendo el uso de estándares internacionales para la transmisión de datos. Además, se deben considerar aspectos como la periodicidad y la continuidad de la difusión, con el fin de facilitar el seguimiento y análisis de las tendencias a lo largo del tiempo."
        ],
        path: "/seccion/11/11.6",
        formQuestions: questions11_6,
        dashboard: Dashboard,
      },
      {
        subsection: "11.7",
        label: "11.7 Condiciones de Uso de la Información Estadística",
        introductions: [
          "Introducción",
          "La difusión de las condiciones de uso de la información estadística es un aspecto clave para garantizar la transparencia, la accesibilidad y la correcta utilización de los datos producidos. Según los lineamientos establecidos en la NTC PE 1000:2020, esta fase implica la comunicación clara y detallada de las restricciones, derechos y responsabilidades asociados con el uso de la información estadística. Es esencial que se definan y se difundan de manera oportuna las condiciones de acceso, uso y distribución de los datos, para asegurar que los usuarios comprendan los parámetros legales y éticos que regulan su manejo y para promover una utilización adecuada que respete la confidencialidad y la integridad de los datos."
        ],
        path: "/seccion/11/11.7",
        formQuestions: questions11_7,
        dashboard: Dashboard,
      },
      {
        subsection: "11.8",
        label: "11.8 Autorización de Publicación de Información Estadística",
        introductions: [
          "Introducción",
          "La difusión de la autorización de publicación de información estadística es un proceso clave para asegurar la transparencia y el cumplimiento de las normativas en el manejo de datos públicos. De acuerdo con la NTC PE 1000:2020, esta etapa establece los procedimientos y criterios necesarios para garantizar que la información estadística sea publicada de manera adecuada y bajo la debida autorización. Implica una revisión exhaustiva de los datos, asegurando que solo la información validada y aprobada sea difundida, cumpliendo con los estándares de calidad y confidencialidad establecidos. Este proceso también permite gestionar la disponibilidad y accesibilidad de los datos, promoviendo la confianza pública en la calidad y el uso responsable de la información estadística."
        ],
        path: "/seccion/11/11.8",
        formQuestions: questions11_8,
        dashboard: Dashboard,
      },
      {
        subsection: "11.9",
        label: "11.9 Soporte a Usuarios de la Información Estadística",
        introductions: [
          "Introducción",
          "La difusión de soporte a los usuarios de la información estadística es un proceso esencial para garantizar que los datos producidos sean accesibles, comprensibles y útiles para los usuarios finales. Según los lineamientos establecidos en la norma técnica estadística, esta fase implica proporcionar un acceso claro y eficiente a la información, incluyendo la publicación de resultados, metadatos y documentos explicativos, así como el establecimiento de canales de comunicación para resolver dudas o solicitudes adicionales. Es fundamental asegurar que el soporte ofrecido esté alineado con las necesidades de los usuarios, facilitando su comprensión y el uso adecuado de la información estadística para la toma de decisiones."
        ],
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
        introductions: [
          "Introducción",
          "La evaluación del desempeño de la norma técnica estadística es un proceso esencial para garantizar la efectividad y la calidad de las operaciones estadísticas. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, esta fase implica un análisis exhaustivo de la implementación de la norma, evaluando su impacto en la calidad de los datos y su alineación con los objetivos establecidos. La evaluación debe incluir la identificación de fortalezas y áreas de mejora, permitiendo ajustar y optimizar los procedimientos estadísticos, a fin de asegurar que los resultados sean consistentes, confiables y pertinentes para la toma de decisiones."
        ],
        path: "/seccion/12/12.4",
        formQuestions: questions12_4,
        dashboard: Dashboard,
      },
      {
        subsection: "12.5",
        label: "12.5 Auditoría Interna",
        introductions: [
          "Introducción",
          "La evaluación del desempeño de la Auditoría Interna según la norma técnica estadística es un proceso esencial para asegurar la efectividad y la eficiencia de los sistemas de gestión estadística. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta evaluación implica una revisión exhaustiva de los procedimientos y prácticas implementadas en la auditoría interna, con el fin de verificar que se cumplan los estándares de calidad y los requisitos establecidos en la normativa. Además, se debe analizar el grado de cumplimiento de los objetivos, identificar áreas de mejora y garantizar que las recomendaciones de auditoría sean adecuadamente implementadas para optimizar el proceso estadístico y asegurar la fiabilidad de los resultados obtenidos."
        ],
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
        introductions: [
          "Introducción",
          " La Norma Técnica de Calidad Estadística establece un marco fundamental para garantizar la confiabilidad, pertinencia y transparencia en la producción de información estadística. Este estándar, alineado con principios internacionales, proporciona directrices que abarcan desde la planificación hasta la difusión de las operaciones estadísticas, promoviendo prácticas homogéneas y sistemáticas. Su implementación asegura que los procesos estadísticos cumplan con criterios de calidad, minimizando errores y fortaleciendo la confianza de los usuarios en los datos generados, al mismo tiempo que fomenta la mejora continua en las metodologías aplicadas."
        ],
        path: "/seccion/13/13.1",
        formQuestions: questions13_1,
        dashboard: Dashboard,
      },
      {
        subsection: "13.2",
        label: "13.2 No Conformidad y Acción Correctiva",
        introductions: [
          "Introducción",
          " La gestión de no conformidades y acciones correctivas es fundamental para mantener la calidad en las operaciones estadísticas, garantizando que los procesos se ajusten a los estándares establecidos. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta etapa implica identificar, documentar y analizar las desviaciones respecto a los requisitos establecidos, permitiendo establecer medidas correctivas que mitiguen las causas raíz. Este enfoque sistemático asegura la mejora continua, evitando la recurrencia de errores y fortaleciendo la fiabilidad de los datos producidos."
        ],
        path: "/seccion/13/13.2",
        formQuestions: questions13_2,
        dashboard: Dashboard,
      },
      {
        subsection: "13.3",
        label: "13.3 Mejora Continua",
        introductions: [
          "Introducción",
          "La mejora continua de la norma técnica estadística es fundamental para asegurar que los procesos de producción, análisis y difusión de información mantengan su relevancia y calidad frente a las necesidades cambiantes de los usuarios. Según los lineamientos de la NTC PE 1000:2020, este enfoque implica una revisión periódica de los estándares establecidos, incorporando innovaciones metodológicas, ajustes regulatorios y aprendizajes derivados de experiencias previas. Este proceso garantiza que la norma técnica evolucione de manera dinámica, respondiendo a los retos emergentes y promoviendo la excelencia en la gestión estadística."
        ],
        path: "/seccion/13/13.3",
        formQuestions: questions13_3,
        dashboard: Dashboard,
      },
    ],
  },
];

export default seccionConfig;
