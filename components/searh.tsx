"use client"
import { Search } from "lucide-react";
import React from "react";



export default function Searchs() {
  return (
    <div className='mt-10 flex flex-col sm:flex-row gap-4'>
      <div className='relative flex-grow '>
        <input
          type='text'
          placeholder='Rechercher un événement, lieu ou ville...'
          className='w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm'
        />
        <button className='absolute right-1 top-1  bg-purple-600 text-white rounded-full  p-3 hover:bg-purple-700 transition'>
          <Search />
        </button>
      </div>

      <button className='bg-gray-900 text-white font-bold py-4 px-8 rounded-full whitespace-nowrap hover:shadow-lg transition-all duration-300'>
        Explorer
      </button>
    </div>
  );
}
