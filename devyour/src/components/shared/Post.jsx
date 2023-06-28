import React, { useState } from "react";
import WriteComment from "./WriteComment";
import Comments from "./Comments";

const Post = ({
    imgProfile,
    username,
    imgPost,
    descriptionPost,
    postDate,
}) => {

    const [likes, setLikes] = useState(0)

    const incrementLikes = (e) => {
        e.preventDefault()
        const increment = likes + 1;
        setLikes(increment)
    }

    return (
        <>
            <div className="mb-4 p-4 rounded-xl bg-white flex flex-col shadow">
                <div className="flex ">
                    <div className="rounded-full">
                        <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={imgProfile} />
                    </div>
                    <div className="flex justify-start items-center grow mb-2 ml-4 mt-1">
                        <div className="text-grey text-md font-semibold flex grow">{username}</div>
                        <div className="text-grey font-thin text-xs">{postDate}</div>
                    </div>
                </div>
                <div className="py-4">
                    <img className="h-full w-full object-cover rounded-lg" src={imgPost} alt="img" />
                </div>
                <div className="text-grey text-md mb-4 mt-2">{descriptionPost}</div>
                <div className="flex w-full text-xs">
                    <div className="py-1">
                        <div className="flex justify-start items-center gap-2">
                            <button onClick={incrementLikes}>
                                <span>
                                    <svg className="fill-pink w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                                    </svg>
                                </span>
                            </button>
                            <span className="text-lg font-bold">{likes}</span>
                        </div>
                    </div>
                </div>
                <WriteComment />
                <div className="text-grey flex">
                    <Comments />
                </div>
            </div>
        </>
    );
}

export default Post
