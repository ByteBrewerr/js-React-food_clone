import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchProducts} from "../Redux/slices/productSlice";
import { fetchToppings } from '../Redux/slices/productPopUpSlice';


const Categories = () => {
    const categories = ['Популярное', 'Бургеры', 'Боксы', 'Закуски', 'Соусы', 'Напитки', 'Салаты', 'Десерты'];
    const path = ['popular', 'burgers', 'boxes', 'snacks', 'sauces','drinks', 'salads', 'desserts'];

    const [active, setActive] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const categoryClick = (id) => {
        setActive(id);
    }



    useEffect(() => {
        dispatch(fetchProducts(categories[active]));
        dispatch(fetchToppings());
        navigate(`/main/${path[active]}`);
    }, [active]);


    return (
        <div>
            <div>
                <ul onClick={()=>{}} className='flex w-[1200px] m-auto mt-6'>
                    {categories.map((category, id)=>(
                            <li
                                id={'li'}
                                key={id}
                                onClick={()=>categoryClick(id)}
                                className={`cursor-pointer mr-10 ${active===id ? 'active': ''}`}>
                                {category}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};


export default Categories;