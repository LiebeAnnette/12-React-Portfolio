import React from "react";
import Project from "./Project";

const projects = [
  {
    title: "Pro README Generator",
    image: "./src/assets/README Generator SS.png",
    deployedLink: "",
    githubLink: "https://github.com/LiebeAnnette/07-Pro-README-Generator",
  },
  {
    title: "Vehicle Builder",
    image: "./src/assets/08 Vehicle Builder SS.png",
    deployedLink: "",
    githubLink: "https://github.com/LiebeAnnette/08-Vehicle-Builder",
  },
  {
    title: "Employee Tracker",
    image: "./src/assets/10-SQL EmployeeTracker SS.png",
    deployedLink: "",
    githubLink: "https://github.com/LiebeAnnette/10-SQL-Employee-Tracker",
  },
  // I don't have six projects to showcase yet, so I just put the ones I do have so far and added coming soons to get to the required 6 for this assignment
  {
    title: "Weather API",
    image: "./src/assets/ComingSoon.avif",
    deployedLink: "",
    githubLink: "https://github.com/LiebeAnnette/09-Weather-Dashboard",
  },
  {
    title: "Candidate Search",
    image: "./src/assets/ComingSoon.avif",
    deployedLink: "",
    githubLink: "https://github.com/LiebeAnnette/13-Candidate-Search",
  },
  {
    title: "Full-Stack React/Kanban Board Challenge",
    image: "./src/assets/ComingSoon.avif",
    deployedLink: "",
    githubLink: "",
  },
];

export default function Portfolio() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#794E57" }}>
        My Portfolio
      </h1>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
