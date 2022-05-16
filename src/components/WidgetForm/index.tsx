import { useState } from 'react'
import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/bug.png'
import ideaImageUrl from '../../assets/idea.png'
import thoughtImageUrl from '../../assets/thought.png'

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um Inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma Lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de Pensamento'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-#1f3255 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

           {!feedbackType ?  (
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
           ) : (
               <FeedbackContentStep feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
               />
           )}

            <footer className="text-xs text-neutral-400">
             Feito com ♥ Por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/joaovitorlf/">Joaovitorlf</a>
            </footer>
        </div>
    );
}