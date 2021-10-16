import axios from 'axios';

// URL Filmes em Cartaz:
// movie/now_playing &language=pt-BR&page=1

export const key= '74db1d6ccb2345d2a4536ad210311b05'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;