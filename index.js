const r1 = fetch("skills.json");
r1.then((raspuns) => {
	const r2 = raspuns.json();

	r2.then((skills) => {
		displaySkills(skills);
	});
});

function displaySkills(skills) {
	const skillsHTML = skills.map(
		(skill) => `<li>${skill.name} - <span>${skill.endorcements}</span></li>`
	);
	const skillsEl = document.getElementById("skills-list");

	skillsEl.innerHTML = skillsHTML.join("");
}

function hideAllPages() {
	const pages = document.querySelectorAll(".page");
	pages.forEach((page) => {
		hide(page.id);
	});
}

function show(id) {
	document.getElementById(id).style.display = "block";
}

function hide(id) {
	document.getElementById(id).style.display = "none";
}

function displayPage(id) {
	hideAllPages();
	show(id);
}

function initMenu() {
	document.getElementById("top-menu-bar").addEventListener("click", (e) => {
		if (e.target.matches("a")) {
			const id = e.target.dataset.page;
			displayPage(id);
		}
	});
}

displayPage("skills");
initMenu();
