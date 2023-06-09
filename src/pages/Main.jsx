import Info from "../components/Info";
import ProductsPage from "../components/ProductsPage";
import FooterInfo from "../components/FooterInfo";
import NewProducts from "../components/NewProducts";
import React from 'react'


const Main = () => {
    return (
        <div className="w-[1200px] m-auto">
            <NewProducts/>
            <Info/>
            <ProductsPage/>
            <FooterInfo/>
        </div>
    );
};

export default Main;