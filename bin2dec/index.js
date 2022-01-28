const inputBinary = document.querySelector(".input-binary");
const inputDecimal = document.querySelector(".input-decimal");
const clearInput = document.querySelector(".btn__clear");
const converterBinary = document.querySelector(".form__converter--binary");
const converterDecimal = document.querySelector(".form__converter--decimal");
const form = document.querySelector(".form");

const decToBin = function (data) {
	let result = 0;
	let binary = "";
	for (let index = 0; index < data.length; index++) {
		if (!isFinite(+data[index])) {
			inputDecimal.value = "";
			inputDecimal.placeholder = "Please only enter decimal numbers";
			return;
		}
		result += data[index] * 10 ** (data.length - index - 1);
	}
	while (result !== 0) {
		binary += result % 2;
		result = Math.floor(result / 2);
	}
	inputBinary.value = binary.split("").reverse().join("");
};

const binToDec = function (data) {
	let result = 0;

	for (let index = 0; index < data.length; index++) {
		if (data[index] !== "1" && data[index] !== "0") {
			inputBinary.value = "";
			inputBinary.placeholder = "Please only enter binary numbers";
			return;
		}
		result += data[index] * 2 ** (data.length - index - 1);
	}
	inputDecimal.value = result;
};

inputDecimal.addEventListener("click", function (e) {
	inputBinary.value = "";
	converterDecimal.classList.remove("display-none");
	converterBinary.classList.add("display-none");
});
inputBinary.addEventListener("click", function (e) {
	inputDecimal.value = "";
	converterBinary.classList.remove("display-none");
	converterDecimal.classList.add("display-none");
});

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (inputDecimal.value || inputDecimal === document.activeElement) {
		decToBin(inputDecimal.value);
		inputDecimal.blur();
	}
	if (inputBinary.value || inputBinary === document.activeElement) {
		binToDec(inputBinary.value);
		inputBinary.blur();
	}
});

clearInput.addEventListener("click", function (e) {
	e.preventDefault;
	inputBinary.value = "";
	inputDecimal.value = "";
});
