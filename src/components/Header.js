import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <div className='h-[70px] bg-headerbg flex items-center px-[36px] overflow-x-hidden'>

        <img className='w-20' src='/images/logo.svg' alt='logo'/> 
        <div className='flex flex-1 items-center ml-[25px]'>
            <a className='flex px-[22px] items-center cursor-pointer'>
                <img className='h-[20px]' src='/images/home-icon.svg' alt=''/>
                <span className='relative '>HOME</span>
            </a>

            <a className='flex px-[22px] items-center cursor-pointer'>
                <img className='h-[20px]' src='/images/search-icon.svg' alt=''/>
                <span className='relative '>SEARCH</span>
            </a>

            <a className='flex px-[22px] items-center cursor-pointer'>
                <img className='h-[20px]' src='/images/watchlist-icon.svg' alt=''/>
                <span className='relative '>WATCHLIST</span>
            </a>

            <a className='flex px-[22px] items-center cursor-pointer'>
                <img className='h-[20px]' src='/images/original-icon.svg' alt=''/>
                <span className='relative '>ORIGINALS</span>
            </a>
            <a className='flex px-[22px] items-center cursor-pointer'>
                <img className='h-[20px]' src='/images/movie-icon.svg' alt=''/>
                <span className='relative '>MOVIES</span>
            </a>
            <a className='flex px-[22px] items-center cursor-pointer'>
                <img className='h-[20px]' src='/images/series-icon.svg' alt=''/>
                <span className='relative '>SERIES</span>
            </a>
        </div>
        <div>
            <img className='w-[48px] h-[48px] rounded-full cursor-pointer' src='/images/profile.jpeg' alt='profile'/>
        </div> 
    </div>
  )
}

export default Header

