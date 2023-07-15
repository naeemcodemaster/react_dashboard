import React from 'react'

function Forms() {
  return (
    <div>
     <form action="" class="w-full md:w-1/2 mt-20 mx-auto border-gray-400 p-6 bg-[#4e73df] rounded">
<h2 class="text-2xl pb-3 font-semibold text-white">Contact with Us</h2>
<div>
    <div class="flex flex-col mb-3">
        <label for="" className='text-white'>Enter Name</label>
        <input type="text" id="username" class="px-3 py-2 focus:border-gray-800 focus:outline-none focus:bg-gray-100 focus:text-purple-700 rounded" autocomplete="off"/>
    </div>

    <div class="flex flex-col mb-3">
        <label for="" className='text-white'>Enter Phone</label>
        <input type="text" id="phone" class="px-3 py-2 focus:border-purple-600 focus:outline-none focus:bg-gray-100 focus:text-purple-700 rounded" autocomplete="off"/>
    </div>

    <div class="flex flex-col mb-3">
        <label for="" className='text-white'>Enter Email</label>
        <input type="text" id="Email" class="px-3 py-2 focus:border-purple-600 focus:outline-none focus:bg-gray-100 focus:text-purple-700 rounded" autocomplete="off"/>
    </div>

    <div class="flex flex-col mb-3">
        <label for="" className='text-white'>Enter Message</label>
        <textarea rows="4" id="message" class="px-3 py-2 focus:border-purple-600 focus:outline-none focus:bg-gray-100 focus:text-purple-700 rounded"></textarea>
    </div>
</div>
</form>
    </div>
  )
}

export default Forms
