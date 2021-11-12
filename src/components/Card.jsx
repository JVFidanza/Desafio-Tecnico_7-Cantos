import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function RealEstateCard({ data }) {
  const { bairro, tipo, endereço, imagem, quartos, vagas } = data;
  return (
    <Card sx={ { maxWidth: 345 } }>
      <CardMedia
        component="img"
        height="140"
        image={ imagem }
        alt="Edificio Residencial"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { `${tipo} ${bairro}`}
        </Typography>
        <AddLocationAltIcon sx={ { maxWidth: 20 } } />
        {endereço}
        <br />
        <LocalHotelIcon sx={ { maxWidth: 20 } } />
        {quartos > 1 ? `${quartos} quartos` : `${quartos} quarto`}
        <br />
        <DirectionsCarIcon sx={ { maxWidth: 20 } } />
        {vagas > 1 ? `${vagas} vagas` : `${vagas} vaga`}
        <Typography variant="body2" color="text.secondary">
          Minha casinha mah e tal num sei o que blablabla moro aqui mermo
          eu venha morar tambem fodase
        </Typography>
      </CardContent>
    </Card>
  );
}

RealEstateCard.propTypes = {
  data: PropTypes.shape({
    tipo: PropTypes.string,
    endereço: PropTypes.string,
    bairro: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    imagem: PropTypes.string,
    vagas: PropTypes.number,
    quartos: PropTypes.number,
  }).isRequired,
};

export default RealEstateCard;
