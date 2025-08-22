import { ChartLine, Megaphone, Smartphone, Ticket } from "lucide-react";
import React from "react";

type Props = {};

export default function Fonctionnality({}: Props) {
  return (
    <div className='py-16 bg-white' id='features'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className="text-3xl font-bold text-gray-900 inline-block relative mb-8 after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1 after:bg-purple-600 after:rounded">
            Pourquoi choisir LakayEvent
          </h2>
          <p className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto'>
            Une plateforme complète pour tous vos besoins événementiels
          </p>
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg'>
            <div className='w-16 h-16 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-2xl mb-5'>
              <Ticket />
            </div>
            <h3 className='text-xl font-bold text-gray-900'>
              Billetterie intégrée
            </h3>
            <p className='mt-3 text-gray-600'>
              Système de billetterie sécurisé avec paiement en ligne et gestion
              des réservations.
            </p>
          </div>

          <div className='bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg'>
            <div className='w-16 h-16 flex items-center justify-center rounded-xl bg-red-100 text-red-500 text-2xl mb-5'>
              <Megaphone />
            </div>
            <h3 className='text-xl font-bold text-gray-900'>
              Promotion efficace
            </h3>
            <p className='mt-3 text-gray-600'>
              Outils de marketing pour toucher votre public cible et maximiser
              la participation.
            </p>
          </div>

          <div className='bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg'>
            <div className='w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100 text-blue-500 text-2xl mb-5'>
              <ChartLine />
            </div>
            <h3 className='text-xl font-bold text-gray-900'>
              Analyses avancées
            </h3>
            <p className='mt-3 text-gray-600'>
              Tableaux de bord intuitifs pour suivre les performances de vos
              événements.
            </p>
          </div>

          <div className='bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg'>
            <div className='w-16 h-16 flex items-center justify-center rounded-xl bg-green-100 text-green-500 text-2xl mb-5'>
              <Smartphone />
            </div>
            <h3 className='text-xl font-bold text-gray-900'>
              Application mobile
            </h3>
            <p className='mt-3 text-gray-600'>
              Accès à tous les événements depuis votre smartphone, disponible
              sur iOS et Android.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
