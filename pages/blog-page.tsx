import Layout from "../components/layout";
import {BackButton} from "../components/moleclues/Button/backButton";
import {getAllPostData} from "../lib/posts";
import {GetStaticProps} from "next";
import {PostList} from "../components/organisms/Post/postList";

export default function BlogPage({filteredPosts}: any) {
    return (
        <Layout title='Blog page'>
            <PostList filteredPosts={filteredPosts}/>
            <BackButton/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const filteredPosts = await getAllPostData()
    return {
        props: {
            filteredPosts
        }
    }
}
