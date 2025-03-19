import React from "react";

const projects = [
  {
    title: "Project One",
    image: "/images/project1.png", // Store images in /public/images/
    deployedLink: "https://your-deployed-app1.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    image: "/images/project2.png",
    deployedLink: "https://your-deployed-app2.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    image: "/images/project3.png",
    deployedLink: "https://your-deployed-app3.com",
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    title: "Project Four",
    image: "/images/project4.png",
    deployedLink: "https://your-deployed-app4.com",
    githubLink: "https://github.com/yourusername/project4",
  },
  {
    title: "Project Five",
    image: "/images/project5.png",
    deployedLink: "https://your-deployed-app5.com",
    githubLink: "https://github.com/yourusername/project5",
  },
  {
    title: "Project Six",
    image: "/images/project6.png",
    deployedLink: "https://your-deployed-app6.com",
    githubLink: "https://github.com/yourusername/project6",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h2>{project.title}</h2>
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
            </a>
            <div>
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                Live App
              </a>
              |
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
