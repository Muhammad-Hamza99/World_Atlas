import country from "../api/Country.json";
import { Cards } from "../Components/UI/Cards";

export const About = ()=>{
    return (
        <section className="section-about">
            <div className="container">
                <h1 className="text-center capitalize text-[4rem] font-[600]">here are the interesting facts we're proud of </h1>
            </div>
            <div className="container">
                <ul className="grid grid-three--cols" >
                    {
                        country.map((curr)=>{
                            return <Cards key={curr.key} data={curr}/>
                        })
                    }
                </ul>

            </div>

        </section>
    )
}