import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      {/* Downloadable Resume Link */}
      <p>
        Download my{" "}
        <a href="/ResumeExample.pdf" download>
          resume
        </a>
        .
      </p>

      {/* Developer Proficiencies List */}
      <h2>Developer Proficiencies</h2>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL & NoSQL Databases</li>
        <li>REST APIs</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
      </ul>
    </div>
  );
}
