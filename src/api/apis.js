const apiKey = "0122f66b835be1351367d17f60ca287b"
const apiDomain = "https://developers.themoviedb.org/3"
 
export const getPopular = async (page=1) =>
{
    try{
        const response = await fetch(`${apiDomain}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
        `https://developers.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1`

        const data = await response.json()
        
        return data

    }
    catch (err){

        console.log(err);
        return false

    }

} 