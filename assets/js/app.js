const toggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav");

toggle.onclick = () => {
	toggle.classList.toggle("nav-open");
	nav.classList.toggle("nav-open");
	document.body.classList.toggle("nav-open");
};

document.onclick = (e) => {
	if (e.target.id !== "nav-toggle" && e.target.id !== "nav") {
		toggle.classList.remove("nav-open");
		nav.classList.remove("nav-open");
		document.body.classList.remove("nav-open");
	}
};
