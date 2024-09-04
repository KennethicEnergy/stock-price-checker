export type StockPriceResponse = {
  c: number; // current price
  o: number; // opening price
  h: number; // high price
  l: number; // low price
}

export type SearchResult = {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

export type SearchResponse = {
  count: number;
  result: SearchResult[];
}