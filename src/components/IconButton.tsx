import { IconButton as MuiIconButton, Box} from '@mui/material'
import { ShoppingCart, AccountCircle, Search, Menu, Tune } from '@mui/icons-material';

const ICONS = {
  "cart": <ShoppingCart />,
  "account": <AccountCircle />,
  "search": <Search />,
  "menu": <Menu />,
  "filter": <Tune />
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