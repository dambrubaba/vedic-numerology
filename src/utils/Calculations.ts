// src/utils/calculations.ts

export const calculateLifePathNumber = (birthDate: string): number => {
    const dateSum = birthDate.split('-').reduce((sum, part) => sum + parseInt(part, 10), 0);
    return reduceToSingleDigit(dateSum);
  };
  
  export const calculateDestinyNumber = (name: string): number => {
    const nameSum = name.toLowerCase().split('').reduce((sum, char) => {
      const charCode = char.charCodeAt(0) - 96;
      return sum + (charCode > 0 && charCode < 27 ? charCode : 0);
    }, 0);
    return reduceToSingleDigit(nameSum);
  };
  
  export const calculateSoulUrgeNumber = (name: string): number => {
    const vowels = 'aeiou';
    const vowelSum = name.toLowerCase().split('').reduce((sum, char) => {
      if (vowels.includes(char)) {
        const charCode = char.charCodeAt(0) - 96;
        return sum + charCode;
      }
      return sum;
    }, 0);
    return reduceToSingleDigit(vowelSum);
  };
  
  export const calculatePersonalityNumber = (name: string): number => {
    const vowels = 'aeiou';
    const consonantSum = name.toLowerCase().split('').reduce((sum, char) => {
      if (!vowels.includes(char) && char >= 'a' && char <= 'z') {
        const charCode = char.charCodeAt(0) - 96;
        return sum + charCode;
      }
      return sum;
    }, 0);
    return reduceToSingleDigit(consonantSum);
  };
  
  export const calculateCompatibility = (number1: number, number2: number): number => {
    const difference = Math.abs(number1 - number2);
    return 10 - difference; // Higher score for closer numbers
  };
  
  const reduceToSingleDigit = (num: number): number => {
    if (num === 11 || num === 22) return num; // Master numbers
    while (num > 9) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return num;
  };
  
  export const getNumberMeaning = (number: number): string => {
    const meanings: { [key: number]: string } = {
      1: "Leadership, independence, and individuality.",
      2: "Cooperation, diplomacy, and sensitivity.",
      3: "Creativity, self-expression, and optimism.",
      4: "Stability, practicality, and hard work.",
      5: "Freedom, adaptability, and progressive thinking.",
      6: "Harmony, responsibility, and nurturing.",
      7: "Analysis, introspection, and spiritual awareness.",
      8: "Authority, personal power, and material success.",
      9: "Compassion, humanitarianism, and artistic talents.",
      11: "Intuition, idealism, and inspiration (Master Number).",
      22: "Practical vision, large-scale undertakings (Master Number).",
    };
    return meanings[number] || "This number requires a personalized interpretation.";
  };