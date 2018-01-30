import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = process.env.ROOT_URL;
const API_KEY = process.env.API_KEY;

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}