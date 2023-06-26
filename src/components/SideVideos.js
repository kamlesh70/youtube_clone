import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ButtonList from './ButtonList';
import VideoCard from './VideoCard';
import {YOUTUBE_LIST_API} from '../constant/apis/youtube';
import {toggleMenu} from '../utils/store/slices/menuSlice'

function SideVideo() {
    const [videosList, setVideoList] = useState([]);
    const [fetchData, setFetchData] = useState(false);
    const [pageToken, setPageToken] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchListData();
        }, 300)
        return () => {clearTimeout(timer)};
    }, [fetchData]);
    useEffect(() => {
        dispatch(toggleMenu(false));
        window.addEventListener('scroll', infiniteScroll);
    }, [])
    const fetchListData = async () => {
        if(pageToken){
            const response = await fetch(YOUTUBE_LIST_API.url + `&pageToken=${pageToken}`);
            const list = await response.json();
            setVideoList(pre =>  [...pre, ...list?.items]);
            setPageToken(list?.nextPageToken);
        }else{
            const response = await fetch(YOUTUBE_LIST_API.url);
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
        <div className='col-span-2 m-3'>
            <div className='flex flex-wrap'>
                {videosList.length !== 0 && videosList.map(video => {
                    return <VideoCard key={video.id} data={video} sideVideo={true} />
                })}
            </div>
        </div>
    )
}

export default SideVideo;