// Change background color when typing
const inputs = document.querySelectorAll(".container input");

inputs.forEach((input) => {
	input.addEventListener("input", () => {
		if (input.value.trim() !== "") {
			input.classList.add("typing");
		} else {
			input.classList.remove("typing");
		}
	});
});

function togglePasswordVisibility(passwordFieldId, toggleIconId) {
	const passwordField = document.getElementById(passwordFieldId);
	const toggleIcon = document.getElementById(toggleIconId);

	toggleIcon.addEventListener("click", () => {
		const isPassword = passwordField.type === "password";
		passwordField.type = isPassword ? "text" : "password";
		toggleIcon.textContent = isPassword ? "🙈" : "👁";
	});
}

// Attach toggle functionality to password fields
togglePasswordVisibility("password", "togglePassword");
togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");

