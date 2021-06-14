import { useState } from 'react';

function Bin2Dec() {

  const [result, setResult] = useState('');
  const [bin, setBin] = useState('');

  function convertNumber(e) {
    
    let value = e.target.value;

    if(value.length === 1) {

      if(value !== '1' && value !== '0') {
        value = value.slice(0, -1);
      }

    } else {
      let lastDigit = value.split('')[value.split('').length - 1];

      if(lastDigit !== '1' && lastDigit !== '0') {
        value = value.slice(0, -1);
      }
    }

    let splitValue = value.split('');
    if(splitValue.length > 0) {
      var sum = 0;
      for (let i = 0; i < splitValue.length; i++) {
        sum += parseInt(splitValue[i]) * (2**(splitValue.length -1 - i));
      }
    }

    setBin(value);
    setResult(sum);
  }

  return (
      <div>
            <div className="mb-4">
                <p className="text-3xl">Bin2Dec</p>
                <p className="text-sm">Conversor de número binário para decimal</p>
            </div>

            <input className="border border-gray-400 rounded text-xl text-center" value={bin} onChange={convertNumber} placeholder=""/>
            <span className="text-xl"> = </span>
            <span className="text-blue-400 text-lg text-center font-semibold">{result}</span>

      </div>
  );
}

export default Bin2Dec;
