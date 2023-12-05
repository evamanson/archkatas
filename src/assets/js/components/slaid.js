gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let navs = gsap.utils.toArray(".nav-link");
let triggerEnd;
const footerAnimateBox = document.querySelectorAll(".footer-animate");
const headerWrapp = document.querySelector(".header__wrapp");
gsap.utils.toArray(".section").forEach((panel, i) => {
	if (window.innerWidth >= 580) {
		triggerEnd = "bottom 90px";
	} else if (window.innerWidth >= 992) {
		triggerEnd = "bottom 125px";
	} else {
		triggerEnd = "bottom 60px";
	}
	let trigger = ScrollTrigger.create({
		trigger: panel,
		start: "bottom bottom",
		end: triggerEnd,
		pin: true,
		pinSpacing: false,
		onUpdate: (self) => {
			if (
				self.trigger.classList.contains("main") &&
				self.progress.toFixed(3) == 0
			) {
				headerWrapp.classList.add("line");
			} else {
				headerWrapp.classList.remove("line");
			}

			animateAbout();
			footerAnimate();
		},
	});
	let nav = navs[i];

	nav.addEventListener("click", function (e) {
		e.preventDefault();
		gsap.to(window, {
			duration: 1.5,
			scrollTo: trigger.end,
		});
	});
});

function footerAnimate() {
	const about = document.querySelector(".footer");
	if (about) {
		let aboutBox = document.querySelectorAll(".footer-animate");
		const aboutOffsetHeight = about.offsetHeight;
		let scrollDistance = window.scrollY;
		let containerSectionHeight =
			document.querySelector(".container-section").scrollHeight;

		if (scrollDistance > containerSectionHeight - aboutOffsetHeight - 100) {
			aboutBox.forEach((item) => {
				item.classList.add("anim-start");
			});
		} else {
			aboutBox.forEach((item) => {
				item.classList.remove("anim-start");
			});
		}
	}
}
function animateAbout() {
	const about = document.querySelector(".about");
	if (about) {
		let aboutBox = document.querySelectorAll(".about__box");
		const aboutOffsetHeight = about.offsetHeight;
		let scrollDistance = window.scrollY;

		if (scrollDistance > aboutOffsetHeight / 2) {
			aboutBox.forEach((item) => {
				item.classList.add("animate");
			});
		} else {
			aboutBox.forEach((item) => {
				item.classList.remove("animate");
			});
		}
	}
}
