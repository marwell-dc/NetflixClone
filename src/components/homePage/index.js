import React, { useEffect, useState } from 'react';
import './styles.css'
import Tmdb from '../../Tmdb.js';
import MovieRow from '../movieRow/index.js'
import FeatureMovie from '../featureMovie/index.js'

const HomePage = () => {
    const [ movieList, setMovieList ] = useState([]);
    const [ fetuareData, setFetuareData ] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
        //Pegando a lista total
        let list = await Tmdb.getHomeList();
        setMovieList(list)

        //Pegando o Feature
        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFetuareData(chosenInfo);
        }
        loadAll();
    }, []);

    return (
        <div className='page'>
      
      {fetuareData &&
        <FeatureMovie item={fetuareData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
    )
}

export default HomePage;