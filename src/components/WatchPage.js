import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import useFetch from "../customHooks/useFetch";
import { YOUTUBE_VIDEO_BY_ID, YOUTUBE_COMMENTS_BY_ID} from "../constant/apis/youtube";
import { toggleMenu } from "../utils/store/slices/menuSlice";
import CommentCard from "./CommentCard";
import SideVideos from "./SideVideos";

function WatchPage() {
    const [showMore, setShowMore] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleMenu(true));
    }, []);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");
    const [ isLoading, isError, jsonData ] = useFetch(YOUTUBE_VIDEO_BY_ID, `&id=${id}`);
    const [ isCommentsLoading, isCommentsError, jsonCommentsData ] = useFetch(YOUTUBE_COMMENTS_BY_ID, `&videoId=${id}`);
    const data = jsonData?.items || [];
    const commentsData = jsonCommentsData?.items || [];
    const videoData = data.length ? data[0] : [];
    return (
        <div className="col-span-11">
            <div className="grid grid-flow-col">
                {data.length ? (
                    <div className="col-span-2">
                        <iframe
                            width="974"
                            height="548"
                            src={`https://www.youtube.com/embed/${id}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <div className="w-full">
                            <h3 className="font-bold text-xl my-1">{videoData?.snippet?.title}</h3>
                            <div>
                                <h3 className="font-bold text-lg my-1">{videoData?.snippet?.channelTitle}</h3>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-4">
                                <h3>8M Views</h3>
                                <h3>{videoData?.snippet?.title}</h3>
                                <h3 className="mt-2 whitespace-pre-line">
                                    {!showMore ? `${videoData?.snippet?.description?.substring(0, 90)}` : videoData?.snippet?.description}
                                    <button className="hover:text-cyan-500" onClick={() => setShowMore((pre) => !pre)}>
                                        {showMore ? "...Show less" : "...Show more"}
                                    </button>
                                </h3>
                            </div>
                            <h3 className="my-2">{videoData?.statistics?.commentCount} Comments</h3>
                        </div>
                        {commentsData.map(comment =>  <CommentCard key={comment.id} data={comment}/>)}
                    </div>
                ) : (
                    <div className="col-span-2"></div>
                )}
                <SideVideos />
            </div>
        </div>
    );
}

export default WatchPage;
