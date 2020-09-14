import {useState, useEffect} from 'react';
import API_KEY from './keys';
const CONTEXT_KEY='d1dcd8b219b61ec44';
const useGoogleSearch=(term) =>{
    const [data,setData]=useState(null);
    //https://developers.google.com/custom-search/v1/introduction
    //https://cse.google.co.in/cse/setup/basic?cx=d1dcd8b219b61ec44
    useEffect(()=>{
        const fetchData=async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then(response=>response.json()).then(result=>setData(result));
        }
        fetchData();
    },[term]);
    return {data};
};

export default useGoogleSearch;
