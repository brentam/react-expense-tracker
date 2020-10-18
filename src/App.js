import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {TransactionList} from './components/TransactionList';
import {IncomeExpenses} from './components/IncomeExpenses';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
//https://www.youtube.com/watch?v=XuFDcZABiDQ&t=2351s
//https://www.youtube.com/watch?v=KyWaXA_NvT0

function App() {
  return (
    <GlobalProvider>
      <Header/>

<div className="container">
  <Balance/>
  <IncomeExpenses/>
<TransactionList/>
<AddTransaction/>
  </div>
    </GlobalProvider>
  );
}

export default App;
