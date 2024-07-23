// src/types/index.ts

// Basic numerology numbers
export type NumerologyNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22;

// User input data
export interface UserInputData {
  name: string;
  birthDate: string;
}

// Calculated numerology data
export interface NumerologyData {
  lifePathNumber: NumerologyNumber;
  destinyNumber: NumerologyNumber;
  soulUrgeNumber: NumerologyNumber;
  personalityNumber: NumerologyNumber;
  birthDayNumber: NumerologyNumber;
}

// Interpretation for a specific numerology aspect
export interface NumerologyInterpretation {
  personalityTraits: string[];
  lifePredictions: string;
  career: string;
  relationships: string;
}

// Full set of interpretations for all numerology aspects
export interface FullInterpretation {
  lifePath: Record<NumerologyNumber, NumerologyInterpretation>;
  destiny: Record<NumerologyNumber, NumerologyInterpretation>;
  soulUrge: Record<NumerologyNumber, NumerologyInterpretation>;
  personality: Record<NumerologyNumber, NumerologyInterpretation>;
  birthDay: Record<NumerologyNumber, NumerologyInterpretation>;
}

// Compatibility result
export interface CompatibilityResult {
  score: number;
  description: string;
}

// PDF generation options
export interface PDFOptions {
  fileName?: string;
  includeCompatibility?: boolean;
}

// Numerology report including all calculated data and interpretations
export interface NumerologyReport {
  userData: UserInputData;
  numerologyData: NumerologyData;
  interpretations: {
    lifePath: NumerologyInterpretation;
    destiny: NumerologyInterpretation;
    soulUrge: NumerologyInterpretation;
    personality: NumerologyInterpretation;
    birthDay: NumerologyInterpretation;
  };
}

// State for the numerology context
export interface NumerologyContextState {
  userData: UserInputData | null;
  numerologyData: NumerologyData | null;
  report: NumerologyReport | null;
}

// Actions for the numerology context
export type NumerologyContextAction =
  | { type: 'SET_USER_DATA'; payload: UserInputData }
  | { type: 'SET_NUMEROLOGY_DATA'; payload: NumerologyData }
  | { type: 'SET_REPORT'; payload: NumerologyReport }
  | { type: 'RESET' };

// Numerology context type
export interface NumerologyContextType {
  state: NumerologyContextState;
  dispatch: React.Dispatch<NumerologyContextAction>;
  calculateNumbers: (userData: UserInputData) => void;
  generateReport: () => void;
  generatePDF: (options?: PDFOptions) => void;
  calculateCompatibility: (otherUserData: UserInputData) => CompatibilityResult;
}

// Error type for handling calculation or interpretation errors
export interface NumerologyError {
  message: string;
  code: string;
}
