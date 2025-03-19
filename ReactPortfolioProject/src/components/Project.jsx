import React from "react";

export default function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="card shadow-sm border-0">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={image} className="card-img-top" alt={title} />
      </a>
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-center">
          <a href={deployedLink} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
            Live App
          </a>
          <a href={githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
