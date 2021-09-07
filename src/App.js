import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

/*
cromograma para criação da pagina.

  Header
  Destaque
  Listas
  rodape basico
*/


export default () => {

  const [movieList, setMovieList ] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }
    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
            <div>
                {item.title}
            </div>
        ))}
      </section>
    </div>
  )
}