import React from 'react';
import { useDispatch } from 'react-redux';
import { searchNews, setPage } from '../store/newsSlice';

const SearchBar = () => {
    const [query, setQuery] = React.useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setPage(1));
        dispatch(searchNews({query, page: 1}));
    };

    return (
        <form onSubmit={handleSearch} className='flex justify-center my-4'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search news..."
                className="px-4 py-2 border rounded-l-lg"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-while rounded-r-lg">
                Search
            </button>
        </form>
    );
};

export default SearchBar;