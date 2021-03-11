import {FC} from "react";

export const Post: FC<{post: any}> = ({post}) => {
    return(
        <div className='text-white'>
            <span>{post.id}</span>
            {" : "}
            <span className='cursor-pointer border-b border-gray-500 hover:border-gray-600'>
                {post.title}
            </span>
        </div>
    )
}
