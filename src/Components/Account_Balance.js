import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Global_State';


export const Account_Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
        <h4>Your Balance</h4>
      <h1>${total}</h1>
        </>
    )
}



// import React from 'react'

// export const Account_Balance = () => {
//     return (
//         <div>
//             <h3>Account Balance</h3>
//             <h1>$0.00</h1>
//         </div>
//     )
// }