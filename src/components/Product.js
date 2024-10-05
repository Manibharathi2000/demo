import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useAppContext } from "./AppProvider";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const { GetApi } = useAppContext();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedSort, setSelectedSort] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getallProduct();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedFilter, selectedSort]);

    const getallProduct = () => {
        const method = 'GET';
        const url = `/products`;
        const data = null;

        GetApi(method, url, data)
            .then((response) => {
                console.log(response, "Product List");
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch((error) => {
                console.log("Error fetching product data:", error);
            });
    };

    const applyFilters = () => {
        let filtered = [...products];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (selectedFilter) {
            filtered = filtered.filter(product => product.category === selectedFilter);
        }

        // Sorting by price
        if (selectedSort === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (selectedSort === 'desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (selectedSort === 'priceLow') {
            filtered = filtered.filter(product => product.price >= 100 && product.price <= 500);
        } else if (selectedSort === 'priceHigh') {
            filtered = filtered.filter(product => product.price > 500 && product.price <= 1000);
        }

        setFilteredProducts(filtered);
    };
    
    const handleProductClick = (id) => {
        navigate(`/ViewProduct`, { state: { productId: id } });
        console.log("Product ID:", id); 
    };

    return (
        <div>
            <SearchBar
                onSearchChange={setSearchTerm}
                onFilterChange={setSelectedFilter}
                onSortChange={setSelectedSort}
            />

            <div className="container my-4">
                {filteredProducts.length > 0 ? (
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div className="card h-100" onClick={() => handleProductClick(product.id)}>
                                    <div className="card-img-top">
                                        <img src={product.image}  alt={product.title} />
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">₹ {product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: "center", fontSize: "18px", color: "gray", marginTop: "20px" }}>
                        No records found {searchTerm && `for "${searchTerm}"`}
                        {selectedFilter && ` in category "${selectedFilter}"`}
                        {selectedSort && ` with the sorting "${selectedSort}"`}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;
