import axios from "axios";
import { useState,useEffect } from "react";
import "./Freewat.css";
const addApi = "https://image.tmdb.org/t/p/w500";


const Freewat = () =>
{
const [movie, setMovie] = useState([]);

const fetchh = () =>
{
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1")
    .then((respo) =>{
        setMovie(respo.data.results)
        console.log("free",respo.data.results)
    })
    .catch((err) => {
        console.log("err")
    })
}
useEffect(()=>{
    fetchh();    
},[])


    return(
<>
<p className="popula">Free to watch</p>
        <div className="main-main">
            {movie.map((charac) =>(
                <div>
                    <img className="imag" src={addApi+charac.poster_path}></img>
                    <h4>{charac.vote_average/10*100}%</h4>
                    <h5>{charac.title}</h5>
                    <p>{charac.release_date}</p>
                    </div>
            ))}


        </div>
        </>
    )
}

export default Freewat;