import {Button,TextInput} from 'flowbite-react'
import {useSelector} from 'react-redux'
import { useEffect, useRef, useState } from 'react';
 
export default function DashProfile() {
    const {currentUser}= useSelector((state)=>state.user)
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
       const filePickerRef =useRef()
    const handleImageChange=(e)=>{
        // setImageFile(e.target.files[0])
        const file = e.target.files[0];
        if (file) {
          setImageFile(file);
          setImageFileUrl(URL.createObjectURL(file));
        }
      };
    
    console.log(imageFile , imageFileUrl)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
       <form className='flex flex-col gap-4'>
           <input type="file" accept='image/*' onClick={handleImageChange} ref={filePickerRef} hidden/>
            <div className='w-32 h-32 self-center overflow-hidden cursor-pointer shadow-md rounded-full' onClick={()=> filePickerRef.current.click()}>
               <img src={ imageFileUrl || currentUser.profilePicture} 
               alt="user" 
               className="rounded-full w-full h-full object-cover' border-8 border-[lightgray] "/>
            </div>
            <TextInput type='text'
              id='username'
              placeholder='username'
              defaultValue={currentUser.username} />
            <TextInput type='text'
              id='email'
              placeholder='email'
              defaultValue={currentUser.email} />
            <TextInput type='text'
              id='password'
              placeholder='password' />
           <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update </Button>
       </form>
       <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
