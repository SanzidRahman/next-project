'use client'
const SignIn = () => {
  return (
    <div  className="h-64 w-6/12 mt-10 bg-gray-700 absolute left-80 rounded-lg ">
         <h2 className="text-center text-2xl">Sign In</h2>
         <form className="flex flex-col p-10">
            <label className="text-white" typeof='name'>Name :</label>
            <input className="pl-2 rounded-lg" type='text' placeholder='Enter Your Name' autoFocus required></input>
            <label className="text-white" typeof='email'>Email :</label>
            <input className="pl-2 rounded-lg" type='email' placeholder='Enter Your Email' autoFocus required></input>
        </form>

    </div>
  )
}

export default SignIn