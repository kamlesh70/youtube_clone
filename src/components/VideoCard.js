import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ data, itemHeight, index, sideVideo = false }) {
    const thumbnail = {
        url: data?.snippet?.thumbnails?.medium?.url,
        height: sideVideo ? 500 : 1280,
        width: sideVideo ? 200 : 720,
    };
    const title = data?.snippet?.title;
    const statistics = data?.statistics;
    const id = data?.id;
    const views =
        (statistics?.viewCount / 1000).toFixed() > 1000
            ? `${((statistics?.viewCount / 1000).toFixed() / 1000).toFixed(1)}M`
            : `${(statistics?.viewCount / 1000).toFixed()}K`;
     
    const left = (index % 3) === 0 ? '170px' : (index % 3) === 1 ? `${300 * 2}px` : `${300*3.3}px`
    return (
        <>
            {!sideVideo ? (
                <Link to={`/watch?v=${id}`} className={`m-2 cursor-pointer w-96 block h-${itemHeight} absolute`}
                    style={{ top: `${(itemHeight * (index))}px`}}
                >
                                {/* height: itemHeight,
            position: 'absolute',
            width: '100%',
            top: `${item.index * itemHeight}px`, */}
                    <img className="rounded-lg mb-1" height={thumbnail.height} width={thumbnail.width} src={thumbnail.url} alt="thumbnail" />
                    <h3 className="text-sm mb-1 font-bold">{title}</h3>
                    <h3 className="text-sm">{data?.snippet?.channelTitle}</h3>
                    <h3 className="text-sm">{views} views</h3>
                </Link>
            ) : (
                <Link to={`/watch?v=${id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="m-2 cursor-pointer w-96 flex block">
                    <img className="rounded-lg mb-1" height={thumbnail.height} width={thumbnail.width} src={thumbnail.url} alt="thumbnail" />
                    <div className="m-1">
                        <h3 className="text-sm mb-1 font-bold">{title?.substring(0, 50)} ...</h3>
                        <h3 className="text-sm">{data?.snippet?.channelTitle}</h3>
                        <h3 className="text-sm">{views} views</h3>
                    </div>
                </Link>
            )}
        </>
    );
}

export const VideoResultCard = ({ data }) => {
    const thumbnail = {
        url: data?.snippet?.thumbnails?.medium?.url,
        height: 1000,
        width: 400,
    };
    const title = data?.snippet?.title;
    const statistics = data?.statistics;
    const id = data?.id?.videoId;
    const views =
        (statistics?.viewCount / 1000).toFixed() > 1000
            ? `${((statistics?.viewCount / 1000).toFixed() / 1000).toFixed(1)}M`
            : `${(statistics?.viewCount / 1000).toFixed()}K`;
    return (
        <Link to={`/watch?v=${id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="m-2 cursor-pointer flex">
        <img className="rounded-lg mb-1" height={thumbnail.height} width={thumbnail.width} src={thumbnail.url} alt="thumbnail" />
        <div className="m-3">
            <h3 className="text-sm mb-1 font-bold">{title}</h3>
            <h3 className="text-sm">{data?.snippet?.channelTitle}</h3>
        </div>
    </Link>
    );
}

export default VideoCard;
