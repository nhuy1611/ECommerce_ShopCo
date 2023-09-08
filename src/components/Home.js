import React from 'react'
import Button from 'react-bootstrap/Button';


export const Home = () => {
    return (
    <div className='home'>
        <h1>FIND CLOTHES <br/> THAT MATCHES <br/> YOUR STYLE</h1>
        <p>Browse through our diverse range of meticulously crafted garments, <br/>designed to bring out your individuality and cater to your sense of <br/>style.</p>
        <Button variant="dark" className='button-shop'>Shop Now</Button>
        <div className='about-brand'>
            <div className='brand'>
                <h3>200+</h3>
                <p>International Brands</p>
            </div>
            <div className='line'></div>
            <div className='product'>
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
            </div>
            <div className='line'></div>
            <div className='customer'>
                <h3>30,000+</h3>
                <p>Happy Customers</p>
            </div>
        </div>
        
    </div>
  )
}
