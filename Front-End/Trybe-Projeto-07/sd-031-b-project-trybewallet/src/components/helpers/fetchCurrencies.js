const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = async () => {
  const data = await fetch(URL);
  const response = await data.json();
  return response;
};

export default fetchCurrencies;
