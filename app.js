/* let nextId=4;
let filtroGenero='';
let filtroEstado='';
let busqueda='';



const inputGenero=document.getElementById('genero');
const inputAño=document.getElementById('año');
const inputCalificacion=document.getElementById('calificacion');

const searchInput = document.getElementById('search');
const filterGenero = document.getElementById('filter-genero');
const filterEstado = document.getElementById('filter-estado');
const clearFiltersBtn = document.getElementById('clear-filters');

const statsTotal = document.getElementById('stats-total');
const statsVistas = document.getElementById('stats-vistas');
const statsPendientes = document.getElementById('stats-pendientes');
const statsPromedio = document.getElementById('stats-promedio');

const moviesGrid = document.getElementById('movies-grid');
const moviesEmpty = document.getElementById('movies-empty');

const notification = document.getElementById('notification');

const obtenerPeliculasFiltradas =()=>{
    let resultado(...películas)
}


let resultado = peliculas.filter(pelicula =>
            pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (filtroGenero !== '') {
        resultado = resultado.filter(pelicula =>
            pelicula.genero === filtroGenero
        );
    }

    if (filtroEstado === 'vistas') {
        resultado = resultado.filter(pelicula =>
            pelicula.vista === true
        );
    }

const crearTarjetaPelicula = (pelicula) => {
    // 1. Crear el elemento article
    const article = document.createElement('article');
    article.className = 'movie-card';

    // 2. Extraer las propiedades del objeto
    const { id, titulo, genero, año, calificacion, vista } = pelicula;

    // 3. Si está vista, añadir la clase modificadora
    if (vista) {
        article.classList.add('movie-card--viewed');
    }

    // 4. Construir el HTML interno usando Template Literals (comillas invertidas)
    // Nota: Usamos ${} para las variables, NO <> </>
    article.innerHTML = `
        <h3>${titulo}</h3>
        <p>${genero} ${año}</p>
        <p>${calificacion}/10</p>

        <div>
            <button class="btn-ver" data-id="${id}">Ver</button>
        </div>
    `;

    // 5. Retornar el elemento creado
    return article;
}; */