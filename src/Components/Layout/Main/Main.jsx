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
    const [name, setName] = useState("Mory");

    const URL = 'https://rickandmortyapi.com/api/character/'

    const FetchApi=()=> {    
        fetch(URL)
        .then(response=>response.json())
        .then(data=>{
            setData(data.results)
            setName(data.results.name)
        });
    }

    const setEvent= ((event)=>{
        if(event.target.value === 'one'){
            setData([])
        }
        if(event.target.value === 'all'){
            
        }
    });

    return(
        <>
            <main>
                <div className="containerSelect">
                    <Select data={datas} event={setEvent} /> 
                </div>
                <section>
                    <Card data={datas}/>
                </section>
            </main>
        </>
    )
}