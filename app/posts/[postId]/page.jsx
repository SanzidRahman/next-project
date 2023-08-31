import getPosts from "@/app/components/getPosts";

const PostsDetailsPage =async ({params}) => {
    const data = await getPosts()
    const posts =data.posts;
    const currentId =params.postId;
    const postsData= posts[currentId-1]
  
  
  return (
    <div className="h-[400px] w-[400px] bg-gray-400 translate-x-[500px] p-6">
        <h1>This Is Post Details Page</h1>
        <h2>Post ID :{postsData.id}</h2>
        <h3>Post Details :{postsData.body}</h3>
    </div>
  )
}

export default PostsDetailsPage