document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetInput = false;

    // Atualizar display
    function updateDisplay() {
        display.textContent = currentInput;
    }

    // Adicionar número
    function addNumber(number) {
        if (currentInput === '0' || resetInput) {
            currentInput = number;
            resetInput = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    // Adicionar ponto decimal
    function addDecimal() {
        if (resetInput) {
            currentInput = '0.';
            resetInput = false;
            updateDisplay();
            return;
        }
        
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    }

    // Limpar tudo
    function clearAll() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        updateDisplay();
    }

    // Trocar sinal
    function toggleSign() {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }

    // Calcular porcentagem
    function calculatePercentage() {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }

    // Definir operação
    function setOperation(op) {
        if (operation !== null) calculate();
        
        previousInput = currentInput;
        operation = op;
        resetInput = true;
    }

    // Calcular resultado
    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        operation = null;
        resetInput = true;
        updateDisplay();
    }

    // Event listeners para botões
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            
            if (!isNaN(value)) {
                addNumber(value);
            } else {
                switch (value) {
                    case '.':
                        addDecimal();
                        break;
                    case 'C':
                        clearAll();
                        break;
                    case '±':
                        toggleSign();
                        break;
                    case '%':
                        calculatePercentage();
                        break;
                    case '=':
                        calculate();
                        break;
                    default:
                        setOperation(value);
                }
            }
        });
    });

    // Teclado
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        
        if (!isNaN(key)) {
            addNumber(key);
        } else if (key === '.') {
            addDecimal();
        } else if (key === 'Escape') {
            clearAll();
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            setOperation(key);
        } else if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === '%') {
            calculatePercentage();
        }
    });
});