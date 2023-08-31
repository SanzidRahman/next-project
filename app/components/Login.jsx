'use client'
const Login = () => {
  return (
    <div className="h-52 w-6/12 mt-10 bg-stone-500 absolute left-80 rounded-lg ">
        <form className="flex flex-col p-10">
            <label className="text-white" typeof='name'>Name :</label>
            <input className="pl-2 rounded-lg" type='text' placeholder='Enter Your Name' autoFocus required></input>
            <label className="text-white" typeof='email'>Email :</label>
            <input className="pl-2 rounded-lg" type='email' placeholder='Enter Your Email' autoFocus required></input>
        </form>
    </div>
  )
}

export default Login