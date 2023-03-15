import "./product.css";
import { useState } from "react";
import Modal from "../modal/modal";

const Product = (props) => {
    
    {/* PRODUCT HOVER */ }

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const {product} = props;
    const productPrice = product.price;
    const firstImg = product.img_first;
    const secondImg = product.img_second;
    const imgSrc = isHovered && secondImg ? secondImg : firstImg;

    const buttonStyle = {
        top: isHovered ? '0px' : '-50px',
        transform: isHovered ? 'translate(0%, -135%)' : 'none',
        transition: 'all 0.25s ease-in-out',
    };

    {/* MODAL */ }

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    if(showModal) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }

    return (
        <div className="container">
            <div className="card">
                <div className="img-button-container">
                    <img
                        className="product-img"
                        src={`../productsphotos/${imgSrc}.jpg`}
                        alt={product.name}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleShowModal}
                    />
                    <button
                        className="add-to-cart-button"
                        style={buttonStyle}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >ADD TO CART</button>
                </div>
                <p className="product-name">{product.name}</p>
                <strong>{productPrice.toFixed(2)} zł</strong>
            </div>
            {showModal && <div className="modal-container" onClick={handleCloseModal}><Modal></Modal></div>}
        </div>
    );
}
 
export default Product;