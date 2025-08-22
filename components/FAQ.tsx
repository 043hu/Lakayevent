import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";



export default function FAQ() {
  return (
    <div className='py-16 bg-white' id='faq'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className="text-3xl font-bold text-gray-900 inline-block relative mb-8 after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1 after:bg-purple-600 after:rounded">
            Questions fréquentes
          </h2>
          <p className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto'>
            Trouvez des réponses aux questions les plus courantes sur LakayEvent
          </p>
        </div>

        <div className='mt-12 space-y-4'>
          <Accordion
            type='single'
            collapsible
            className='w-full  flex flex-col gap-2 '
            defaultValue='item-1'
          >
            <AccordionItem
              value={"item-1"}
              className='border-b border-gray-200 mb-3 py-2'
            >
              <AccordionTrigger>
                Comment puis-je créer un événement sur LakayEvent?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance '>
                <p className='pb-4 text-gray-600'>
                  Pour créer un événement, il vous suffit de cliquer sur le
                  bouton "Créer un événement" en haut à droite de la page, de
                  remplir les informations requises sur votre événement, de
                  configurer vos billets et de publier votre événement. Notre
                  équipe pourra vous accompagner si nécessaire.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value={"item-2"}
              className='border-b border-gray-200 mb-3 py-2'
            >
              <AccordionTrigger>
                Quels sont les frais pour utiliser LakayEvent?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance '>
                <p className='pb-4 text-gray-600'>
                  L'inscription et la découverte d'événements sont gratuites.
                  Pour les organisateurs, nous appliquons des frais de service
                  de 5% sur chaque billet vendu, avec un minimum de 0,99€ par
                  billet. Les frais de traitement de paiement s'ajoutent à ces
                  frais.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value={"item-3"}
              className='border-b border-gray-200 mb-3 py-2'
            >
              <AccordionTrigger>
                Comment puis-je obtenir un remboursement?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance '>
                <p className='pb-4 text-gray-600'>
                  Les remboursements sont gérés directement par les
                  organisateurs des événements. Vous devez contacter
                  l'organisateur via la page de l'événement pour faire une
                  demande de remboursement. LakyEvent intervient comme médiateur
                  en cas de désaccord.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value={"item-4"}
              className='border-b border-gray-200 mb-3 py-2'
            >
              <AccordionTrigger>
                EventHub propose-t-il un support technique?
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance '>
                <p className='pb-4 text-gray-600'>
                  Oui, notre équipe de support est disponible 7j/7 de 9h à 18h
                  par email à support@eventhub.fr et par téléphone au 01 23 45
                  67 89. Nous répondons à toutes vos questions sous 24 heures.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
