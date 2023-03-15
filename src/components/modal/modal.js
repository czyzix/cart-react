import "./modal.css";
import ReactDOM from "react-dom";

const Modal = ({open, onClose, product}) => {
    if (!open) return null

    const productPrice = product.price;

    return ReactDOM.createPortal(
        <>
        <div className="overlay-modal" onClick={onClose}></div>
        <div className="modal">
            <div className="modal-header">
                <strong>{product.name}</strong>
                <button className="modal-close-btn" onClick={onClose}>X</button>
            </div>
            <div className="modal-body">
                <div className="left-side">
                    <img className="product-imgs" src={`../productsphotos/${product.img_first}.jpg`} alt="" />
                </div>
                <div className="right-side">
                    <table>
                        <tr>
                            <td className="td-title">Title</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td className="td-title">Price</td>
                            <td style={{color: 'blue', fontWeight: 600}}>{productPrice.toFixed(2)} zł</td>
                        </tr>
                    </table>
                    <button className="modal-add-to-cart-btn">ADD TO CART</button>
                </div>
            </div>
        </div>
        </>,
        document.getElementById("portal")
    );
}

export default Modal;