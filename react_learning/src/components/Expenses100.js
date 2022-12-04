import ExpenseItem from "./ExpenseItem";
import './Expenses100.css'

const Expenses100 = (props) =>{
    if(props.items.length === 0){
        return <h1 className='expense-item__empty'>Found No Expenses!</h1>
    }
    return(
        <ul className='expense-list'>
            {props.items.map((expense)=>(
                <ExpenseItem 
                 key = {expense.id}
                 title = {expense.title}
                 amount = {expense.title}
                 location = {expense.title}
                 date = {expense.date}
                />
            ))}
        </ul>
    );
};

export default Expenses100;
