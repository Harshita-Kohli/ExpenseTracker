//Card is a container component which acts as a shell surrounding the other components 
//like each expenseItem and all expenseItems
import './Card.css';
const Card = (props) =>{
    //we wanna apply 'card' class as well as other classes that are passed to Card, by using props.className
    const classes = 'card ' + props.className; //notice the classes = card expense-item

    //we use the children prop whose value will be the content between the opening and closing custom element Card
    return (
        <div className = {classes}>
            {props.children} 
        </div>
    );
}
export default Card;