import axios from "axios";

const api = axios.create({
    baseURL:'https://restcountries.com/v3.1/',
})

export const getData = ()=>{
    return api.get('/all?fields=name,population,region,capital,flags')
}

export const getIndividualData = (name)=>{

    return api.get(`/name/${name}?fullText=true&fields=name,population,region,capital,flags,subregion,currencies,languages,borders,tld`)
}

export const getInd = async({params})=>{
    const {name} = params;
    try {
        const res = await getIndividualData(name);
        return res;
        
    } catch (error) {
        console.log(error);
    }

}