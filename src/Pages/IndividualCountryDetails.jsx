import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export const IndividualCountryDetails = () => {
    
  const res = useLoaderData();
  console.log(res);

  const navigate = useNavigate();

  const handleBtn = ()=>{
    navigate(-1)
  }
  

  return (
    <section className="section-Individual--country container">
      <div className=" grid grid-two--cols cards">
        {
        res.data.map((curr) => {
            const {borders,capital,flags,currencies,name,population,region,subregion,languages,tld} = curr
            const entry = Object.entries(currencies);
            const result = entry[0][1];
          return (
            <>
              <div className="specific-country--image">
                <img src={flags.svg} alt="a image of a flag" />
              </div>
              <div className="specific-country--content">
                <h1>{name.official}</h1>
                <p><span>native names: </span>{Object.entries(name.nativeName).map((curr)=> curr[1].common).join(", ")}</p>
                <p><span>population: </span>{population}</p>
                <p><span>region: </span>{region}</p>
                <p><span>sub region: </span>{subregion}</p>
                <p><span>capital: </span>{capital[0]}</p>
                <p><span>top level domain: </span>{tld[0]}</p>
                <p><span>currencies: </span>{result.name}</p>
                <p><span>languages: </span>{Object.entries(languages).map((curr)=> curr[1]).join(", ")}</p>
              </div>
              <button onClick={handleBtn} className="individual-btn">go back</button>
            </>
          );
        })
        }
      </div>
    </section>
  );
};
