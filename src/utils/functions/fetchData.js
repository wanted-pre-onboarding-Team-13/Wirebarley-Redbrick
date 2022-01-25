import axios from "axios";

export const fetchData = async (url) => {
  //환율 데이터 불러옴
  let response = await axios.get(url);
  response = await response.data.quotes;
  return response;
};
