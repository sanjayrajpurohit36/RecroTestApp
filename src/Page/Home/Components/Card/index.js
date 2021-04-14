import "./index.scss";
// Component for displaying cards
const Cards = (props) => {
  const { title, body, userId } = props;
  return (
    <div className="card-wrapper">
      <div className="card-wrapper__id">Id: {userId} </div>
      <div className="card-wrapper__title">Title: {title} </div>
      <div className="card-wrapper__body">Body: {body} </div>
    </div>
  );
};

export default Cards;
