import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText = "Add Garment",
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  alternativeText,
  onAlternativeClick,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={onClose} />
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <div className="modal__button-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {alternativeText && (
              <button
                type="button"
                className="modal__alt-button"
                onClick={onAlternativeClick}
              >
                {alternativeText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
