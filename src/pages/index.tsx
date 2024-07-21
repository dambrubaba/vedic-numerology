// src/pages/index.tsx

import React from 'react';
import Layout from '../components/Layout';
import UserDashboard from '../components/UserDashboard';
import NumerologyReport from '../components/NumerologyReport';
import CompatibilityCalculator from '../components/CompatibilityCalculator';
import EducationalResources from '../components/EducationalResources';

const Home: React.FC = () => {
  return (
    <Layout title="Vedic Numerology Calculator">
      <div className="space-y-8">
        <UserDashboard />
        <NumerologyReport />
        <CompatibilityCalculator />
        <EducationalResources />
      </div>
    </Layout>
  );
};

export default Home;