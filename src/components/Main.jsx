import React from 'react'
import {FaRegCalendarMinus} from 'react-icons/fa'
const Main = () => {
  return (
    <div className='pt-[0px] px-[25px] bg-[#e8e9fc]'>
    <div className='flex items-center justify-between p-5'>
        <h1 className='text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
        <button className='bg-[#4e73df] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
    </div>
    <div className='grid lg:grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>


      <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
        <div>
          <h2 className='text-[#4e73df] text-[11px] leading-[17px] font-bold'>EARNING (MONTHLY)</h2>
          <h1 className='text-[20px] leading-[24px] font-bold text-[5a5c69] mt-[5px]'>$55000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
      </div>

      <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1da73f] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
        <div>
          <h2 className='text-[#1da73f] text-[11px] leading-[17px] font-bold'>PENDING (MONTHLY)</h2>
          <h1 className='text-[20px] leading-[24px] font-bold text-[5a5c69] mt-[5px]'>$55000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
      </div>

      <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#9f26cf] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
        <div>
          <h2 className='text-[#9f26cf] text-[11px] leading-[17px] font-bold'>CLEARANCE (MONTHLY)</h2>
          <h1 className='text-[20px] leading-[24px] font-bold text-[5a5c69] mt-[5px]'>$55000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
      </div>

      <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#ce2650] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
        <div>
          <h2 className='text-[#ce2650] text-[11px] leading-[17px] font-bold'>DUES (MONTHLY)</h2>
          <h1 className='text-[20px] leading-[24px] font-bold text-[5a5c69] mt-[5px]'>$55000</h1>
        </div>
        <FaRegCalendarMinus fontSize={28} color=''/>
      </div>

    </div>
    </div>
  )
}

export default Main
