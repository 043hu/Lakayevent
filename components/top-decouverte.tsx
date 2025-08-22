import { Search } from "lucide-react";
import React from "react";
import Searchs from "./searh";



export default function Decouverte() {
  return (
    <div className='pt-32 pb-20 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 mb-10 md:mb-0 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
              Découvrez des <span className='text-purple-600'>événements</span> exceptionnels
              près de chez vous
            </h1>
            <p className='mt-6 text-xl text-gray-600 max-w-2xl'>
              Trouvez, réservez et participez aux événements les plus
              passionnants. Des concerts aux conférences, nous avons tout ce
              qu'il vous faut.
            </p>

            <Searchs />

            <div className='mt-8 flex items-center space-x-6'>
              <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full border-2 border-white shadow-md -ml-3 bg-amber-400'></div>
                <div className='w-10 h-10 rounded-full border-2 border-white shadow-md -ml-3 bg-emerald-500'></div>
                <div className='w-10 h-10 rounded-full border-2 border-white shadow-md -ml-3 bg-blue-500'></div>
                <div className='w-10 h-10 rounded-full border-2 border-white shadow-md -ml-3 flex items-center justify-center bg-white text-gray-800 font-bold'>
                  2K+
                </div>
              </div>
              <p className='text-gray-600'>
                Participants satisfaits chaque jour
              </p>
            </div>
          </div>
          <div className='md:w-1/2 flex justify-center relative'>
            <div className='relative max-w-md'>
              <div className='bg-white rounded-2xl shadow-xl p-4 w-64 absolute -right-10 -top-10 z-10 transform rotate-3'>
                <div className='bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl w-full h-40 flex items-center justify-center'>
                  <i className='fas fa-music text-white text-4xl'></i>
                </div>
                <div className='mt-4'>
                  <div className='text-purple-600 font-bold'>Concert Jazz</div>
                  <div className='text-gray-600 mt-1'>15 Sept. • Paris</div>
                  <div className='mt-3 flex justify-between items-center'>
                    <span className='text-gray-900 font-bold'>25€</span>
                    <span className='text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full'>
                      Disponible
                    </span>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-2xl shadow-xl p-4 w-64 z-20 relative'>
                <div className='bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-full h-48 flex items-center justify-center'>
                  <i className='fas fa-paint-brush text-white text-4xl'></i>
                </div>
                <div className='mt-4'>
                  <div className='text-purple-600 font-bold'>
                    Festival Street Art
                  </div>
                  <div className='text-gray-600 mt-1'>22-24 Sept. • Lyon</div>
                  <div className='mt-3 flex justify-between items-center'>
                    <span className='text-gray-900 font-bold'>Gratuit</span>
                    <span className='text-xs bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full'>
                      Derniers billets
                    </span>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-2xl shadow-xl p-4 w-64 absolute -left-10 -bottom-10 z-10 transform -rotate-3'>
                <div className='bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-full h-40 flex items-center justify-center'>
                  <i className='fas fa-laptop-code text-white text-4xl'></i>
                </div>
                <div className='mt-4'>
                  <div className='text-purple-600 font-bold'>
                    Conférence Tech
                  </div>
                  <div className='text-gray-600 mt-1'>30 Sept. • Toulouse</div>
                  <div className='mt-3 flex justify-between items-center'>
                    <span className='text-gray-900 font-bold'>45€</span>
                    <span className='text-xs bg-red-100 text-red-800 py-1 px-2 rounded-full'>
                      Complet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
