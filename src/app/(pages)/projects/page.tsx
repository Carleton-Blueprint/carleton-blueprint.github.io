import React from "react";
import CurrentProjects from "./_components/CurrentProjects";
import ProjectCard from "./_components/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import CIWHV from "./_assets/CIWHV_logo_square.png";
import beneficient from "./_assets/beneficient_logo_square.png";
import allo from "./_assets/AlloCanada_logo_square.png";
import urban from "./_assets/UrbanMinds_logo_square.png";

export default function Projects() {
  const res = [
    {
      title: "CIWHV",
      description: "Workplace Stop",
      content:
        "A web platform for called Workplace Stop, a toolkit for workers in Canada to navigate the various systems when experiencing bullying, harassment, or systemic or psychological harm.",
      image: CIWHV,
      footer:
        "https://cublueprint.notion.site/CIWHV-4e446c2e09334edba0b0ded27142be96",
    },
    {
      title: "Beneficent",
      description: "Interest-Free Loan Tracker",
      content:
        "A web application that allows Beneficent to better track their interest-free loan lending program.",
      image: beneficient,
      footer:
        "https://cublueprint.notion.site/Beneficent-7b4fd4def179425eb7c24406f29115f0",
    },
    {
      title: "Allo Canada",
      description: "Settlement and Integration Services",
      content:
        "A web application that centralizes services which newcomers often need to access throughout their settlement and integration journeys.",
      image: allo,
      footer:
        "https://cublueprint.notion.site/Allo-Canada-8f89ecc97b424f1191769d2354829ca7",
    },
    {
      title: "Urban Minds",
      description: "Youth Empowerment Platform",
      content:
        "A web application that allows them to empower youth to take on more city-building related projects in their community.",
      image: urban,
      footer:
        "https://cublueprint.notion.site/Urban-Minds-a2988a0475744e20beb0f2b92ce3774b",
    },
  ];

  return (
    <div>
      <CurrentProjects />
      <div className="flex items-center flex-col my-16">
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
