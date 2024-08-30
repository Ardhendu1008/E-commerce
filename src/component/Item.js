import './Footer.css'
import React from 'react'
import ItemCard from './ItemCard'
import { useState, useEffect } from 'react'
import Loader from './Loader';

export default function Item(props) {

    let [load, setLoad] = useState(true);
    let [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoad(true);
            let url = 'https://fakestoreapi.com/products';
            let furl = url.concat(`${props.category}`);
            console.log(furl);
            const data = await fetch(furl);
            const fmt_data = await data.json();
            console.log(fmt_data);
            setState(fmt_data);
            setLoad(false);
        };
        fetchData();
    }, []);

    if (load) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <div className='row' style={{ padding: '16px' }}>
                {state.map((element) => {
                    return <div className='col-md-3' key={element.image}>
                        <ItemCard title={element.title} description={element.description} price={element.price} img={element.image} rating={element.rating.rate}/>
                    </div>
                })}
            </div>
        )
    }
}
