import { IconButton as MuiIconButton} from '@mui/material'
import { ShoppingCart, AccountCircle } from '@mui/icons-material';

const IconButton = ({icon}) => {
  let iconComponent = null;
  switch(icon) {
    case 'cart':
      iconComponent = <ShoppingCart />
      break;
    case 'account':
        iconComponent = <AccountCircle />
        break;
  }
  return (
    <MuiIconButton>{iconComponent}</MuiIconButton>
  )
}

export default IconButton