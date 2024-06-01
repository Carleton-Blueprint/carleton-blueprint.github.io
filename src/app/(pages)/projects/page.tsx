import React from "react";
import CurrentProjects from "./_components/CurrentProjects";
import PastProjects from "./_components/PastProjects";

export default async function Projects() {
  return (
    <div>
      <CurrentProjects />
      <PastProjects />
    </div>
  );
}
