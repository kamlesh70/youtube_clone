import React from 'react'

import LikeSVG from '../assets/like.svg';
import DislikeSVG from '../assets/dislike.svg'; 

function CommentCard({ data }) {
    const commentData = data?.snippet;
    const topLevelComment = commentData?.topLevelComment?.snippet;
    console.log(data);
    return (
        <div className='my-6 flex'>
            <img className='rounded-full mr-2 h-12' src={topLevelComment?.authorProfileImageUrl}/>
            <div className=''>
                <h3>{topLevelComment?.authorDisplayName}</h3>
                <h3 className='text-sm'>{topLevelComment?.textDisplay}</h3>
                <div className='flex h-5 mt-4 cursor-pointer'>
                    <div className='flex mr-4'>
                        <img className='mr-2' src={LikeSVG} alt="like" />
                        <span>{topLevelComment?.likeCount}</span>
                    </div>
                    <img src={DislikeSVG} alt="dislike" />
                </div>
            </div>
        </div>
    )
}

export default CommentCard;