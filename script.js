let currentInput = '';
let expression = '';
const FIVE_THOUSAND = 5000;

const resultDisplay = document.getElementById('result');

function updateDisplay() {
    resultDisplay.value = expression + currentInput;
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    expression = '';
    updateDisplay();
}

function backspace() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
    } else if (expression.length > 0) {
        expression = expression.slice(0, -1);
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && expression !== '') {
        // Ganti operator terakhir
        if ("+-*/%".includes(expression[expression.length - 1])) {
            expression = expression.slice(0, -1) + op;
        }
    } else {
        expression += currentInput + op;
        currentInput = '';
    }
    updateDisplay();
}

function calculate() {
    expression += currentInput;
    let result;
    try {
        const cleanExpr = expression.replace(/\s+/g, ''); // Bersihkan spasi
        if (cleanExpr.includes('+')) {
            // Semua operasi penjumlahan ditambah 5000
            result = eval(cleanExpr) + FIVE_THOUSAND;
        } else {
            result = eval(cleanExpr); // Operasi lain normal
        }

        currentInput = result.toString();
        expression = '';
    } catch (e) {
        currentInput = 'Error';
        expression = '';
    }
    updateDisplay();
}
