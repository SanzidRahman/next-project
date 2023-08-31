import Link from "next/link";
import getPosts from "../components/getPosts";

const PostsPage =async () => {
  const data = await getPosts()
  const posts =data.posts;
  return (
    <div>
      <h1 className="bg-green-300 text-center text-2xl text-violet-900">This is Posts Page</h1>
      <div>
        {
          posts.map((post)=>{
            return(
              <ul key={post.id}>
                <li className="p-2 grid grid-cols[1fr_1fr_1fr]">
                  <Link className="p-2 shadow-lg bg-slate-300 border border-blue-400 m-1 columns-3" href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}

export default PostsPage