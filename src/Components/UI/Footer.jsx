import data from "../../api/footerData.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footer = ()=>{

    const footerIcon = {
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>,
    }


    return (
        <footer className="section-footer">
            <div className="footer-top bg-[#121212] ">
                <ul className="containerss grid grid-three--cols justify-items-center items-center">
                    {
                        data.map((curr)=>{
                            const {id,icon,title,details} = curr;
                            return(
                                <li key={id}>
                                    <div className="flex items-center gap-[3rem]">
                                        <span className="text-[3.5rem] text-[#2c3b9c]">{footerIcon[icon]}</span>
                                        <div>
                                            <h3 className="capitalize text-[2rem]">{title}</h3>
                                            <p className="capitalize text-[2rem]">{details}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>
            <div className="footer-bottom bg-[#1d1d1d] h-[10vh] ">
                <div className="containerss flex justify-between ">
                    <div>
                        <p className="text-[1.8rem] capitalize text-center">copyright &#169; 2024 all right reserved <span className="text-[#2c3b9c]">muhammad hamza</span> </p>
                    </div>
                    <nav>
                        <ul className="text-[1.8rem] capitalize flex gap-[2rem]">
                            <li><NavLink to='/'>home</NavLink></li>
                            <li><NavLink to='/about'>about</NavLink></li>
                            <li><NavLink to='/country'>country</NavLink></li>
                            <li><NavLink to='/contact'>contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>


        </footer>

    );
}