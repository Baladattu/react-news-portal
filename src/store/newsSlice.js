import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '7898009203c444a3ac0f25f5fb419344';
const BASE_URL = 'https://newsapi.org/v2';

const loadFavorites = () => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
};

export const fetchNews = createAsyncThunk('news/fetchNews', async ({category,page }) => {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
            apiKey: API_KEY,
            category,
            page,
            pageSize: 10,
        },
    })
    return response.data.articles;
});

export const searchNews = createAsyncThunk('news/searchNews', async ({query, page }) => {
    const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
            apiKey: API_KEY,
            q: query,
            page,
            pageSize: 10,
        },
    });
    return response.data.articles;
});

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [],
        status: 'idle',
        error: null,
        currentPage: 1,
        totalpages: 1,
        favorites: loadFavorites(),
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        addFavorite: (state, action) => {
            const newFavorites = action.payload;
            if(!state.favorites.some((article) => article.url === newFavorites.url)) {
            state.favorites.push(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        },
        removeFavorite: (state, action) => {
        const Url = action.payload;
        state.favorites = state.favorites.filter((article) => article.url !== Url);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(searchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addCase(searchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setPage,addFavorite, removeFavorite } = newsSlice.actions;

export default newsSlice.reducer;