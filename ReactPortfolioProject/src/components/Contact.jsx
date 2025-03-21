import React, { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const validateField = (fieldName, value) => {
		let errorMsg = "";

		if (!value.trim()) {
			errorMsg = "This field is required.";
		} else if (fieldName === "email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				errorMsg = "Please enter a valid email address.";
			}
		}

		setErrors((prevErrors) => ({
			...prevErrors,
			[fieldName]: errorMsg,
		}));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		validateField(name, value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formIsValid = true;
		Object.keys(formData).forEach((field) => {
			validateField(field, formData[field]);
			if (!formData[field].trim()) {
				formIsValid = false;
			}
		});

		if (formIsValid) {
			alert("Form submitted successfully!");
		}
	};

	return (
		<div className="container mt-5" style={{ maxWidth: "700px" }}>
			<div className="card shadow" style={{ border: "none" }}>
				<div
					className="card-header text-white text-center"
					style={{ backgroundColor: "#794E57" }}
				>
					<h2 className="mb-0">Contact Me</h2>
				</div>
				<div className="card-body">
					<form onSubmit={handleSubmit}>
						{/* Name Field */}
						<div className="mb-3">
							<label className="form-label" htmlFor="name">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="form-control"
								value={formData.name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.name && (
								<div className="form-text text-danger">{errors.name}</div>
							)}
						</div>

						{/* Email Field */}
						<div className="mb-3">
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-control"
								value={formData.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.email && (
								<div className="form-text text-danger">{errors.email}</div>
							)}
						</div>

						{/* Message Field */}
						<div className="mb-3">
							<label className="form-label" htmlFor="message">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								className="form-control"
								rows="4"
								value={formData.message}
								onChange={handleChange}
								onBlur={handleBlur}
							></textarea>
							{errors.message && (
								<div className="form-text text-danger">{errors.message}</div>
							)}
						</div>

						{/* Submit Button */}
						<div className="text-center">
							<button
								type="submit"
								className="btn"
								style={{
									backgroundColor: "#E6B037",
									color: "#fff",
									fontWeight: "bold",
									padding: "0.5rem 2rem",
									borderRadius: "0.5rem",
								}}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
