import React from "react";
import Image from "next/image";
import { Music, Soup, Store, Utensils } from "lucide-react";

type Props = {};

export default function AppMobile({}: Props) {
  return (
    <div className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 mb-10 md:mb-0 flex justify-center'>
            <div className='relative'>
              <div className='w-64 h-auto z-10 relative'>
                <div className='bg-gray-800 rounded-3xl overflow-hidden shadow-2xl'>
                  <div className='h-12 bg-gray-900 flex items-center px-4'>
                    <div className='w-3 h-3 rounded-full bg-red-500 mr-2'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-500 mr-2'></div>
                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                  </div>
                  <div className='p-4'>
                    <div className='bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-6 text-center text-white'>
                      <i className='fas fa-calendar-star text-4xl mb-4'></i>
                      <h3 className='text-xl font-bold'>LakayEvent</h3>
                      <p className='text-purple-200 mt-2'>
                        Tous vos événements dans votre poche
                      </p>
                    </div>
                    <div className='mt-6 grid grid-cols-4 gap-4'>
                      <div className='bg-gray-100 rounded-xl p-3 flex items-center justify-center'>
                        <Music />
                      </div>
                      <div className='bg-gray-100 rounded-xl p-3 flex items-center justify-center'>
                        <Utensils />
                      </div>
                      <div className='bg-gray-100 rounded-xl p-3 flex items-center justify-center'>
                        <Soup />
                      </div>
                      <div className='bg-gray-100 rounded-xl p-3 flex items-center justify-center'>
                        <Store />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Téléchargez notre application mobile
            </h2>
            <p className='mt-4 text-xl text-gray-600'>
              Accédez à tous les événements, recevez des notifications
              personnalisées et gérez vos réservations où que vous soyez.
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <button className='bg-gray-500 text-white rounded-xl px-6 py-4 flex items-center gap-1'>
                <Image
                  src='/appstore.svg'
                  alt='appstore'
                  width={10}
                  height={10}
                  className='w-8 h-8  rounded flex items-center justify-center object-cover  '
                />
                <div className='text-left'>
                  <div className='text-xs'>Télécharger sur</div>
                  <div className='font-bold'>App Store</div>
                </div>
              </button>
              <button className='bg-gray-900 text-white rounded-xl px-6 py-4 flex  gap-1 items-center'>
                <Image
                  src='/playstore.svg'
                  alt='playstore'
                  width={10}
                  height={10}
                  className='w-8 h-8 rounded flex items-center justify-center object-cover  '
                />
                <div className='text-left'>
                  <div className='text-xs'>Disponible sur</div>
                  <div className='font-bold'>Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
