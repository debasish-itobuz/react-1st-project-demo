// import ExpenseItem from "./components/ExpenseItem";

import Expenses from "./components/Expenses";

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
        <Expenses item = {expenses}/>
      </div>
       
     );
   
}

export default App;