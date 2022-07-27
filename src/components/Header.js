import React from 'react';
import { StockHeader } from './StockHeader';

export const Header = ({ onSearch, onClickPop, onChange, onClickRecent }) => {
    return (
        <div className="header-container">
            <img className='logo' src='https://avatars.githubusercontent.com/u/221409?s=280&v=4' alt='nyt' />
            <p className='popular link' onClick={onClickPop}>Home</p>
            <p className='recent link' onClick={onClickRecent}>Recent</p>
            <form className='search-form' onSubmit={onSearch} >
                <input className='search-input' type='text' placeholder='Search' onChange={onChange} />
                <button type='submit' className='search-btn'>Submit</button>
            </form>
            <StockHeader />
        </div>
    )
};