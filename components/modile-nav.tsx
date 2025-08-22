import React from 'react'

type Props = {}

export default function MobileNav({}: Props) {
  return (
    <div id='mobile-menu' className='hidden md:hidden bg-white shadow-lg'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            href='#'
            className='block py-2 px-3 text-white bg-purple-600 rounded-lg'
          >
            Accueil
          </a>
          <a
            href='#events'
            className='block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            Événements
          </a>
          <a
            href='#categories'
            className='block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            Catégories
          </a>
          <a
            href='#features'
            className='block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            Fonctionnalités
          </a>
          <a
            href='#testimonials'
            className='block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            Témoignages
          </a>
          <a
            href='#faq'
            className='block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            FAQ
          </a>
          <a
            href='#'
            className='block py-2 px-3 bg-purple-600 text-white rounded-lg text-center mt-2'
          >
            Créer un événement
          </a>
        </div>
      </div>
  )
}