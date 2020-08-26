import React from 'react';
import './MovieRow.css';

export default ({title, itens}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {itens.results.length > 0  && itens.results.map((item, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                ))}
            </div>
        </div>
    );
}