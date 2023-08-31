'use client'

import { useRouter } from "next/navigation"

const Button = () => {
    const router =useRouter()
  return (
    <div className="flex">
        <button className="shadow-slate-700 h-10 w-24 mr-4 bg-blue-500 p-2 rounded-md hover:bg-orange-400 shadow-sm " type="button" onClick={()=> router.push('/login') }>Log in</button>
        <button className="shadow-slate-700 h-10 w-32 mr-4 bg-blue-500 p-2 rounded-md hover:bg-orange-400 shadow-sm " type="button" onClick={()=> router.push('/signin') }>Sign in</button>
        
    </div>
  )
}

export default Button