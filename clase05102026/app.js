const API_KEY='e95302c81e5e8df7865ae9919f1cebf5';
const BASE_URL='https://api.themoviedb.org/3';
const probarApi=async()=>{
    const url=`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    console.log('url de la peticion',url);
    const respuesta= await fetch (url);
    const datos=await respuesta.json();
    console.log('respuesta completa',datos);
    console.log('peliculas',datos.results);
    console.log('Total de resultados',datos.total_results);
}
probarApi();
