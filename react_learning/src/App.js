import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      location:'Karnataka',
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2',
      title: 'New TV',
      amount: 799.49, 
      location:'New Delhi',
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      location:'New York',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      location:'New Zealand',
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div> 
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} location={expenses[0].location} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} location={expenses[1].location} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} location={expenses[2].location} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} location={expenses[3].location} date={expenses[3].date} />
    </div>
  );
}

export default App;
