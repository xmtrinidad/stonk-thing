import { API_KEY } from "./API_KEY";

export const getGlobalQuote = (sym) => {
  const symbol = sym;
  const apiType = 'GLOBAL_QUOTE';
  const apiUrl = `https://www.alphavantage.co/query?function=${apiType}&symbol=${symbol}&apikey=${API_KEY}`;

  return fetchThingBro(apiUrl)
}

const fetchThingBro = (url) => {
  return fetch(url).then(response => response.json());
};



// export class ALPHA_VANTAGE_API {
//   getGlobalQuote(sym) {
//     const symbol = sym;
//     const apiType = 'GLOBAL_QUOTE';
//     const apiUrl = `https://www.alphavantage.co/query?function=${apiType}&symbol=${symbol}&apikey=${API_KEY}`;

//     return this.fetchThingBro(apiUrl)
//   }

//   fetchThingBro(url) {
//     return fetch(url)
//     .then(response => response.json());
//   }

// }