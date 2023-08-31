import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center h-12 w-full bg-stone-800 text-white'>
        <div>
            <Link href={'/'}>Sanzid Rahman</Link>
        </div>
        <div>
            <ul>
                <li className='flex'>
                    <Link className='mr-4' href={'/'}>Home</Link>
                    <Link className='mr-4' href={'/about'}>About</Link>
                    <Link className='mr-4' href={'/posts'}>Posts</Link>
                    <Link className='mr-4' href={'/users'}>Users</Link>
                    
                </li>
            </ul>
        </div>
        <div>
            <Button />
        </div>
    </div>
  )
}

export default Navbar