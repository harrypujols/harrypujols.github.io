export default class {
	constructor(element, APP) {
		this.element = element;
		this.render = APP.directives.render;
		this.slideTemplate = document.getElementById("slideshow-template");
		this.pageTemplate = document.getElementById("pagination-template");
		this.slidePlaceholder = document.getElementById("slideshow");
		this.pagePlaceholder = document.getElementById("pagination");
		this.pages = this.element.dataset.pages;
		this.description = this.element.dataset.description;
	}

	getParameters() {
		let url = new URL(window.location);
		let params = new URLSearchParams(url.search);
		const page = parseInt(params.get("page"), 10);

		if (
			!params.has("page") ||
			isNaN(page) ||
			page < 1 ||
			page > parseInt(this.pages, 10)
		) {
			// redirect to same URL with ?page=01
			url.search = "?page=01";
			window.location.replace(url.toString());
			return;
		}
		return params;
	}

	renderTemplate() {
		let data = {};
		data.current = parseInt(this.getParameters().get("page"), 10);
		// define the prev button number
		let prev = data.current;
		if (prev > 1) {
			prev = data.current - 1;
		}
		// define the next button number
		let next = data.current + 1;
		if (next > this.pages) {
			next = this.pages;
		}
		// adds a zero padding to the numbers
		data.current = ("0" + data.current).slice(-2);
		data.prev = ("0" + prev).slice(-2);
		data.next = ("0" + next).slice(-2);
		// sets up the mini templating
		data.description = this.description;
		let template = this.slideTemplate.innerHTML;
		let args = { data, template };
		this.slidePlaceholder.innerHTML = this.render(args);
	}

	parsePagination() {
		for (let page = 1; page <= this.pages; page++) {
			let data = {};
			data.page = ("0" + page).slice(-2);
			data.current = parseInt(this.getParameters().get("page"), 10);
			let template = this.pageTemplate.innerHTML;
			let args = { data, template };
			this.pagePlaceholder.innerHTML += this.render(args);
		}
	}

	init() {
		this.getParameters();
		this.renderTemplate();
		this.parsePagination();
	}
}
