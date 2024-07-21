// src/components/CompatibilityCalculator.tsx

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { calculateLifePathNumber, calculateCompatibility } from '../utils/Calculations';

const validationSchema = Yup.object().shape({
  name1: Yup.string().required('Name is required'),
  birthDate1: Yup.date().required('Birth date is required').max(new Date(), 'Birth date cannot be in the future'),
  name2: Yup.string().required('Name is required'),
  birthDate2: Yup.date().required('Birth date is required').max(new Date(), 'Birth date cannot be in the future'),
});

const CompatibilityCalculator: React.FC = () => {
  const [compatibilityScore, setCompatibilityScore] = useState<number | null>(null);

  const handleSubmit = (values: {
    name1: string;
    birthDate1: string;
    name2: string;
    birthDate2: string;
  }) => {
    const lifePathNumber1 = calculateLifePathNumber(values.birthDate1);
    const lifePathNumber2 = calculateLifePathNumber(values.birthDate2);
    const score = calculateCompatibility(lifePathNumber1, lifePathNumber2);
    setCompatibilityScore(score);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Compatibility Calculator</h2>
      <Formik
        initialValues={{ name1: '', birthDate1: '', name2: '', birthDate2: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name1" className="block text-gray-700 text-sm font-bold mb-2">
                Person 1 Name
              </label>
              <Field
                name="name1"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="name1" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div>
              <label htmlFor="birthDate1" className="block text-gray-700 text-sm font-bold mb-2">
                Person 1 Birth Date
              </label>
              <Field
                name="birthDate1"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="birthDate1" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div>
              <label htmlFor="name2" className="block text-gray-700 text-sm font-bold mb-2">
                Person 2 Name
              </label>
              <Field
                name="name2"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="name2" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div>
              <label htmlFor="birthDate2" className="block text-gray-700 text-sm font-bold mb-2">
                Person 2 Birth Date
              </label>
              <Field
                name="birthDate2"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="birthDate2" component="div" className="text-red-500 text-xs italic" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Calculate Compatibility
            </button>
          </Form>
        )}
      </Formik>
      {compatibilityScore !== null && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Compatibility Score: {compatibilityScore}/10</h3>
          <p>
            {compatibilityScore >= 8
              ? "Highly compatible! You have a strong connection."
              : compatibilityScore >= 6
              ? "Good compatibility. You have potential for a harmonious relationship."
              : compatibilityScore >= 4
              ? "Average compatibility. You may need to work on understanding each other better."
              : "Low compatibility. This relationship may require extra effort and compromise."}
          </p>
        </div>
      )}
    </div>
  );
};

export default CompatibilityCalculator;