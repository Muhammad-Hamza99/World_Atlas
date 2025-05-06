export const Cards = ({data})=>{
    return(
        <li className="gradient-cards h-[30rem] p-[4rem] border-[1px] rounded-[6rem] flex flex-col justify-center ">
            <h2 className="text-[3rem] font-[600] mb-[1rem]">{data.countryName}</h2>
            <p className="text-[1.8rem] mb-[1rem]"><span className="capitalize text-[#81858f]">capital: </span>{data.capital}</p>
            <p className="text-[1.8rem] mb-[1rem]"><span className="capitalize text-[#81858f]">population: </span>{data.population}</p>
            <p className="text-[1.8rem] text-justify"><span className="capitalize text-[#81858f]">interesting facts: </span>{data.interestingFact} </p>
        </li>
    )
}