import React, { useState } from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'
import profile from '../img/icon.png';
const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const showDropDown = () => {
        setOpen(!open);
    }
    return (
        <div className='lg:flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
            <div className='flex items-center rounded-[5px]'>
                <input type='text' className='bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...' />
                <div className='bg-[#4e73df] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                    <FaSearch color='white' />
                </div>
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                    <FaRegBell />
                    <FaEnvelope />
                </div>
                <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
                    <p>Naeem khan</p>
                    <div className='h-[30px] w-[30px] cursor-pointer'>
                        <img src={profile} alt='profile image' />
                    </div>
                    {
                        open &&
                        <div className='bg-white border-h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px] rounded'>
                            <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                            <p className='cursor-pointer hover:text-[blue] font-semibold'>Settings</p>
                            <p className='cursor-pointer hover:text-[blue] font-semibold'>Logout</p>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Dashboard
