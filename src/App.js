// import ExpenseItem from './Components/ExpenseItem';
import React,{ useState } from 'react';
import ExpenseItems from './Components/Expenses/ExpenseItems';
import NewExpense from './Components/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) =>{
    //as we depend on the previous snapshot of the state, we update state this way:
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses]}); //we add the new expense as the first element in the prevExpenses array
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpenseItems expenses = {expenses}></ExpenseItems>
    </div>
  );
}

export default App;
