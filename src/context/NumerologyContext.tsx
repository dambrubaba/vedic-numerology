// src/context/NumerologyContext.tsx

import React, { createContext, useState, useContext } from 'react';
import {
  calculateLifePathNumber,
  calculateDestinyNumber,
  calculateSoulUrgeNumber,
  calculatePersonalityNumber,
  getNumberMeaning,
} from '../utils/Calculations';

interface NumerologyData {
  lifePathNumber: number | null;
  destinyNumber: number | null;
  soulUrgeNumber: number | null;
  personalityNumber: number | null;
}

interface NumerologyContextType {
  name: string;
  birthDate: string;
  numerologyData: NumerologyData;
  setUserInfo: (name: string, birthDate: string) => void;
  calculateNumbers: () => void;
  getInterpretation: (key: keyof NumerologyData) => string;
}

const NumerologyContext = createContext<NumerologyContextType | undefined>(undefined);

export const NumerologyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [numerologyData, setNumerologyData] = useState<NumerologyData>({
    lifePathNumber: null,
    destinyNumber: null,
    soulUrgeNumber: null,
    personalityNumber: null,
  });

  const setUserInfo = (newName: string, newBirthDate: string) => {
    setName(newName);
    setBirthDate(newBirthDate);
  };

  const calculateNumbers = () => {
    setNumerologyData({
      lifePathNumber: calculateLifePathNumber(birthDate),
      destinyNumber: calculateDestinyNumber(name),
      soulUrgeNumber: calculateSoulUrgeNumber(name),
      personalityNumber: calculatePersonalityNumber(name),
    });
  };

  const getInterpretation = (key: keyof NumerologyData): string => {
    const number = numerologyData[key];
    return number !== null ? getNumberMeaning(number) : '';
  };

  return (
    <NumerologyContext.Provider
      value={{
        name,
        birthDate,
        numerologyData,
        setUserInfo,
        calculateNumbers,
        getInterpretation,
      }}
    >
      {children}
    </NumerologyContext.Provider>
  );
};

export const useNumerology = () => {
  const context = useContext(NumerologyContext);
  if (context === undefined) {
    throw new Error('useNumerology must be used within a NumerologyProvider');
  }
  return context;
};