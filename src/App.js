import React from 'react';
import { Header } from './Components/Header';
import { Account_Balance } from './Components/Account_Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import { Transaction_History } from './Components/Transaction_History';
import { Add_Transaction } from './Components/Add_Transaction';

// Global Provider
import { GlobalProvider } from './Context/Global_State'

// Css File
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Account_Balance />
      <IncomeExpense />
      <Transaction_History />
      <Add_Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
