import React, { useEffect, useState } from 'react';
import './styles.css'
import Tmdb from '../../Tmdb.js';
import MovieRow from '../movieRow/index.js'
import FeatureMovie from '../featureMovie/index.js'
import Header from '../Header';
import Footer from '../Footer';

const HomePage = () => {
  const [ movieList, setMovieList ] = useState([]);
  const [ fetuareData, setFetuareData ] = useState(null);
  const [ isVisibleHeader, setIsVisibleHeader ] = useState(false);
  
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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setIsVisibleHeader(true);
      } else {
        setIsVisibleHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className='page'>
      <Header isVisibleHeader={ isVisibleHeader } />
      
      {fetuareData &&
        <FeatureMovie item={fetuareData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default HomePage;
