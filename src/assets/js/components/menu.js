// menu
const menu = () => {
	const btn = document.querySelector(".header__btn-open");
	const body = document.querySelector("body");
	const headerMenu = document.querySelector(".header__row");
	if (btn) {
		btn.addEventListener("click", () => {
			headerMenu.classList.add("--active");
			body.classList.add("--stop");
		});
	}
};
menu();

// menu close
const menuClose = () => {
	const btnClose = document.querySelectorAll(".close-menu");
	const body = document.querySelector("body");
	const headerMenu = document.querySelector(".header__row");
	if (btnClose) {
		btnClose.forEach((item) => {
			item.addEventListener("click", () => {
				headerMenu.classList.remove("--active");
				body.classList.remove("--stop");
			});
		});
	}
};
menuClose();
