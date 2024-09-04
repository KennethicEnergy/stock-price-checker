import React, { useState } from 'react';
import { fetchStockPrice, validateSymbol } from './api.ts';
import './index.css';
import { StockPriceResponse } from './types.ts';

const App = () => {
  const [symbol, setSymbol] = useState<string>('');
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setSymbol(e.target.value.toUpperCase())
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPrice(null);
  
    try {
      if (!symbol.trim()) {
        throw new Error("Please enter a stock symbol");
      }
  
      const isValidSymbol = await validateSymbol(symbol);
      if (!isValidSymbol) {
        throw new Error("Invalid stock symbol");
      }
  
      const data: StockPriceResponse = await fetchStockPrice(symbol);
      setPrice(data.c);
  
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <input
            className="input-field"
            style={{border: error ? '1px solid red' : ''}}
            type="text"
            value={symbol}
            onChange={(e) => handleChange(e)}
            placeholder="Enter stock symbol"
          />
          <button className="submit-btn" type="submit" disabled={loading}>Get Price</button>
        </div>
        <div className='message-container'>
          {loading && <p>Loading...</p>}
          {!loading && error && <p className='err-msg'>{error}</p>}
          {!loading && price !== null && <p>Current Price: ${price}</p>}
        </div>
      </form>
    </div>
  );
}

export default App;
