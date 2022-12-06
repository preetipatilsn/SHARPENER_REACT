import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
// import Card from '../UI/card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const clickHandler = () =>{
        console.log("clicked!");
    }

    const deleteHandler = () =>{
        console.log("clicked!");
    }

    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} amount={props.amount} />
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Title</button>

    </div>)
};
export default ExpenseItem;