import React from 'react';
import Categories from "./Categories";
import Products from "./Products";
import ProductPopUp from "./ProductPopUp";

const ProductsPage = () => {
    return (
        <div>
            <Categories/>
            <Products />
            <ProductPopUp/>
        </div>
    );
};

export default ProductsPage;
