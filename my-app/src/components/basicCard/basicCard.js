/* CSS */
import "../basicCard/basicCard.css";

function BasicCard(props) {
  const cardImg = props.imgPath
    ? props.imgPath
    : "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";
  return (
    <div className="basic-card" id={props.id}>
      <img src={cardImg} className="basic-card__img" alt={props.alt} />
      <div className="basic-card__body">
        <h5>{props.title}</h5>
        <div className="center-position">
          <a href={props.url} className="btn-secundary">
            {props.link}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BasicCard;
