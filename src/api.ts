import axios from 'axios';
import { SearchResponse, StockPriceResponse } from './types';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";

export const fetchStockPrice = async (symbol: string): Promise<StockPriceResponse> => {
  try {
    const response = await axios.get<StockPriceResponse>(`${BASE_URL}/quote`, {
      params: {
        symbol,
        token: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Stock symbol not found');
  }
};

export const validateSymbol = async (symbol: string): Promise<boolean> => {
  try {
    const response = await axios.get<SearchResponse>(`${BASE_URL}/search`, {
      params: {
        q: symbol,
        token: API_KEY,
      },
    });

    const symbols = response.data.result.map(item => item.symbol);
    return symbols.includes(symbol.toUpperCase());
  } catch (error) {
    console.error('Error validating symbol:', error);
    return false;
  }
};
