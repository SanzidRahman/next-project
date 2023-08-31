
export default async function getUsers() {
    const res =await fetch('https://randomuser.me/api/?results=10')

    if (!res.ok) {
    
        throw new Error('Failed to fetch data')
      }
      return res.json()
  
}
