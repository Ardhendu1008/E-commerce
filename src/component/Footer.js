import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='main flexrow'>
        <div>
          <h3>E-commerce</h3>
        </div>
        <div>
          <h5>Product</h5>
          <div className='flex'>
            <a href='/'>Overview</a>
            <a href='/'>Priceing</a>
            <a href='/'>Resarch panel</a>
            <a href='/'>Customers</a>
            <a href='/'>Status page</a>
            <a href='/'>Sign up</a>
            <a href='/'>Book a demo</a>
          </div>
        </div>
        <div>
          <h5>Methodologies</h5>
          <div className='flex'>
            <a href='/'>Card Sorting</a>
            <a href='/'>Prototype testing</a>
            <a href='/'>First click test</a>
            <a href='/'>Preference test</a>
            <a href='/'>Five second test</a>
            <a href='/'>Design surveys</a>
          </div>
        </div>
        <div>
          <h5>Resources</h5>
          <div className='flex'>
            <a href='/'>Blog</a>
            <a href='/'>Examples</a>
            <a href='/'>Testing guids</a>
            <a href='/'>Reserch panel calculator</a>
            <a href='/'>Help center</a>
            <a href='/'>Contact</a>
            <a href='/'>Careers</a>
          </div>
        </div>
      </div>
      <div className='secondary flexrow'>
        <div>
          <a href='/' style={{padding:'10px', fontSize:'16px'}}>Privacy policy</a>
          <a href='/' style={{padding:'10px', fontSize:'16px'}}>Terms & conditions</a>
          <a href='/' style={{padding:'10px', fontSize:'16px'}}>Security information</a>
        </div>
        <div>
            <a href='/'style={{padding:'6px'}}><img src='/images/asset 28.png' alt='pic'></img></a>
            <a href='/'style={{padding:'6px'}}><img src='/images/asset 29.png' alt='pic'></img></a>
            <a href='/'style={{padding:'6px'}}><img src='/images/asset 30.png' alt='pic'></img></a>
            <a href='/'style={{padding:'6px'}}><img src='/images/asset 31.png' alt='pic'></img></a>
        </div>
      </div>
    </>
  )
}
