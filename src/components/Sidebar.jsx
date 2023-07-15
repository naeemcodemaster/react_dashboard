import React from 'react'
import {FaChevronRight, FaRegCalendarAlt, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='bg-[#4e73df] h-screen px-[15px] sm:hidden lg:block'>
      <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]'>
        <h1 className='text-white text-[20px] leading-[24px] font-bold cursor-pointer'>Admin Panel</h1>
      </div>
      <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]'>
        <FaTachometerAlt color='white'/>
        <p className='text-[14px] leading-[20px] font-bold text-white'><Link to="/">Dashboard</Link></p>
      </div>
      <div className='pt-[15px] border-b-[1px] border-[#ededed]/[0.3]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[15px]'>
                <FaRegSun color='white'/>
                <p className='text-[14px] leading-[20px] font-bold text-white'>Components</p>
            </div>
            <FaChevronRight color='white'/>
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[15px]'>
            <FaWrench color='white'/>
                <p className='text-[14px] leading-[20px] font-bold text-white'>Utilities</p>
            </div>
            <FaChevronRight color='white'/>
        </div>

      </div>
        {/* end */}

        <div className='pt-[15px] border-b-[1px] border-[#ededed]/[0.3]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>Pages</p>


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[15px]'>
                <FaStickyNote color='white'/>
                <p className='text-[14px] leading-[20px] font-bold text-white'><a href='https://www.google.com'>Notes</a></p>
            </div>
           
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[15px]'>
            <FaRegChartBar color='white'/>
                <p className='text-[14px] leading-[20px] font-bold text-white'><Link to="/forms">Form</Link></p>
            </div>
           
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[15px]'>
            <FaRegCalendarAlt color='white'/>
                <p className='text-[14px] leading-[20px] font-bold text-white'><Link to="/table">Tables</Link></p>
            </div>
           
        </div>

      </div>



    </div>
  )
}

export default Sidebar
