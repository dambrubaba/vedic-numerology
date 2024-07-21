// src/utils/pdfExport.ts

import jsPDF from 'jspdf';
import { NumerologyData } from '../types';

export const generatePDF = (name: string, birthDate: string, numerologyData: NumerologyData) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text('Vedic Numerology Report', 105, 15, { align: 'center' });
  
  // Add personal information
  doc.setFontSize(12);
  doc.text(`Name: ${name}`, 20, 30);
  doc.text(`Birth Date: ${birthDate}`, 20, 40);
  
  // Add numerology data
  doc.setFontSize(16);
  doc.text('Your Numerology Profile', 20, 60);
  
  doc.setFontSize(12);
  const yStart = 70;
  const lineHeight = 10;
  
  Object.entries(numerologyData).forEach(([key, value], index) => {
    const y = yStart + index * lineHeight * 3;
    doc.text(`${key.replace(/([A-Z])/g, ' $1').trim()}: ${value}`, 20, y);
    doc.setFontSize(10);
    doc.text(getInterpretation(key as keyof NumerologyData, value), 30, y + lineHeight, { maxWidth: 150 });
    doc.setFontSize(12);
  });
  
  // Save the PDF
  doc.save(`${name.replace(' ', '_')}_numerology_report.pdf`);
};

const getInterpretation = (key: keyof NumerologyData, value: number | null): string => {
  // This function should return interpretations based on the numerology data
  // For brevity, we're returning placeholder text here
  return `This ${key} indicates ${value}. It represents your ${key.toLowerCase()} in life.`;
};