const numbers = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const equals = document.querySelector("[data-equals]");
const clear = document.querySelector("[data-clear]");
const del = document.querySelector("[data-delete]");
const prevOperandText = document.querySelector("[data-prev-operand]");
const currOperandText = document.querySelector("[data-curr-operand]");

class Calculator {
	constructor(prevOperandText, currOperandText) {
		this.prevOperandText = prevOperandText;
		this.currOperandText = currOperandText;
		this.clear();
	}

	clear() {
		this.currOperand = "";
		this.prevOperand = "";
		this.operation = undefined;
	}
	delete() {
		this.currOperand = this.currOperand.toString().slice(0, -1);
	}
	appendNumber(number) {
		if (number === "." && this.currOperand.includes(".")) return;
		this.currOperand = this.currOperand.toString() + number.toString();
	}
	chooseOperation(operation) {
		if (this.currOperand === "") return;
		if (this.prevOperand !== "") {
			this.compute();
		}
		this.operation = operation;
		this.prevOperand = this.currOperand;
		this.currOperand = "";
	}
	compute() {
		let result;
		const prev = parseFloat(this.prevOperand);
		const curr = parseFloat(this.currOperand);
		if (isNaN(prev) || isNaN(curr)) return;
		switch (this.operation) {
			case "+":
				result = prev + curr;
				break;
			case "-":
				result = prev - curr;
				break;
			case "*":
				result = prev * curr;
				break;
			case "÷":
				result = prev / curr;
				break;
			default:
				return;
		}
		this.currOperand = result;
		this.operation = undefined;
		this.prevOperand = "";
	}
	updateDisplay() {
		this.currOperandText.textContent = this.currOperand;
		if (this.operation != null) {
			this.prevOperandText.textContent = `${this.prevOperand} ${this.operation}`;
		} else {
			this.prevOperandText.textContent = "";
		}
	}
}

const calculator = new Calculator(prevOperandText, currOperandText);

numbers.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.textContent);
		calculator.updateDisplay();
	});
});
operations.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.textContent);
		calculator.updateDisplay();
	});
});
equals.addEventListener("click", (button) => {
	calculator.compute();
	calculator.updateDisplay();
});
clear.addEventListener("click", (button) => {
	calculator.clear();
	calculator.updateDisplay();
});
del.addEventListener("click", (button) => {
	calculator.delete();
	calculator.updateDisplay();
});
