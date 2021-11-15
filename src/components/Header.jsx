import React from 'react';
import { Stack, Tabs, Tab } from '@mui/material';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Header() {
  const history = useHistory();
  const onClick = (url) => {
    history.push(url);
  };
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction={ { xs: 'column', sm: 'row' } }
      spacing={ { xs: 1, sm: 2, md: 4 } }
    >
      <img src="/logo-7-cantos.png" alt="Logomarca da empresa 7 Cantos" width="100px" />
      <Tab
        onClick={ () => onClick('/') }
        value="real-estates"
        label="Ver Imóveis"
      />
      <Tab
        onClick={ () => onClick('/cadastro') }
        value="create-real-estate"
        label="Cadastrar Imóvel"
      />
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      />
    </Stack>
  );
}

// NavBar.propTypes = {
//   username: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired,
// };

export default Header;
