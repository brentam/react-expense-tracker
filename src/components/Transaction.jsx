import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const negative=transaction.amount<0;
    const {deleteTransaction}= useContext(GlobalContext);

  return (
      
         <li className={negative?'minus':'plus'}  >
          {transaction.text} <span>{negative?'-':'+'}${Math.abs(transaction.amount)}</span>
          <button className="delete-btn" 
          onClick={()=>deleteTransaction(transaction.id) }>x</button>
        </li> 
  )
}
