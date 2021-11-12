import React from 'react';
import Card from '../components/Card';
import imoveis from '../database/imoveis';

function LandingPage() {
  return (
    <div>
      {imoveis.map((imovel, index) => (<Card key={ index } data={ imovel } />))}
    </div>
  );
}

export default LandingPage;
