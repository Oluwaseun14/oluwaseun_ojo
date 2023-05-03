import { React, useState } from "react";
import CurrencySwitcher from "./compoent/currencySwitcher";
import Display from "./compoent/display";
import "./App.css";
function App() {
  const [currency, setCurrency] = useState("EUR");
  const handleCurrencyChange = () => {
    if (currency === "EUR") {
      setCurrency("USD");
    } else {
      setCurrency;
    }
    ("EUR");
  };

  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher
        handleChangeCurrency={handleCurrencyChange}
        currency={currency}
      />
    </div>
  );
}

export default App;
