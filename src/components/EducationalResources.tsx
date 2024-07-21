// src/components/EducationalResources.tsx

import React from 'react';
import ReactMarkdown from 'react-markdown';

const educationalContent = `
# Introduction to Vedic Numerology

Vedic numerology is an ancient system of divination that uses numbers to gain insights into a person's character, life path, and destiny. It is based on the belief that every number has a unique vibration and energy that can influence our lives.

## Key Concepts

1. **Life Path Number**: Derived from your birth date, this number represents your life's purpose and the path you're meant to follow.

2. **Destiny Number**: Calculated from your full name, this number reveals your talents, abilities, and the opportunities you're likely to encounter.

3. **Soul Urge Number**: Based on the vowels in your name, this number represents your inner desires and motivations.

4. **Personality Number**: Derived from the consonants in your name, this number reflects how others perceive you.

## Importance of Numbers

In Vedic numerology, each number from 1 to 9 has specific characteristics:

- **1**: Leadership, independence, and new beginnings
- **2**: Cooperation, diplomacy, and sensitivity
- **3**: Creativity, self-expression, and social interaction
- **4**: Stability, hard work, and practicality
- **5**: Freedom, change, and adventure
- **6**: Harmony, responsibility, and nurturing
- **7**: Analysis, spirituality, and inner wisdom
- **8**: Power, authority, and material success
- **9**: Compassion, humanitarianism, and completion

Master numbers (11, 22, and 33) are considered to have special significance and are not reduced to a single digit.

## Using Numerology

Numerology can be used for various purposes, including:

- Understanding your personal strengths and weaknesses
- Identifying favorable career paths
- Improving relationships by understanding compatibility
- Choosing auspicious dates for important events
- Selecting names for businesses or children

Remember, while numerology can provide insights, it should be used as a tool for self-reflection and personal growth rather than as an absolute predictor of future events.
`;

const EducationalResources: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Learn About Vedic Numerology</h2>
      <div className="prose">
        <ReactMarkdown>{educationalContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default EducationalResources;