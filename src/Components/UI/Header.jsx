import { NavLink } from "react-router-dom"
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { setIcon } from "./head.js";
import { useEffect } from "react";


export const Header = ()=>{

    useEffect(()=>{
        setIcon();
    },[]);



    return (
        <header className="section-header bg-[#202020]">
            <div className="containers flex justify-between items-center">
                <div className="nav-brand">
                    <NavLink to='/' className={({isActive})=> isActive?'':''} >
                    <h1 className="capitalize text-[3rem] font-[600]">worldAtlas</h1>
                    </NavLink>
                </div>
                <nav>
                    <ul className=" move flex gap-[2.5rem] text-[1.8rem] font-[600]">
                        <li className="icon"><RxCross1 /></li>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/country">Country</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="hamburger-icon">
                        <span><GiHamburgerMenu /></span>
                    </div>
                </nav>

            </div>

        </header>

    )
}