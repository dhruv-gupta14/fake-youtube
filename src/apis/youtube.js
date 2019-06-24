import axios from 'axios';

const KEY = 'AIzaSyBgQa-ki5Vp--TNN-nzBgO3yfuMIi_2TEQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});