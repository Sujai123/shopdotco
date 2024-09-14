import { NavLink } from 'react-router-dom';
import {styled} from '@mui/material';

const StyledNavLink = styled(NavLink)(({theme}) => ({
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: theme.palette.text.primary
}));

export default StyledNavLink