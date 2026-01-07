export const createHandlers = ({ currentNumber, firstNumber, operation, setCurrentNumber, setFirstNumber, setOperation }) => {
  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${num}`);
  }

  // Função auxiliar para calcular resultado intermediário
  const calculateResult = (first, second, op) => {
    const a = Number(first);
    const b = Number(second);
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return b;
    }
  }

  const handleOperator = (newOperation) => {
    if (operation === "") {
      // Primeira operação
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation(newOperation);
    } else if (currentNumber !== "0") {
      // Operação em cadeia: calcula resultado intermédio
      const result = calculateResult(firstNumber, currentNumber, operation);
      setFirstNumber(String(result));
      setCurrentNumber("0");
      setOperation(newOperation);
    }
  }

  const handleSumNumbers = () => {
    handleOperator("+");
  }

  const handleSubtractNumbers = () => {
    handleOperator("-");
  }

  const handleMultiNumbers = () => {
    handleOperator("*");
  }

  const handleDivideNumbers = () => {
    handleOperator("/");
  }

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      const result = calculateResult(firstNumber, currentNumber, operation);
      setCurrentNumber(String(result));
      setFirstNumber("0");
      setOperation("");
    }
  }

  return {
    handleClear,
    handleAddNumber,
    handleSumNumbers,
    handleSubtractNumbers,
    handleMultiNumbers,
    handleDivideNumbers,
    handleEquals
  };
}

