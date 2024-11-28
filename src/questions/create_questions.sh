#!/bin/bash

# Crear carpetas section5 a section13
for i in {4..13}; do
  section_folder="questions$i"
  mkdir -p "$section_folder"  # Crear carpeta principal

  # Crear archivos sectionX_1.jsx a sectionX_10.jsx dentro de cada carpeta
  for j in {1..10}; do
    file_path="$section_folder/questions${i}_${j}.js"
    echo "// file: questions${i}_${j}" > "$file_path"
  done
done

echo "Estructura de carpetas y archivos creada con éxito."
