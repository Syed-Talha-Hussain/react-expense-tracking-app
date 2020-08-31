import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state     
const initialState ={
    transactions: []
}

//Create Context

export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider =({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    return(<GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}


// import React, { createContext, useReducer } from 'react';

// // import Reducer
// import AppReducer from './AppReducer'

// // Initial state
// const initialState = {
//     transcations: [
//         { id: 1, text: "Maths", amount: -20 },
//         { id: 2, text: "Physics", amount: 300 },
//         { id: 3, text: "Urdu", amount: 250 },
//         { id: 4, text: "Eng", amount: -130 }
//     ]
// }

// // create Context
// export const GlobalContext = createContext(initialState);

// // create Provider for GlobalContext
// export const GlobalProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(AppReducer, initialState)

//     return (
//         <GlobalContext.Provider value={
//             { 
//                 transcations: state.transactions 
//             }
//         }>
//             {children}
//         </GlobalContext.Provider>
//     )

// }