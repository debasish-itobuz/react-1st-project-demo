import ExpenseItem from "./components/ExpenseItem";
function App(){
  //props
  let expenseDate = new Date(2021, 3, 28);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;

    return(
      <div>
        <h2>Let's get Started</h2>
        <ExpenseItem 
        date = {expenseDate} 
        // title = "Food" //this is also possible to write
        title = {expenseTitle}
        amount = {expenseAmount}
        />
      </div>
       
     );
   
}

export default App;
// now we will make array of objects to store more data