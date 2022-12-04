import './ExpenseItem.css'

const ExpenseDetails = ({title,amount,location}) =>{
    return(
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <h2>{location}</h2>
            <div className='expense-item__price'>Rs{amount}</div>
        </div>
    )
}

export default ExpenseDetails;