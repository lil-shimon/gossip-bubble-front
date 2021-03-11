import fetch from 'node-fetch'

export async function getAllPostData() {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post`)
    )
    const posts = await res.json()
    return posts.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}
