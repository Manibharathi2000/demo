import React from 'react';
import Select from 'react-select';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { logo } from "../imageUrl";

const SearchBar = ({ onSearchChange, onFilterChange, onSortChange }) => {
    // Updated category options with "All"
    const categoryOptions = [
        { value: "", label: "All" },
        { value: "men's clothing", label: "Men's Clothing" },
        { value: "electronics", label: "Electronics" },
        { value: "jewelery", label: "Jewelery" },
        { value: "women's clothing", label: "Women's Clothing" },
    ];

    // Updated sorting options with "All"
    const sortOptions = [
        { value: "", label: "All" },
        { value: 'asc', label: 'Low to high' },
        { value: 'desc', label: 'High to Low' },
        { value: 'priceLow', label: 'Price Rs.100-500' },
        { value: 'priceHigh', label: 'Price Rs.500-1000' },
    ];

    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    const handleFilterChange = (selectedOption) => {
        onFilterChange(selectedOption?.value || "");
    };

    const handleSortChange = (selectedOption) => {
        onSortChange(selectedOption?.value || "");
    };

    return (
        <div>
            <div className="header">
                <div className="search-container" >
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search Product"
                        onChange={handleSearchChange}
                        className="search-input"
                        style={{ marginLeft: "5px" }}
                    />
                </div>
            </div>
            <div className='header-container'>
                <div className="col-12 col-md-4 mb-2">
                    <Select
                        options={categoryOptions}
                        onChange={handleFilterChange}
                        placeholder="Filter by Category"
                        styles={{ marginRight: "10px" }}
                    />
                </div>
                <div className='col-12 col-md-4 mb-2'>
                    <Select
                        options={sortOptions}
                        onChange={handleSortChange}
                        placeholder="Sort by"
                    />
                </div>
            </div>


        </div>




    );
};

export default SearchBar;
