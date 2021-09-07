const API_KEY = "ceb22bf1061bfe5a63469d6ff7dfcc9b";
const URL_BASE = "https://api.themoviedb.org/3";

/*/
Nesse arquivo vamos pegar (GET) as informação sobre os filmes:
- Originais da Netflix
- Recomendados (Trending)
- Em alta (Top Rated)
- Terror
- Ação
- Comédia
- Romance
- Documentário
/*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${URL_BASE}${endpoint}`)
    const json = req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                itens: await basicFetch(`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                itens: await basicFetch(`/move/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                itens: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                itens: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                itens: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                itens: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                itens: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`)
            },
        ];

    }
}