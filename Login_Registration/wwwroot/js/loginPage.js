
// Login form
document.getElementById("loginForm").addEventListener("submit", async (e) => {
	e.preventDefault();

	const email = document.getElementById("loginEmail").value;
	const password = document.getElementById("loginPassword").value;

	// Basic validation
	if (!email || !password) {
		alert("Please enter both email and password.");
		return;
	}

	const data = { email, password };

	try {
		const response = await axios.post("http://127.0.0.1:5096/login", data, {
			headers: { "Content-Type": "application/json" },
		});

		console.log("Response status:", response.status);
		console.log("Response data:", response.data);

		if (response.status === 200) {
			window.location.href = "/welcome";
		}
	} catch (error) {
		// Handle errors returned from the backend
		if (error.response && error.response.data && error.response.data.error) {
			alert(error.response.data.error);
		} else {
			// General error message for unexpected issues
			alert("Login Failed. Please try again.");
		}
	}
});

