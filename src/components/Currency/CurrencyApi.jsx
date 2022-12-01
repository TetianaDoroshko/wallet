import axios from 'axios';

const fetchCurrency = async () => {
  try {
    // const response = await fetch('https://api.monobank.ua/bank/currency');
    const { data } = await axios.get('https://api.monobank.ua/bank/currency');

    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchCurrency;