import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';

// import CardMedia from '@mui/material/CardMedia';

function RealEstateCard({ data }) {
  const { image } = data;
  console.log(image);
  return (
    <div>
      <Card sx={ { maxWidth: 345 } }>
        <CardMedia
          component="img"
          height="140"
          image="images/edificio-itapua.jpeg"
          alt="Edificio Residencial"
        />
      </Card>
    </div>
  );
}

RealEstateCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RealEstateCard;
