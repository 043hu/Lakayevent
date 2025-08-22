import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";


export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          <div>
            <div className='flex items-center'>
              <i className='fas fa-calendar-star text-purple-600 text-3xl'></i>
              <span className='ml-2 text-2xl font-bold text-white'>
                Lakay<span className='text-purple-600'>Event</span>
              </span>
            </div>
            <p className='mt-4 text-gray-300'>
              La plateforme événementielle qui connecte les passionnés aux
              meilleurs événements près de chez eux.
            </p>
            <div className='mt-6 flex space-x-4'>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition'
              >
                <Facebook />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-400 transition'
              >
                <Twitter />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-500 transition'
              >
                <Instagram />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-700 transition'
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>Liens rapides</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i> À propos
                  de nous
                </a>
              </li>
              <li>
                <a
                  href='#events'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i>{" "}
                  Événements à venir
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i> Devenir
                  organisateur
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i> Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i> Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>Catégories</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i> Musique
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i> Art &
                  Culture
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i>
                  Gastronomie
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i> Sport
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition flex items-center'
                >
                  <i className='fas fa-chevron-right text-xs mr-2'></i>
                  Conférences
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>Newsletter</h3>
            <p className='text-gray-300'>
              Inscrivez-vous pour recevoir les derniers événements et offres
              spéciales.
            </p>
            <div className='mt-4'>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Votre email'
                  className='w-full px-6 py-3 rounded-l-full border-2 border-gray-200 border-r-0 focus:outline-none focus:border-purple-600 transition-colors duration-300'
                  id='newsletter-email'
                />
                <button
                  className='bg-purple-600 text-white font-medium py-3 px-6 rounded-r-full transition-all duration-300 hover:opacity-90 flex items-center'
                  id='newsletter-btn'
                >
                  <i className='fas fa-paper-plane'></i>
                  <div
                    className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2 hidden'
                    id='newsletter-loader'
                  ></div>
                </button>
              </div>
              <p className='mt-3 text-xs text-gray-400'>
                En vous inscrivant, vous acceptez notre
                <a href='#' className='text-purple-300 hover:underline'>
                  Politique de confidentialité
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>
            &copy; 2025 LakayEvent. Tous droits réservés. |
            <a href='#' className='hover:text-white transition'>
              Conditions d'utilisation
            </a>
            |
            <a href='#' className='hover:text-white transition'>
              Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
