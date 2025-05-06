import { FaLongArrowAltRight } from "react-icons/fa";
import { About } from "./About";

export const Home = ()=>{
    return (
        <>
        <main>
            <section className="section-home">
                <div className="container grid grid-two--cols">
                    <div className="home-content">
                        <h1 className="text-[4rem] capitalize font-[700] mb-[1.5rem]">explore the world, one country at a time.</h1>
                        <p className="capitalize text-[2.2rem] mb-[2rem] ">discover the history, culture and beauty of every nation. sort, search and filter through countries to find the details you need</p>
                        <button className="capitalize text-[2rem] flex items-center gap-[1rem] border-[#fff] border-[.1rem] py-[1rem] px-[2rem] rounded-[1.5rem] bg-[#202020] cursor-pointer" > start exploring <FaLongArrowAltRight size={25}/></button>
                    </div>
                    <div className="home-image">
                        <figure>
                            <img src="./image/world.png" alt="a pic of a world" />
                        </figure>
                    </div>
                </div>
            </section>

        </main>
        <About/>
        </>
    )
}
