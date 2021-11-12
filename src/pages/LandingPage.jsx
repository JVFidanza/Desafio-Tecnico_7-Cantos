import React from 'react';
import RealEstateCard from '../components/RealEstateCard';
import imoveis from '../database/imoveis';

function LandingPage() {
  return (
    <div>
      {imoveis.map((imovel, index) => (<RealEstateCard key={ index } data={ imovel } />))}
    </div>
  );
}

export default LandingPage;
