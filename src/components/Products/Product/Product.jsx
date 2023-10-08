import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();

    // Check if 'data' and its nested properties are available
    if (!data || !data.img || !data.img.data || data.img.data.length === 0) {
        return <div>Loading...</div>; // or any other appropriate UI for loading
    }

    // Access properties safely using optional chaining (?.)
    const imageUrl = data.img.data[0].attributes?.url;
    const title = data.title;
    const price = data.price;

    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL + imageUrl
                    }
                    alt={title || "Product Image"} // Provide alt text
                />
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">&#8377;{price}</span>
            </div>
        </div>
    );
};

export default Product;
