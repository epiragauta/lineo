export function getScore(submissionsCount, maxScore, sumScore) {
    console.log(submissionsCount, maxScore, sumScore);
    const denominator = maxScore * submissionsCount;

    const percentage = Math.round(sumScore / (denominator) * 100);
  
    // Usar Math.min para limitar el nivel máximo a 5
    const level = Math.max(Math.min(Math.ceil(percentage / 20), 5) - 1, 0);


    console.log(percentage, level);
  
    // Descripciones asociadas a cada nivel
    const levelDescriptions = [
      "Identificación y Análisis de Necesidades y Requerimientos de Información Estadística",
      "Planeación y Diseño de Operaciones Estadísticas",
      "Ejecución: Recolección, Procesamiento y Análisis",
      "Difusión de Información Estadística",
      "Evaluación de las Fases y los Resultados Estadísticos",
      "Nivel máximo alcanzado (por encima de 100%)"
    ];

    const color = [
      "red-700",
      "orange-500",
      "yellow-500",
      "lime-400",
      "green-600",
      "black"
    ];
  
    return { 
      sumScore: sumScore,
      maxScore: denominator,
      score: sumScore.toString() + "/" + denominator.toString(),
      percentage: percentage, 
      level: level, 
      description: levelDescriptions[level],
      color: color[level]
    };
  }
  