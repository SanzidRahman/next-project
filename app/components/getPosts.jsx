
export default async function getPosts() {
    const res = await fetch('https://dummyjson.com/posts');
    
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }

    return await res.json()
    
}
