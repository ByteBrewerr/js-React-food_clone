import React from 'react';
import Product from "./Product";
import {useSelector} from "react-redux";
import Skeleton from "./Skeleton";
const Products = () => { 
    const data = useSelector((state)=> state.product.data)
    const isLoading = useSelector((state)=> state.product.isLoading)
    return (
        <div className='w-[1200px] h-100 mx-auto mt-10 grid grid-cols-4 grid-rows-auto gap-10'>
            {isLoading ?   Array.from({length: 8}, (_, index) => <Skeleton key={index} />) : data.map((item) => (
                <Product key={item.id} {...item} toppings={[]} />
            )) }
        </div>
    );
};

export default Products;
