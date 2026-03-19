import { useState, useEffect } from "react";

function usecurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Naya API URL yahan hai:
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.log("API Error: ", err));
  }, [currency]);

  return data;
}

export default usecurrencyinfo;
