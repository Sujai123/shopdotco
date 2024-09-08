import { Box, Grid2 as Grid, styled, Typography, useTheme } from '@mui/material'
import Man1 from '../../assets/images/Man1.png'


const StyledTypography = styled(Typography)`
  position: absolute;
  top: 5%;
  left: 5%;
`

const StyledImage = styled('img')`
  border-radius: 16px;
  max-height: 250px;
`

const StyledBox = styled(Box)`
  margin: 5px;
`

const BrowseByStyle = () => {
  const theme = useTheme()
  return (
    <Box m={2} bgcolor={theme.palette.primary.dark} borderRadius={5}>
      <Box textAlign={"center"} p={2}>
        <Typography variant='h5'>Browse By Dress Style</Typography>
      </Box>
      <Grid container p={8}>
        <Grid size={{xs: 12, md: 6}}>
          <StyledBox position={"relative"}>
            <StyledImage src={Man1} />
            <StyledTypography variant='h5'>Casual</StyledTypography>
          </StyledBox>
        </Grid>

        <Grid size={{xs: 12, md: 6}}>
          <StyledBox position={"relative"}>
            <StyledImage src={Man1} />
            <StyledTypography variant='h5'>Casual</StyledTypography>
          </StyledBox>
        </Grid>

        <Grid size={{xs: 12, md: 6}}>
          <StyledBox position={"relative"}>
            <StyledImage src={Man1} />
            <StyledTypography variant='h5'>Casual</StyledTypography>
          </StyledBox>
        </Grid>

        <Grid size={{xs: 12, md: 6}}>
          <StyledBox position={"relative"}>
            <StyledImage src={Man1} />
            <StyledTypography variant='h5'>Casual</StyledTypography>
          </StyledBox>
        </Grid>

      </Grid>
    </Box>
  )
}

export default BrowseByStyle