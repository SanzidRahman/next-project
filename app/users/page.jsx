import Image from "next/image";
import Link from "next/link";
import getUsers from "../components/getUsers";

const UsersPage =async () => {
  const data = await getUsers()
  const users = data.results;

  return (
    <div >
    <h1 className="text-center text-3xl bg-pink-800">This is Users Page</h1>
       <div className="flex justify-around flex-wrap m-2 transition-al">
       {
         users.map((user)=> {
          return(
              <ul key={user.login.uuid}>
                <li>
                  <Link href={`/users/${user.email}`}>
                  <div className="m-2 flex-col p-3 bg-blue-600 rounded-lg flex h-40 w-60  hover:-translate-y-2 hover:bg-red-600 transition-all ease-in-out">
            <div className="rounded-sm">
            <Image className="rounded-full "
               src={user.picture.large}
               width={100}
               height={100}
               alt="Picture of the author"
               />
            </div>
                 <h3>Gender :{user.gender}</h3>
                 <h3>{user.name.title}{user.name.first}    {user.name.last}</h3>
          </div>
                  </Link>
                </li>
              </ul>
          )
         })
       }
       </div>
    </div>
  )
}

export default UsersPage