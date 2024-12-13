// src/data/teamMembers.js

import DanielPerez from "../assets/team/DanielPerez.png";
import DanielDiaz from "../assets/team/DanielDiaz.jpg";
import JulietaRuiz from "../assets/team/JulietaRuiz.png";
// import JuanLopez from "../assets/team/JuanLopez.jpeg";
// Importa más imágenes según sea necesario

export const teamMembers = [
  {
    id: 1,
    name: "Daniel Pérez",
    role: "Desarrollador",
    photo: DanielPerez,
    bio: "Daniel Peréz, es responsable del desarrollo de la interfaz y experiencia del usuario. Le gustan los acertijos y usar la programación para resolver problemas",
    linkedin: "https://www.linkedin.com/in/danperezma", // Enlace a LinkedIn
    github: "https://github.com/danperezma", // Enlace a GitHub
  },
  {
    id: 2,
    name: "Daniel Diaz",
    role: "Desarrollador",
    photo: DanielDiaz,
    bio: "Daniel Diaz, implementó el sistema de autenticación y la base de datos de la aplicación. Disfruta de programar competitivamente, y resolver problemas tanto abstractos como de la vida real.",
    linkedin: "https://www.linkedin.com/in/danidiaztech",
    github: "https://github.com/danidiaztech",
  },
  {
    id: 3,
    name: "Julieta Ruiz",
    role: "Asistente estadística",
    photo: JulietaRuiz,
    bio: "Julieta Ruiz, es la responsable del desarrollo del modelo estadístico. Es adaptable y le gustan los retos.",
    linkedin: "https://co.linkedin.com/in/danna-julieta-ruiz-castiblanco-192771295", // Enlace a LinkedIn
    // github: ""
  }
  // Agrega más miembros según sea necesario
];
