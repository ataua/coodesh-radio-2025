"use client";

import { createContext, useState } from 'react';

interface IRadioContext {
    radio: string;
    setRadio: React.Dispatch<React.SetStateAction<string>>;
}

export const RadioContext = createContext<IRadioContext>({
    radio: '',
    setRadio: () => { },
})

export const RadioProvider = ({ children }: { children: React.ReactNode }) => {
    const [radio, setRadio] = useState('Selecione uma rádio na lista');

    return (
        <RadioContext.Provider value={{ radio, setRadio }}>
            {children}
        </RadioContext.Provider>
    )
}
