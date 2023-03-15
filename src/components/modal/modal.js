import "./modal.css";

const Modal = ({open, onClose}) => {
    if (!open) return null

    return (
        <>
        <div className="overlay-modal" onClick={onClose}></div>
        <div className="modal">
            <button onClick={onClose}>CLOSE</button>
        </div>
        </> 
    );
}

export default Modal;