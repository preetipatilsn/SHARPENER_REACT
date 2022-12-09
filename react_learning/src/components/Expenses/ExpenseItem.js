import React from 'react';

import ExpenseDate from './ExpenseDate';
// import ExpenseDetails from './ExpenseDetails';
// import Card from '../UI/card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

//    const [title, setTitle] = useState(props.title);
//    const [amount, setAmount] = useState(props.amount);

//     const clickHandler = () =>{
//         setTitle('updated!');
//         console.log("clicked!");
//     };

//     const amountHandler = () =>{
//         setAmount('100')
//         console.log("clicked!");
//     };

    return (
    <div className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>Rs {props.amount}</div>
    </div>
        {/* <ExpenseDetails title={props.title} amount={props.amount} /> */}
        {/* <button onClick={clickHandler}>Change Title</button>
        <button onClick={amountHandler}>Change Amount</button> */}

    </div>)
};

export default ExpenseItem;