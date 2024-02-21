import {Link} from 'react-router-dom'
 import {useSelector} from 'react-redux'
export default function CommentSection({postId}) {
  
   const {currentUser} =useSelector(state=>state.user)

    return (
    <div className='max-w-2xl mx-auto w-full p-3 '>
          {currentUser ?
           (
            <div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
                <p>Signed in as:</p>
                <img className='h-5 w-5 object-cover rounded-full' src={currentUser.profilePicture} alt="User" />
                <Link to={'/dashboard?tab=profile'} className='text-xs text-cyan-600 hover:underline'>@{currentUser.username}</Link>
            </div>
          ):(
            <div className=""> 
             you must be signed in to comment
            <Link to={'/sign-in'}> Sign In</Link> 
            </div>
          )}
    </div>
  )
}
