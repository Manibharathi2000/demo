# React Product Listing Application

This is a simple React application that displays a list of products and allows users to filter and sort the products. Users can search for products by name and view product details by clicking on individual items.

### Installation

1. Install dependencies
    npm install

2. Start the application:
    npm start
    The app will automatically open at `http://localhost:3000` in your browser. 

## Components

### Product Listing (Product.js)
- The product list is fetched via an API.
- Users can view a list of products on the landing page.
- By clicking on a product container, users are directed to a detailed view of the product.

### Search and Filter (Header.js)
- **Search Bar**: Located in the header, the search input allows users to filter products by name.
- **Filter Options**: Users can filter products by category:
    - Men's Clothing
    - Jewelry
    - Electronics
- **Sorting Options**: Users can sort the products by price:
    - Low to High
    - High to Low
### Header.js
This component contains:
- The search input for filtering products by name.
- Filter options based on product categories (men's clothing, jewelry, electronics).
- Sorting options to arrange products from low-to-high and high-to-low prices.