import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../store/newsSlice';

const Favorites = () => {
    const favorites = useSelector((state) => state.news.favorites);
    const dispatch = useDispatch();

    return (
        <div className='p-4'>
            <h2 className="text-2xl font-bold mb-4">Favorites</h2>
            {favorites.length === 0 ? (<p>No fovorite article yet.</p>): (
            <ul>
                {favorites.map((article) => (
                    <li key={article.url} className="m-4 border p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-gray-700">{article.description}</p>
                        <button onClick={() => dispatch(removeFavorite(article.url))} className="text-red-500 hover:underline">Remove from favorites</button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default Favorites;