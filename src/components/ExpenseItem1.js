import "./ExpenseItem.css";

function ExpenseItem() {
  let title = "Car Insurance";

  return (
    <div className="expense-item">
      <div> March 12th 2021</div>
      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">$300</div>
      </div> 
    </div>
  );
}

export default ExpenseItem;

// return (
//   <div className="expense-item">
//     {/* <div>{props.date} </div> //error occus as object cant be printed directly. */}
//     <div>{props.date.toISOString()} </div>

//     <div className="expense-item__description">
//       <h2>{props.title}</h2>

//       <div className="expense-item__price">{props.amount}</div>
//     </div> 
//   </div>
// );
