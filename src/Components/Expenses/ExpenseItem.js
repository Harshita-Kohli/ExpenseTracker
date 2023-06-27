import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
//define a function clickHandler before returning the jsx
const ExpenseItem = (props)=>{ 
    //we use the useState hook and pass it the initial value to be given to the props
    //useState creates a special variable 'title' and 
    //also returns an array: arr[0] = title, arr[1] = function which can be used to update the title
    const [title,setTitle] = useState(props.title); //usage of array destructuring

    const clickHandler = () =>{//whenever the button is clicked, this function is executed, and in 
        //turn the special variable 'title' can be updated using setTitle() and
        // the ExpenseItem component is called and rendered again
        setTitle('Updated Title'); 
        // console.log('Changed!');
    }
    return( //we want each item should be a list item in the unordered list
        <li> 
            <Card className="expense-item">
                <ExpenseDate date = {props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">Rs.{props.amount}</div>
                </div>
            </Card>
        </li>
    );
}
export default ExpenseItem;