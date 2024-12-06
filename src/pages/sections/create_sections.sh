#!/bin/bash

# Crear carpetas section5 a section13
for i in {4..13}; do
  section_folder="section$i"
  # mkdir -p "$section_folder"  # Crear carpeta principal

  # Crear archivos sectionX_1.jsx a sectionX_10.jsx dentro de cada carpeta
  for j in {1..10}; do
    # mkdir -p "$section_folder/section${i}_${j}"
    file_path="$section_folder/section${i}_${j}/Form${i}_${j}.jsx"
    echo "// src/pages/sections/section${i}/section${i}_${j}/Form${i}_${j}.jsx" > "$file_path"  # Agregar contenido básico
    echo "" >> "$file_path"
    echo "import React from \"react\";" >> "$file_path"
    echo "import { questions${i}_${j} as formQuestions } from \"./questions${i}_${j}\"; " >> "$file_path"
    echo "import { operationQuestions } from \"../../../../questions/operationQuestions\"; " >> "$file_path"
    echo "import GeneralForm from \"../../../../components/GeneralForm\"; " >> "$file_path"
    echo "import { getInitialFormData } from \"../../../../utils/getInitialFormData\"; " >> "$file_path"
    echo "" >> "$file_path"
    echo "const Form${i}_${j} = ({label, subsection, introductions}) => {" >> "$file_path"
    echo "  const formId = subsection; " >> "$file_path"
    echo "  const initialFormData = getInitialFormData(operationQuestions, formQuestions);" >> "$file_path"
    echo "" >> "$file_path"
    echo "  return (" >> "$file_path"
    echo "    <GeneralForm" >> "$file_path"
    echo "      formId={formId}" >> "$file_path"
    echo "      label={label}" >> "$file_path"
    echo "      initialFormData={initialFormData}" >> "$file_path"
    echo "      operationQuestions={operationQuestions}" >> "$file_path"
    echo "      formQuestions={formQuestions}" >> "$file_path"
    echo "      introductions={introductions}" >> "$file_path"
    echo "    />" >> "$file_path"
    echo "  );" >> "$file_path"
    echo "};" >> "$file_path"
    echo "" >> "$file_path"
    echo "export default Form${i}_${j};" >> "$file_path"
    echo "" >> "$file_path"
  done
done

echo "Estructura de carpetas y archivos creada con éxito."