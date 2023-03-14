import "./product.css";
import { useState } from "react";

const Product = (props) => {
    
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
        transition: 'all 0.2s ease-in-out',
    };

    return ( 
        <div className="card">
            <div className="img-button-container">
                <img 
                    className="product-img" 
                    src={`../productsphotos/${imgSrc}.jpg`} 
                    alt={product.name} 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
                <button className="add-to-cart-button" style={buttonStyle} onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>ADD TO CART</button>
            </div>
            <p className="product-name">{product.name}</p>
            <strong>{productPrice.toFixed(2)} zł</strong>
        </div>
    );
}
 
export default Product;