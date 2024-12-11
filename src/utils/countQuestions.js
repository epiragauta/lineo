/**
 * Función para contar preguntas de tipo radio con opciones "Sí" y "No",
 * y preguntas de tipo slider.
 *
 * @param {Array} questions - Array de preguntas a analizar.
 * @returns {Object} - Objeto con los contadores: { radioYesNoCount, sliderCount }.
 */
export function countQuestions(questions) {
    let radioYesNoCount = 0;
    let sliderCount = 0;
  
    questions.forEach((question) => {
      if (question.type === 'radio' && question.options && question.options.length === 2) {
        const options = question.options.map((option) => option.toLowerCase());
        if (options.includes('sí') && options.includes('no')) {
          radioYesNoCount++;
        }
      }
  
      if (question.type === 'slider') {
        sliderCount++;
      }
    });
  
    return {
      radioYesNoCount,
      sliderCount,
      maxScore: radioYesNoCount * 2 + sliderCount * 5,
    };
  }

  