import "../ModalWithForm/ModalWithForm.css";
import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close"
        />
        <p className="modal__confirm-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button
          type="button"
          className="modal__confirm-delete"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="modal__confirm-cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
