// src/data/teamMembers.js

import DanielPerez from "../assets/team/DanielPerez.jpeg";
import DanielDiaz from "../assets/team/DanielDiaz.jpg";
// import JuanLopez from "../assets/team/JuanLopez.jpeg";
// Importa más imágenes según sea necesario

export const teamMembers = [
  {
    id: 1,
    name: "Daniel Pérez",
    role: "Desarrollador",
    photo: DanielPerez,
    bio: "Daniel es responsable del desarrollo de la interfaz y experiencia del usuario. Le gustan los acertijos y usar la programación para resolver problemas",
    linkedin: "https://www.linkedin.com/in/danperezma", // Enlace a LinkedIn
    github: "https://github.com/danperezma", // Enlace a GitHub
  },
  {
    id: 2,
    name: "Chico Tech",
    role: "Desarrolladora Backend",
    photo: DanielDiaz,
    bio: "María se encarga de la lógica del servidor y la integración con la base de datos. Experta en optimización de rendimiento y seguridad.",
    linkedin: "https://www.linkedin.com/in/mariagomez",
    github: "https://github.com/mariagomez",
  },
  {
    id: 3,
    name: "Juan López",
    role: "Especialista en Base de Datos",
    photo: "JuanLopez",
    bio: "Juan gestiona las bases de datos y asegura la integridad y disponibilidad de los datos. Tiene amplia experiencia con Supabase.",
    linkedin: "https://www.linkedin.com/in/juanlopez",
    github: "https://github.com/juanlopez",
  },
  // Agrega más miembros según sea necesario
];
