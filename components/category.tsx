import React from "react";
import Image from "next/image";


export default function Category() {
  return (
    <div className='py-16 bg-gray-50' id='categories'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className="text-3xl font-bold text-gray-900 inline-block relative mb-8 after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1 after:bg-purple-600 after:rounded">
            Explorez par catégories
          </h2>
          <p className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto'>
            Découvrez des événements qui correspondent à vos centres d'intérêt
          </p>
        </div>

        <div className='mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          <div className='flex flex-col items-center p-6 bg-white rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <Image
              src='/music.jpg'
              alt='music'
              width={160}
              height={160}
              className='w-full rounded flex items-center justify-center object-cover '
            />

            <div className='mt-4 font-medium text-gray-800'>Musique</div>
          </div>

          <div className='flex flex-col items-center p-6 bg-white rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
             <Image
              src='/cuisine.jpg'
              alt='music'
              width={160}
              height={160}
              className='w-full rounded flex items-center justify-center object-cover '
            />
            <div className='mt-4 font-medium text-gray-800'>Gastronomie</div>
          </div>

          <div className='flex flex-col items-center p-6 bg-white rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <Image
              src='/social.jpeg'
              alt='social'
              width={160}
              height={160}
              className='w-full rounded flex items-center justify-center object-cover '
            />
            <div className='mt-4 font-medium text-gray-800'>Art & Culture</div>
          </div>
          <div className='flex flex-col items-center p-6 bg-white rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
               <Image
              src='/sport.jpg'
              alt='sport'
              width={160}
              height={160}
              className='w-full rounded flex items-center justify-center object-cover '
            />
            <div className='mt-4 font-medium text-gray-800'>Sport</div>
          </div>
          <div className='flex flex-col items-center p-6 bg-white rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
              <Image
              src='/education.jpg'
              alt='education'
              width={160}
              height={160}
              className='w-full rounded flex items-center justify-center object-cover '
            />
            <div className='mt-4 font-medium text-gray-800'>Éducation</div>
          </div>

          <div className='flex flex-col items-center p-6 bg-white rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
             <Image
              src='/business.jpg'
              alt='business'
              width={160}
              height={160}
              className='w-full rounded flex items-center justify-center object-cover '
            />
            <div className='mt-4 font-medium text-gray-800'>Business</div>
          </div>
        </div>
      </div>
    </div>
  );
}
