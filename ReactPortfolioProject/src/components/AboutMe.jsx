import React from "react";

export default function AboutMe() {
  return (
    <div className="container text-center mt-4">
      <h1>About Me</h1>

      {/* Profile Photo */}
      <img
        src="/IMG_2364.jpg"
        alt="Photo of Liebe"
        className="img-fluid rounded-circle my-3"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          border: "3px solid #ddd",
        }}
      />
      {/* I will add more to this bio in the future */}
      <p>
        Hello! I’m a passionate developer excited about building web
        applications. Welcome to my portfolio!
      </p>
    </div>
  );
}
