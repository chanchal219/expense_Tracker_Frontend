import React ,{useState,useEffect}from 'react'
import { handleError } from '../utils';

const ExpenseTrackerForm = ({addExpenses}) => {
    const [expenseInfo,setExpenseInfo]=useState({text:'',amount:''})
    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(name,value);
        const copyExpenseInfo={...expenseInfo};
        copyExpenseInfo[name]=value;
        setExpenseInfo(copyExpenseInfo)
            }

            const handleExpense=(e)=>{
e.preventDefault();

const {text,amount}=expenseInfo;
if(!text||!amount){
    handleError('All fields are required')
    return;
}
setTimeout(()=>{
    setExpenseInfo({text:'',amount:''})
},1000)

addExpenses(expenseInfo);
            }
  return (
    <div className='container'>
        <h1>Expense Tracker</h1>
        <form onSubmit={handleExpense}>
            

            <div>
                <label htmlFor="email">Expense Description</label>
                <input   onChange={handleChange}type="text" name='text' autoFocus placeholder='Enter your Expense Description...' 
                value={expenseInfo.text}/>
            </div>

            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number"  onChange={handleChange} name='amount' autoFocus placeholder='Enter your amount,Expense(-ve) Income(+ve)..'
                value={expenseInfo.amount} />
            </div>
            <button type='submit'>Add Expense</button>
            
        </form>
     
    </div>
  )
}

export default ExpenseTrackerForm