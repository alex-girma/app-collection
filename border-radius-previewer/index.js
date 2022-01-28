const sliderLeft = document.querySelector(".slider__left");
const sliderTop = document.querySelector(".slider__top");
const sliderRight = document.querySelector(".slider__right");
const sliderBottom = document.querySelector(".slider__bottom");
const clipBoardInput = document.querySelector(".clipboard__input");
const containerBox = document.querySelector(".container__box");
const copyToClipboard = document.querySelector(".copy");

let borderRadius = [
	"50%",
	"50%",
	"50%",
	"50%",
	"/",
	"50%",
	"50%",
	"50%",
	"50%",
];
let style = borderRadius.join(" ");
clipBoardInput.value = style;

sliderTop.addEventListener("input", function () {
	borderGenerator(0, 1, sliderTop);
});
sliderRight.addEventListener("input", function () {
	borderGenerator(6, 7, sliderRight);
});
sliderBottom.addEventListener("input", function () {
	borderGenerator(3, 2, sliderBottom);
});

sliderLeft.addEventListener("input", function () {
	borderGenerator(5, 8, sliderLeft);
});

copyToClipboard.addEventListener("click", function () {
	navigator.clipboard.writeText(clipBoardInput.value);
	clipBoardInput.style.color = "#9fd3c7";
});

const borderGenerator = function (ind1, ind2, border) {
	clipBoardInput.style.color = "";
	borderRadius[ind1] = border.value + "%";
	borderRadius[ind2] = 100 - border.value + "%";
	style = borderRadius.join(" ");
	clipBoardInput.value = style;
	containerBox.style.borderRadius = style;
};
