import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  console.log(props);
  const changeTitle = () => {
    console.log("test");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      <button onClick={changeTitle}>Change title</button>
    </Card>
  );
};
export default ExpenseItem;
