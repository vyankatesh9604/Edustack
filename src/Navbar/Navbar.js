import React from 'react'
import {HiHome,HiSearch} from 'react-icons/hi'
import {AiFillSetting} from 'react-icons/ai'
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
    return (
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item active d-flex">
                                <HiHome className="mt-3"/>
                                <NavLink className="nav-link mt-1 mr-1" exact activeClassName="menu_active"  to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item d-flex">
                                <AiOutlineVideoCameraAdd className="mt-3"/>
                                <a class="nav-link mt-1" href="#">Add</a> 
                            </li>
                            <li class="nav-item active d-flex">
                                <HiSearch className="mt-3"/>
                                <NavLink className="nav-link mt-1" exact activeClassName="menu_active"  to="/search">Search</NavLink>
                            </li>
                            <li class="nav-item d-flex">
                                <AiFillSetting className="mt-3"/>
                                <a class="nav-link mt-1" href="#">Setting </a>
                            </li>
                        </ul>
                    
                    </div>
            </nav>
    )
}
