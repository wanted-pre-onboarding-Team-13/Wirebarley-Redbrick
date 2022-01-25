import React, { useState, useRef, useEffect } from "react";
import { nation } from "utils/constants/nation";
import { numberWithCommas } from "utils/functions/numberWithCommas";
import { fetchData } from "utils/functions/fetchData";
import { getFloatNumber } from "utils/functions/getFloatNumber";
import { validInput } from "utils/functions/validInput";
import "utils/styles/Currency.scss";

const Currency = () => {
  const [data, setData] = useState([]);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [totalMoney, setTotalMoney] = useState("");
  const [warning, setWarning] = useState("");
  const [result, setResult] = useState(false);
  const transfer = useRef();

  const getTotalMoney = () => {
    if (validInput(transfer.current.value)) {
      let parts = getFloatNumber(data["USD" + nation[currencyIndex].unit]);
      let temp = transfer.current.value * parts;
      setTotalMoney(numberWithCommas(temp) + " " + nation[currencyIndex].unit);
      setWarning("");
    } else {
      setWarning("송금액이 바르지 않습니다.");
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
    <div className="currency-wrapper">
      <h1>환율 계산</h1>

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

      <button onClick={getTotalMoney}>Submit</button>

      {result ? (
        warning.length === 0 ? (
          <h1>수취금액은 {totalMoney} 입니다.</h1>
        ) : (
          <h1>{warning}</h1>
        )
      ) : null}
    </div>
  );
};

export default Currency;
