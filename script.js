document.getElementById("settings-button").addEventListener("click", e => {
	document.getElementById("settings-dialog")
		.showModal();
});

document.getElementById("border-radius-input").addEventListener("input", e => {
	const borderRadius = e.target.value;
	document.documentElement.style.setProperty("--border-radius", borderRadius + "px");
	localStorage.setItem("border-radius", borderRadius);
});

const borderRadius = parseInt(localStorage.getItem("border-radius"));
if (! isNaN(borderRadius)) {
	document.documentElement.style.setProperty("--border-radius", borderRadius + "px");
	document.getElementById("border-radius-input").value = borderRadius;

}
