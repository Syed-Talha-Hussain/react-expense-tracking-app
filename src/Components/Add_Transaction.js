import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/Global_State';


export const Add_Transaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }


  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            Description
          </label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..." />
        </div>
        
        <button className="btn">
          Add Transaction
        </button>
      </form>
    </>
  )
}


{/* import React, { useState } from 'react'

 export const Add_Transaction = () =>
//     const [text, setText] = useState();
//     const [amount, setAmount] = useState('0');
//     return (
//         <div>
//             <h3>Add new transaction</h3>
//             <form >
//                 <div className="form-control">
//                     <label htmlFor="description">
//                         Text
//                     </label>
//                     <input
//                         type="text"
//                         value={text}
//                         onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
//                 </div>

//                 <div className="form-control">
//                     <label htmlFor="amount"
//                     >Amount
//                     <br />
//                     (negative - expense, positive - income)
//                     </label>
//                     <input
//                         type="number"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
//                 </div>
//                 <button className="btn">Add transaction</button>
//             </form>
//         </div>
//     )
// } */}