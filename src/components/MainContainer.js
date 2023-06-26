import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { YOUTUBE_LIST_API } from "../constant/apis/youtube";
import { toggleMenu } from "../utils/store/slices/menuSlice";

const itemHeight = 320;
const windowHeight = 600;

function MainContainer() {
    const [videosList, setVideoList] = useState([]);
    const [fetchData, setFetchData] = useState(false);
    const [pageToken, setPageToken] = useState("");
    const [scrollTop, setScrollTop] = useState(0);
    const innerHeight = videosList.length * itemHeight;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleMenu(false));
        // window.addEventListener("scroll", infiniteScroll);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchListData();
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [fetchData]);
    const fetchListData = async () => {
        if (pageToken) {
            const response = await fetch(YOUTUBE_LIST_API.url + `&pageToken=${pageToken}`);
            const list = await response.json();
            setVideoList((pre) => [...pre, ...list?.items]);
            setPageToken(list?.nextPageToken);
        } else {
            const response = await fetch(YOUTUBE_LIST_API.url);
            const list = await response.json();
            setVideoList(list?.items);
            setPageToken(list?.nextPageToken);
        }
    };
    function onScroll(event) {
        console.log(window.innerHeight, event.currentTarget.scrollTop, document.documentElement.offsetHeight)
        if (event.currentTarget.innerHeight + event.currentTarget.scrollTop > document.documentElement.offsetHeight - 200) {
            setFetchData((pre) => !pre);
        }
    }
    return (
        <div className="col-span-11 m-3">
            <ButtonList />
            <div className={`overflow-y-scroll h-[${windowHeight}px]`} onScroll={onScroll}>
                <div className="relative" style={{ height: windowHeight }}>
                    {videosList.length !== 0 &&
                        videosList.map((video, index) => {
                            return (
                                <div>
                                    <VideoCard itemHeight={itemHeight} index={index} key={video.id} data={video} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
