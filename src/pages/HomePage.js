import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, setPage } from '../store/newsSlice';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/Pagination';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);

    const currentPage = useSelector((state) => state.news.currentPage);
    const [category, setCategory] = useState('general');

    useEffect(() => {
        dispatch(fetchNews({category, currentPage}));
    }, [dispatch, category, currentPage]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const handleCategoryChange = (category) => { 
        setCategory(category);
        dispatch(setPage(1));
        dispatch(fetchNews({category, page: 1}));
    };

    const handlePageChange = (page) => {
        dispatch(setPage(page));
        dispatch(fetchNews({category, page}));
    };

    return (
        <div>
            <SearchBar />
            <CategoryFilter selectedCategory={category} onSelectCategory={handleCategoryChange} />
            <ArticleList articles={articles} />
            <Pagination currentPage={currentPage} totalPages={5} onPageChange={handlePageChange} />
        </div>
    );
};

export default HomePage;