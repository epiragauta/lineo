import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

const QuestionCard = ({ label, children, index }) => {
  return (
    <Card
      className={`mb-4 ${
        index % 2 === 0
          ? "bg-primary_ligth border-gray-500 text-gray-800"
          : "bg-white border border-gray-500 text-gray-800"
      }`}
    >
      <CardBody>
        <label className="block mb-2 text-lg font-medium">{label}</label>
        {children}
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
