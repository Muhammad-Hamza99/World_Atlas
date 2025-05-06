import { useEffect, useState } from "react"
import { NavLink, useLoaderData } from "react-router-dom"
import { getData, getIndividualData } from "../api/CountryApi"
import { FaLongArrowAltRight } from "react-icons/fa";

export const Country = ()=>{


    const res  = useLoaderData();
   

  
    // const [data,setData] = useState([]);

    // const getTheApi = async()=>{
    //     try {
    //         const res = await GetData();
    //         console.log(res.data);
    //         setData(res.data);
            
    //     } catch (error) {
            
    //     }

    // }

    // useEffect(()=>{
    //     getTheApi();
    // },[])

    const [input,setInput] = useState('');    
    const [search,setSearch] = useState('all');
    const [country,setCountry] = useState(res.data);
    const [sortOrder,setSortOrder] = useState('');
    


    const handleInput = (e)=>{
        setInput(e.target.value);
    }

    const handleSearch = (e)=>{
        setSearch(e.target.value);
    }

    const inputIncludes = (curr)=>{
        return curr.name.common.toLowerCase().includes(input) ? curr :'';
    }

    const searchIncludes = (curr)=>{
        if (search=='all') {
            return curr;
        }
        else{
            return curr.region.toLowerCase()==search;
        }
    }



   
    
    useEffect(()=>{
        let updated = res.data.filter((curr)=>{
            return inputIncludes(curr) && searchIncludes(curr);
    
        })
        if (sortOrder) {
            
            updated = [...updated].sort((a,b)=>{
                return sortOrder=='asc'?a.name.common.localeCompare(b.name.common):b.name.common.localeCompare(a.name.common);
            })
        }
        setCountry(updated);
    },[input,search,sortOrder])
   
   
    
    const handleBtns = (value)=>{
      
        
     
        setSortOrder(value);

    }

    return (
        <section className="section-country">
            <div className="container">
                <div className="header">
                   
                    <input type="text" name="text" autoComplete="off" placeholder="search" value={input} onChange={handleInput}/>
                    <button onClick={()=>handleBtns('asc')}>ace</button>
                    <button onClick={()=>handleBtns('dec')}>dec</button>
                    <select value={search} onChange={handleSearch}>
                        <option value="all">all</option>
                        <option value="africa">africa</option>
                        <option value="america">america</option>
                        <option value="asia">asia</option>
                        <option value="europe">europe</option>
                        <option value="oceania">oceania</option>
                    </select>
                    
                </div>
                <br />
                <ul className="grid grid-four--cols">
                    {
                        country.map((curr,index)=>{
                            const {flags,name,capital,region,population} = curr
                            return (
                                <li className="country-cards" key={index}>
                                    <div className="country-image">
                                        <img src={flags.svg} alt="a country flag" />
                                    </div>

                                    <div className="country-content">
                                        <h2>{(name.common.length>=12) ? `${name.common.slice(0,12)}...`:name.common}</h2>
                                        <p><span>population: </span>{population}</p>
                                        <p><span>region: </span>{region}</p>
                                        <p><span>capital: </span>{capital[0]?`${capital[0].slice(0,10)}..`:''}</p>
                                        <NavLink to={`/country/${name.common}`}>
                                        <button>read more <span><FaLongArrowAltRight/></span></button>
                                        </NavLink>
                                    </div>

                                </li>
                            )

                        })
                    }

                </ul>

            </div>

        </section>
    )
}