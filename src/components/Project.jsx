import React from "react";

export default function Project({ title, image, deployedLink, githubLink }) {
	return (
		<div className="card shadow-sm h-100 border-0">
			<img
				src={image}
				className="card-img-top"
				alt={title}
				style={{ objectFit: "cover", height: "200px" }}
			/>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title" style={{ color: "#794E57" }}>
					{title}
				</h5>
				<div className="mt-auto">
					<a
						href={deployedLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn me-2"
						style={{
							backgroundColor: "#E6B037",
							color: "#fff",
							fontWeight: "bold",
							borderRadius: "8px",
						}}
					>
						View App
					</a>
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn"
						style={{
							backgroundColor: "#B0824B",
							color: "#fff",
							fontWeight: "bold",
							borderRadius: "8px",
						}}
					>
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
}
