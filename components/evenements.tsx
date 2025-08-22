import React from "react";



export default function Evenement() {
  return (
    <div className='py-16 bg-white' id='events'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative mb-2 after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1 after:bg-purple-600 after:rounded">
              Événements à venir
            </h2>
            <p className='mt-2 text-gray-600'>
              Ne manquez pas les événements les plus attendus
            </p>
          </div>
          <a
            href='#'
            className='text-purple-600 font-medium hover:text-purple-700 flex items-center'
          >
            Voir tous <i className='fas fa-arrow-right ml-2'></i>
          </a>
        </div>

        <div className='mt-8 flex space-x-4 overflow-x-auto pb-4'>
          <button className='bg-purple-600 text-white py-2 px-5 rounded-full transition-all duration-300 filter-btn active'>
            Tous
          </button>
          <button className='bg-gray-100 text-gray-800 py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-200 filter-btn'>
            Musique
          </button>
          <button className='bg-gray-100 text-gray-800 py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-200 filter-btn'>
            Sport
          </button>
          <button className='bg-gray-100 text-gray-800 py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-200 filter-btn'>
            Art
          </button>
          <button className='bg-gray-100 text-gray-800 py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-200 filter-btn'>
            Gastronomie
          </button>
          <button className='bg-gray-100 text-gray-800 py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-200 filter-btn'>
            Conférence
          </button>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div
            className='bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl event-card'
            data-category='musique'
          >
            <div className='relative'>
              <div className='bg-gradient-to-r from-purple-500 to-indigo-600 w-full h-48 flex items-center justify-center'>
                <i className='fas fa-music text-white text-5xl'></i>
              </div>
              <div className='absolute top-4 right-4 bg-white rounded-full py-1 px-3 text-sm font-bold text-gray-900'>
                25 Sept.
              </div>
            </div>
            <div className='p-6'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Festival International du Jazz
                  </h3>
                  <div className='mt-2 flex items-center text-gray-600'>
                    <i className='fas fa-map-marker-alt'></i>
                    <span className='ml-2'>Paris, Parc de Bercy</span>
                  </div>
                </div>
                <div className='bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-sm font-bold'>
                  Musique
                </div>
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <div>
                  <span className='text-2xl font-bold text-gray-900'>35€</span>
                  <span className='text-gray-500 line-through ml-2'>45€</span>
                  <div className='mt-1 text-sm text-gray-500'>
                    Promotion spéciale
                  </div>
                </div>
                <button className='bg-purple-600 text-white py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300'>
                  Réserver
                </button>
              </div>
            </div>
          </div>

          <div
            className='bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl event-card'
            data-category='conference'
          >
            <div className='relative'>
              <div className='bg-gradient-to-r from-cyan-500 to-blue-600 w-full h-48 flex items-center justify-center'>
                <i className='fas fa-laptop-code text-white text-5xl'></i>
              </div>
              <div className='absolute top-4 right-4 bg-white rounded-full py-1 px-3 text-sm font-bold text-gray-900'>
                30 Sept.
              </div>
            </div>
            <div className='p-6'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Conférence IA & Futur
                  </h3>
                  <div className='mt-2 flex items-center text-gray-600'>
                    <i className='fas fa-map-marker-alt'></i>
                    <span className='ml-2'>Lyon, Centre des Congrès</span>
                  </div>
                </div>
                <div className='bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-sm font-bold'>
                  Éducation
                </div>
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <div>
                  <span className='text-2xl font-bold text-gray-900'>49€</span>
                  <div className='mt-1 text-sm text-gray-500'>
                    Tarif standard
                  </div>
                </div>
                <button className='bg-purple-600 text-white py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300'>
                  Réserver
                </button>
              </div>
            </div>
          </div>

          <div
            className='bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl event-card'
            data-category='sport'
          >
            <div className='relative'>
              <div className='bg-gradient-to-r from-green-500 to-teal-600 w-full h-48 flex items-center justify-center'>
                <i className='fas fa-running text-white text-5xl'></i>
              </div>
              <div className='absolute top-4 right-4 bg-white rounded-full py-1 px-3 text-sm font-bold text-gray-900'>
                5 Oct.
              </div>
            </div>
            <div className='p-6'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Marathon de Bordeaux
                  </h3>
                  <div className='mt-2 flex items-center text-gray-600'>
                    <i className='fas fa-map-marker-alt'></i>
                    <span className='ml-2'>Bordeaux, Centre-ville</span>
                  </div>
                </div>
                <div className='bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-bold'>
                  Sport
                </div>
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <div>
                  <span className='text-2xl font-bold text-gray-900'>
                    Gratuit
                  </span>
                  <div className='mt-1 text-sm text-gray-500'>
                    Participation libre
                  </div>
                </div>
                <button className='bg-purple-600 text-white py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300'>
                  Participer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
