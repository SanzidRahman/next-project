import getUsers from "@/app/components/getUsers";

const UserDetails =async ({params}) => {
    const data =await getUsers()
    const users =data.results;
    const currentId=params.userid 
    
  return (
    <div>
        <h2>ggg</h2>
    </div>
  )
}

export default UserDetails