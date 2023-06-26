import { YOUTUBE_API_KEY } from "../constant";

export const YOUTUBE_LIST_API = {
    method: 'GET',
    url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${YOUTUBE_API_KEY}&maxResults=9`
    
}

export const YOUTUBE_VIDEO_BY_ID = {
    method: 'GET',
    url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}`
}

export const YOUTUBE_COMMENTS_BY_ID = {
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDslvUJZWrV0LugcYx0HrfPHUZYBOHxGgY&textFormat=plainText&part=snippet&maxResults=50`
}

export const YOUTUBE_AUTO_SUGGEST_SEARCH_API = {
    method: 'GET',
    url: 'https://suggestqueries.google.com/complete/search?ds=yt&client=firefox&q='
}

export const YOUTUBE_SEARCH_API = {
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${YOUTUBE_API_KEY}&q=`
}
// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
// pageToken
