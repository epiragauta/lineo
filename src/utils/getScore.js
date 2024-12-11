export function getScore(answers, maxScore, sumScore) {
    const percentage = Math.round((sumScore / maxScore) * answers * 100);
  
    // Usar Math.min para limitar el nivel máximo a 5
    const level = Math.min(Math.floor(percentage / 20), 5);
  
    // Descripciones asociadas a cada nivel
    const levelDescriptions = [
      "Identificación y Análisis de Necesidades y Requerimientos de Información Estadística",
      "Planeación y Diseño de Operaciones Estadísticas",
      "Ejecución: Recolección, Procesamiento y Análisis",
      "Difusión de Información Estadística",
      "Evaluación de las Fases y los Resultados Estadísticos",
      "Nivel máximo alcanzado (por encima de 100%)"
    ];
  
    return { 
      percentage: percentage, 
      level: level, 
      description: levelDescriptions[level] 
    };
  }
  