import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useLocation} from "react-router-dom";
import {fetchProducts} from "../Redux/slices/productSlice";
import { fetchToppings } from '../Redux/slices/productPopUpSlice';


const Categories = () => {
    const categories = ['Популярное', 'Бургеры', 'Боксы', 'Закуски', 'Соусы', 'Напитки', 'Салаты', 'Десерты'];
    const path = ['popular', 'burgers', 'boxes', 'snacks', 'sauces','drinks', 'salads', 'desserts'];

    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname.replace(/^\/main\//, "")
    const [active, setActive] = useState(path.indexOf(currentPath) ? 0 : path.indexOf(currentPath));

    const dispatch = useDispatch();
    

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
                <ul className='flex w-[1200px] m-auto mt-6'>
                    {categories.map((category, index)=>(
                            <li
                                id={'li'}
                                key={index}
                                onClick={()=>categoryClick(index)}
                                className={`cursor-pointer mr-10 ${active===index ? 'active': ''}`}>
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