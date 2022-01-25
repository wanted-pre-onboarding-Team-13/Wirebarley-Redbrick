import React, { useState, useRef, useEffect } from "react";
import { nation } from "utils/constants/nation"; //assignMentOne은 변수명 바꿔야함
import { numberWithCommas } from "utils/numberWithCommas";
import { fetchData } from "utils/fetchData";
import { getFloatNumber } from "utils/getFloatNumber";
import "utils/styles/Currency.scss";

const Currency = () => {
  const [data, setData] = useState([]);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [totalMoney, setTotalMoney] = useState("");
  const transfer = useRef();

  const getTotalMoney = () => {
    let parts = getFloatNumber(data["USD" + nation[currencyIndex].unit]);
    let temp = transfer.current.value * parts;
    if (transfer.current.value) {
      setTotalMoney(numberWithCommas(temp) + " " + nation[currencyIndex].unit);
    }
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
    <div className="currency-wrapper">
      <h1>환율 계산</h1>
      <form>
        <ul>
          <li>
            <label>송금국가: 미국(USD)</label>
          </li>
          <li>
            <label htmlFor="country">수취국가:</label>{" "}
            <select id="country" onChange={changeIndex}>
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
              {" "}
              환율:
              {numberWithCommas(data["USD" + nation[currencyIndex].unit]) +
                " " +
                nation[currencyIndex].unit +
                "/USD"}
            </label>
          </li>
          <li>
            <label htmlFor="send">송금액:</label>
            <input type="text" id="send" ref={transfer}></input>
            <span>USD</span>
          </li>
        </ul>
      </form>

      <button onClick={getTotalMoney}>Submit</button>

      {totalMoney ? <h1>수취금액은 {totalMoney} 입니다.</h1> : null}
    </div>
  );
};

export default Currency;
