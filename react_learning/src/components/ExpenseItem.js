import ExpenseDate from './ExpenseDate';
// import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props){

    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
    <h2 className='expense-item__title'>{props.title}</h2>
    <div className='expense-item__location'>{props.location}</div>
    <div className='expense-item__price'>{props.amount}</div></div>
    
    </div>
    )
}
export default ExpenseItem;