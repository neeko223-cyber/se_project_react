import { useContext } from "react";
import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);

  if (!card || !card._id) {
    return null;
  }

  const isOwn =
    currentUser &&
    String(card.owner?._id || card.owner) === String(currentUser._id);

  const imageSrc = card.imageUrl || card.link;

  return (
    <div className={`modal ${activeModal === "preview" ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close"
        />
        <img src={imageSrc} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__left-content">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          {isOwn && (
            <button
              type="button"
              className="modal__delete-btn"
              onClick={onDeleteClick}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
