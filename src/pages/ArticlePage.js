import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticlePage = () => {
    const { title } = useParams();
    const article = useSelector((state) => state.news.articles.find((a) => a.title === decodeURIComponent(title)));

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold my-4">{article.title}</h1>
            <img className="w-full" src={article.urlToImage} alt={article.title} />
            <p className="text-gray-700 mt-4">{article.content}</p>
        </div>
    );
};

export default ArticlePage;