import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addFavorite, removeFavorite} from '../store/newsSlice';

const ArticleCard = ({ article }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.news.favorites);
    const isFavorite = favorites.some((fav) => fav.url === article.url);
    const defaultImage = 'https://via.placeholder.com/150';

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(article.url));
        } else {
            dispatch(addFavorite(article));
        }
    };

    return (
        <div className="border rounded-lg overflow-hidden shadow-lg m-3">
        <img className="w-full" src={article.urlToImage || defaultImage} alt={article.title}/>
        <div className="p-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
            <Link className="text-blue-500 hover:underline" to={`/article/${encodeURIComponent(article.title)}`}>Read more</Link>
            <button onClick={handleFavoriteClick} className={`mt-2 flex align-end ${isFavorite ? 'text-red-500' : 'text-blue-500'} hover:underline`}>
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
        </div>
    );
};

export default ArticleCard;