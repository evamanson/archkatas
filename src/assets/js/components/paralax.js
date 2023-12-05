const parallaxOne = document.querySelectorAll(".parallax-1");
const parallaxTwo = document.querySelectorAll(".parallax-2");
const parallaxThree = document.querySelectorAll(".parallax-3");
const parallaxFoure = document.querySelectorAll(".parallax-4");
const parallaxfive = document.querySelectorAll(".parallax-5");
if (parallaxOne && parallaxTwo) {
	document.querySelector("body").onmousemove = function (event) {
		event = event || window.event; // кроссбраузерность
		let x = event.clientX / window.innerWidth;
		let y = event.clientY / window.innerHeight;
		parallaxOne.forEach((item) => {
			item.style.transform = `translate(-${x * 15 * 2}px, -${
				y * 30 * 2
			}px) `;
		});
		parallaxTwo.forEach((item) => {
			item.style.transform = `translate(${x * 12 * 2}px, -${
				y * 56 * 2
			}px) `;
		});
		parallaxThree.forEach((item) => {
			item.style.transform = `rotate(${x * 5 * 2}deg) `;
		});
		parallaxFoure.forEach((item) => {
			item.style.transform = `rotate(-${x * 5 * 2}deg) `;
		});
		parallaxfive.forEach((item) => {
			item.style.transform = `translate(-${x * 18 * 2}px, ${
				y * 22 * 2
			}px) `;
		});
	};
}
