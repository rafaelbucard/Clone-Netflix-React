import React, { useEffect , useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'


export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect (()=>{
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();

  },[]);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
           <div>
             <MovieRow key={key} title={item.title} item={item.itens}/>
           </div>
        ))}
      </section>
    </div>
  )
}