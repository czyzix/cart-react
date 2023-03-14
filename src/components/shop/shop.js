import Product from "../product/product.js";
import "./shop.css";

const Shop = (props) => {
    const {products} = props;
    
    return (
        <div>
            <h2>SHOP</h2>
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                    >
                    </Product>
                ))}
            </div>
        </div>
    );
}
 
export default Shop;