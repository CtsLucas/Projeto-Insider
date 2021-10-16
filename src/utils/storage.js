import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar filmes salvos
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || []
    
    return moviesSave;
}

// Salvar filmes
export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key)

    // Se tiver um filme com esse ID / Ou duplicado, preciamos ignorar.
    const hasMovie = moviesStored.some( item => item.id === newMovie.id);

    if(hasMovie){
        console.log("Este filme já existe na sua lista!")
        return;
    }

    moviesStored.push(newMovie)

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("Filme Salvo!")
}


// Deletar filmes
export async function deleteMovie(id){
    let moviesStored = await getMoviesSave('@primereact');

    let myMovies = moviesStored.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
    console.log("Filme Deletado!");
    return myMovies;
}


// Filtar filmes salvos
export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@primereact');

    const hasMovie = moviesStored.find( item => item.id === movie.id);

    if(hasMovie){
        return true;
    }

    return false;
}