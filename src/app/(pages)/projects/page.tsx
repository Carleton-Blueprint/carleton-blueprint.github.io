import React from "react";
import CurrentProjects from "./_components/CurrentProjects";
import ProjectCard from "./_components/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import CIWHV from "./_assets/CIWHV_logo_square.png";

export default function Projects() {
  const res = [
    {
      title: "CCS",
      description: "Workplace Stop",
      content:
        "We are developing a web platform for called Workplace Stop, a toolkit for workers in Canada to navigate the various systems when experiencing bullying, harassment, or systemic or psychological harm.",
      image: CIWHV,
      footer: "Project 1 Footer",
    },
    {
      title: "Beneficent",
      description: "Interest-Free Loan Tracker",
      content:
        "We developed a web application that allows Beneficent to better track their interest-free loan lending program.",
      image: CIWHV,
      footer: "Project 2 Footer",
    },
  ];

  return (
    <div>
      <CurrentProjects />
      <div className="flex items-center flex-col m-16">
        <h1 className="text-4xl font-bold mb-8">Past Projects</h1>
        <div className="flex flex-col items-center space-y-5">
          {res.map((data) => (
            <ProjectCard key={uuidv4()} data={data} grid />
          ))}
        </div>
      </div>
    </div>
  );
}
