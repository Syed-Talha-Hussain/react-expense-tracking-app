import React from 'react';
import { Header } from './Components/Header';
import { AccountBalance } from './Components/AccountBalance';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionHistory } from './Components/TransactionHistory';
import { AddTransaction } from './Components/AddTransaction';

// Global Provider
import { GlobalProvider } from './Context/Global_State'

// Css File
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <AccountBalance />
      <IncomeExpense />
      <TransactionHistory />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
