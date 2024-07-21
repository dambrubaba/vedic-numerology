// src/components/UserDashboard.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNumerology } from '../context/NumerologyContext';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthDate: Yup.date().required('Birth date is required').max(new Date(), 'Birth date cannot be in the future'),
});

const UserDashboard: React.FC = () => {
  const { setUserInfo, calculateNumbers } = useNumerology();

  const handleSubmit = (values: { name: string; birthDate: string }) => {
    setUserInfo(values.name, values.birthDate);
    calculateNumbers();
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Vedic Numerology Calculator</h2>
      <Formik
        initialValues={{ name: '', birthDate: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <Field
                name="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div>
              <label htmlFor="birthDate" className="block text-gray-700 text-sm font-bold mb-2">
                Birth Date
              </label>
              <Field
                name="birthDate"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="birthDate" component="div" className="text-red-500 text-xs italic" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Calculate
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserDashboard;