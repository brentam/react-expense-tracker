import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';
import {calculate} from '../helpers/Calculations';



export const Balance = () => {
const {transactions} =useContext(GlobalContext);
const amounts= transactions.map(t=>t.amount);
console.log(amounts);
const totals= calculate(amounts);
  return (
    <div>
      <h4>Your Balance</h4>
  <h1 >${totals}</h1>
    </div>
  )
}

