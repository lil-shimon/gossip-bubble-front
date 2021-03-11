import {FC} from "react";
import {Post} from "../../moleclues/Post/post";

export const PostList: FC<{ filteredPosts: any }> = ({filteredPosts}) => {
    return (
        <ul>
            {filteredPosts &&
            filteredPosts.map((post: any) => <Post key={post.id} post={post}/>)
            }
        </ul>
    )
}
