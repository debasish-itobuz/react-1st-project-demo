import "./ExpenseItem.css";

function ExpenseItem(props) {//props is an object here
  const month = props.date.toLocaleString('en-US', {month :'long'});
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', {day :'2-digit'});

  return (
    <div className="expense-item">
      <div>
        <div>{ day }</div>  
        <div>{ month }</div>
        <div>{ year }</div>
        {/* <div>{ day }</div> interchanging the place is possible and it will reflect in all the places*/}
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
