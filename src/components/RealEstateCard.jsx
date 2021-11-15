import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import imoveis from '../database/imoveis';

function RealEstateCard({ data }) {
  const { bairro, tipo, endereço, imagem, quartos, vagas, valor, id: cardId } = data;
  const history = useHistory();
  const onClickDelete = (id) => {
    const idIndex = imoveis.findIndex((obj) => obj.id === id);
    imoveis.splice(idIndex, 1);
    history.push('/');
  };

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
          { `${tipo} - ${bairro}`}
        </Typography>
        <span className="icon-box">
          <AddLocationAltIcon sx={ { maxWidth: 20 } } />
          <h5 className="icon-text">{endereço}</h5>
        </span>
        <span className="icon-box">
          <LocalHotelIcon sx={ { maxWidth: 20 } } />
          <h5 className="icon-text">
            {quartos > 1 ? `${quartos} quartos` : `${quartos} quarto`}
          </h5>
        </span>
        <span className="icon-box">
          <DirectionsCarIcon sx={ { maxWidth: 20 } } />
          <h5 className="icon-text">
            {vagas > 1 ? `${vagas} vagas` : `${vagas} vaga`}
          </h5>
        </span>
        <Typography variant="h5" color="text.primary">
          {`R$${valor}`}
        </Typography>
      </CardContent>
      <Stack spacing={ 2 } direction="row" size="large">
        <Button fullWidth variant="contained">Editar</Button>
        <Button
          onClick={ () => onClickDelete(cardId) }
          fullWidth
          color="error"
          variant="contained"
        >
          Deletar

        </Button>
      </Stack>
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
    valor: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default RealEstateCard;
