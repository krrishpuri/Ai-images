import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import {Home,CreatePost} from './pages';

export const App = () => {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"></Link>

    </header>
    </BrowserRouter>
  )
}