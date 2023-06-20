import React, { ReactNode, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {Badge} from '@mui/material';
import { styled } from '@mui/system';
import { BLUECOLOR } from '../../colors/Colors';

// Estilo personalizado para el Badge
const StyledBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: ${BLUECOLOR}; /* Aquí puedes cambiar el color del círculo */
    color: white; /* Puedes ajustar el color del texto si es necesario */
  }
`;

type ComponentProps = {
  children: ReactNode;
};

const BadgeCustom = ({ children }: ComponentProps) => {
    const {productsCount}=useContext(AppContext)
  return (
    <StyledBadge badgeContent={productsCount} color="primary">
      {children}
    </StyledBadge>
  );
};

export default BadgeCustom;
