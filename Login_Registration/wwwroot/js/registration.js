
// Phone number validation
document.getElementById("phone").addEventListener("input", () => {
	const phone = document.getElementById("phone").value.trim();

	// Validate phone number
	if (!/^\d{10}$/.test(phone)) {
		document.getElementById("phoneError").textContent =
			"Please enter a valid RSA phone number (10 digits).";
	} else {
		document.getElementById("phoneError").textContent = "";
	}
});

// Real-time email validation: https://www.akto.io/tools/email-regex-Javascript-tester
document.getElementById("email").addEventListener("input", () => {
	const email = document.getElementById("email").value.trim();
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

	// Validate email address
	if (!emailRegex.test(email)) {
		document.getElementById("emailError").textContent =
			"Please enter a valid email address.";
	} else {
		document.getElementById("emailError").textContent = "";
	}
});

// Real-time password validation
document.getElementById("password").addEventListener("input", () => {
	const password = document.getElementById("password").value.trim();
	const passwordRegex =  /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*":{}|]{8,}$/; 

	// Validate password length and symbol
	if (!passwordRegex.test(password)) {
		document.getElementById("passwordError").textContent =
			"Password must contain 8 or more characters and include a special character and digit.";
	} else {
		document.getElementById("passwordError").textContent = "";
	}
});

// Registration form
document
	.getElementById("registerForm")
	.addEventListener("submit", async (e) => {
		e.preventDefault();

		const name = document.getElementById("name").value.trim();
		const surname = document.getElementById("surname").value.trim();
		const phone = document.getElementById("phone").value.trim();
		const email = document.getElementById("email").value.trim();
		const password = document.getElementById("password").value;
		const confirmPassword = document.getElementById("confirmPassword").value;

		
		if (password !== confirmPassword) {
			alert("Passwords do not match.");
			return;
		}

		const data = { name, surname, phone, email, password };

		try {
			const response = await axios.post(
				"http://127.0.0.1:5096/register",
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (response.status === 200) {
				alert(response.data.message);
				document.getElementById("registerForm").reset();
			}
		} catch (error) {
			// Handle errors returned from the backend
			if (error.response && error.response.data && error.response.data.error) {
				alert(error.response.data.error);
			} else {
				// General error message for unexpected issues
				alert("An unexpected error occurred. Please try again.");
			}
		} 
	});

