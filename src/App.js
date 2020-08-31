import React from 'react';
import { Header } from './Components/Header';
import { Account_Balance } from './Components/Account_Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import { Transaction_History } from './Components/Transaction_History';
import { Add_Transaction } from './Components/Add_Transaction';
import { Footer } from './Components/Footer'


import { GlobalProvider } from './Context/Global_State'


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
      {/* <Footer /> */}
      </div>
    </GlobalProvider>
  );
}

export default App;



// import React from 'react';
// import './App.css';

// // import Components
// import { Header } from './Components/Header';
// import { Account_Balance } from './Components/Account_Balance';
// import { IncomeExpense } from './Components/IncomeExpense';
// import { Transaction_History } from './Components/Transaction_History';
// import { Add_Transaction } from './Components/Add_Transaction';

// // import Provider
// import { GlobalProvider } from './Context/Global_State'; 

// function App() {
//   return (
//     <GlobalProvider>
//       <Header />
//       <div className="container">
//         <Account_Balance />
//         <IncomeExpense />
//         <Transaction_History />
//         <Add_Transaction />
//       </div>
//     </GlobalProvider>
//   );
// }

// export default App;
