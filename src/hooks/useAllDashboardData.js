// src/hooks/useAllDashboardData.js

import useDashboardData from './useDashboardData';
import seccionConfig from '../config/seccionConfig';

/**
 * Hook para obtener y acumular datos de todas las subsecciones por sección
 */
const useAllDashboardData = () => {
  // Generar el arreglo de formularios a partir de seccionConfig
  const forms = seccionConfig.flatMap(section => 
    section.subsections.map(sub => ({
      formId: sub.path, // Asegúrate de que 'path' sea único por subsección
      formQuestions: sub.formQuestions,
      section: section.sectionLabel, // Nombre completo de la sección
    }))
  );

  // Usar el hook refactorizado para obtener los datos
  const { data, loading, error } = useDashboardData(forms);

  // Agrupar y acumular los datos por sección
  const accumulatedData = data.reduce((acc, curr) => {
    if (!acc[curr.section]) {
      acc[curr.section] = {
        section: curr.section,
        totalMaxScore: 0,
        totalSumScore: 0,
        subsections: [],
      };
    }
    acc[curr.section].totalMaxScore += curr.maxScore;
    acc[curr.section].totalSumScore += curr.sumScore;
    acc[curr.section].subsections.push(curr);
    return acc;
  }, {});

  // Convertir el objeto acumulado en un arreglo para facilitar el manejo
  const accumulatedDataArray = Object.values(accumulatedData);

  return {
    data, // Datos individuales de cada subsección
    accumulatedData: accumulatedDataArray, // Datos acumulados por sección
    loading,
    error,
  };
};

export default useAllDashboardData;
