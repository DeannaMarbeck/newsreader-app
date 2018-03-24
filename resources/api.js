import axios from 'axios';
import {setNews, newsLoading} from "./actions";

export const getNews = () => dispatch => {

	// Dispatch newsLoading action to show spinner while news is loading
	dispatch(newsLoading()),

	// Fetch news articles from the API
    axios.get("https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=d0fe7cee7fc544cf8c1366783db75fe9")
    .then(response => {
        const news = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setNews(news));
    });
};