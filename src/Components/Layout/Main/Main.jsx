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
    const [datos, setDatos] = useState([{name: "Morty",image:morty}]);
    const [name, setName] = useState([{id:1,name:"Morty",image:morty}]);
    const URL = 'https://rickandmortyapi.com/api/character/?name='

    const FetchApi=(()=>{
        fetch(URL)
        .then(response=>response.json())
        .then(data=>{
            setData(data.results)
            setName(data.results)
            setDatos([])
        });
    })    

    const sedEvent=((event)=>{
        if(event.target.value === 'one'){
            setDatos([])
            console.log(event.target);
        }   
        if(event.target.value === 'all'){
            setDatos(datas)
        }
        datas.map((element) =>{
            if (event.target.value===element.name) {
                setDatos([element])
            }
            return '';
        })
        
    })

    return(
        <>
            <main>
                <div className="containerSelect">
                    <Select key="select" data={name} event={sedEvent} /> 
                </div>
                <section>
                    <div className="totalcards">
                    <div className="allcard">
                        <Card key="card" data={datos}/>
                    </div>
                    </div>
                </section>
            </main>
        </>
    )
}