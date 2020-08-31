import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../Context/Global_State'

export const Transaction_History = () => {
  const { transactions } = useContext(GlobalContext);

    return (
        <>
          <h3>History</h3>
      <ul  className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction=
        {transaction}/>))}      
      </ul>  
        </>
    )
}


// import React, { useContext } from 'react';

// // import GlobalContext
// import { GlobalContext } from '../Context/Global_State';

// export const Transaction_History = () => {
//     const { transactions } = useContext(GlobalContext);
//     console.log(transactions)

//     return (
//         <>
//             <h3>History</h3>

//             {/* <ul className="list">
//                 {transactions.map(transaction => (
//                         <li className="minus">
//                         {transaction.text} <span>{transaction.amount}</span><button className="delete-btn">x</button>
//                     </li>
//                 ))}

//             </ul> */}
//         </>
//     )
// }
