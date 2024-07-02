import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
           <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find books of your choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Get all your favourite books and novels , also learn and contact us with our education platform Learn Ease.Get all your favourite books and novels , also learn and contact us with our education platform Learn Ease , the link is given above.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
