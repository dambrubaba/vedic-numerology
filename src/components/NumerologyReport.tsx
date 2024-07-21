// src/components/NumerologyReport.tsx

import React from 'react';
import { useNumerology } from '../context/NumerologyContext';

const NumerologyReport: React.FC = () => {
  const { name, birthDate, numerologyData, getInterpretation } = useNumerology();

  if (!numerologyData.lifePathNumber) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Your Numerology Report</h2>
      <p className="mb-4">
        <strong>Name:</strong> {name} | <strong>Birth Date:</strong> {birthDate}
      </p>
      <div className="space-y-4">
        <ReportSection
          title="Life Path Number"
          number={numerologyData.lifePathNumber}
          interpretation={getInterpretation('lifePathNumber')}
        />
        <ReportSection
          title="Destiny Number"
          number={numerologyData.destinyNumber}
          interpretation={getInterpretation('destinyNumber')}
        />
        <ReportSection
          title="Soul Urge Number"
          number={numerologyData.soulUrgeNumber}
          interpretation={getInterpretation('soulUrgeNumber')}
        />
        <ReportSection
          title="Personality Number"
          number={numerologyData.personalityNumber}
          interpretation={getInterpretation('personalityNumber')}
        />
      </div>
    </div>
  );
};

interface ReportSectionProps {
  title: string;
  number: number | null;
  interpretation: string;
}

const ReportSection: React.FC<ReportSectionProps> = ({ title, number, interpretation }) => (
  <div className="border-t pt-4">
    <h3 className="text-xl font-semibold mb-2">{title}: {number}</h3>
    <p>{interpretation}</p>
  </div>
);

export default NumerologyReport;