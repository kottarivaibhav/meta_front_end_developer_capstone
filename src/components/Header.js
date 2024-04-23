import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
    return (
        <header className="header">
            <section>
                {/* Banner texts*/}
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family-owned Indian restaurant, focused on serving traditional dishes.</p>
                {/* Link to booking page */}
                <Link to="/booking">
                    <button>Reserve table</button>
                </Link>
                {/* Banner Img */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    );
};

export default Header;
