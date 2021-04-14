import "./index.scss";
// Component for displaying cards
const Cards = (props) => {
  const { title, body, userId } = props;
  return (
    <div className="card-wrapper">
      <div className="user-data__id">Id: {userId} </div>
      <div className="user-data__title">Title: {title} </div>
      <div className="user-data__body">Body: {body} </div>
    </div>
  );
};

export default Cards;
