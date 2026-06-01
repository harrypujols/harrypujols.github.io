export default (APP) => {
	const dataFile = "/js/json/data.json";
	document.addEventListener("DOMContentLoaded", () => {
		APP.directives.retrieve(dataFile).then((result) => {
			APP.data = result;
			console.table(APP.data);
			APP.directives.components(APP);
			console.log("Components initialized");
			console.log(
				"This site is 100% organic. All-naturally generated code. No AI",
			);
		});
	});
};
