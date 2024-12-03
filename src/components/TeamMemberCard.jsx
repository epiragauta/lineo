// src/components/TeamMemberCard.js

import React from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const TeamMemberCard = ({ member }) => {
  return (
    <Card className="transform hover:scale-105 transition-transform duration-300">
      <CardHeader floated={false} className="h-56">
        <img
          src={member.photo}
          alt={`${member.name}`}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {member.name}
        </Typography>
        <Typography variant="subtitle2" color="gray" className="mb-4">
          {member.role}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal mb-4">
          {member.bio}
        </Typography>
        <div className="flex justify-center space-x-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default TeamMemberCard;
