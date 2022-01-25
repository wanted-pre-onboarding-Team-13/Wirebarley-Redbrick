import React, { useState, useRef, useEffect } from 'react';
import { nation } from 'utils/constants/nation';
import { numberWithCommas } from 'utils/functions/numberWithCommas';
import { fetchData } from 'utils/functions/fetchData';
import { getFloatNumber } from 'utils/functions/getFloatNumber';
import { validInput } from 'utils/functions/validInput';
import 'utils/styles/FirstCurrency.scss';

const Currency = () => {
  const [data, setData] = useState([]);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [totalMoney, setTotalMoney] = useState('');
  const [warning, setWarning] = useState('');
  const [result, setResult] = useState(false);
  const transfer = useRef();

  const getTotalMoney = () => {
    if (validInput(transfer.current.value)) {
      let parts = getFloatNumber(data['USD' + nation[currencyIndex].unit]);
      let temp = transfer.current.value * parts;
      setTotalMoney(numberWithCommas(temp) + ' ' + nation[currencyIndex].unit);
      setWarning('');
    } else {
      setWarning('송금액이 바르지 않습니다.');
    }
    setResult(true);
  };

  const changeIndex = (e) => {
    setCurrencyIndex(e.target.value);
  };
  useEffect(() => {
    fetchData(process.env.REACT_APP_CURRENCY_KEY).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className='currency-wrapper'>
      <h1>환율 계산</h1>

      <ul>
        <li>
          <label>송금국가: 미국(USD)</label>
        </li>
        <li>
          <label htmlFor='country'>수취국가:</label>{' '}
          <select id='country' onChange={changeIndex}>
            {nation.map((each, idx) => {
              return (
                <option key={idx} value={idx}>
                  {each.value}
                </option>
              );
            })}
          </select>
        </li>
        <li>
          <label>
            {' '}
            환율:&nbsp;
            {numberWithCommas(data['USD' + nation[currencyIndex].unit]) + ' ' + nation[currencyIndex].unit + '/USD'}
          </label>
        </li>
        <li>
          <label htmlFor='send'>송금액:&nbsp;</label>
          <input type='text' id='send' ref={transfer}></input>
          <span>USD</span>
        </li>
      </ul>

      <button onClick={getTotalMoney}>Submit</button>

      <div className={result ? null : 'resultMessage'}>{warning.length === 0 ? <h3>수취금액은 {totalMoney} 입니다.</h3> : <h3 className='warning'>{warning}</h3>}</div>
    </div>
  );
};

export default Currency;
