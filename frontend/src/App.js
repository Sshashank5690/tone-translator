import React, { useState } from 'react';
import InputForm from './components/InputForm';
import TranslatedDraft from './components/TranslatedDraft';
import GridPattern from './components/magicui/animated-grid-pattern';
import ShineBorder from "./components/magicui/shine-border";
import { cn } from './lib/utils';  
import './App.css';

function App() {
    const [translatedDraft, setTranslatedDraft] = useState('');

    return (
        <div>
             <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [6, 6],
          [10, 5],
          [13, 3],
        ]}
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />

                <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="mx-auto p-5 rounded-lg shadow-lg"
                >
                <div className="relative z-10 bg-gray-300 rounded-lg p-8">
                    <h1 className={cn("text-5xl font-bold text-center mb-8", "bg-black text-transparent bg-clip-text")}>
                    Tone Translator
                    </h1>
                    <InputForm setTranslatedDraft={setTranslatedDraft} />
                    <TranslatedDraft translatedDraft={translatedDraft} />
                </div>
                </ShineBorder>
          </div>
    );
}

export default App;