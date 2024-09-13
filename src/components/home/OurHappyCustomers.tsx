import { Box, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ReviewCard from './ReviewCard'

const OurHappyCustomers = () => {
  return (
    <Box>
      <Box>
        <Typography variant='h5' ml={2}>
          Our Happy Customers
        </Typography>
        {/* <Toolbar>

        </Toolbar> */}
      </Box>

      <Box m={4}>
        <Stack direction={'row'} gap={1}>

        <ReviewCard />
        <ReviewCard />
        </Stack>
      </Box>
    </Box>
  )
}

export default OurHappyCustomers