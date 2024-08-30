import React from 'react'
import './Footer.css'
import Rating from './Rating'

export default function ItemCard(props) {
    return (
        <div className="card my-3" style={{ height: '500px',minWidth:'300px', marginLeft:'5px'}}>
            <div className='container' style={{width:'160px'}}>
            <div className='image my-3'style={{height: "10rem", backgroundImage: `url(${props.img})`, backgroundSize:'contain', backgroundRepeat:'no-repeat' }}></div>
            </div>
            <div className="card-body">
                <h5 className="card-title" style={{minHeight: '40px' }}>{props.title.length < 40 ? props.title : props.title.slice(0, 40) + '...'}</h5>
                <p className="card-text my-3" style={{minHeight: '50px' }}>{props.description.length < 40 ? props.description : props.description.slice(0, 40) + '...'}</p>
                <Rating rating={props.rating} />
                <h5 className='my-3' style={{ color: 'blue'}}>Price: {props.price}/-</h5>
                <a href="/" className="btn btn-primary" style={{ position: 'absolute', bottom: '10px', left: '10px' }}>See More</a>
            </div>
        </div>
    )
}
