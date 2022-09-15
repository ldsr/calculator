import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operador, setOperador] = useState(0);

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentagem() {
    setNum(oldNum / 100 * num);
  }

  function negativo() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(num * -1);
    }
  }
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperador(operatorInput)
    setOldNum(num)
    setNum(0)
  }
  function calcular() {
    if(operador === "*"){
        setNum(parseFloat(oldNum)*parseFloat(num))
    }if(operador === "/"){
        setNum(parseFloat(oldNum)/parseFloat(num))
    }if(operador === "-"){
        setNum(parseFloat(oldNum)-parseFloat(num))
    }if(operador === "+"){
        setNum(parseFloat(oldNum)+parseFloat(num))
    }
  }
  return (
    <div>
      <Box m={20} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="result">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={negativo}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="orange" onClick={operatorHandler} value={"/"}>
            ÷
          </button>
          <button className="grey" onClick={inputNum} value={7}>
            7
          </button>
          <button className="grey" onClick={inputNum} value={8}>
            8
          </button>
          <button className="grey" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value={"*"}>
            X
          </button>
          <button className="grey" onClick={inputNum} value={4}>
            4
          </button>
          <button className="grey" onClick={inputNum} value={5}>
            5
          </button>
          <button className="grey" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value={"-"}>
            -
          </button>
          <button className="grey" onClick={inputNum} value={1}>
            1
          </button>
          <button className="grey" onClick={inputNum} value={2}>
            2
          </button>
          <button className="grey" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value={"+"}>
            +
          </button>
          <button className="grey zero" onClick={inputNum} value={0}>
            0
          </button>
          <button className="grey" onClick={inputNum} value={"."}>
            .
          </button>
          <button className="orange" onClick={calcular}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
