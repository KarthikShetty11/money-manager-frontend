import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TranscationList from './components/TranscationList';
import AddTranscation from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      </div>
      <TranscationList />
    </div>
  );
}

export default App;
