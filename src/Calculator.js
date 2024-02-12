import React, { useState, useEffect } from 'react';

const buttonStyle = {
  borderColor: '#A6A7A8',
  borderWidth: '1px',
  borderStyle: 'solid',
  color: '#252525',
  cursor: 'pointer',
};

const operatorButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#C7C7C7',
};

const numberButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#E9E9E9',
};

const equalsButtonStyle = {
  ...buttonStyle,
  color: 'white',
  backgroundColor: '#F88765',
}

const alignCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  fontSize: '36px',
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
    a !== null && setValue(parseFloat(a));
  }, [a]);

  useEffect(() => {
    operator !== null && setValue(`${parseFloat(a)} ${formatOperator(operator)}`);
  }, [operator])

  useEffect(() => {
    b !== null && setValue(`${parseFloat(a)} ${formatOperator(operator)} ${parseFloat(b)}`);
  }, [b]);

  useEffect(() => {
    console.log('trigger');
    setValue(result);
  }, [result]);

  const clickNumber = (number) => {
    const assignValue = v => v === null ? parseFloat(number) : parseFloat(v + '' + number);
    if (operator) setB(assignValue);
    else setA(assignValue);
  };

  const clickOperator = (op) => {
    setOperator(op);
    if (a === null) setA(result);
  };

  const calculate = () => {
    if (b === null) return;
    setValue('');
    setTimeout(() => {
      setResult(parseFloat(eval(`${a} ${operator} ${b}`)));
      clear();
    }, 100);
  };

  const clear = () => {
    setA(null);
    setB(null);
    setOperator(null);
  };

  return (
    <div className="App" style={{ backgroundColor: 'white', borderRadius: '2rem',
       display: 'flex', flexGrow: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '34rem', margin: '2rem' }}>
      <div
        style={{
          maxWidth: '30rem',
          minWidth: '15rem',
          height: '30rem',
          display: 'grid',
          borderRadius: '2rem',
          borderColor: '#A6A7A8',
          borderWidth: '1px',
          borderStyle: 'solid',
          overflow: 'hidden',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          margin: '2rem',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 5,
            gridRowStart: 1,
            gridRowEnd: 2,
            backgroundColor: '#252525',
            color: 'white',
            ...alignCenter,
            textAlign: 'right',
            padding: '2rem',
            height: '2rem',
          }}
        >
          {value}
        </div>
        {operators.map((operator, index) =>
          <div
            style={{
              gridColumnStart: index + 1,
              gridColumnEnd: index + 2,
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
          console.log(number, index, parseInt(index / 3) + 1, parseInt(index % 3) + 1);
          return (
            <div
              style={{
                gridColumnStart: parseInt(index % 3) + 1,
                gridColumnEnd: parseInt(index % 3) + 2,
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
            gridColumnStart: 3,
            gridColumnEnd: 4,
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
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 2,
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
            gridColumnStart: 2,
            gridColumnEnd: 3,
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
            gridColumnStart: 3,
            gridColumnEnd: 4,
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
        </div>
        <div
          style={{
            gridColumnStart: 4,
            gridColumnEnd: 5,
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
    </div>
  );
}

export default Calculator;