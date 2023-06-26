import { useSearchParams } from 'react-router-dom';

import {YOUTUBE_SEARCH_API} from '../constant/apis/youtube';
import { VideoResultCard } from './VideoCard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/store/slices/menuSlice';

function SearchResult() {
    const [videosList, setVideoList] = useState([]);
    const [fetchData, setFetchData] = useState(false);
    const [pageToken, setPageToken] = useState('');
    const [searchQuery] = useSearchParams();
    const searchString = searchQuery.get('search_query');
    const dispatch = useDispatch();
    console.log(searchString);
    useEffect(() => {
        dispatch(toggleMenu(false));
        window.addEventListener('scroll', infiniteScroll);
    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchListData();
        }, 300)
        return () => {clearTimeout(timer)};
    }, [fetchData]);
    const fetchListData = async () => {
        if(pageToken){
            const response = await fetch(YOUTUBE_SEARCH_API.url + `${searchString}&pageToken=${pageToken}`);
            const list = await response.json();
            setVideoList(pre =>  [...pre, ...list?.items]);
            setPageToken(list?.nextPageToken);
        }else{
            const response = await fetch(YOUTUBE_SEARCH_API.url + searchQuery);
            const list = await response.json();
            setVideoList(list?.items);
            setPageToken(list?.nextPageToken);
        }
    }
    const infiniteScroll = () => {
        // End of the document reached?
        if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 400){
            setFetchData(pre => !pre)
        }
    }
  return (
    <div className='col-span-11 m-3'>
        {videosList.map(data => <VideoResultCard data={data} key={data?.id?.videoId} sideVideo={true}/>)} 
    </div>
  )
}

export default SearchResult;