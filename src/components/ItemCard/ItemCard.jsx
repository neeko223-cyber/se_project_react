import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likeButton from "../../assets/like-button.svg";
import likeButtonActive from "../../assets/like-button-active.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked =
    Boolean(currentUser) &&
    Array.isArray(item.likes) &&
    item.likes.some(
      (id) => String(id?._id || id) === String(currentUser._id)
    );

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLike = (e) => {
    e.stopPropagation();
    if (!onCardLike) return;
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
            aria-label={isLiked ? "Unlike item" : "Like item"}
          >
            <img
              src={isLiked ? likeButtonActive : likeButton}
              alt=""
              className="card__like-button-icon"
            />
          </button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl || item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
