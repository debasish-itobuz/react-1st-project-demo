import ExpenseItem from "./components/ExpenseItem";
function App(){
  let expenses = [
    {
      id : 'e1',
      title : 'School Fee',
      amount : 300,
      date : new Date(2023, 5, 19)
    },
    {
      id : 'e2',
      title : 'Rent',
      amount : 200,
      date : new Date(2021, 7, 10)
    },
    {
      id : 'e3',
      title : 'Food',
      amount : 500,
      date : new Date(2022, 1, 28)
    },
    {
      id : 'e4',
      title : 'Travel',
      amount : 150,
      date : new Date(2023, 10, 1)
    }

  ]

    return(
      <div>
        <h2>Let's get Started</h2>
        <ExpenseItem 
        date = {expenses[0].date} 
        title = {expenses[0].title} 
        amount = {expenses[0].amount} 
        />
        <ExpenseItem 
        date = {expenses[1].date} 
        title = {expenses[1].title} 
        amount = {expenses[1].amount} 
        />
        <ExpenseItem 
        date = {expenses[2].date} 
        title = {expenses[2].title} 
        amount = {expenses[2].amount} 
        />
        <ExpenseItem 
        date = {expenses[3].date} 
        title = {expenses[3].title} 
        amount = {expenses[3].amount} 
        />
      </div>
       
     );
   
}

export default App;

//after this we will learn nested component