import './App.css';
import CurrencyRow from './components/CurrencyRow';

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyRow />
      <div className="equals">
        =
      </div>
      <CurrencyRow />



    </div>
  );
}

export default App;
