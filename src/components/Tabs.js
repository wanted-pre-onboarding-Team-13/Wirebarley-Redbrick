import { useState } from 'react';
import { numberWithCommas } from 'utils/functions/numberWithCommas';
import 'utils/styles/Tabs.scss';

function Tabs({ selectCountry, currentCurrency, inputValue, currentTime }) {
  const [currentTab, setCurrentTab] = useState(0);

  const exchangeMoney = () => {
    const currentMoney = 'USD' + menuArr.filter((el) => el !== selectCountry)[currentTab];
    const selectCountryMoney = 'USD' + selectCountry;
    return numberWithCommas((currentCurrency[currentMoney] / currentCurrency[selectCountryMoney]) * inputValue);
  };
  const menuArr = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

  const selectMenuHandler = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <div>
      <ul className='tab-menu'>
        {menuArr
          .filter((el) => el !== selectCountry)
          .map((el, idx) => {
            return (
              <li key={idx} className={currentTab === idx ? 'submenu focused' : 'submenu'} onClick={() => selectMenuHandler(idx)}>
                {el}
              </li>
            );
          })}
      </ul>
      <div className='desc'>
        <span className='exchange-span'>{menuArr.filter((el) => el !== selectCountry)[currentTab] + ' ' + exchangeMoney()}</span>
        <br />
        <br />
        <span>기준일 :</span>
        <br />
        <span>{`${currentTime[2]}-${currentTime[0]}-${currentTime[1]}`}</span>
      </div>
    </div>
  );
}
export default Tabs;
