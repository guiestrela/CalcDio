import Input from "./components/Input";
import Button from "./components/Button";
import {
  Container,
  Content,
  Row,
} from "./styles";
import { createHandlers } from "./components/Operations";
import { useState } from "react";

  function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handlers = createHandlers({ currentNumber, firstNumber, operation, setCurrentNumber, setFirstNumber, setOperation });
  
  return (
    <>
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label="*" onClick={handlers.handleMultiNumbers} />
            <Button label="/" onClick={handlers.handleDivideNumbers} />
            <Button label="C" onClick={handlers.handleClear} />
            <Button label="=" onClick={handlers.handleEquals} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handlers.handleAddNumber('7')} />
            <Button label="8" onClick={() => handlers.handleAddNumber('8')} />
            <Button label="9" onClick={() => handlers.handleAddNumber('9')} />
            <Button label="-" onClick={handlers.handleSubtractNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handlers.handleAddNumber('4')} />
            <Button label="5" onClick={() => handlers.handleAddNumber('5')} />
            <Button label="6" onClick={() => handlers.handleAddNumber('6')} />
            <Button label="+" onClick={handlers.handleSumNumbers} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handlers.handleAddNumber('1')} />
            <Button label="2" onClick={() => handlers.handleAddNumber('2')} />
            <Button label="3" onClick={() => handlers.handleAddNumber('3')} />
            <Button label="0" onClick={() => handlers.handleAddNumber('0')} />
          </Row>
        </Content>
      </Container>
    </>
  )
}

export default App
