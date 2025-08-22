import React from "react";

type Props = {};

export default function CTA({}: Props) {
  return (
    <div className='py-20 bg-purple-600 relative overflow-hidden'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-white'>
          Organisez votre propre événement
        </h2>
        <p className='mt-4 text-xl text-purple-100 max-w-2xl mx-auto'>
          Que vous organisiez une conférence, un concert ou une exposition, nous
          avons les outils pour vous aider à réussir.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-lg'>
            Commencer maintenant
          </button>
          
        </div>
      </div>
    </div>
  );
}
