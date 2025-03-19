import React from "react";
import Project from "./Project";

const projects = [
  { title: "Project One", image: "/images/project1.png", deployedLink: "https://your-deployed-app1.com", githubLink: "https://github.com/yourusername/project1" },
  { title: "Project Two", image: "/images/project2.png", deployedLink: "https://your-deployed-app2.com", githubLink: "https://github.com/yourusername/project2" },
  { title: "Project Three", image: "/images/project3.png", deployedLink: "https://your-deployed-app3.com", githubLink: "https://github.com/yourusername/project3" },
  { title: "Project Four", image: "/images/project4.png", deployedLink: "https://your-deployed-app4.com", githubLink: "https://github.com/yourusername/project4" },
];

export default function Portfolio() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">My Portfolio</h1>
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
