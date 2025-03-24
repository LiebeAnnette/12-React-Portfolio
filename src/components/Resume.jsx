import React from "react";

export default function Resume() {
	return (
		<div className="container my-5" style={{ maxWidth: "700px" }}>
			<div className="card shadow border-0">
				<div
					className="card-header text-white"
					style={{ backgroundColor: "#794E57" }}
				>
					<h1 className="mb-0 text-center">Resume</h1>
				</div>
				<div className="card-body">
					<p className="text-center">
						Download my{" "}
						<a
						// I can replace this later with an actual resume :)
							href="/ResumeExample.pdf"
							download
							style={{ color: "#B0824B", fontWeight: "bold" }}
						>
							resume
						</a>
						.
					</p>

					{/* Developer Proficiencies List */}
					<h2 className="mt-4" style={{ color: "#794E57" }}>
						Developer Proficiencies
					</h2>
					<ul className="list-group list-group-flush">
						{[
							"HTML & CSS",
							"JavaScript (ES6+)",
							"React.js",
							"Node.js",
							"Express.js",
							"SQL & NoSQL Databases",
							"REST APIs",
							"Git & GitHub",
							"Responsive Design",
						].map((item, index) => (
							<li
								key={index}
								className="list-group-item"
								style={{
									borderColor: "#f3f3f3",
									color: "#557100",
									fontWeight: "500",
								}}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
