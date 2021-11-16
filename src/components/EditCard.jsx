/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import imoveis from '../database/imoveis';

function CreateCard(props) {
  const history = useHistory();
  const [typeSelect, setTypeSelect] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [roomsSelect, setRoomsSelect] = useState('');
  const [parkingSpots, setParkingSpots] = useState('');
  const [price, setPrice] = useState('');
  const onChange = (e, setState) => {
    setState(e.target.value);
  };
  const { id } = props.match.params;
  useEffect(() => {
    console.log(id);
    const dbObj = imoveis.find((obj) => obj.id === parseInt(id, 10));
    setTypeSelect(dbObj.tipo);
    setStreet(dbObj.endereço.split(',')[0]);
    setNumber(dbObj.endereço.split(', ')[1]);
    setNeighborhood(dbObj.bairro);
    setImgLink(dbObj.imagem);
    setRoomsSelect(dbObj.quartos);
    setParkingSpots(dbObj.vagas);
    setPrice(dbObj.valor);
  }, [id]);

  const onClickSave = () => {
    const imovel = {
      tipo: typeSelect,
      endereço: `${street}, ${number}`,
      bairro: neighborhood,
      imagem: imgLink,
      quartos: roomsSelect,
      vagas: parkingSpots,
      valor: price,
      id: parseInt(id, 10),
    };
    const objIndex = imoveis.findIndex((obj) => obj.id === parseInt(id, 10));
    imoveis[objIndex] = imovel;
    history.push('/');
  };
  return (
    <Box
      component="form"
      sx={ {
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      } }
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-type"
          select
          label="Tipo"
          value={ typeSelect }
          onChange={ (e) => onChange(e, setTypeSelect) }
        >
          <MenuItem key={ 1 } value="Apartamento">Apartamento</MenuItem>
          <MenuItem key={ 2 } value="Casa">Casa</MenuItem>
          <MenuItem key={ 3 } value="Mansao">Mansão</MenuItem>
        </TextField>
        <TextField
          id="outlined-street-input"
          label="Rua"
          value={ street }
          onChange={ (e) => onChange(e, setStreet) }
        />
        <TextField
          id="outlined-number-input"
          label="Número"
          value={ number }
          onChange={ (e) => onChange(e, setNumber) }
        />
        <TextField
          id="outlined-img-input"
          label="Imagem"
          value={ imgLink }
          onChange={ (e) => onChange(e, setImgLink) }
        />
        <TextField
          id="outlined-neighborhood-input"
          label="Bairro"
          value={ neighborhood }
          onChange={ (e) => onChange(e, setNeighborhood) }
        />
        <TextField
          id="outlined-select-type"
          label="Quartos"
          value={ roomsSelect }
          onChange={ (e) => onChange(e, setRoomsSelect) }
          placeholder="0"
        />
        <Button
          variant="contained"
          onClick={ () => onClickSave() }
        >
          Salvar
        </Button>
      </div>
    </Box>
  );
}

export default CreateCard;
