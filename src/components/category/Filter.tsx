import { Box, styled, Typography } from '@mui/material';
import IconButton from '../IconButton';

const StyledHeader = styled(Typography)({
  fontWeight: 700,
  fontSize: 20,
});


export const Filter = () => {
  return (
    <Box display='flex'>
      <StyledHeader>Filter</StyledHeader>
      <IconButton icon="filter" />
    </Box>
  )
}