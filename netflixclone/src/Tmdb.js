const API_KEY = '6bb5d740e8a1ab3796e7f0b7d5c47d91';
const API_BASE = 'https://api.themoviedb.org/3';
/* Lista de Filmes:
-Originais Netflix
-Recomendados
-Ação 
-Romance
-Terror
-Documentário
-Comedia
-Top Rated
*/

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
               title: 'Originais do Netflix',
               itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) // Indormaçoes na Documentalão de API TMDB
            },
            {
                slug: 'trending',
               title: 'Recomendado para Você',
               itens: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                 slug: 'toprated',
                title: 'Em Alta',
                itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)            },
            {
                slug: 'action',
               title: 'Ação',
               itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)  
            },
            {
                slug: 'comedy',
               title: 'Comédia',
               itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
               title: 'Terror',
               itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
               title: 'Romance',
               itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
               title: 'Documentários',
               itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}