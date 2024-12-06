#!/bin/bash

# Crear carpetas section5 a section13
for i in {4..13}; do
  section_folder="section$i"
  # mkdir -p "$section_folder"  # Crear carpeta principal

  # Crear archivos sectionX_1.jsx a sectionX_10.jsx dentro de cada carpeta
  for j in {1..10}; do
    # mkdir -p "$section_folder/section${i}_${j}"
    file_path="$section_folder/section${i}_${j}/Dashboard${i}_${j}.jsx"
    echo "// Archivo: section${i}_${j}" > "$file_path"  # Agregar contenido básico
    echo "export default function Dashboard${i}_${j}() {" >> "$file_path"
    echo "  return <div>Dashboard ${i}_${j}</div>;" >> "$file_path"
    echo "}" >> "$file_path"
    # mv "./$Section_folder/Section${i}_${j}.jsx" "./$section_folder/section${i}_${j}/Form${i}_${j}.jsx"
  done
done

echo "Estructura de carpetas y archivos creada con éxito."