import React, { useEffect, useState } from "react";
import { useAppContext } from "./AppProvider";
import { useLocation } from "react-router-dom"; // Import useLocation

const ViewProduct = () => {
    const { GetApi } = useAppContext();
    const location = useLocation();
    const { productId } = location.state;

    const [product, setProducts] = useState("");

    useEffect(() => {
        ViewProduct();
    }, []);

    const ViewProduct = () => {
        const method = 'GET';
        const url = `/products/${productId}`; // Use productId in API call
        const data = null;
        GetApi(method, url, data)
            .then((response) => {
                console.log(response, "View Product");
                const productData = Array.isArray(response.data) ? response.data[0] : response.data;
                setProducts(productData);
            })
            .catch((error) => {
                console.log("Error fetching product details:", error);
            });
    };

    return (
        <div className="viewProductContainer container">
            <div className="row justify-content-center align-items-center">
                {/* Left side: Image */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 viewproductCls text-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid product-image"
                    />
                </div>

                {/* Right side: Product Details */}
                <div className="col-lg-6 col-md-6 col-sm-12 product-details">
                    <h3 className="product-title">{product.title}</h3>
                    <h4 className="product-price">₹ {product.price}</h4>
                    <p className="product-description">{product.description}</p>

                    <div className="quantity-selector d-flex align-items-center my-3">
                        <span>Quantity:</span>
                        <input type="number" className="form-control quantity-input mx-2" defaultValue={1} min={1} />
                    </div>

                    <div className="button-group my-4">
                        <button className="btn btn-secondary me-3">Add to Card</button>
                        <button className="btn btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
