import axios from "axios";
import { useState,useEffect } from "react";
import movies from "../constants/popular-movies";
import './card.css'
const add = "https://image.tmdb.org/t/p/w500"

const Card = () => {

    const [mov, setMov] = useState([]);

    const fetch = () => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1")
        .then((result)=>{   
            setMov(result.data.results)
            console.log("res",result.data.results)
        })
        .catch((err)=> console.log(err))
    }

    useEffect(()=>{
        fetch();    
    },[])

    return(
    <>
       <p className="popula">What's Popular</p>
        <div className="cards">    
            
         {mov.map((char)=>(
                    
                        <div>
                      <img className="cards-img" src={add+char.poster_path}/>
                      <h4>{char.vote_average/10*100}%</h4>
                      <h5> {char.title}</h5>
                      <p>{char.release_date}</p>
                      </div>
                    
            
         ))}
         </div>
         </>
    )
         }

  

export default Card;