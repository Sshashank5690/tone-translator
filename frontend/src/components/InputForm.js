import React, { useState } from 'react';
import axios from 'axios';
import ShimmerButton from "./magicui/shimmer-button";

function InputForm({ setTranslatedDraft }) {
    const [sampleContent, setSampleContent] = useState('');
    const [newDraft, setNewDraft] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/translate-tone', {
                sample_content: sampleContent,
                new_draft: newDraft,
            });
            setTranslatedDraft(response.data.translated_draft);
        } catch (error) {
            console.error("There was an error with the request", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-200 rounded-lg">
                <div className="mb-4">
                    <label htmlFor="sampleContent" className="block text-black text-lg font-bold mb-2">Sample Content for Inspiration</label>
                    <textarea id="sampleContent" value={sampleContent} onChange={(e) => setSampleContent(e.target.value)} className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500" rows="4" placeholder="Enter sample content" style={{ color: 'black' }}></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="newDraft" className="block text-black text-lg font-semibold mb-2">New Draft to change the tone</label>
                    <textarea id="newDraft" value={newDraft} onChange={(e) => setNewDraft(e.target.value)} className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500" rows="4" placeholder="Enter new draft" style={{ color: 'black' }}></textarea>
                </div>
            <div className="z-10 flex min-h-[1rem] items-center justify-center">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Translate 
                </span>
            </ShimmerButton>
            </div>
        </form>

    );
}

export default InputForm;
