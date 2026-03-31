import "./ModalWithForm.css"

function ModalWithForm( { 
        children, 
        buttonText, 
        title, 
        activeModal, 
        onClose 
    } ) {
    return (
        <div className={`modal ${activeModal === "new-garment" && "modal__opened"}`}>
            <div className="modal__content">
                <h2 className="modal__title">New garment</h2>
                <button 
                    type="button" 
                    className="modal__close" 
                    onClick={onClose}>
                </button>
                <form className="modal__form">
                    {children}
                    <button type="submit" className="modal__submit">
                        {buttonText} 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ModalWithForm;