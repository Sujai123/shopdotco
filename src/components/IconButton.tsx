import { IconButton as MuiIconButton, Box} from '@mui/material'
import { ShoppingCart, AccountCircle, Search, Menu } from '@mui/icons-material';

const ICONS = {
  "cart": <ShoppingCart />,
  "account": <AccountCircle />,
  "search": <Search />,
  "menu": <Menu />
}

const IconButton = ({icon, ...rest}) => {
  const iconComponent = ICONS[icon];

  return (
    <Box {...rest}>
      <MuiIconButton>{iconComponent}</MuiIconButton>
    </Box>
  )
}

export default IconButton