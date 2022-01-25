import { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from 'components/Tabs';
import { numberWithoutCommas } from 'utils/functions/numberWithoutCommas';
import 'utils/styles/Currency2.scss';

function Currency2() {
  const [inputValue, setInputValue] = useState('1000');
  const [selectCountry, setSelectCountry] = useState('USD');
  const [currentCurrency, setCurrentCurrency] = useState({});
  const [currentTime, setCurrentTime] = useState(['', '', '']);

  useEffect(() => {
    axios.get(process.env.REACT_APP_CURRENCY_KEY).then((res) => {
      setCurrentCurrency(res.data.quotes);
      setCurrentTime(new Date(res.data.timestamp * 1000).toString().split(' ').slice(1, 4));
    });
  }, []);

  const changeInputValueHandler = (event) => {
    const res = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if ((+res <= 0 && res !== '') || res[0] === '0') {
      alert('1원 이상의 금액을 입력해주세요.');
    } else {
      setInputValue(res);
    }
  };

  const selectValueHandler = (event) => {
    setSelectCountry(event.target.value);
  };

  return (
    <div className='currency2-wrapper'>
      <div className='inner-wrapper'>
        <div className='inner-top'>
          <div className='cash-input'>
            <input type='text' value={numberWithoutCommas(inputValue)} onChange={changeInputValueHandler} />
          </div>
          <div className='dropdown-menu'>
            <select value={selectCountry} onChange={selectValueHandler}>
              <option value='USD'>USD</option>
              <option value='CAD'>CAD</option>
              <option value='KRW'>KRW</option>
              <option value='HKD'>HKD</option>
              <option value='JPY'>JPY</option>
              <option value='CNY'>CNY</option>
            </select>
          </div>
        </div>
        <div className='select-country'>
          <Tabs selectCountry={selectCountry} inputValue={inputValue} currentCurrency={currentCurrency} currentTime={currentTime} />
        </div>
      </div>
    </div>
  );
}

export default Currency2;
