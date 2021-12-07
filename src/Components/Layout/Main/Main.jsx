import './Main.css'
import { Card } from "../../UI/Card/Card";
import React,{ useEffect, useState } from "react";
import morty from '../../../Images/R.jpg';
import { Select } from "../../UI/Select/Select"
export const Main = () =>{

    useEffect(()=>{
        FetchApi('');
    },[]);
    const [datas, setData] = useState([{name: "Morty",image:morty}]);

    const URL = 'https://rickandmortyapi.com/api/character/'

    const FetchApi=()=> {    
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setData(data.results))
    }
    return(
        <>
            <main>
            <Select data={datas} />
                <section>
                    <Card data={datas}/>
                </section>
            </main>
        </>
    )
}