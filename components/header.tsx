import React from "react";
import MobileNav from "./modile-nav";
import { CircleUserRound, Settings, TicketCheck } from "lucide-react";
import Gsap from "./gsap";



export default function Header() {
  return (
    <nav className='bg-white shadow-sm fixed w-full z-50 transition-all duration-300'>
        <Gsap/>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-20 items-center'>
          <div className='flex items-center'>
            <div className='flex-shrink-0 flex items-center'>
              <i className='fas fa-calendar-star text-purple-600 text-3xl'></i>
              <span className='ml-2 text-2xl font-bold text-gray-900'>
                Lakay<span className='text-purple-600'>Event</span>
              </span>
            </div>
            <div className='hidden md:ml-10 md:flex md:space-x-8'>
              <a
                href='#'
                className='text-gray-900 font-medium py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full'
              >
                Accueil
              </a>
              <a
                href='#events'
                className='text-gray-600 hover:text-gray-900 font-medium py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full'
              >
                Événements
              </a>
              <a
                href='#categories'
                className='text-gray-600 hover:text-gray-900 font-medium py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full'
              >
                Catégories
              </a>
              <a
                href='#features'
                className='text-gray-600 hover:text-gray-900 font-medium py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full'
              >
                Fonctionnalités
              </a>
              <a
                href='#testimonials'
                className='text-gray-600 hover:text-gray-900 font-medium py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full'
              >
                Témoignages
              </a>
              <a
                href='#faq'
                className='text-gray-600 hover:text-gray-900 font-medium py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full'
              >
                FAQ
              </a>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='bg-purple-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300'>
              Créer un événement
            </button>
            <div className='ml-4 relative group'>
              <button className='bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 transition'>
                <CircleUserRound />
              </button>
              <div className='absolute right-0 top-12 w-56 bg-white shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                <a
                  href='#'
                  className='block py-2 px-3 hover:bg-gray-50 rounded-lg'
                >
                     <CircleUserRound /> Mon compte
                </a>
                <a
                  href='#'
                  className='block py-2 px-3 hover:bg-gray-50 rounded-lg'
                >
                  <TicketCheck /> Mes billets
                </a>
                <a
                  href='#'
                  className='block py-2 px-3 hover:bg-gray-50 rounded-lg'
                >
                  <Settings /> Paramètres
                </a>
                <hr className='my-2' />
                <a
                  href='#'
                  className='block py-2 px-3 text-red-500 hover:bg-red-50 rounded-lg'
                >
                  <i className='fas fa-sign-out-alt mr-2'></i> Déconnexion
                </a>
              </div>
            </div>
            <div className='md:hidden ml-4'>
              <button
                type='button'
                id='mobile-menu-button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none'
              >
                <i className='fas fa-bars text-xl'></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileNav />
    </nav>
  );
}
