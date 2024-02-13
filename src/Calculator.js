import React, { useState, useEffect } from 'react';

const buttonStyle = {
  cursor: 'pointer',
};

const operatorButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#1e1e1e',
  color: '#E9E9E9',
};

const numberButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#181818',
  color: '#E9E9E9',
};

const equalsButtonStyle = {
  ...buttonStyle,
  color: 'white',
  backgroundColor: '#89321a',
}

const alignCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  fontSize: '1em',
};

const numberPad = [...Array.from({length: 10}, (_, i) => i).reverse(), '.'];
const operators = [ '+', '-', '*', '/' ];

const formatOperator = operator => {
  switch(operator) {
    case '*':
      return '×';
    case '/':
      return '÷';
    default:
      return operator;
  }
}

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(a);
  const [value, setValue] = useState(result);

  useEffect(() => {
    a !== null && setValue(a);
  }, [a]);

  useEffect(() => {
    operator !== null && setValue(`${parseFloat(a)} ${formatOperator(operator)}`);
  }, [operator])

  useEffect(() => {
    b !== null && setValue(`${a} ${formatOperator(operator)} ${b}`);
  }, [b]);

  useEffect(() => {
    setValue(result);
  }, [result]);

  const clickNumber = (number) => {
    const assignValue = v => {
      let original = v ?? 0;
      const newNumber = original + '' + number;
      const count = (newNumber.match(/\./g) || []).length;
      if (count > 1) return original;
      else if (count === 1) return newNumber;
      return parseInt(newNumber);
    }
    if (operator) setB(assignValue);
    else setA(assignValue);
  };

  const clickOperator = (op) => {
    setOperator(op);
    if (a === null) setA(result);
  };

  const calculate = () => {
    if (b === null) return;
    setResult(parseFloat(eval(`${a} ${operator} ${b}`)));
    clear();
  };

  const clear = () => {
    setA(null);
    setB(null);
    setOperator(null);
  };

  return (
      <div
        style={{
          maxWidth: '30rem',
          minWidth: '15em',
          maxHeight: '30rem',
          minHeight: '15em',
          display: 'grid',
          borderRadius: '2em',
          overflow: 'hidden',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
          margin: '2em',
          flexGrow: 1,
          aspectRatio: 1,
        }}
      >
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 1,
            gridRowEnd: 2,
            backgroundColor: '#252525',
            color: 'white',
            ...alignCenter,
            textAlign: 'right',
            padding: '1.5em',
          }}
        >
          {value}
        </div>
        {operators.map((operator, index) =>
          <div
            style={{
              gridColumnStart: (index * 3) + 1,
              gridColumnEnd: (index * 3) + 4,
              gridRowStart: 2,
              gridRowEnd: 3,
              ...operatorButtonStyle,
              ...alignCenter,
            }}
            onClick={() => clickOperator(operator)}
          >
            {formatOperator(operator)}
          </div>
        )}
        {numberPad.map((number, index) => {
          return (
            <div
              style={{
                gridColumnStart: (parseInt(index % 3) * 3) + 1,
                gridColumnEnd: (parseInt(index % 3) * 3) + 4,
                gridRowStart: parseInt(index / 3) + 3,
                gridRowEnd: parseInt(index / 3) + 4,
                ...numberButtonStyle,
                ...alignCenter,
              }}
              onClick={() => clickNumber(number)}
            >
              {number}
            </div>
          )
        })}
        <div
          style={{
            gridColumnStart: 7,
            gridColumnEnd: 10,
            gridRowStart: 6,
            gridRowEnd: 7,
            ...numberButtonStyle,
            ...alignCenter,
          }}
          onClick={() => {
            clear();
            setValue(0);
            setResult(0);
          }}
        >
          C
        </div>
        {/*<div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
            gridRowStart: 7,
            gridRowEnd: 8,
            ...numberButtonStyle,
            ...alignCenter,
          }}
          onClick={() => {}}
        >
          ⎌
        </div>
        <div
          style={{
            gridColumnStart: 4,
            gridColumnEnd: 7,
            gridRowStart: 7,
            gridRowEnd: 8,
            ...numberButtonStyle,
            ...alignCenter,
            transform: 'scale(-1, 1)'
          }}
          onClick={() => {}}
        >
          ⎌
        </div>
        <div
          style={{
            gridColumnStart: 7,
            gridColumnEnd: 10,
            gridRowStart: 7,
            gridRowEnd: 8,
            ...numberButtonStyle,
            ...alignCenter,
          }}
          onClick={() => {
            clear();
            setValue(0);
            setResult(0);
          }}
        >
          CE
        </div>*/}
        <div
          style={{
            gridColumnStart: 10,
            gridColumnEnd: 13,
            gridRowStart: 3,
            gridRowEnd: 8,
            ...equalsButtonStyle,
            ...alignCenter,
          }}
          onClick={calculate}
        >
          =
        </div>
      </div>
  );
}

export default Calculator;